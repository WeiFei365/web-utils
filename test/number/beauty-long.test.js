const beautyLong = require('../../src/number/beauty-long.js');


describe('number/beauty-long', function() {
  describe('@beautyLong(n, byLeft, flag, noZero)', function() {
    [
      // 参数: n
      [undefined, undefined, undefined, undefined, ''],
      [123, undefined, undefined, undefined, '123'],
      [123456, undefined, undefined, undefined, '1234 56'],
      ['123456789', undefined, undefined, undefined, '1234 5678 9'],
      ['1-23456789', undefined, undefined, undefined, '1234 5678 9'],
      // 参数: byLeft
      [123456789, true, undefined, undefined, '1234 5678 9'],
      [123456789, false, undefined, undefined, '1 2345 6789'],
      // 参数: flag
      [123456789, undefined, '-', undefined, '1234-5678-9'],
      // 参数: noZero
      [null, undefined, undefined, true, ''],
      [null, undefined, undefined, false, '0'],
    ].forEach((d) => {
      const n = d[0];
      const byLeft = d[1];
      const flag = d[2];
      const noZero = d[3];
      it(`beautyLong(${n}, ${byLeft}, ${flag}, ${noZero}) should return ${d[4]}`, function() {
        chai.assert.strictEqual(beautyLong.default(n, byLeft, flag, noZero), d[4]);
      });
    });
  });
});
