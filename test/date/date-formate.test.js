const assert = require('assert');

const ipath = 'src/date/date-format.js';
const dateFormat = require(`../../${ipath}`);


describe(ipath, function() {
  describe('@dateFormat(date, pattern)', function() {
    [
      // 毫秒值
      [null, undefined, '1970-01-01'],
      [1538287654321, undefined, '2018-09-30'],
      // Date 实例
      [new Date('2018-09-30'), 'MM-DD', '09-30'],
      // Date 字符串
      ['2018-09-30', 'MM-DD', '09-30'],
      // pattern 模板
      [1538287654321, 'YYYY年MM月DD日HH时mm分ss秒S毫秒EEE', '2018年09月30日14时07分34秒321毫秒星期日'],
      [1538287654321, 'EEE', '星期日'],
    ].forEach((d) => {
      const date = d[0];
      const pattern = d[1];
      it(`dateFormat(${date}, ${pattern}) should return ${d[2]}`, function() {
        assert.strictEqual(dateFormat.default(date, pattern), d[2]);
      });
    });
  });
});
