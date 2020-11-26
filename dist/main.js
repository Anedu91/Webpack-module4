/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/client/index.js":
/*!*****************************!*\
  !*** ./src/client/index.js ***!
  \*****************************/
/*! namespace exports */
/*! export checkForName [provided] [no usage info] [missing usage info prevents renaming] -> ./src/client/js/nameChecker.js .checkForName */
/*! export handleSubmit [provided] [no usage info] [missing usage info prevents renaming] -> ./src/client/js/handleSubmit.js .handleSubmit */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.d, __webpack_require__.r, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkForName\": () => /* reexport safe */ _js_nameChecker__WEBPACK_IMPORTED_MODULE_0__.checkForName,\n/* harmony export */   \"handleSubmit\": () => /* reexport safe */ _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__.handleSubmit\n/* harmony export */ });\n/* harmony import */ var _js_nameChecker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/nameChecker */ \"./src/client/js/nameChecker.js\");\n/* harmony import */ var _js_handleSubmit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/handleSubmit */ \"./src/client/js/handleSubmit.js\");\n\n\nalert(\"I EXIST\");\nconsole.log(\"CHANGE!!\");\n\n\n//# sourceURL=webpack://own-project/./src/client/index.js?");

/***/ }),

/***/ "./src/client/js/handleSubmit.js":
/*!***************************************!*\
  !*** ./src/client/js/handleSubmit.js ***!
  \***************************************/
/*! namespace exports */
/*! export handleSubmit [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleSubmit\": () => /* binding */ handleSubmit\n/* harmony export */ });\nfunction handleSubmit(e) {\n  e.preventDefault();\n  var formText = document.querySelector(\"#message\");\n\n  if (!formText.value) {\n    document.querySelector(\"#error\").innerHTML = \"Please introduce a message\";\n    formText.classList.add(\"danger\");\n  }\n\n  checkForName(formText.value);\n  console.log(\"Form Submited\");\n  fetch(\"/test\").then(function (res) {\n    return res.json();\n  }).then(function (res) {\n    document.querySelector(\"#results\").innerHTML = res.message;\n  });\n}\n\n\n\n//# sourceURL=webpack://own-project/./src/client/js/handleSubmit.js?");

/***/ }),

/***/ "./src/client/js/nameChecker.js":
/*!**************************************!*\
  !*** ./src/client/js/nameChecker.js ***!
  \**************************************/
/*! namespace exports */
/*! export checkForName [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkForName\": () => /* binding */ checkForName\n/* harmony export */ });\nfunction checkForName(inputText) {\n  console.log(\"::: Running checkForName :::\", inputText);\n  var names = [\"Picard\", \"Janeway\", \"Kirk\", \"Archer\", \"Georgiou\"];\n\n  if (names.includes(inputText)) {\n    alert(\"Welcome, Captain!\");\n  }\n}\n\n\n\n//# sourceURL=webpack://own-project/./src/client/js/nameChecker.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/client/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;