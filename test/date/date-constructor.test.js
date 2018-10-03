const assert = require('assert');

const dateConstructor = require('../../src/date/date-constructor.js');


describe('date/date-constructor', function() {
  describe('@dateConstructor(any, isSelf)', function() {
    [
      // 非法数据
      [null, true, 0],
      // 毫秒值
      [1538287654321, true, 1538287654321],
      // Date 字符串
      ['2018-09-30 14:07:34', true, 1538287654000],
      // Date 实例
      [new Date(1538287654321), true, 1538287654321],
    ].forEach((d) => {
      const any = d[0];
      const isSelf = d[1];
      it(`dateConstructor(${any}, ${isSelf}) should return ${d[2]}`, function() {
        assert.strictEqual(dateConstructor.default(any, isSelf).getTime(), d[2]);
      });
    });
    // isSelf 标志
    {
      const any = new Date(1538287654321);
      const isSelf = false;
      it(`dateConstructor(${any}, ${isSelf}) should return not itself`, function() {
        const v = dateConstructor.default(any, isSelf);
        v.setMilliseconds(0);
        assert.notStrictEqual(v.getTime(), any.getTime());
      });
    }
    {
      const any = new Date(1538287654321);
      const isSelf = true;
      it(`dateConstructor(${any}, ${isSelf}) should return itself`, function() {
        const v = dateConstructor.default(any, isSelf);
        v.setMilliseconds(0);
        assert.strictEqual(v.getTime(), any.getTime());
      });
    }
  });
});
