/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/regex/search-char.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var root = __webpack_require__(/*! ./_root */ \"./node_modules/lodash/_root.js\");\n\n/** Built-in value references. */\nvar Symbol = root.Symbol;\n\nmodule.exports = Symbol;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_Symbol.js?");

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\"),\n    getRawTag = __webpack_require__(/*! ./_getRawTag */ \"./node_modules/lodash/_getRawTag.js\"),\n    objectToString = __webpack_require__(/*! ./_objectToString */ \"./node_modules/lodash/_objectToString.js\");\n\n/** `Object#toString` result references. */\nvar nullTag = '[object Null]',\n    undefinedTag = '[object Undefined]';\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * The base implementation of `getTag` without fallbacks for buggy environments.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the `toStringTag`.\n */\nfunction baseGetTag(value) {\n  if (value == null) {\n    return value === undefined ? undefinedTag : nullTag;\n  }\n  return (symToStringTag && symToStringTag in Object(value))\n    ? getRawTag(value)\n    : objectToString(value);\n}\n\nmodule.exports = baseGetTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_baseGetTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */\nvar freeGlobal = typeof global == 'object' && global && global.Object === Object && global;\n\nmodule.exports = freeGlobal;\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack:///./node_modules/lodash/_freeGlobal.js?");

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var Symbol = __webpack_require__(/*! ./_Symbol */ \"./node_modules/lodash/_Symbol.js\");\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar symToStringTag = Symbol ? Symbol.toStringTag : undefined;\n\n/**\n * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.\n *\n * @private\n * @param {*} value The value to query.\n * @returns {string} Returns the raw `toStringTag`.\n */\nfunction getRawTag(value) {\n  var isOwn = hasOwnProperty.call(value, symToStringTag),\n      tag = value[symToStringTag];\n\n  try {\n    value[symToStringTag] = undefined;\n    var unmasked = true;\n  } catch (e) {}\n\n  var result = nativeObjectToString.call(value);\n  if (unmasked) {\n    if (isOwn) {\n      value[symToStringTag] = tag;\n    } else {\n      delete value[symToStringTag];\n    }\n  }\n  return result;\n}\n\nmodule.exports = getRawTag;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_getRawTag.js?");

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar nativeObjectToString = objectProto.toString;\n\n/**\n * Converts `value` to a string using `Object.prototype.toString`.\n *\n * @private\n * @param {*} value The value to convert.\n * @returns {string} Returns the converted string.\n */\nfunction objectToString(value) {\n  return nativeObjectToString.call(value);\n}\n\nmodule.exports = objectToString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_objectToString.js?");

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ \"./node_modules/lodash/_freeGlobal.js\");\n\n/** Detect free variable `self`. */\nvar freeSelf = typeof self == 'object' && self && self.Object === Object && self;\n\n/** Used as a reference to the global object. */\nvar root = freeGlobal || freeSelf || Function('return this')();\n\nmodule.exports = root;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/_root.js?");

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\nmodule.exports = isArray;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isArray.js?");

/***/ }),

/***/ "./node_modules/lodash/isNaN.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isNaN.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var isNumber = __webpack_require__(/*! ./isNumber */ \"./node_modules/lodash/isNumber.js\");\n\n/**\n * Checks if `value` is `NaN`.\n *\n * **Note:** This method is based on\n * [`Number.isNaN`](https://mdn.io/Number/isNaN) and is not the same as\n * global [`isNaN`](https://mdn.io/isNaN) which returns `true` for\n * `undefined` and other non-number values.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n * @example\n *\n * _.isNaN(NaN);\n * // => true\n *\n * _.isNaN(new Number(NaN));\n * // => true\n *\n * isNaN(undefined);\n * // => true\n *\n * _.isNaN(undefined);\n * // => false\n */\nfunction isNaN(value) {\n  // An `NaN` primitive is the only value that is not equal to itself.\n  // Perform the `toStringTag` check first to avoid errors with some\n  // ActiveX objects in IE.\n  return isNumber(value) && value != +value;\n}\n\nmodule.exports = isNaN;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isNaN.js?");

