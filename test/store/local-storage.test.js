const {
  lstoreKeys,
  lstoreInit,
  lstoreClear,
  lstoreSave,
  lstoreSet,
  lstoreGet,
} = require('../../src/store/local-storage.js');


describe('store/local-storage', function() {
  lstoreKeys({
    'inner-keys-string': 'string',
    'inner-keys-stringTrim': 'stringTrim',
    'inner-keys-number': 'number',
    'inner-keys-number0': 'number0',
    'inner-keys-number1': 'number1',
    'inner-keys-array': 'array',
    'inner-keys-object': 'object',
    'my-keys-test': (v, store) => `${store.user || ''}_${v || ''}`.substr(0, 99),
  });

  describe('@lstoreSet(path, value, isMerge, isSave)', function() {
    [
      [undefined, undefined, undefined, undefined, undefined],
      ['inner-keys-string', '', undefined, undefined, ''],
      ['inner-keys-number', NaN, undefined, undefined, NaN],
      ['inner-keys-array', [], undefined, undefined, []],
      ['inner-keys-object', {}, undefined, undefined, {}],
      ['my-keys-test', '', undefined, undefined, ''],
    ].forEach((d) => {
      const path = d[0];
      const value = d[1];
      const isMerge = d[2];
      const isSave = d[3];
      it(`lstoreSet(${path}, ${value}, ${isMerge}, ${isSave}) should return ${d[4]}`, function() {
        lstoreSet(path, value, isMerge, isSave);
        chai.assert.deepStrictEqual(lstoreGet(path), d[4]);
      });
    });
    // 参数: isSave
    it('lstoreSet(inner-keys-string, test, undefined, false) should return ""', function() {
      lstoreSet('inner-keys-string', 'test', undefined, false);
      chai.assert.deepStrictEqual(localStorage.getItem('inner-keys-string'), '""');
    });
    it('lstoreSet(inner-keys-string, test, undefined, true) should return test', function() {
      lstoreSet('inner-keys-string', 'test', undefined, true);
      chai.assert.deepStrictEqual(localStorage.getItem('inner-keys-string'), '"test"');
    });
  });

  describe('@lstoreGet(path)', function() {
    [
      [undefined, undefined],
      ['inner-keys-string', 'test'],
      ['inner-keys-stringTrim', ''],
      ['inner-keys-number', NaN],
      ['inner-keys-number0', 0],
      ['inner-keys-number1', 1],
      ['inner-keys-array', []],
      ['inner-keys-object', {}],
      ['my-keys-test', ''],
    ].forEach((d) => {
      const path = d[0];
      it(`lstoreGet(${path}) should return ${d[1]}`, function() {
        chai.assert.deepStrictEqual(lstoreGet(path), d[1]);
      });
    });
  });

  describe('@lstoreClear(isAll)', function() {
    it('lstoreClear(false) should return true', function() {
      lstoreClear(false);
      chai.assert.deepStrictEqual((() => {
        let keys = [];
        // localStorage
        while (keys.length < localStorage.length) {
          keys.push(localStorage.key(keys.length));
        }
        // 内部 store
        keys = keys.concat(Object.keys(MVP_Store_LocalStorage()));
        while (keys.length > 0) {
          if ([
            'inner-keys-string',
            'inner-keys-stringTrim',
            'inner-keys-number',
            'inner-keys-number0',
            'inner-keys-number1',
            'inner-keys-array',
            'inner-keys-object',
            'my-keys-test',
          ].indexOf(keys.pop()) !== -1) {
            return false;
          }
        }
        return true;
      })(), true);
    });
    it('lstoreClear(true) should return true', function() {
      lstoreClear(true);
      chai.assert.deepStrictEqual((() => !Object.keys(MVP_Store_LocalStorage()).length && !localStorage.length)(), true);
    });
  });
});
