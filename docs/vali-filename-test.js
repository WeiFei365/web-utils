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
/******/ 	return __webpack_require__(__webpack_require__.s = "./test/other/vali-filename.test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/other/vali-filename.js":
/*!************************************!*\
  !*** ./src/other/vali-filename.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = valiFilename;\n/**\n * [校验文件名，去除非法的字符]\n * @author WEIFEI\n * @method valiFilename\n * @param  {String}     name          [文件/文件夹名]\n * @param  {String}     [dftChar='-'] [非法字符的替换]\n * @return {String}                   [description]\n */\nfunction valiFilename(name) {\n  var dftChar = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';\n\n  return String(typeof name === 'string' ? name : '').replace(/\\/|\\\\|>|<|\\?|:|\"|'|\\^|!|;|\\*|&|%|\\$|#|@/g, '?').replace(/\\?+/g, dftChar).replace(/\\n|\\f|\\r|\\t|\\v/g, ' ').replace(/\\s+/g, ' ').substr(0, 250);\n}\n\n//# sourceURL=webpack:///./src/other/vali-filename.js?");

/***/ }),

/***/ "./test/other/vali-filename.test.js":
/*!******************************************!*\
  !*** ./test/other/vali-filename.test.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar valiFilename = __webpack_require__(/*! ../../src/other/vali-filename.js */ \"./src/other/vali-filename.js\");\n\ndescribe('other/vali-filename', function () {\n  describe('@valiFilename(name, dftChar)', function () {\n    [[undefined, undefined, ''], ['test', undefined, 'test'], ['t      est', undefined, 't est'], ['t\\test', undefined, 't est'], ['\\/<>?:\"^\"!;*%$#@&', undefined, '-'], ['\\/<>?:\"^\"!;*%$#@&', '_', '_']].forEach(function (d) {\n      var name = d[0];\n      var dftChar = d[1];\n      it('valiFilename(' + name + ', ' + dftChar + ') should return ' + d[2], function () {\n        chai.assert.strictEqual(valiFilename.default(name, dftChar), d[2]);\n      });\n    });\n  });\n});\n\n//# sourceURL=webpack:///./test/other/vali-filename.test.js?");

/***/ })

/******/ });