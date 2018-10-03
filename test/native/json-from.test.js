const jsonFrom = require('../../src/native/json-from.js');


describe('native/json-from', function() {
  describe('@jsonFrom(data, dft)', function() {
    [
      // 数据合法性
      [undefined, undefined, ''],
      [null, undefined, ''],
      [NaN, undefined, ''],
      ['', undefined, '""'],
      [1, undefined, '1'],
      [true, undefined, 'true'],
      [[], undefined, '[]'],
      [{}, undefined, '{}'],
      [{test:'abc'}, undefined, '{"test":"abc"}'],
      // 参数: dft
      [null, '-', '-'],
    ].forEach((d) => {
      const data = d[0];
      const dft = d[1];
      it(`jsonFrom(${data}, ${dft}) should return ${d[2]}`, function() {
        chai.assert.strictEqual(jsonFrom.default(data, dft), d[2]);
      });
    });
  });
});
