const hashFrom = require('../../src/native/hash-from.js');
const jsonFrom = require('../../src/native/json-from.js');


describe('native/hash-from', function() {
  describe('@hashFrom(str, isValueJson, isLowerCaseKey)', function() {
    [
      // 数据合法性
      [undefined, undefined, undefined, {}],
      ['', undefined, undefined, {}],
      ['?test=abc', undefined, undefined, {test:'abc'}],
      // 其他参数: isValueJson
      ['?test=%7B%22child%22%3A123%7D', undefined, undefined, {test:'{"child":123}'}],
      ['?test=%7B%22child%22%3A123%7D', true, undefined, {test:{child:123}}],
      ['?test=123', undefined, undefined, {test:'123'}],
      ['?test=123', true, undefined, {test:123}],
      // 其他参数: isLowerCaseKey
      ['?Test=123', undefined, undefined, {Test:'123'}],
      ['?Test=123', undefined, true, {test:'123'}],
      // search
      ['?test=abc', undefined, undefined, {test:'abc'}],
      // hash
      ['#test=abc', undefined, undefined, {test:'abc'}],
      // search + hash 混合
      ['?pms=123#test=abc', undefined, undefined, {pms:'123',test:'abc'}],
    ].forEach((d) => {
      const str = d[0];
      const isValueJson = d[1];
      const isLowerCaseKey = d[2];
      it(`hashFrom(${str}, ${isValueJson}, ${isLowerCaseKey}) should return ${jsonFrom.default(d[3])}`, function() {
        chai.assert.deepStrictEqual(hashFrom.default(str, isValueJson, isLowerCaseKey), d[3]);
      });
    });
  });
});
