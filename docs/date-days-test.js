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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/date/date-days.test.js");
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

/***/ "./src/date/date-days.js":
/*!*******************************!*\
  !*** ./src/date/date-days.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.timeWeek = exports.timeDay = exports.timeHour = undefined;\n\nvar _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"]) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); } }; }();\n\nexports.default = dateDays;\n\nvar _dateConstructor = __webpack_require__(/*! ./date-constructor */ \"./src/date/date-constructor.js\");\n\nvar _dateConstructor2 = _interopRequireDefault(_dateConstructor);\n\nvar _dateSet = __webpack_require__(/*! ./date-set */ \"./src/date/date-set.js\");\n\nvar _dateSet2 = _interopRequireDefault(_dateSet);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 一小时的毫秒值\nvar timeHour = exports.timeHour = 1000 * 60 * 60;\n// 一天的毫秒值\nvar timeDay = exports.timeDay = 1000 * 60 * 60 * 24;\n// 一周的毫秒值\nvar timeWeek = exports.timeWeek = 1000 * 60 * 60 * 24 * 7;\n\n/**\n * 计算两个时间毫秒值之间相差的天数\n * @author WEIFEI\n * @method dateDays\n * @param  {Number|Date|String} start [参见: dateConstructor 的 any 参数]\n * @param  {Number|Date|String} end   [参见: dateConstructor 的 any 参数]\n * @return {Number}                   [相差天数]\n */\nfunction dateDays(start, end) {\n  var _sort = [(0, _dateConstructor2.default)(start), (0, _dateConstructor2.default)(end)].sort(function (a, b) {\n    return a.getTime() - b.getTime();\n  }),\n      _sort2 = _slicedToArray(_sort, 2),\n      min = _sort2[0],\n      max = _sort2[1];\n\n  (0, _dateSet2.default)(min, 'h');\n  (0, _dateSet2.default)(max, 'h');\n\n  return (max.getTime() - min.getTime()) / timeDay;\n}\n\n//# sourceURL=webpack:///./src/date/date-days.js?");

/***/ }),

/***/ "./src/date/date-set.js":
/*!******************************!*\
  !*** ./src/date/date-set.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dateSet;\n\nvar _dateConstructor = __webpack_require__(/*! ./date-constructor */ \"./src/date/date-constructor.js\");\n\nvar _dateConstructor2 = _interopRequireDefault(_dateConstructor);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/**\n * 日期重置工具,\n * 即: 重置日期到某个起点, 如: 零点、零分、当月第一天,\n * 比如: 原日期是 2018-09-29 13:14:15 60,\n * 重置到 零点后是 2018-09-29 13:00:00 0, 即endPoint='h'\n * 重置到 零分后是 2018-09-29 13:00:00 0, 即endPoint='m'\n * @author WEIFEI\n * @method dateSet\n * @param  {Date|Number|String} any [参见: dateConstructor 的 any 参数]\n * @param  {String} endPoint        [重置的结束点, 当前支持的值有(假设原时间为 2018-09-29 13:14:15 60):\n *                                  M: 返回 2018-01-01 00:00:00 0\n *                                  d: 返回 2018-09-01 00:00:00 0\n *                                  h: 返回 2018-09-29 00:00:00 0\n *                                  m: 返回 2018-09-29 13:00:00 0\n *                                  s: 返回 2018-09-29 13:14:00 0\n *                                  ms: 返回 2018-09-29 13:14:15 0]\n * @param  {String} timezone        [时区, 默认是本地时区, 当前支持的值有: UTC]\n * @return {Date}                   [description]\n */\nfunction dateSet(any, endPoint) {\n  var timezone = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';\n\n  /* eslint-disable no-fallthrough */\n  var date = (0, _dateConstructor2.default)(any, true);\n\n  switch (endPoint) {\n    case 'M':\n      date['set' + timezone + 'Month'](1);\n    case 'd':\n      date['set' + timezone + 'Date'](1);\n    case 'h':\n      date['set' + timezone + 'Hours'](0);\n    case 'm':\n      date['set' + timezone + 'Minutes'](0);\n    case 's':\n      date['set' + timezone + 'Seconds'](0);\n    case 'ms':\n      date['set' + timezone + 'Milliseconds'](0);\n      break;\n    default:\n  }\n  return date;\n}\n\n//# sourceURL=webpack:///./src/date/date-set.js?");

/***/ }),

/***/ "./test/date/date-days.test.js":
/*!*************************************!*\
  !*** ./test/date/date-days.test.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dateDays = __webpack_require__(/*! ../../src/date/date-days.js */ \"./src/date/date-days.js\");\n\ndescribe('date/date-days', function () {\n  describe('@dateDays(start, end)', function () {\n    [\n    // 毫秒值\n    [null, 0, 0], [0, 1000000000, 11], [1000000000, 0, 11], [100000000, 1000000000, 10],\n    // Date 实例\n    [new Date('2018-09-30'), new Date('2018-10-10'), 10], [new Date('2018-09-30'), new Date('2018-09-30'), 0], [new Date('2018-09-30'), new Date('2018-09-30 10:10:10'), 0],\n    // 混合\n    [1538265600000, new Date('2018-10-01 10:10:10'), 1]].forEach(function (d) {\n      var start = d[0];\n      var end = d[1];\n      it('dateDays(' + start + ', ' + end + ') should return ' + d[2], function () {\n        chai.assert.strictEqual(dateDays.default(start, end), d[2]);\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./test/date/date-days.test.js?");

/***/ })

/******/ });