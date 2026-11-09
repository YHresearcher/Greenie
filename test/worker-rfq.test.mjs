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
      DB:{prepare(sql) { assert.match(sql, /ON CONFLICT\(id\) DO NOTHING/);
        return {bind(...args) {return {async run() {
          if (!inserted.some(row => row[0] === args[0])) inserted.push(args);
          return {success:true};
        }};}};}}
    }
  };
}
const verify = async () => new Response(JSON.stringify({success:true}), {status:200});
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
  const r=await handleRfq(request(accepted),env,async()=>new Response(JSON.stringify({success:false}),{status:200}));
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
