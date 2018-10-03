const assert = require('assert');

const hashFilter = require('../../src/native/hash-filter.js');


describe('native/hash-filter', function() {
  describe('@hashFilter(any, excepts)', function() {
    [
      // 数据合法性
      [undefined, undefined, ''],
      ['', undefined, ''],
      [undefined, ['haha'], ''],
      ['', ['haha'], ''],
      // search
      ['?test=abc', undefined, 'test=abc'],
      ['?test=abc&pms=123', ['pms'], 'test=abc'],
      // hash
      ['#test=abc', undefined, 'test=abc'],
      ['#test=abc&pms=123', ['pms'], 'test=abc'],
      // search + hash 混合
      ['?pms=123#test=abc', undefined, 'pms=123&test=abc'],
      ['#test=abc?pms=123', ['pms'], 'test=abc'],
    ].forEach((d) => {
      const any = d[0];
      const excepts = d[1];
      it(`hashFilter(${any}, ${excepts}) should return ${d[2]}`, function() {
        assert.strictEqual(hashFilter.default(any, excepts), d[2]);
      });
    });
  });
});
