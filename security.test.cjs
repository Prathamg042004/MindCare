const test=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM,VirtualConsole}=require('jsdom');
async function open() {
  const errors=[];const virtualConsole=new VirtualConsole();virtualConsole.on('jsdomError',error=>errors.push(error.message));
  const dom=new JSDOM(fs.readFileSync(__dirname+'/mindcare.html','utf8'),{url:'https://demo.example.test',runScripts:'dangerously',virtualConsole,beforeParse(window){window.alert=()=>{};}});
  await new Promise(resolve=>dom.window.addEventListener('DOMContentLoaded',resolve));
  assert.deepEqual(errors,[]);
  return dom;
}
test('demo entry needs no account and never creates a password store',async()=>{
  const dom=await open();try {
    const d=dom.window.document;assert.equal(d.querySelectorAll('input[type=password]').length,0);
    d.querySelector('#login-btn').click();assert.equal(d.querySelector('#features-container').style.display,'block');
    assert.equal(dom.window.localStorage.getItem('mindcare_users'),null);
    d.querySelector('#logout-btn').click();assert.equal(d.querySelector('#auth-container').style.display,'block');
  }finally{dom.window.close();}
});
test('chat treats markup as literal text',async()=>{
  const dom=await open();try {
    const d=dom.window.document;d.querySelector('#login-btn').click();d.querySelector('#open-chat').click();
    const payload='<img src=x onerror="window.compromised=true">';d.querySelector('#user-message').value=payload;d.querySelector('#send-message').click();
    const message=d.querySelector('.message.user');assert.equal(message.textContent.trim(),payload);assert.equal(message.querySelector('img'),null);assert.equal(dom.window.compromised,undefined);
  }finally{dom.window.close();}
});
test('legacy demo data is cleared only when the visitor requests it',async()=>{
  const dom=await open();try {
    dom.window.localStorage.setItem('mindcare_users','legacy-demo-data');
    dom.window.document.querySelector('#clear-legacy-data').click();
    assert.equal(dom.window.localStorage.getItem('mindcare_users'),null);
  }finally{dom.window.close();}
});
