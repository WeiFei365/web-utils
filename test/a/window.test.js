import webUtils from '../../src/window';

describe('window', function() {
  it('the window should has a key: webUtils, and you can use it to play', function() {
    chai.assert.deepStrictEqual(window.webUtils, webUtils);
  });
});
