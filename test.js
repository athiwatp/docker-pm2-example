// Before running this test make sure that the node app is running
// under pm2 inside a docker container.

let { writeFileSync, readFileSync } = require('fs');
let assert = require('assert');
let request = require('request');

let regex = /x = (\d+)/;
let url = 'http://localhost:4000';

let code = readFileSync('./index.js').toString();
let modifiedCode = code.replace('x = 0', 'x = 1');

let before = 'x = 0';
let after = 'x = 1';

request(url, testBefore);

function testBefore(err, res, body) {
  assert.equal(body, before);
  console.log('before: test passed');
  resume();
}

function resume() {
  // change the file outside docker
  writeFileSync('./index.js', modifiedCode);

  // wait for pm2 to pick up the changes
  setTimeout(() => request(url, testAfter), 2000);
}

function testAfter(err, res, body) {
  assert.equal(body, after);
  console.log('after: test passed');
  finish();
}

function finish() {
  // restore the original file contents
  writeFileSync('./index.js', code);
}
