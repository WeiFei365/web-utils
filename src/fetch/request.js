import 'whatwg-fetch';


function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return null;
  }

  const error = new Error(response.statusText);
  error.response = response;
  return error;
}

/**
 * [实际的使用中, 请使用 fetchGet 或 fetchPost
 *  下面的 TODO 都是需要在实际项目中根据需要选择/更改使用
 * ]
 * @method request
 * @param  {String} url     [包含: 主机, pathname, search, hash 等信息的 URL]
 * @param  {Object} options [其他可配置的参数(参见 whatwg-fetch), 如: headers]
 * @return {Promise}         [description]
 */
export default function request(url, options) {
  return fetch(url, options).then((response) => { // 拦截所有请求状态
    const error = checkStatus(response);
    if (error) {
      return {
        error,
        // 服务器出错
        code: 10000,
      };
    }
    return response.json();
  }, (error) => ({
    error,
    // 通信或参数异常
    code: 20000,
  })).catch((error) => ({
    error,
    // 未知异常
    code: 99999,
  })).then((data) => { // 统一处理接口状态, 返回调用层"需要的数据"
    if (data.code === 0) {
      // TODO 1、检查请求成功的标志
      // 和接口方约定, data.data 为请求返回的数据
      return data.data;
    }
    if (data.error) {
      // TODO 2、前端错误处理
      return data;
    }
    if (data.code === 10404) {
      // TODO 3、检查是否为用户未登录状态
      // 判断是否为 check-token 的请求,
      // 如果是, 则应交由调用层处理
      if (url.indexOf('/check-token') !== -1) {
        return data;
      }
      // 如果否, 则应刷新页面(或提示用户登录)
      window.location.reload();
      return { code: '未登录' };
    }
    // TODO 4、检查当前版本是否为最新版, 处理参考 TODO 3
    // TODO 5、检查其他状态码
    // TODO 6、未知异常
    return data;
  });
}
