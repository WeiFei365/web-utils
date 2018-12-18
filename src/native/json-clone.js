import jsonTo from './json-to';
import jsonFrom from './json-from';

import setWindow from '../window';
setWindow('jsonClone', jsonClone);

/**
 * [深度拷贝对象，会丢弃不可拷贝的对象，比如: function]
 * @author WEIFEI
 * @method jsonClone
 * @param  {Object} json  [description]
 * @return {Object}       [description]
 */
export default function jsonClone(json) {
  return jsonTo(jsonFrom(json));
}
