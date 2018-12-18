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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/regex/const.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/regex/const.js":
/*!****************************!*\
  !*** ./src/regex/const.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.regexSPS = exports.regexEmail = exports.regexPhone = undefined;\n\nvar _window = __webpack_require__(/*! ../window */ \"./src/window.js\");\n\nvar _window2 = _interopRequireDefault(_window);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _window2.default)('regexPhone', regexPhone);\n(0, _window2.default)('regexEmail', regexEmail);\n(0, _window2.default)('regexSPS', regexSPS);\n\n// 手机号码\nvar regexPhone = exports.regexPhone = function regexPhone() {\n  return (/^1[0-9]{10}$/\n  );\n};\n\n// 电子邮箱\nvar regexEmail = exports.regexEmail = function regexEmail() {\n  return (/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/\n  );\n};\n\n// 正则中的特殊字符\nvar regexSPS = exports.regexSPS = function regexSPS() {\n  return [// ^$.*+-?=!:|\\/()[]{}\n  '^', '$', '.', '*', '+', '-', '?', '=', '!', ':', '|', '\\\\', '/', '(', ')', '[', ']', '{', '}'];\n};\n\n//# sourceURL=webpack:///./src/regex/const.js?");

/***/ }),

/***/ "./src/window.js":
/*!***********************!*\
  !*** ./src/window.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = setWindow;\nwindow.webUtils = window.webUtils || {};\n\nfunction setWindow(name, func) {\n  window.webUtils[name] = func;\n}\n\n//# sourceURL=webpack:///./src/window.js?");

/***/ }),

/***/ "./test/regex/const.test.js":
/*!**********************************!*\
  !*** ./test/regex/const.test.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _require = __webpack_require__(/*! ../../src/regex/const.js */ \"./src/regex/const.js\"),\n    regexPhone = _require.regexPhone,\n    regexEmail = _require.regexEmail,\n    regexSPS = _require.regexSPS;\n\ndescribe('regex/const', function () {\n  describe('@regexPhone()', function () {\n    [['15506000365', true], ['1550600036', false], ['1550600036-', false], ['155060003 6', false], ['12345678901', true], ['123456789012', false]].forEach(function (d) {\n      it('regexPhone():test:' + d[0] + ' should return ' + d[1], function () {\n        chai.assert.strictEqual(regexPhone().test(d[0]), d[1]);\n      });\n    });\n  });\n  describe('@regexEmail()', function () {\n    [['abc@gmail.com', true], ['abc@gmail.', false], ['abc@gmail', false], ['abc@.com', false], ['abcgmail.com', false], ['@gmail.com', false], ['-@gmail.com', true], ['_@gmail.com', true]].forEach(function (d) {\n      it('regexEmail():test:' + d[0] + ' should return ' + d[1], function () {\n        chai.assert.strictEqual(regexEmail().test(d[0]), d[1]);\n      });\n    });\n  });\n  describe('@regexSPS()', function () {\n    [['a', true], ['|', false], ['\\\\', false]].forEach(function (d) {\n      it('regexSPS().indexOf(' + d[0] + ') should return ' + d[1], function () {\n        chai.assert.strictEqual(regexSPS().indexOf(d[0]) === -1, d[1]);\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./test/regex/const.test.js?");

/***/ })

/******/ });