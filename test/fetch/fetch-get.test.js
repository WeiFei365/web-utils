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
    it(`fetchGet(/u/6710699?s=40&v=4, {}, {}, http://avatars3.githubusercontent.com) should return origin response`, function(done) {
      fetchGet(
        '/u/6710699?s=40&v=4',
        {},
        {},
        'http://avatars3.githubusercontent.com'
      ).then((response) => {
        done(response ? undefined : new Error('-blob'));
        if (response) {
          return Promise.all([
            response.blob(),
            Promise.resolve(response.headers.get('Content-Disposition')),
          ]).then((blob, disposition) => {
            console.log(blob, disposition);
          })
        }
      }, () => done(new Error('-blob')));
    });
    // it(`fetchGet(undefined, undefined, undefined, undefined) should return null`, function(done) {
    //   fetchGet().then((data) => {
    //     console.log(data);
    //     done();
    //   });
    // });
  });
});
