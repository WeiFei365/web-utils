const assert = require('assert');

const ipath = 'src/number/beauty-unit.js';
const beautyUnit = require(`../../${ipath}`);


describe(ipath, function() {
  describe('@beautyUnit(n)', function() {
    [
      [undefined, '0'],
      [123, '123'],
      [1234, '1234'],
      [1234.567, '1234.567'],
      [12345, '1万'],
      [123456, '10万'],
      [1234567, '100万'],
      [12345678, '1000万'],
      [123456789, '1亿'],
      [1234567890, '10亿'],
      [12345678901, '100亿'],
      [123456789012, '1000亿'],
      [1234567890123, '1万亿'],
      [12345678901234, '10万亿'],
      [123456789012345, '100万亿'],
      [1234567890123456, '1000万亿'],
      [12345678901234567, '不计其数'],
    ].forEach((d) => {
      const n = d[0];
      it(`beautyUnit(${n}) should return ${d[1]}`, function() {
        assert.strictEqual(beautyUnit.default(n), d[1]);
      });
    });
  });
});
