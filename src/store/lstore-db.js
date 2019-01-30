/**
 * [基于 local-storage 模块的高级存储结构, 适合于存储高级的数据结构, 并有一定的操作方式;
 * 本模块也可以基于其他类似 local-storage 的存储块, 比如: IndexedDB, Web SQL;
 * 本模块主要用于存储 Array 类型的数据结构, 并且可以基于该数据做增、删、检索的操作;
 * 存储列表采用先进后出的时间策略, 类似于用户的输入历史会优先展示最近的输入历史]
 * @author WEIFEI
 * @example [使用方式请参考: lstore-db-user_list 和 lstore-db-search_words 两个示例模块, 然后根据需求定制]
 * @description 所有数据采用 add 时的时间戳排序, 先进后出的模式;
 * @description 目前仅存储最多 10 条数据, add 数据时如果超限会截取最近的 10 条存储,
 * 可以通过 maxLength 定义, 但是不建议过大，以免无限制内存溢出，尤其是 isSaveROM=true 时
 * @description 操作函数 [
 *              主要用于内部操作灵活需要, 需要在 class 实例化时传入
 *              @inner  key [用于到 local-storage 中存取原始数据的 交互KEY]
 *              @inner  isSaveROM [是否将数据保存到本地 localStorage, 如果是，则会使用内置 array+check 校验器检查数据]
 *              @inner  maxLength [允许存储最多多少条数据, 默认 10, 不建议过大，以免无限制内存溢出，尤其是 isSaveROM=true 时]
 *              @inner  check [当 add 数据时, 用以校验新数据是否正确, 不正确的话不会执行 add 操作]
 *                     @param {[type]}  data  [新的数据]
 *                     @return                [注意, 如果 data 为引用数据类型, 在该校验器中修改 data 数据, 也会被保存,
 *                                            比如, 该函数也可以作为数据的修正函数, 以保存正确的数据结构被保存,
 *                                            如果数据不正确返回 false,
 *                                            如果数据已修正或正确则返回数据,
 *                                            注意, 基于以上, 不能正确的存储 boolean 类型的数据, 可以采用 1=true 0=false 做转换]
 *              @inner  isEqual  [当 add/delete 数据时, 用以校验数据是否与已有数据相等, 以此执行不同的操作]
 *                     @param {[type]}  oldd  [已有的数据]
 *                     @param {[type]}  newd  [新数据]
 *                     @return {Boolean}     []
 *              @inner  searchBy  [当 select 操作时, 并且需要过滤(search 参数)数据时, 获取待匹配的字符串]
 *                     @param   {[type]}        data  [元数据]
 *                     @return  {Array[String]}       [待匹配的数据组成的数组, 如果任意被匹配到了, 则返回同等长度的已替换了的字符串]
 *              ]
 * @exports constructor [class 的使用需要先实例化]
 * @exports select      []
 *          @param  {Number}  [limit=6] [本次取出的数据条数]
 *          @param  {String}  search    [需要检索的字符串, 会调用 regex/search-char 模块进行模糊匹配, 并添加 em 标签到找到的所有字符]
 *          @param  {Boolean} desc      [按时间正序/倒序返回]
 *          @return {Array}             []
 * @exports add         [新增数据到存储中, 会调用 check 进行校验、并且调用 isEqual 进行去重, 数据保存采用先进后出的策略]
 *          @param  {[type]}  data      [需要新增的数据, 注意，这里会调用 check 检查数据, 因此还可以在 check 中进行数据的修正等操作]
 * @exports delete      [删除指定的数据, 会调用 isEqual 来进行数据的比对]
 *          @param  {[type]}  data      [需要删除的数据, 因为是调用的 isEqual 进行判等,
 *                                      所以最终删除哪些(采用 filter 的方式删除)由调用层决定]
 */

import _toInteger from 'lodash/toInteger';
import regexSearchChar from '../regex/search-char';
import {
  lstoreGet,
  lstoreSet,
  lstoreKeys,
} from './local-storage';

export default class LStoreDB {
  constructor(props = {}) {
    /* eslint-disable no-param-reassign,no-underscore-dangle */
    // props.key = props.key || '';
    // for item(row)
    props.isSaveROM = !!props.isSaveROM;
    props.maxLength = typeof props.maxLength === 'number' ? _toInteger(props.maxLength) : 10;
    props.maxLength = Math.max(props.maxLength, 1);

    props.check = props.check || this._check;
    props.isEqual = props.isEqual || this._isEqual;
    props.searchStr = props.searchBy || this._searchStr;

    this.props = props;

    if (!props.key) {
      throw new Error(`Invalid key: ${props.key}`);
    }

    if (props.isSaveROM) {
      lstoreKeys({
        [props.key]: this.saveValidator,
      });
    }
    /* eslint-enable */
  }

  saveValidator = (v, store, dft) => {
    const { props } = this;
    /* eslint-disable no-param-reassign */
    // 数组
    v = dft.array(v, store, dft);
    // 对象并且包含 time 字段
    v = v.filter((item) => !!+dft.object(item, store, dft).time);
    // 对象并且 data 字段符合 check 规则
    v = v.filter((item) => !!props.check(item.data));
    /* eslint-enable */
    return v;
  };

  _check = (data) => data;
  _isEqual = (oldd, newd) => oldd === newd;
  _searchStr = (data) => [String(data || '')];

  getter = () => lstoreGet(this.props.key) || [];

  select = (limit = 6, search = '', desc = true) => {
    const { props } = this;

    let rowList = this.getter().sort((a, b) => b.time - a.time);
    if (!desc) {
      rowList = rowList.reverse();
    }

    if (search) {
      const regex = regexSearchChar(search.split('').filter((d) => !!d.trim()));
      if (regex.replacement) {
        rowList = rowList.map((d) => {
          let isAny = false;
          const row = { html: [], data: d.data };
          props.searchStr(d.data).forEach((str) => {
            const isTest = regex.test.test(str);
            row.html.push(isTest ? str.replace(regex.replace, regex.replacement) : str);
            if (isTest) {
              isAny = true;
            }
          });
          return isAny ? row : false;
        }).filter((d) => !!d);
      }
    }
    // 去除内部使用的 time 等字段
    rowList = rowList.map((d) => d.time ? ({ data: d.data }) : d);

    return rowList.slice(0, limit);
  }

  add = (data) => {
    const { props } = this;

    /* eslint-disable no-param-reassign */
    const isVali = props.check(data);
    if (typeof isVali === 'boolean' && !isVali) {
      return;
    }
    data = isVali;
    /* eslint-enable */

    const rowList = this.getter().filter((d) => !props.isEqual(d.data, data));
    rowList.unshift({ data, time: Date.now() });
    lstoreSet(props.key, rowList.slice(0, props.maxLength));
  }

  delete = (data) => {
    const { props } = this;

    /* eslint-disable no-param-reassign */
    data = props.check(data);
    if (typeof data === 'boolean' && !data) {
      return;
    }
    /* eslint-enable */

    lstoreSet(props.key, this.getter().filter((d) => !props.isEqual(d.data, data)));
  }
}
