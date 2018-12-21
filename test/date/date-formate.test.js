const dateFormat = require('../../src/date/date-format.js');


describe('date/date-format', function() {
  describe('@dateFormat(date, pattern)', function() {
    const defaultDate = new Date(1538287654321);
    if (defaultDate.getDate() !== 30 || defaultDate.getHours() !== 14) {
      it('你所在的时区不是 GMT+0800 (中国标准时间)，因此略过了该测试', function() {
        chai.assert.strictEqual(1 + 1, 2);
      });
      return;
    }
    [
      // 毫秒值
      [null, undefined, '1970-01-01'],
      [defaultDate.getTime(), undefined, '2018-09-30'],
      // Date 实例
      [new Date('2018-09-30'), 'MM-DD', '09-30'],
      // Date 字符串
      ['2018-09-30', 'MM-DD', '09-30'],
      // pattern 模板
      [defaultDate.getTime(), 'YYYY年MM月DD日HH时mm分ss秒S毫秒EEE', '2018年09月30日14时07分34秒321毫秒星期日'],
      [defaultDate.getTime(), 'EEE', '星期日'],
    ].forEach((d) => {
      const date = d[0];
      const pattern = d[1];
      it(`dateFormat(${date}, ${pattern}) should return ${d[2]}`, function() {
        chai.assert.strictEqual(dateFormat.default(date, pattern), d[2]);
      });
    });
  });
});
