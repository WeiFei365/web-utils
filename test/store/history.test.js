import {
  history,
  lctPush,
  lctReplace,
  lctGet,
  lctQuery,
} from '../../src/store/history.js';
import hashFrom from '../../src/native/hash-from.js';
import jsonFrom from '../../src/native/json-from.js';


describe('store/history', function() {
  describe('@lctGet(path)', function() {
    [
      [undefined, undefined],
      ['pathname', location.pathname],
      ['searchString', location.search],
      ['searchJson', hashFrom(location.search, true)],
      ['hashString', location.hash],
      ['hashJson', hashFrom(location.hash, true)],
      ['stateString', location.state],
      ['stateJson', hashFrom(location.state, true)],
    ].forEach((d) => {
      const path = d[0];
      it(`lctGet(${path}) should return ${jsonFrom(d[1])}`, function() {
        chai.assert.deepStrictEqual(lctGet(path), d[1]);
      });
    });
  });

  describe('@lctPush(params)', function() {
    // string
    it(`lctPush(${location.pathname}#test=abc) should return true`, function() {
      lctPush(`${location.pathname}#test=abc`);
      chai.assert.deepStrictEqual((() => location.hash === '#test=abc')(), true);
    });
    // object
    it(`lctPush({ pathname: "${location.pathname}", hash: "#h=123", search: "s=abc" }) should return true`, function() {
      lctPush({ pathname: location.pathname, hash: '#h=123', search: '?s=abc' });
      chai.assert.deepStrictEqual((() => location.hash === '#h=123' && location.search === '?s=abc')(), true);
    });
  });

  describe('@lctReplace(params)', function() {
    // string
    it(`lctReplace(${location.pathname}#test=123) should return true`, function() {
      lctReplace(`${location.pathname}#test=123`);
      chai.assert.deepStrictEqual((() => location.hash === '#test=123')(), true);
    });
    // object
    it(`lctReplace({ pathname: "${location.pathname}", hash: "#h=abc", search: "s=123" }) should return true`, function() {
      lctReplace({ pathname: location.pathname, hash: '#h=abc&h2=def', search: '?s=123&s2=456' });
      chai.assert.deepStrictEqual((() => location.hash === '#h=abc&h2=def' && location.search === '?s=123&s2=456')(), true);
    });
  });

  describe('@lctQuery(excepts)', function() {
    it(`lctQuery() should return ${location.search}${location.hash}`, function() {
      chai.assert.deepStrictEqual(lctQuery(), `${location.search}${location.hash}`);
    });
  });
});
