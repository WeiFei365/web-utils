const assert = require('assert');

const ipath = 'src/native/json-to.js';
const jsonTo = require(`../../${ipath}`);
const jsonFrom = require('../../src/native/json-from.js');


describe(ipath, function() {
  describe('@jsonTo(jsonstr, dft)', function() {
    [
      // 数据合法性
      [undefined, undefined, undefined],
      [null, undefined, undefined],
      ['', undefined, undefined],
      ['{}', undefined, {}],
      ['1', undefined, 1],
      ['true', undefined, true],
      ['[]', undefined, []],
      ['{"test":"abc"}', undefined, {test:'abc'}],
      // 参数: dft
      [null, '-', '-'],
    ].forEach((d) => {
      const jsonstr = d[0];
      const dft = d[1];
      it(`jsonTo(${jsonstr}, ${dft}) should return ${jsonFrom.default(d[2])}`, function() {
        assert.deepStrictEqual(jsonTo.default(jsonstr, dft), d[2]);
      });
    });
  });
});
