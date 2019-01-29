import userList from '../../src/store/lstore-db-user_list.js';
import jsonFrom from '../../src/native/json-from.js';


describe('store/lstore-db-user_list', function() {
  describe('@userList.add(data)', function() {
    [
      [undefined, []],
      ['', []],
      [false, []],
      [0, []],
      [{}, []],
      [{ id: 0 }, []],
      [{ id: 1 }, []],
      [{ id: 2, name: '做你想做，想你所想' }, [{ data: { id: 2, name: '做你想做，想你所想' } }]],
      [{ id: '123,123', name: 'abc,abc' }, [{ data: { id: '123,123', name: 'abc,abc' } }]],
      [{ id: 456, name: 'abc456' }, [{ data: { id: 456, name: 'abc456' } }]],
    ].forEach((d) => {
      const data = d[0];
      it(`userList.add(${jsonFrom(data)}) should return ${jsonFrom(jsonFrom)}`, function() {
        userList.add(data);
        chai.assert.deepStrictEqual(userList.select(1), d[1]);
      });
    });
  });
  describe('@userList.select(limit, search, desc)', function() {
    [
      [3, undefined, undefined, [
        { data: { id: 456, name: 'abc456' } },
        { data: { id: '123,123', name: 'abc,abc' } },
        { data: { id: 2, name: '做你想做，想你所想' } },
      ]],
      [2, 'et', undefined, []],
      [2, '4', undefined, [
        {
          data: { id: 456, name: 'abc456' },
          html: ['abc<em>4</em>56', '<em>4</em>56'],
        },
      ]],
      [4, '23', undefined, [
        {
          data: { id: '123,123', name: 'abc,abc' },
          html: ['abc,abc', '1<em>2</em><em>3</em>,1<em>2</em><em>3</em>'],
        },
      ]],
      [2, '你想', undefined, [
        {
          data: { id: 2, name: '做你想做，想你所想' },
          html: ['做<em>你</em><em>想</em>做，想<em>你</em>所<em>想</em>', '2'],
        },
      ]],
      [2, undefined, true, [
        { data: { id: 456, name: 'abc456' } },
        { data: { id: '123,123', name: 'abc,abc' } },
      ]],
      [2, undefined, false, [
        { data: { id: 2, name: '做你想做，想你所想' } },
        { data: { id: '123,123', name: 'abc,abc' } },
      ]],
    ].forEach((d) => {
      const limit = d[0];
      const search = d[1];
      const desc = d[2];
      it(`userList.select(${limit}, ${search}, ${desc}) should return ${jsonFrom(d[3])}`, function() {
        chai.assert.deepStrictEqual(userList.select(limit, search, desc), d[3]);
      });
    });
  });
  describe('@userList.delete(data)', function() {
    it(`userList.delete(data) should return ${true}`, function() {
      userList.select(100).forEach((d) => userList.delete(d.data));
      chai.assert.deepStrictEqual(userList.select(1).length, 0);
    });
  });
});
