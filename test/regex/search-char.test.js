const regexSearchChar = require('../../src/regex/search-char.js');
const jsonFrom = require('../../src/native/json-from.js');


describe('regex/search-char', function() {
  describe('@regexSearchChar(chars, opts)', function() {
    [
      [undefined, undefined, {}],
      ['ab', undefined, {}],
      [['', ''], undefined, {}],
    ].forEach((d) => {
      const chars = d[0];
      const opts = d[1];
      it(`regexSearchChar(${chars}, ${opts}) should return ${jsonFrom.default(d[2])}`, function() {
        chai.assert.deepStrictEqual(regexSearchChar.default(chars, opts), d[2]);
      });
    });
    [
      [['a', 'b'], undefined, 'a', [false, 'a']],
      [['a'], undefined, 'a', [true, '<em>a</em>']],
      [['a'], undefined, 'abac', [true, '<em>a</em>b<em>a</em>c']],
      [['a', 'b'], undefined, 'ab', [true, '<em>a</em><em>b</em>']],
      [['a', 'b'], undefined, '_ab', [true, '_<em>a</em><em>b</em>']],
      [['a', 'b'], undefined, 'ab_', [true, '<em>a</em><em>b</em>_']],
      [['a', 'b'], undefined, 'a_b', [true, '<em>a</em>_<em>b</em>']],
      [['a', '|', 'b'], undefined, 'ab', [true, '<em>a</em><em>b</em>']],
      [['a', 'b'], undefined, 'acab', [true, '<em>a</em>c<em>a</em><em>b</em>']],
    ].forEach((d) => {
      const chars = d[0];
      const opts = d[1];
      it(`regexSearchChar(${chars}, ${opts}) and ${d[2]} should return ${d[3]}`, function() {
        const regex = regexSearchChar.default(chars, opts);
        chai.assert.deepStrictEqual([
          regex.test.test(d[2]),
          d[2].replace(regex.replace, regex.replacement)
        ], d[3]);
      });
    });
  });
});
