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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/date/date-formate-UTC.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/date/date-constructor.js":
/*!**************************************!*\
  !*** ./src/date/date-constructor.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dateConstructor;\n/**\n * 以各种形式构造 Date 实例\n * @method dateConstructor\n * @param  {Date|Number|String} any             [支持的类型:\n *                                              时间毫秒值,\n *                                              Date 实例,\n *                                              Date 字符串, 需要能被原生 Date 解析]\n * @param  {Boolean}            [isSelf=false]  [如果 any 为 Date 实例类型, 是否直接返回, 还是返回新构造的 Date 实例]\n * @return {Date}                               [description]\n */\nfunction dateConstructor(any) {\n  var isSelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  if (any instanceof Date) {\n    // TODO 这里使用 any.getTime 来获取构造新 Date 实例的方式可能因为运行时的环境或时区问题,\n    // 导致返回的新 Date 实例和 any 表示的时间不同\n    return isSelf ? any : new Date(any.getTime());\n  } else if (typeof any === 'number') {\n    return new Date(any);\n  }\n  var s = String(any || 0);\n  return s.replace(/\\d+/g, '').length ? new Date(s) : new Date(+s || 0);\n}\n\n//# sourceURL=webpack:///./src/date/date-constructor.js?");

/***/ }),

/***/ "./src/date/date-format-UTC.js":
/*!*************************************!*\
  !*** ./src/date/date-format-UTC.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dateFormatUTC;\n\nvar _dateFormat = __webpack_require__(/*! ./date-format */ \"./src/date/date-format.js\");\n\nvar _dateFormat2 = _interopRequireDefault(_dateFormat);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * 时间格式化: 返回 UTC 时区的字串\n * @author WEIFEI\n * @method dateFormatUTC\n * @param  {[type]}      any     [请参考 ./date-format.js 中的说明]\n * @param  {[type]}      pattern [请参考 ./date-format.js 中的说明]\n * @return {[type]}              [description]\n */\nfunction dateFormatUTC(any, pattern) {\n  return (0, _dateFormat2.default)(any, pattern, 'UTC');\n}\n\n//# sourceURL=webpack:///./src/date/date-format-UTC.js?");

/***/ }),

/***/ "./src/date/date-format.js":
/*!*********************************!*\
  !*** ./src/date/date-format.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dateFormat;\n\nvar _dateConstructor = __webpack_require__(/*! ./date-constructor */ \"./src/date/date-constructor.js\");\n\nvar _dateConstructor2 = _interopRequireDefault(_dateConstructor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * 时间格式化\n * @author WEIFEI\n * @method dateFormat\n * @param  {Date|Number|String}   any         [参见: dateConstructor 的 any 参数]\n * @param  {String}   [pattern='YYYY-MM-DD']  [模板, 完整模板为:\n *                                            YYYY-MM-DD HH:mm:ss S EE,\n *                                            其中,\n *                                            HH 表示24小时制, hh 表示12小时制,\n *                                            EE 的输出如: 周四,\n *                                            EEE 的输出如: 星期四,\n *                                            - 可以改为任意值, 如: YYYY年MM月DD日HH时mm分ss秒 S毫秒 EE]\n * @param  {String}   [timezone='']           [时区，默认本地时区，还支持 UTC 时区]\n * @return {String}                           [description]\n */\nfunction dateFormat(any) {\n  var pattern = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'YYYY-MM-DD';\n  var timezone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n\n  /* eslint-disable no-param-reassign */\n  var date = (0, _dateConstructor2.default)(any);\n\n  var dict = {\n    'M+': date['get' + timezone + 'Month']() + 1,\n    'D+': date['get' + timezone + 'Date'](),\n    'h+': date['get' + timezone + 'Hours']() % 12 === 0 ? 12 : date['get' + timezone + 'Hours']() % 12,\n    'H+': date['get' + timezone + 'Hours'](),\n    'm+': date['get' + timezone + 'Minutes'](),\n    's+': date['get' + timezone + 'Seconds'](),\n    'q+': Math.floor((date['get' + timezone + 'Month']() + 3) / 3),\n    S: date['get' + timezone + 'Milliseconds']()\n  };\n  // 日, 一, 二, 三, 四, 五, 六\n  var weekDay = ['\\u65E5', '\\u4E00', '\\u4E8C', '\\u4E09', '\\u56DB', '\\u4E94', '\\u516D'];\n\n  // 替换模板中的年\n  if (/(Y+)/.test(pattern)) {\n    pattern = pattern.replace(RegExp.$1, String(date['get' + timezone + 'FullYear']()).substr(4 - RegExp.$1.length));\n  }\n  // 替换一周中的某天\n  if (/(E+)/.test(pattern)) {\n    var pre = '';\n    if (RegExp.$1.length === 2) {\n      // 前缀为: 周\n      pre = '\\u5468';\n    } else if (RegExp.$1.length > 2) {\n      // 前缀为: 星期\n      pre = '\\u661F\\u671F';\n    }\n    pattern = pattern.replace(RegExp.$1, '' + pre + weekDay[date['get' + timezone + 'Day']()]);\n  }\n  // 替换其他的标志\n  Object.keys(dict).forEach(function (d) {\n    if (!new RegExp('(' + d + ')').test(pattern)) {\n      return;\n    }\n    pattern = pattern.replace(RegExp.$1, RegExp.$1.length === 1 ? dict[d] : ('00' + dict[d]).substr(String(dict[d]).length));\n  });\n\n  return pattern;\n}\n\n//# sourceURL=webpack:///./src/date/date-format.js?");

/***/ }),

/***/ "./test/date/date-formate-UTC.test.js":
/*!********************************************!*\
  !*** ./test/date/date-formate-UTC.test.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dateFormatUTC = __webpack_require__(/*! ../../src/date/date-format-UTC.js */ \"./src/date/date-format-UTC.js\");\n\ndescribe('date/date-format', function () {\n  describe('@dateFormatUTC(date, pattern)', function () {\n    var defaultDate = new Date(1538287654321);\n    if (defaultDate.getDate() !== 30 || defaultDate.getHours() !== 14) {\n      it('你所在的时区不是 GMT+0800 (中国标准时间)，因此略过了该测试', function () {\n        chai.assert.strictEqual(1 + 1, 2);\n      });\n      return;\n    }\n    [\n    // 本地时区\n    // [1538287654321, 'YYYY-MM-DD HH:mm:ss +S EEE', '2018-09-30 14:07:34 +321 星期日'],\n    // UTC时区\n    [1538287654321, 'YYYY-MM-DD HH:mm:ss +S EEE', '2018-09-30 06:07:34 +321 星期日']].forEach(function (d) {\n      var date = d[0];\n      var pattern = d[1];\n      it('dateFormatUTC(' + date + ', ' + pattern + ') should return ' + d[2], function () {\n        chai.assert.strictEqual(dateFormatUTC.default(date, pattern), d[2]);\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./test/date/date-formate-UTC.test.js?");

/***/ })

/******/ });