/***/ }),

/***/ "./node_modules/lodash/isNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ \"./node_modules/lodash/_baseGetTag.js\"),\n    isObjectLike = __webpack_require__(/*! ./isObjectLike */ \"./node_modules/lodash/isObjectLike.js\");\n\n/** `Object#toString` result references. */\nvar numberTag = '[object Number]';\n\n/**\n * Checks if `value` is classified as a `Number` primitive or object.\n *\n * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are\n * classified as numbers, use the `_.isFinite` method.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a number, else `false`.\n * @example\n *\n * _.isNumber(3);\n * // => true\n *\n * _.isNumber(Number.MIN_VALUE);\n * // => true\n *\n * _.isNumber(Infinity);\n * // => true\n *\n * _.isNumber('3');\n * // => false\n */\nfunction isNumber(value) {\n  return typeof value == 'number' ||\n    (isObjectLike(value) && baseGetTag(value) == numberTag);\n}\n\nmodule.exports = isNumber;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isNumber.js?");

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return value != null && typeof value == 'object';\n}\n\nmodule.exports = isObjectLike;\n\n\n//# sourceURL=webpack:///./node_modules/lodash/isObjectLike.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1, eval)(\"this\");\r\n} catch (e) {\r\n\t// This works if the window reference is available\r\n\tif (typeof window === \"object\") g = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//# sourceURL=webpack:///(webpack)/buildin/global.js?");

/***/ }),

/***/ "./src/native/json-from.js":
/*!*********************************!*\
  !*** ./src/native/json-from.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = jsonFrom;\n\nvar _isNaN2 = __webpack_require__(/*! lodash/isNaN */ \"./node_modules/lodash/isNaN.js\");\n\nvar _isNaN3 = _interopRequireDefault(_isNaN2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * [安全的调用JSON.stringify]\n * @author WEIFEI\n * @method jsonFrom\n * @param  {[type]} jsondata [description]\n * @param  {String} [dft=''] [在非法的 jsondata 或转换出错时的返回值]\n * @return {[type]}          [description]\n */\nfunction jsonFrom(jsondata) {\n  var dft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  if (jsondata === null || jsondata === undefined || (0, _isNaN3.default)(jsondata)) {\n    return dft;\n  }\n\n  try {\n    dft = JSON.stringify(jsondata);\n  } catch (err) {\n    // console.error(err);\n  }\n\n  return dft;\n}\n\n//# sourceURL=webpack:///./src/native/json-from.js?");

/***/ }),

/***/ "./src/regex/const.js":
/*!****************************!*\
  !*** ./src/regex/const.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n// 手机号码\nvar regexPhone = exports.regexPhone = function regexPhone() {\n  return (/^1[0-9]{10}$/\n  );\n};\n\n// 电子邮箱\nvar regexEmail = exports.regexEmail = function regexEmail() {\n  return (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/\n  );\n};\n\n// 正则中的特殊字符\nvar regexSPS = exports.regexSPS = function regexSPS() {\n  return [// ^$.*+-?=!:|\\/()[]{}\n  '^', '$', '.', '*', '+', '-', '?', '=', '!', ':', '|', '\\\\', '/', '(', ')', '[', ']', '{', '}'];\n};\n\n//# sourceURL=webpack:///./src/regex/const.js?");

/***/ }),

