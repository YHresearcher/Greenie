import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deliverPendingRfqNotifications } from '../src/rfq-notifications.js';

const fixed = () => new Date('2026-11-09T10:00:00.000Z');
function mockDb({ messageId = 'provider-id-1', throwSend = false, noAck = false, missing = false, many = false } = {}) {
  const state = {status:'pending', attempts:0, last_error_code:null, provider_message_id:null, rows:0, sent:0, mail:null};
  const email = {async send(payload) {
    state.sent++;
    state.mail=payload;
    if (throwSend) {const e=new Error('mail failed'); e.code='E_DELIVERY_FAILED';throw e;}
    return noAck ? {} : {messageId};
  }};
  const db = {prepare(sql) {
    return {bind(...args) {
      if (sql.includes('FROM rfq_notifications n')) return {async all() {
        return {results: state.status==='pending'||state.status==='processing' ? [{rfq_id:'rfq_1234567890abcdef'}] : []};
      }};
      if (sql.includes('RETURNING rfq_id, attempts')) return {async first(){
        if (state.status==='sent'||state.status==='failed') return null;
        state.status='processing';state.attempts++;
        return {rfq_id:'rfq_1234567890abcdef',attempts:state.attempts};
      }};
      if (sql.includes('FROM rfq WHERE')) return {async first(){
        return missing ? null : {id:'rfq_1234567890abcdef',company:'Acme',email:'buyer@example.com',country:'UAE',product:'Cashew Kernels',created_at:'2026-11-09T09:00:00Z'};
      }};
      if (sql.includes("status='sent'")) return {async run(){ state.status='sent';state.provider_message_id=args[1];return {success:true}; }};
      if (sql.includes('next_attempt_at=?')) return {async run(){state.status=args[0];state.last_error_code=args[2];return {success:true};}};
      throw new Error('Unexpected SQL '+sql);
    }};
  }};
  return {state,env:{DB:db, EMAIL:email}};
}
test('without configured Email Service no queued message is consumed', async()=>{
  const {state,env}=mockDb();
  delete env.EMAIL;
  const r=await deliverPendingRfqNotifications(env,fixed);
  assert.equal(r.skipped,true);
  assert.equal(state.attempts,0);
});
test('delivers once, stores provider message ID and does not resend', async()=>{
  const {state,env}=mockDb();
  const one=await deliverPendingRfqNotifications(env,fixed);
  assert.deepEqual(one,{skipped:false,processed:1});
  assert.equal(state.status,'sent');
  assert.equal(state.provider_message_id,'provider-id-1');
  assert.equal(state.mail.to,'hello@greenievietnam.biz.vn');
  assert.equal(state.mail.from,'notifications@greenievietnam.biz.vn');
  assert.match(state.mail.subject,/rfq_1234567890abcdef/);
  const two=await deliverPendingRfqNotifications(env,fixed);
  assert.equal(two.processed,0);
  assert.equal(state.sent,1);
});
test('provider error is recorded without losing RFQ',async()=>{
  const {state,env}=mockDb({throwSend:true});
  await deliverPendingRfqNotifications(env,fixed);
  assert.equal(state.status,'pending');
  assert.equal(state.attempts,1);
  assert.equal(state.last_error_code,'E_DELIVERY_FAILED');
});
test('absence of provider acknowledgement retains item for retry',async()=>{
  const {state,env}=mockDb({noAck:true});
  await deliverPendingRfqNotifications(env,fixed);
  assert.equal(state.status,'pending');
  assert.equal(state.last_error_code,'PROVIDER_NO_ACK');
});
test('missing associated RFQ is marked for retry without emailing',async()=>{
  const {state,env}=mockDb({missing:true});
  await deliverPendingRfqNotifications(env,fixed);
  assert.equal(state.status,'pending');
  assert.equal(state.last_error_code,'RFQ_MISSING');
  assert.equal(state.sent,0);
});
