const {
  regexPhone,
  regexEmail,
  regexSPS,
} = require('../../src/regex/const.js');


describe('regex/const', function() {
  describe('@regexPhone()', function() {
    [
      ['15506000365', true],
      ['1550600036', false],
      ['1550600036-', false],
      ['155060003 6', false],
      ['12345678901', true],
      ['123456789012', false],
    ].forEach((d) => {
      it(`regexPhone():test:${d[0]} should return ${d[1]}`, function() {
        chai.assert.strictEqual(regexPhone().test(d[0]), d[1]);
      });
    });
  });
  describe('@regexEmail()', function() {
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
      it(`regexEmail():test:${d[0]} should return ${d[1]}`, function() {
        chai.assert.strictEqual(regexEmail().test(d[0]), d[1]);
      });
    });
  });
  describe('@regexSPS()', function() {
    [
      ['a', true],
      ['|', false],
      ['\\', false],
    ].forEach((d) => {
      it(`regexSPS().indexOf(${d[0]}) should return ${d[1]}`, function() {
        chai.assert.strictEqual(regexSPS().indexOf(d[0]) === -1, d[1]);
      });
    });
  });
});
