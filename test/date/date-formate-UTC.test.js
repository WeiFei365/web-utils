const dateFormatUTC = require('../../src/date/date-format-UTC.js');


describe('date/date-format', function() {
  describe('@dateFormatUTC(date, pattern)', function() {
    const defaultDate = new Date(1538287654321);
    if (defaultDate.getDate() !== 30 || defaultDate.getHours() !== 14) {
      it('你所在的时区不是 GMT+0800 (中国标准时间)，因此略过了该测试', function() {
        chai.assert.strictEqual(1 + 1, 2);
      });
      return;
    }
    [
      // 本地时区
      // [1538287654321, 'YYYY-MM-DD HH:mm:ss +S EEE', '2018-09-30 14:07:34 +321 星期日'],
      // UTC时区
      [1538287654321, 'YYYY-MM-DD HH:mm:ss +S EEE', '2018-09-30 06:07:34 +321 星期日'],
    ].forEach((d) => {
      const date = d[0];
      const pattern = d[1];
      it(`dateFormatUTC(${date}, ${pattern}) should return ${d[2]}`, function() {
        chai.assert.strictEqual(dateFormatUTC.default(date, pattern), d[2]);
      });
    });
  });
});
