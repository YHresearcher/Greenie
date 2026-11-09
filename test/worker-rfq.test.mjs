import { test } from 'node:test';
import assert from 'node:assert/strict';
import { handleRfq } from '../src/worker.js';

const origin = 'https://greenie-vietnam.example.workers.dev';
const accepted = {
  company:'Buyer Ltd',contact:'Purchasing Manager', email:'buyer@example.com',
  country:'United Arab Emirates',product:'Cashew Kernels',grade:'W320',quantity:'5 MT',port:'Jebel Ali',
  incoterm:'CIF',services:'',message:'Looking for a quote',turnstileToken:'test-token'
};
const key = 'rfq_test_1234567890abcdef';
function request(data=accepted, options={}) {
  return new Request(origin+'/api/rfq', {
    method:'POST', headers: {'content-type':'application/json','origin': options.origin || origin, 'idempotency-key': options.key || key },
    body:JSON.stringify(data)
  });
}
function environment() {
  const inserted = [];
  return {
    inserted,
    env:{
      TURNSTILE_SECRET_KEY:'test-secret',
      RFQ_RATE_LIMIT:{async limit() {return {success:true};}},
      DB:{prepare(sql) { assert.match(sql, /ON CONFLICT\(id\) DO NOTHING/);
        return {bind(...args) {return {async run() {
          if (!inserted.some(row => row[0] === args[0])) inserted.push(args);
          return {success:true};
        }};}};}}
    }
  };
}
const verify = async () => new Response(JSON.stringify({success:true, hostname:'greenie-vietnam.example.workers.dev', action:'rfq'}), {status:200});
test('unconfigured storage always fails closed', async () => {
  const r = await handleRfq(request(), {}, verify);
  assert.equal(r.status,503);
});
test('rejects forged cross-site Origin', async () => {
  const {env}=environment();
  const r=await handleRfq(request(accepted,{origin:'https://attacker.invalid'}),env,verify);
  assert.equal(r.status,403);
});
test('rejects invalid buyer contact fields', async () => {
  const {env}=environment();
  const r=await handleRfq(request({...accepted,email:'invalid-email'}),env,verify);
  assert.equal(r.status,422);
});
test('rejects missing or unsuccessful Turnstile', async () => {
  const {env}=environment();
  const r=await handleRfq(request(accepted),env,async()=>new Response(JSON.stringify({success:false, hostname:'greenie-vietnam.example.workers.dev', action:'rfq'}),{status:200}));
  assert.equal(r.status,403);
});
test('inserts inquiry and deduplicates replays', async () => {
  const {env,inserted}=environment();
  assert.equal((await handleRfq(request(),env,verify)).status,201);
  assert.equal((await handleRfq(request(),env,verify)).status,201);
  assert.equal(inserted.length,1);
  assert.equal(inserted[0][0],key);
  assert.equal(inserted[0][1],'Buyer Ltd');
});
test('rejects bad idempotency key', async () => {
  const {env}=environment();
  const r=await handleRfq(request(accepted,{key:'short'}),env,verify);
  assert.equal(r.status,400);
});
test('rejects invalid JSON types, unsupported products and large messages', async () => {
  const {env}=environment();
  assert.equal((await handleRfq(request({...accepted,company:42}),env,verify)).status,422);
  assert.equal((await handleRfq(request({...accepted,product:'Unapproved'}),env,verify)).status,422);
  assert.equal((await handleRfq(request({...accepted,message:'x'.repeat(3000)}),env,verify)).status,422);
});

test('rejects a valid Turnstile token issued for another hostname', async () => {
  const {env, inserted} = environment();
  const wrongHost = async () => new Response(JSON.stringify({success:true, hostname:'evil.invalid', action:'rfq'}));
  assert.equal((await handleRfq(request(), env, wrongHost)).status, 403);
  assert.equal(inserted.length, 0);
});
test('rejects valid Turnstile token for an unrelated action', async () => {
  const {env,inserted} = environment();
  const wrongAction = async () => new Response(JSON.stringify({success:true, hostname:'greenie-vietnam.example.workers.dev', action:'login'}));
  assert.equal((await handleRfq(request(), env, wrongAction)).status, 403);
  assert.equal(inserted.length, 0);
});
test('rejects RFQ when rate-limit quota is exceeded before Siteverify', async () => {
  const {env,inserted}=environment();
  env.RFQ_RATE_LIMIT = {async limit() { return {success:false}; }};
  let called = false;
  const verifySpy = async () => {called=true; return verify();};
  const r=await handleRfq(request(), env, verifySpy);
  assert.equal(r.status,429);
  assert.equal(called,false);
  assert.equal(inserted.length,0);
});
test('does not signal successful RFQ if D1 reports unsuccessful result', async () => {
  const {env}=environment();
  env.DB={prepare() {return {bind() {return {async run() {return {success:false};}};}};}};
  assert.equal((await handleRfq(request(),env,verify)).status,503);
});
test('rejects rate limiter missing and failing bindings without verification', async () => {
  const {env}=environment();
  delete env.RFQ_RATE_LIMIT;
  assert.equal((await handleRfq(request(),env,verify)).status,503);
  env.RFQ_RATE_LIMIT={async limit() {throw new Error('service unavailable');}};
  assert.equal((await handleRfq(request(),env,verify)).status,503);
});
