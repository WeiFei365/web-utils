const dateSet = require('../../src/date/date-set.js');


describe('date/date-set', function() {
  describe('@dateSet(date, endPoint, timezone)', function() {
    // 参数值: endPoint
    [
      [undefined, 1538287654321, ''],
      ['M', 1519833600000, ''],
      ['d', 1535731200000, ''],
      ['h', 1538236800000, ''],
      ['m', 1538287200000, ''],
      ['s', 1538287620000, ''],
      ['ms', 1538287654000, ''],
      // 参数值: timezone
      ['M', 1519862400000, 'UTC'],
    ].forEach((d) => {
      const date = 1538287654321;
      const endPoint = d[0];
      const timezone = d[2];
      it(`dateSet(${date}, ${endPoint}, ${timezone}) should return ${d[1]}`, function() {
        chai.assert.strictEqual(dateSet.default(date, endPoint, timezone).getTime(), d[1]);
      });
    });
  });
});
