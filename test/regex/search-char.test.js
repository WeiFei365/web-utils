const regexSearchChar = require('../../src/regex/search-char.js');
const jsonFrom = require('../../src/native/json-from.js');


describe('regex/search-char', function() {
  describe('@regexSearchChar(chars, opts)', function() {
    [
      [undefined, undefined, {}],
      ['ab', undefined, {}],
      [['a', 'b'], undefined, {
        test: /(.*)a(.*)b(.*)/i,
        replace: /(.*)a(.*)b(.*)/ig,
        replacement: '$1<em>a</em>$2<em>b</em>$3',
      }],
      [['', ''], undefined, {}],
    ].forEach((d) => {
      const chars = d[0];
      const opts = d[1];
      it(`regexSearchChar(${chars}, ${opts}) should return ${jsonFrom.default(d[2])}`, function() {
        chai.assert.deepStrictEqual(regexSearchChar.default(chars, opts), d[2]);
      });
    });
  });
});
