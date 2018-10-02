const assert = require('assert');

const ipath = 'src/native/hash-to.js';
const hashTo = require(`../../${ipath}`);


describe(ipath, function() {
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
