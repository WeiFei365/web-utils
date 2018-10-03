const assert = require('assert');

const {
  lstoreKeys,
  lstoreInit,
  lstoreClear,
  lstoreSave,
  lstoreSet,
  lstoreGet,
} = require('../../src/store/local-storage.js');
const jsonFrom = require('../../src/native/json-from.js');


describe('store/local-storage', function() {
  lstoreKeys({
    'inner-keys-string': 'string',
    'inner-keys-stringTrim': 'stringTrim',
    'inner-keys-number': 'number',
    'inner-keys-number0': 'number0',
    'inner-keys-number1': 'number1',
    'inner-keys-array': 'array',
    'inner-keys-object': 'object',
    'my-keys-test': (v, store) => `${store.user || ''}_${v}`.substr(0, 99),
  });
  describe('@lstoreGet(path)', function() {
    [
      [undefined, undefined],
      ['inner-keys-string', ''],
    ].forEach((d) => {
      const path = d[0];
      it(`lstoreGet(${path}) should return ${jsonFrom.default(d[1])}`, function() {
        assert.deepStrictEqual(lstoreGet(path), d[1]);
      });
    });
  });
});
