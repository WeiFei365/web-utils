/**
 * [校验文件名，去除非法的字符]
 * @author WEIFEI
 * @method valiFilename
 * @param  {String}     name            [文件/文件夹名]
 * @param  {String}     [dftChar='-']   [非法字符的替换]
 * @param  {Number}     [maxLength=250] [返回字串的最大长度]
 * @return {String}                     [description]
 */
export default function valiFilename(name, dftChar = '-', maxLength = 250) {
  return String(typeof name === 'string' ? name : '')
    .replace(/\/|\\|>|<|\?|:|"|'|\^|!|;|\*|&|%|\$|#|@/g, '?')
    .replace(/\?+/g, dftChar)
    .replace(/\n|\f|\r|\t|\v/g, ' ')
    .replace(/\s+/g, ' ')
    .substr(0, maxLength);
}
