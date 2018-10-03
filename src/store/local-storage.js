/**
 * [操作 localStorage 工具包]
 * @author  WEIFEI
 * @example [首先需要调用 lstoreKeys 接口来配置 交互KEY, 然后根据需要调用 exports 中的接口,
 *          默认情况下, lstoreSave 接口会在每次 lstoreSet 时自动调用,
 *          一般情况下, lstoreInit 不需要主动调用, 程序初始化会在其他任意接口被调用时 自动初始化,
 *          lstoreClear 可以清空 交互KEY 以外的数据, 即直接调用了 localStorage.clear,
 *          lstoreSave 接口只会向 localStorage 写入已配置的 交互KEY 的数据,
 *          因此, 也可以向程序中存储 任意数据, 但这些数据并不会被暴露在 localStorage 中,
 *          但是 lstoreClear 会在 isAll=true 时清理全部数据,
 *          所有使用的 KEY 必须唯一]
 * @description 交互KEY [是指 localStorage 中的 KEY, 程序只会从 localStorage 读取已配置 KEY 对应的数据]
 * @description 校验器 [
 *              是指当从 localStorage 中加载数据时, 需要对数据进行校验的函数, 已内置的校验器:
 *              @inner 'string': (v) => String(v) [使用方式为: { test: 'string' }, 下同]
 *              @inner 'stringTrim': (v) => String(v).trim()
 *              @inner 'number': (v) => +v
 *              @inner number0: (v) => lodash.isNaN(+v) ? 0 : +v
 *              @inner number1: (v) => lodash.isNaN(+v) ? 1 : +v
 *              @inner array: (v) => lodash.isArray(v) ? v : [],
 *              @inner object: (v) => lodash.isObject(v) ? v : {},
 *              ]
 * @exports lstoreKeys  [配置需要读写 localStorage 中数据的 交互KEY]
 *          @param {Object} [useKeys] [格式如下: { test: (v, store) => v },
 *                                    其中 'test' 是 交互KEY名称,
 *                                    '(v, store) => v' 是当从 localStorage 中加载该 交互KEY 对应数据时的 校验器,
 *                                    'v' 是已 JSON.parse 后的数据,
 *                                    'store' 是所有已加载到的数据集,
 *                                    返回值为已校验的值]
 * @exports lstoreInit  [从 localStorage 加载数据, 会自动尝试将数据转成 json 格式]
 *          @param {Boolean}  [isForce=false] [是否强制重新从 localStorage 加载数据,
 *                                            默认如果之前已加载过数据, 则不会再重复加载]
 * @exports lstoreClear [清理 localStorage 中的数据]
 *          @param {Boolean} [isAll = false]  [是否清空全部, 包括 交互KEY 以外的数据]
 * @exports lstoreSave  [将 store 中的数据写入到 localStorage]
 *          @param {String} path  [仅写入 path 指定 key 的数据]
 * @exports lstoreSet [localStorage 改值接口]
 *          @param {String}   path            [待改值的路径, 如: 'a'、'a.b'、'a.1.b']
 *          @param {[type]}   value           [新值]
 *          @param {Boolean}  [isMerge=false] [是否对 Object 类型进行深度 merge, 只在旧值和新值同时为 Object 类型时才 merge]
 *          @param {Boolean}  [isSave=true]   [是否立刻写到本地 localStorage]
 * @exports lstoreGet [localStorage 取值接口]
 *          @param {String} path  [待取值的路径，如: 'a'、'a.b'、'a.1.b']
 *          @returns {[type]}
 * @requires lodash/set
 * @requires lodash/get
 * @requires lodash/isNaN
 * @requires lodash/merge
 * @requires lodash/isArray
 * @requires lodash/isObject
 */

import _set from 'lodash/set';
import _get from 'lodash/get';
// import _trim from 'lodash/trim';
// import _keys from 'lodash/keys';
import _isNaN from 'lodash/isNaN';
import _merge from 'lodash/merge';
// import _isKey from 'lodash/_isKey';
import _isArray from 'lodash/isArray';
import _isObject from 'lodash/isObject';

import jsonTo from '../native/json-to';
import jsonFrom from '../native/json-from';


// 数据存储池
const store = {
  // 标记是否已从 localStorage 加载数据
  _initialized: true,
};
// 交互KEY
const localKeys = {};
// 内置交互KEY 字段
const localDft = {
  string: (v) => [null, undefined].indexOf(v) === -1 ? String(v) : '',
  stringTrim: (v) => localDft.string(v).trim(),
  number: (v) => +v,
  number0: (v) => _isNaN(+v) ? 0 : +v,
  number1: (v) => _isNaN(+v) ? 1 : +v,
  array: (v) => _isArray(v) ? v : [],
  object: (v) => _isObject(v) ? v : {},
};

export function lstoreSet(path, value, isMerge = false, isSave = true) {
  lstoreInit();

  if (isMerge) {
    const oldv = _get(store, path);
    if (_isObject(oldv) && _isObject(value)) {
      value = _merge(oldv, value);
    }
  }

  // TODO 调用校验器验证 value 的正确性
  _set(store, path, value);

  if (isSave) {
    lstoreSave(path);
  }

  return value;
}

export function lstoreGet(path) {
  lstoreInit();

  return _get(store, path);
}

export function lstoreSave(path) {
  if (path) {
    if (localKeys[path]) {
      localStorage.setItem(path, jsonFrom(store[path]));
    }
  } else {
    Object.keys(localKeys).forEach((name) => localStorage.setItem(name, jsonFrom(store[name])));
  }
}

export function lstoreClear(isAll = false) {
  if (isAll) {
    Object.keys(store).forEach((name) => (delete store[name]));
    localStorage.clear();
    return;
  }
  Object.keys(localKeys).forEach((name) => {
    delete store[name];
    localStorage.removeItem(name);
  });
}

export function lstoreInit(isForce = false) {
  if (!store._initialized && !isForce) {
    return;
  }
  // 要加载到程序内的所有数据的 交互KEY 列表
  const lkeys = Object.keys(localKeys);
  lkeys.forEach((name) => {
    // 从localStorage读取指定key的数据
    store[name] = jsonTo(localStorage.getItem(name));
    // 验证已加载的数据正确性: 根据用户设定的校验器或默认校验器
    const vali = localDft[localKeys[name]] ? localDft[localKeys[name]] : localKeys[name];
    store[name] = vali(store[name], store);
  });

  delete store._initialized;
}

export function lstoreKeys(useKeys) {
  Object.assign(localKeys, useKeys);
}

/**
 * 方便开发调试
 * @method MVP_Store_LocalStorage
 */
window.MVP_Store_LocalStorage = () => jsonTo(jsonFrom(store));
