/**
 * [模拟 Array(Object) 存储类型, 以及对其的操作案例,
 * 使用方式请参考测试用例: test/store/lstore-db-user_list.test]
 * @author WEIFEI
 */

import LStoreDB from './lstore-db';


// 实例化
const userList = new LStoreDB({
  // 不存储到 localStorage
  isSaveROM: false,
  key: 'user-list',
  check: (data) => {
    /* eslint-disable no-param-reassign */
    // TODO 以下的判断条件需要根据真实的业务场景做更改
    if (!data || !(data instanceof Object)) {
      return false;
    }
    if ([null, undefined].indexOf(data.id) !== -1) {
      return false;
    }
    if ([null, undefined].indexOf(data.name) !== -1) {
      return false;
    }
    data.id = data.id;
    data.name = String(data.name);
    /* eslint-enable */
    return data;
  },
  isEqual: (oldd, newd) => newd && newd instanceof Object && oldd.id === newd.id && oldd.name === newd.name,
  searchBy: (data) => [data.name, String(data.id)],
});

export default {
  add: userList.add,
  select: userList.select,
  delete: userList.delete,
};
