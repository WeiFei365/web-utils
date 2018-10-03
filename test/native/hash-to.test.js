const assert = require('assert');

const hashTo = require('../../src/native/hash-to.js');


describe('native/hash-to', function() {
  describe('@hashTo(data)', function() {
    [
      // 数据合法性
      [undefined, ''],
      ['', ''],
      // --
      [{}, ''],
      [{test:123}, 'test=123'],
      [{test:{child:123}}, 'test=%7B%22child%22%3A123%7D'],
      [{test:123,pms:'abc'}, 'test=123&pms=abc'],
    ].forEach((d) => {
      const data = d[0];
      it(`hashTo(${data}) should return ${d[1]}`, function() {
        assert.strictEqual(hashTo.default(data), d[1]);
      });
    });
  });
});
