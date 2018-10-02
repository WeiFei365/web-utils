const assert = require('assert');

const ipath = 'src/other/vali-filename.js';
const valiFilename = require(`../../${ipath}`);


describe(ipath, function() {
  describe('@valiFilename(name, dftChar)', function() {
    [
      [undefined, undefined, ''],
      ['test', undefined, 'test'],
      ['t      est', undefined, 't est'],
      ['t\test', undefined, 't est'],
      ['\/<>?:"^"!;*%$#@&', undefined, '-'],
      ['\/<>?:"^"!;*%$#@&', '_', '_'],
    ].forEach((d) => {
      const name = d[0];
      const dftChar = d[1];
      it(`valiFilename(${name}, ${dftChar}) should return ${d[2]}`, function() {
        assert.strictEqual(valiFilename.default(name, dftChar), d[2]);
      });
    });
  });
});
