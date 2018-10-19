import fetchPost from '../../src/fetch/fetch-post.js';


describe('fetch/fetch-post', function() {
  describe('@fetchPost(pathname, data, options, host)', function() {
    it(`fetchPost(undefined, undefined, undefined, undefined) should return code=20000`, function(done) {
      fetchPost().then((data) => {
        done(new Error('-test'));
      }, () => done());
    });
    it(`fetchPost(/_private/browser/stats, undefined, undefined, https://api.github.com) should return {}`, function(done) {
      fetchPost('/_private/browser/stats', undefined, undefined, 'https://api.github.com').then((data) => {
        done((data && !Object.keys(data).length) ? undefined : (data.error || new Error('-test')));
      });
    });
    it(`fetchPost(/_private/browser/stats, { q: 'web-utils' }, undefined, https://api.github.com) should return {}`, function(done) {
      fetchPost('/_private/browser/stats', { q: 'web-utils' }, undefined, 'https://api.github.com').then((data) => {
        done((data && !Object.keys(data).length) ? undefined : (data.error || new Error('-test')));
      });
    });
    it(`fetchPost(/_private/browser/stats, { q: 'web-utils' }, { headers: { user: test } }, https://api.github.com) should return code=20000`, function(done) {
      fetchPost('/_private/browser/stats', { q: 'web-utils' }, { headers: { user: 'test' } }, 'https://api.github.com').then((data) => {
        done(new Error('-test'));
      }, () => done());
    });
  });
});
