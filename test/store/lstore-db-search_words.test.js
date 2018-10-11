import searchWords from '../../src/store/lstore-db-search_words.js';
import jsonFrom from '../../src/native/json-from.js';


describe('store/lstore-db-search_words', function() {
  describe('@searchWords.add(data)', function() {
    [
      [undefined, []],
      ['', []],
      [false, []],
      [0, []],
      ['01', [{ data: '01' }]],
      [undefined, [{ data: '01' }]],
      ['02', [{ data: '02' }]],
      ['  02   ', [{ data: '02' }]],
      ['  03   ', [{ data: '03' }]],
      ['这是一段话，可能被高亮，也可能不，但是可以试试', [{ data: '这是一段话，可能被高亮，也可能不，但是可以试试' }]],
      ['what is that?', [{ data: 'what is that?' }]],
    ].forEach((d) => {
      const data = d[0];
      it(`searchWords.add(${data}) should return ${d[1]}`, function() {
        searchWords.add(data);
        chai.assert.deepStrictEqual(searchWords.select(1), d[1]);
      });
    });
  });
  describe('@searchWords.select(limit, search, desc)', function() {
    [
      [3, undefined, undefined, [
        { data: 'what is that?' },
        { data: '这是一段话，可能被高亮，也可能不，但是可以试试' },
        { data: '03' },
      ]],
      [2, 'at', undefined, [
        { data: 'what is that?', html: ['wh<em>a</em><em>t</em> is th<em>a</em><em>t</em>?'] },
      ]],
      [2, '可能是', undefined, [
        {
          data: '这是一段话，可能被高亮，也可能不，但是可以试试',
          html: ['这是一段话，<em>可</em><em>能</em>被高亮，也可<em>能</em>不，但<em>是</em>可以试试'],
        },
      ]],
      [2, undefined, true, [
        { data: 'what is that?' },
        { data: '这是一段话，可能被高亮，也可能不，但是可以试试' },
      ]],
      [2, undefined, false, [
        { data: '01' },
        { data: '02' },
      ]],
    ].forEach((d) => {
      const limit = d[0];
      const search = d[1];
      const desc = d[2];
      it(`searchWords.select(${limit}, ${search}, ${desc}) should return ${jsonFrom(d[3])}`, function() {
        console.log([limit, search, desc], searchWords.select(limit, search, desc), d[3]);
        chai.assert.deepStrictEqual(searchWords.select(limit, search, desc), d[3]);
      });
    });
  });
  describe('@searchWords.delete(data)', function() {
    it(`searchWords.delete(data) should return ${true}`, function() {
      searchWords.select(10).forEach((d) => searchWords.delete(d.data));
      chai.assert.deepStrictEqual(searchWords.select(1).length, 0);
    });
  });
});
