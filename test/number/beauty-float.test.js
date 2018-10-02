const assert = require('assert');

const ipath = 'src/number/beauty-float.js';
const beautyFloat = require(`../../${ipath}`);


describe(ipath, function() {
  describe('@beautyFloat(n, count, noZero)', function() {
    [
      // 参数: n
      [undefined, undefined, undefined, '0'],
      ['', undefined, undefined, '0'],
      ['123456.78', undefined, undefined, '123,456.78'],
      ['1-23456.78', undefined, undefined, '0'],
      [123456.78, undefined, undefined, '123,456.78'],
      [123456, undefined, undefined, '123,456'],
      [0.78, undefined, undefined, '0.78'],
      [0, undefined, undefined, '0'],
      // 参数: count
      [0, undefined, undefined, '0'],
      [0.1, 2, undefined, '0.1'],
      [0.1, 2, undefined, '0.1'],
      [0.123, 2, undefined, '0.12'],
      // 参数: noZero
      [123, undefined, true, '123'],
      [0, undefined, true, ''],
      [0, undefined, false, '0'],
    ].forEach((d) => {
      const n = d[0];
      const count = d[1];
      const noZero = d[2];
      it(`beautyFloat(${n}, ${count}, ${noZero}) should return ${d[3]}`, function() {
        assert.strictEqual(beautyFloat.default(n, count, noZero), d[3]);
      });
    });
  });
});
