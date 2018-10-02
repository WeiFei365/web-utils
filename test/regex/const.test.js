const assert = require('assert');

const ipath = 'src/regex/const.js';
const {
  regexPhone,
  regexEmail,
} = require(`../../${ipath}`);


describe(ipath, function() {
  describe('@regexPhone', function() {
    [
      ['15506000365', true],
      ['1550600036', false],
      ['1550600036-', false],
      ['155060003 6', false],
      ['12345678901', true],
      ['123456789012', false],
    ].forEach((d) => {
      it(`regexPhone:test:${d[0]} should return ${d[1]}`, function() {
        assert.strictEqual(regexPhone.test(d[0]), d[1]);
      });
    });
  });
  describe('@regexEmail', function() {
    [
      ['abc@gmail.com', true],
      ['abc@gmail.', false],
      ['abc@gmail', false],
      ['abc@.com', false],
      ['abcgmail.com', false],
      ['@gmail.com', false],
      ['-@gmail.com', true],
      ['_@gmail.com', true],
    ].forEach((d) => {
      it(`regexEmail:test:${d[0]} should return ${d[1]}`, function() {
        assert.strictEqual(regexEmail.test(d[0]), d[1]);
      });
    });
  });
});
