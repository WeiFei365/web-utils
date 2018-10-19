import fetchGet from '../../src/fetch/fetch-get.js';


describe('fetch/fetch-get', function() {
  describe('@fetchGet(pathname, data, options, host)', function() {
    it(`fetchGet(undefined, undefined, undefined, undefined) should return code=20000`, function(done) {
      fetchGet().then((data) => done(new Error('-test')), () => done());
    });
    it(`fetchGet(/users/octocat/following, undefined, undefined, https://api.github.com) should return [{...},{...}]`, function(done) {
      fetchGet('/users/octocat/following', undefined, undefined, 'https://api.github.com').then((data) => {
        done((data && data.length) ? undefined : (data.error || new Error('-test')));
      });
    });
    it(`fetchGet(/search/repositories, { q: 'web-utils' }, undefined, https://api.github.com) should return {...}`, function(done) {
      fetchGet('/search/repositories', { q: 'web-utils' }, undefined, 'https://api.github.com').then((data) => {
        done((data && data.total_count) ? undefined : (data.error || new Error('-test')));
      });
    });
    it(`fetchGet(/search/repositories, { q: 'web-utils' }, { headers: { user: test } }, https://api.github.com) should return code=20000`, function(done) {
      fetchGet('/search/repositories', { q: 'web-utils' }, { headers: { user: 'test' } }, 'https://api.github.com').then((data) => {
        done(new Error('-test'));
      }, () => done());
    });
    // it(`fetchGet(undefined, undefined, undefined, undefined) should return null`, function(done) {
    //   fetchGet().then((data) => {
    //     console.log(data);
    //     done();
    //   });
    // });
  });
});
