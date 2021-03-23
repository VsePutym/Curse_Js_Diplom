/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecurse_js_2"]("main",{

/***/ "./src/modules/togglePopup.js":
/*!************************************!*\
  !*** ./src/modules/togglePopup.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar showPopup = function showPopup() {\n  var freeVisitForm = document.getElementById('free_visit_form');\n  var formWrapper = freeVisitForm.querySelector('.form-wrapper');\n  var popupRequst;\n  var count = 100;\n\n  var showPopup = function showPopup() {\n    popupRequst = requestAnimationFrame(showPopup);\n    count--;\n\n    if (count > 10) {\n      formWrapper.style.top = count + '%';\n    } else if (count < 10) {\n      formWrapper.style.top = 11 + '%';\n    } else {\n      cancelAnimationFrame(showPopup);\n    }\n  };\n\n  document.addEventListener('click', function (e) {\n    if (e.target.matches('.open-popup')) {\n      var target = e.target;\n\n      if (target) {\n        freeVisitForm.style.display = 'block';\n        count = 100;\n        popupRequst = requestAnimationFrame(showPopup);\n      }\n    } else {\n      freeVisitForm.style.display = 'none';\n      formWrapper.style.top = 100 + 'px';\n    }\n\n    if (!e.target.matches('.form-content')) {\n      console.log(e.target);\n      var closeTarget = e.target.closest('.close_icon');\n      console.log(closeTarget);\n\n      if (closeTarget) {\n        count = 100;\n        freeVisitForm.style.display = 'none';\n        formWrapper.style.top = count + '%';\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showPopup);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/togglePopup.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a87e25adf1dbeb7eb208")
/******/ })();
/******/ 
/******/ }
);