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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/date/date-constructor.test.js");
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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = dateConstructor;\n/**\n * 以各种形式构造 Date 实例\n * @method dateConstructor\n * @param  {Date|Number|String} any             [支持的类型:\n *                                              时间毫秒值,\n *                                              Date 实例,\n *                                              Date 字符串, 需要能被原生 Date 解析]\n * @param  {Boolean}            [isSelf=false]  [如果 any 为 Date 实例类型, 是否直接返回, 还是返回新构造的 Date 实例]\n * @return {Date}                               [description]\n */\nfunction dateConstructor(any) {\n  var isSelf = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n\n  if (any instanceof Date) {\n    // TODO 这里使用 any.getTime 来获取构造新 Date 实例的方式可能因为运行时的环境或时区问题,\n    // 导致返回的新 Date 实例和 any 表示的时间不同\n    return isSelf ? any : new Date(any.getTime());\n  } else if (typeof any === 'number') {\n    return new Date(any);\n  }\n  var s = String(any ? any : 0);\n  return s.replace(/\\d+/g, '').length ? new Date(s) : new Date(+s || 0);\n}\n\n//# sourceURL=webpack:///./src/date/date-constructor.js?");

/***/ }),

/***/ "./test/date/date-constructor.test.js":
/*!********************************************!*\
  !*** ./test/date/date-constructor.test.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar dateConstructor = __webpack_require__(/*! ../../src/date/date-constructor.js */ \"./src/date/date-constructor.js\");\n\ndescribe('date/date-constructor', function () {\n  describe('@dateConstructor(any, isSelf)', function () {\n    [\n    // 非法数据\n    [null, true, 0],\n    // 毫秒值\n    [1538287654321, true, 1538287654321],\n    // Date 字符串\n    ['2018-09-30 14:07:34', true, 1538287654000],\n    // Date 实例\n    [new Date(1538287654321), true, 1538287654321]].forEach(function (d) {\n      var any = d[0];\n      var isSelf = d[1];\n      it('dateConstructor(' + any + ', ' + isSelf + ') should return ' + d[2], function () {\n        chai.assert.strictEqual(dateConstructor.default(any, isSelf).getTime(), d[2]);\n      });\n    });\n    // isSelf 标志\n    {\n      var any = new Date(1538287654321);\n      var isSelf = false;\n      it('dateConstructor(' + any + ', ' + isSelf + ') should return not itself', function () {\n        var v = dateConstructor.default(any, isSelf);\n        v.setMilliseconds(0);\n        chai.assert.notStrictEqual(v.getTime(), any.getTime());\n      });\n    }\n    {\n      var _any = new Date(1538287654321);\n      var _isSelf = true;\n      it('dateConstructor(' + _any + ', ' + _isSelf + ') should return itself', function () {\n        var v = dateConstructor.default(_any, _isSelf);\n        v.setMilliseconds(0);\n        chai.assert.strictEqual(v.getTime(), _any.getTime());\n      });\n    }\n  });\n});\n\n//# sourceURL=webpack:///./test/date/date-constructor.test.js?");

/***/ })

/******/ });