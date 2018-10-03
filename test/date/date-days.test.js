const dateDays = require('../../src/date/date-days.js');


describe('date/date-days', function() {
  describe('@dateDays(start, end)', function() {
    [
      // 毫秒值
      [null, 0, 0],
      [0, 1000000000, 11],
      [1000000000, 0, 11],
      [100000000, 1000000000, 10],
      // Date 实例
      [new Date('2018-09-30'), new Date('2018-10-10'), 10],
      [new Date('2018-09-30'), new Date('2018-09-30'), 0],
      [new Date('2018-09-30'), new Date('2018-09-30 10:10:10'), 0],
      // 混合
      [1538265600000, new Date('2018-10-01 10:10:10'), 1],
    ].forEach((d) => {
      const start = d[0];
      const end = d[1];
      it(`dateDays(${start}, ${end}) should return ${d[2]}`, function() {
        chai.assert.strictEqual(dateDays.default(start, end), d[2]);
      });
    });
  });
});