/***/ "./src/regex/search-char.js":
/*!**********************************!*\
  !*** ./src/regex/search-char.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = regexSearchChar;\n\nvar _isArray2 = __webpack_require__(/*! lodash/isArray */ \"./node_modules/lodash/isArray.js\");\n\nvar _isArray3 = _interopRequireDefault(_isArray2);\n\nvar _const = __webpack_require__(/*! ./const */ \"./src/regex/const.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * [编译用于按字符来匹配/高亮字符串的正则模板, 会过滤掉正则中的特殊字符]\n * @author WEIFEI\n * @method regexSearchChar\n * @param  {Array}         [chars=[]] [待编译的字符数组]\n * @param  {String}        [opts='']  [实例化 RegExp 的第二个参数, 不建议用]\n * @return {Object}                   [编译包结构如下:]\n *                                    {\n *                                        @param RegExp test: 用于测试某字符串是否包含chars中的字符\n *                                        @param RegExp replace: string.replace 函数的第一个参数\n *                                        @param Function replacement: string.replace 函数的第二个参数\n *                                    }\n */\nfunction regexSearchChar() {\n  var chars = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';\n\n  if (!(0, _isArray3.default)(chars)) {\n    return {};\n  }\n  chars = chars.map(function (d) {\n    return String(d);\n  }).filter(function (d) {\n    return !!d && (0, _const.regexSPS)().indexOf(d) === -1;\n  })\n  // 正则表达式最多支持到 $99\n  .slice(0, 98);\n  if (!chars.length) {\n    return {};\n  }\n\n  var pattern = '(.*?)' + chars.join('(.*?)') + '(.*?)';\n\n  return {\n    // 用于检测字符串是否符合需要\n    test: new RegExp(pattern, opts || 'i'),\n    // 用于匹配出字符串中所有符合需要的子字符串\n    replace: new RegExp(pattern, opts || 'ig'),\n    // 用于替换所有匹配到的子串\n    replacement: function replacement() {\n      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n\n      // TODO 这里可能有个缺陷, 比如: abac 在替换 ac 时, 所有的 a 都会被替换掉, 但是 babcba 在替换 ba 时, 第 2 个 b 会被忽略掉\n      var items = args.slice(1, chars.length + 2);\n      var strs = [items[0]];\n      for (var i = 1; i < items.length; i++) {\n        var c = chars[i - 1];\n        strs.push('<em>' + c + '</em>');\n        strs.push(items[i].replace(new RegExp(c, 'ig'), '<em>' + c + '</em>'));\n      }\n      return strs.join('');\n    }\n  };\n}\n\n//# sourceURL=webpack:///./src/regex/search-char.js?");

/***/ }),

/***/ "./test/regex/search-char.test.js":
/*!****************************************!*\
  !*** ./test/regex/search-char.test.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar regexSearchChar = __webpack_require__(/*! ../../src/regex/search-char.js */ \"./src/regex/search-char.js\");\nvar jsonFrom = __webpack_require__(/*! ../../src/native/json-from.js */ \"./src/native/json-from.js\");\n\ndescribe('regex/search-char', function () {\n  describe('@regexSearchChar(chars, opts)', function () {\n    [[undefined, undefined, {}], ['ab', undefined, {}], [['', ''], undefined, {}]].forEach(function (d) {\n      var chars = d[0];\n      var opts = d[1];\n      it('regexSearchChar(' + chars + ', ' + opts + ') should return ' + jsonFrom.default(d[2]), function () {\n        chai.assert.deepStrictEqual(regexSearchChar.default(chars, opts), d[2]);\n      });\n    });\n    [[['a', 'b'], undefined, 'a', [false, 'a']], [['a'], undefined, 'a', [true, '<em>a</em>']], [['a'], undefined, 'abac', [true, '<em>a</em>b<em>a</em>c']], [['a', 'b'], undefined, 'ab', [true, '<em>a</em><em>b</em>']], [['a', 'b'], undefined, '_ab', [true, '_<em>a</em><em>b</em>']], [['a', 'b'], undefined, 'ab_', [true, '<em>a</em><em>b</em>_']], [['a', 'b'], undefined, 'a_b', [true, '<em>a</em>_<em>b</em>']], [['a', '|', 'b'], undefined, 'ab', [true, '<em>a</em><em>b</em>']], [['a', 'b'], undefined, 'acab', [true, '<em>a</em>c<em>a</em><em>b</em>']]].forEach(function (d) {\n      var chars = d[0];\n      var opts = d[1];\n      it('regexSearchChar(' + chars + ', ' + opts + ') and ' + d[2] + ' should return ' + d[3], function () {\n        var regex = regexSearchChar.default(chars, opts);\n        chai.assert.deepStrictEqual([regex.test.test(d[2]), d[2].replace(regex.replace, regex.replacement)], d[3]);\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./test/regex/search-char.test.js?");

/***/ })

/******/ });