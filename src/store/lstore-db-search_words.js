/**
 * [模拟 Array(String) 存储类型, 以及对其的操作案例,
 * 使用方式请参考测试用例: test/store/lstore-db-seach_words.test;
 * 这里有点类似于前端保存用户的输入历史, 已被用户输入时给予提示]
 * @author WEIFEI
 */

import LStoreDB from './lstore-db';


// 实例化
const searchWords = new LStoreDB({
  // 实时存储到 localStorage
  isSaveROM: true,
  maxLength: 8,
  key: 'search-words',
  searchBy: (str) => [str],
  check: (data) => String(data || '').trim(),
});

export default {
  add: searchWords.add,
  select: searchWords.select,
  delete: searchWords.delete,
};
