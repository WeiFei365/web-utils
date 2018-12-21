import dateFormat from './date-format';


/**
 * 时间格式化: 返回 UTC 时区的字串
 * @author WEIFEI
 * @method dateFormatUTC
 * @param  {[type]}      any     [请参考 ./date-format.js 中的说明]
 * @param  {[type]}      pattern [请参考 ./date-format.js 中的说明]
 * @return {[type]}              [description]
 */
export default function dateFormatUTC(any, pattern) {
  return dateFormat(any, pattern, 'UTC');
}
