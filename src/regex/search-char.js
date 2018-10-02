import _isArray from 'lodash/isArray';


/**
 * [编译用于按字符来匹配/高亮字符串的正则模板]
 * @author WEIFEI
 * @method regexSearchChar
 * @param  {Array}         [chars=[]] [待编译的字符数组]
 * @param  {String}        [opts='']  [实例化 RegExp 的第二个参数, 不建议用]
 * @return {Object}                   [编译包结构如下:]
 *                                    {
 *                                        test: 用于测试某字符串是否包含chars中的字符
 *                                        replace: string.replace 函数的第一个参数
 *                                        replacement: string.replace 函数的第二个参数
 *                                    }
 */
export default function regexSearchChar(chars = [], opts = '') {
  if (!_isArray(chars)) {
    return {};
  }
  chars = chars.map((d) => String(d)).filter((d) => !!d);
  if (!chars.length) {
    return {};
  }
  const replacement = [];
  chars.forEach((char, index) => replacement.push(`$${index + 1}<em>${char}</em>`));
  replacement.push(`$${chars.length + 1}`);

  return {
    test: new RegExp(`(.*)${chars.join('(.*)')}(.*)`, opts || 'i'),
    replace: new RegExp(`(.*)${chars.join('(.*)')}(.*)`, opts || 'ig'),
    replacement: replacement.join(''),
  };
}
