const assert = require('assert');

const ipath = 'src/number/beauty-number.js';
const beautyNumber = require(`../../${ipath}`);


describe(ipath, function() {
  describe('@beautyNumber(n, noZero)', function() {
    [
      // 参数: n
      [undefined, undefined, '0'],
      [0, undefined, '0'],
      [123, undefined, '123'],
      [123456, undefined, '123,456'],
      ['123456', undefined, '123,456'],
      ['1-23456', undefined, '0'],
      [123456.789, undefined, '123,456.789'],
      // 参数: n
      [0, true, ''],
      [0, false, '0'],
    ].forEach((d) => {
      const n = d[0];
      const noZero = d[1];
      it(`beautyNumber(${n}, ${noZero}) should return ${d[2]}`, function() {
        assert.strictEqual(beautyNumber.default(n, noZero), d[2]);
      });
    });
  });
});
