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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/number/beauty-long.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/number/beauty-long.js":
/*!***********************************!*\
  !*** ./src/number/beauty-long.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = beautyLong;\n/**\n * 分隔显示大数值, 如: '1234 5678 90'\n * @author WEIFEI\n * @method beautyLong\n * @param  {Number|String}  n             [description]\n * @param  {Boolean}        [byLeft=true] [例如:\n *                                        true: 1234 5678 90,\n *                                        false: 12 3456 7890]\n * @param  {String}         [flag=' ']    [要替换成的分隔符, 默认是: ' ']\n * @param  {Boolean}        [noZero=true] [当 n 非法时, 返回 '0' 或 '']\n * @return {String}                       [description]\n */\nfunction beautyLong(n) {\n  var byLeft = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n  var flag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ' ';\n  var noZero = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;\n\n  var number = String(n).replace(/\\D+/g, '');\n  if (!number) {\n    return noZero ? '' : '0';\n  }\n  if (number.length < 5) {\n    return number;\n  }\n  // 反转\n  if (byLeft) {\n    number = number.split('').reverse().join('');\n  }\n  // 添加 flag\n  number = number.replace(/\\B(?=(\\d{4})+(?!\\d))/g, flag);\n  return byLeft ? number.split('').reverse().join('') : number;\n}\n\n//# sourceURL=webpack:///./src/number/beauty-long.js?");

/***/ }),

/***/ "./test/number/beauty-long.test.js":
/*!*****************************************!*\
  !*** ./test/number/beauty-long.test.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar beautyLong = __webpack_require__(/*! ../../src/number/beauty-long.js */ \"./src/number/beauty-long.js\");\n\ndescribe('number/beauty-long', function () {\n  describe('@beautyLong(n, byLeft, flag, noZero)', function () {\n    [\n    // 参数: n\n    [undefined, undefined, undefined, undefined, ''], [123, undefined, undefined, undefined, '123'], [123456, undefined, undefined, undefined, '1234 56'], ['123456789', undefined, undefined, undefined, '1234 5678 9'], ['1-23456789', undefined, undefined, undefined, '1234 5678 9'],\n    // 参数: byLeft\n    [123456789, true, undefined, undefined, '1234 5678 9'], [123456789, false, undefined, undefined, '1 2345 6789'],\n    // 参数: flag\n    [123456789, undefined, '-', undefined, '1234-5678-9'],\n    // 参数: noZero\n    [null, undefined, undefined, true, ''], [null, undefined, undefined, false, '0']].forEach(function (d) {\n      var n = d[0];\n      var byLeft = d[1];\n      var flag = d[2];\n      var noZero = d[3];\n      it('beautyLong(' + n + ', ' + byLeft + ', ' + flag + ', ' + noZero + ') should return ' + d[4], function () {\n        chai.assert.strictEqual(beautyLong.default(n, byLeft, flag, noZero), d[4]);\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./test/number/beauty-long.test.js?");

/***/ })

/******/ });