import fetchGet from '../../src/fetch/fetch-get.js';

// 请求可下载的文件
fetchGet(
  '/u/6710699?s=40&v=4',
  {},
  {},
  'http://avatars3.githubusercontent.com'
).then((response) => {
  console.log(response);
  if (response) {
    return Promise.all([
      response.blob(),
      Promise.resolve(response.headers.get('Content-Disposition')),
    ]).then((blob, disposition) => {
      const link = document.createElement('a');
      // 获取 blob 本地文件连接 (blob 为纯二进制对象，不能够直接保存到磁盘上)
      const url = window.URL.createObjectURL(blob);
      // 文件名
      link.download = disposition || '1.jpg';
      link.href = url;
      link.click();
      // 释放 blob 的内存占用
      window.URL.revokeObjectURL(url);
    })
  }
});
