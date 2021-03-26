/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatecurse_js_2"]("main",{

/***/ "./src/modules/sendForm.js":
/*!*********************************!*\
  !*** ./src/modules/sendForm.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable linebreak-style */\n\n/* eslint-disable no-use-before-define */\n\n/* eslint-disable eol-last */\n\n/* eslint-disable max-len */\n\n/* eslint-disable no-useless-escape */\nvar sendForm = function sendForm() {\n  var form = document.querySelectorAll('form');\n  var loadMessage = 'идет отправка';\n  var forName = document.querySelectorAll('.form-name');\n  var forTel = document.querySelectorAll('.form-tel');\n  var checkbox = document.querySelectorAll('input[type=\"checkbox\"]');\n  var formText = document.querySelectorAll('.form-text');\n  var chooseClub = document.querySelectorAll('.check-footer');\n  var popup = document.querySelectorAll('.popup');\n  var statusMessage = document.createElement('div'); //? message for loaded and error, success type not for modal\n\n  statusMessage.classList.add('status');\n  statusMessage.style.cssText = \"\\n    font-size: 20px;\\n    width: 90%;\\n    color: #fff;\\n    font-weight: 500;\\n    margin-top: 30px;\";\n  var thanksSuccess = 'Ваша заявка отправлена, скоро мы с вами свяжемся';\n  var thanksError = \"\\u0423\\u043F\\u0441 \\u0447\\u0442\\u043E-\\u0442\\u043E \\u043F\\u043E\\u0448\\u043B\\u043E \\u043D\\u0435 \\u0442\\u0430\\u043A, \\u0441\\u0435\\u0440\\u0432\\u0435\\u0440 \\u0443\\u0441\\u0442\\u0430\\u043B \\u0438 \\u043F\\u0440\\u0438\\u043B\\u0451\\u0433\";\n  var statusSuccess = \"\\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E\";\n  var statusError = \"\\u041E\\u0448\\u0438\\u0431\\u043A\\u0430\";\n  var messageChecked = document.createElement('div'); //? сообщение для check\n\n  messageChecked.classList.add('status-cheked');\n  messageChecked.textContent = 'Не стоит галочка согласен на обработку данных';\n  messageChecked.style.cssText = \"\\n    color: #ffd11a;\\n    display: contents;\\n    margin-top: 10px;\\n    font-size: 1rem;\\n    text-align: center;\";\n  var btnSend = document.querySelectorAll('.btn-send'); //? меняем стиль кнопки в в модалке, чтобы был margin до message\n\n  btnSend.forEach(function (item) {\n    item.style.cssText = \"\\n        margin-bottom: 10px;\\n        height: 45px;\\n        width: 160px;\";\n  });\n  var person = document.getElementById('person-banner');\n  person.style.cssText = \"\\n    margin-top: 17px;\\n    margin-bottom: 15px;\\n    position: relative;\\n    \";\n  var validName = false;\n  var validPhone = false;\n  var validCheckbox = false;\n\n  var resetModal = function resetModal() {\n    formText.forEach(function (item) {\n      //? очищаем инпуты\n      item.value = '';\n    });\n    checkbox.forEach(function (item) {\n      //? обнуляем чекбоксы\n      item.checked = false;\n    });\n    statusMessage.remove();\n    popup.forEach(function (item) {\n      item.style.display = 'none';\n    });\n  };\n\n  var changeModal = function changeModal(message, statusMessage) {\n    var thanks = document.getElementById('thanks');\n    var status = document.getElementById('status');\n    var modalText = document.getElementById('modalText');\n    modalText.textContent = message;\n    status.textContent = statusMessage;\n    thanks.style.display = 'block';\n  };\n\n  checkbox.forEach(function (item) {\n    item.addEventListener('click', function () {\n      if (item.checked === true) {\n        validCheckbox = true;\n      } else {\n        validCheckbox = false;\n      }\n    });\n  }); //!Регулярки для проверки инпутов\n\n  forName.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^а-яА-ЯёЁ\\s\\-]/g, '');\n    });\n    item.addEventListener('blur', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/\\s+/g, ' ').replace(/\\-+/g, '-').replace(/^-+|-+$/g, '').trim();\n\n      if (target.value.length <= 1) {\n        target.value = '';\n      } else {\n        target.value = target.value.split(/\\s+/).map(function (word) {\n          return word[0].toUpperCase() + word.substring(1);\n        }).join(' ');\n        validName = true;\n      }\n    });\n  });\n  forTel.forEach(function (item) {\n    item.addEventListener('input', function (event) {\n      var target = event.target;\n      target.value = target.value.replace(/[^\\d()\\-+]|([()\\-\\+])(?=\\1)/g, '').replace(/^[()]/g, '').replace(/^(\\+)(\\d+?)([^0-9-()])+/g, function (match, p1, p2) {\n        return p1 + p2;\n      }).trim();\n\n      _toConsumableArray(target.value).forEach(function (item, idx) {\n        if (item === \"+\" && idx > 0) target.value = target.value.slice(0, idx);\n      });\n\n      var reg = /^\\+?[78]+[\\-\\(]?(\\d{3})[\\-\\)]?(\\d{3})[-]?(\\d{2})[-]?(\\d{2})$/g;\n      var getReg = reg.exec(target.value);\n\n      if (getReg === null) {\n        validPhone = false;\n        item.setCustomValidity('неверный ввод, попробуйте один из следующих форматов ввода: 81231231212 или +71231231212 или 8(123)1233265 или 8-123-123-12-12 или +7(123)123-12-12 или 8(123)123-12-12 или +7123-123-12-12');\n      } else {\n        target.value = target.value.replace(/^\\+?[78]+[\\-\\(]?(\\d{3})[\\-\\)]?(\\d{3})[-]?(\\d{2})[-]?(\\d{2})$/gm, '+7($1)$2-$3-$4').trim();\n        validPhone = true;\n        item.setCustomValidity('');\n      }\n    });\n  }); //! Отправка на сервер\n\n  form.forEach(function (item) {\n    item.addEventListener('submit', function (event) {\n      event.preventDefault();\n      var target = event.target;\n      var formCall = document.getElementById('footer_form');\n\n      if (target === formCall) {\n        validCheckbox = true;\n        chooseClub.forEach(function (item) {\n          if (item.checked === true) {\n            validCheckbox = true;\n            validName = true;\n          }\n        });\n      }\n\n      if (target === item) {\n        var checkForm = document.querySelectorAll('.check-form');\n        checkForm.forEach(function (elem) {\n          console.log(item);\n\n          if (elem.contains(item)) {\n            if (elem.checked === true) {\n              validCheckbox = true;\n            } else if (elem.checked !== true) {\n              validCheckbox = false;\n            }\n          }\n        });\n      } // const formclubsCart = document.getElementById('card_order');\n      // const clubsCartCheck = document.querySelector('.check_club-cards');\n      // if (target === formclubsCart) {\n      //     if (clubsCartCheck.checked === true) {\n      //         validCheckbox = true;\n      //     } else {\n      //         validCheckbox = false;\n      //         formclubsCart.appendChild(messageChecked);\n      //     }\n      // }\n      // const form2 = document.getElementById('form2'); //? freeVisit\n      // const check2 = document.getElementById('check2');\n      // if (target === form2) {\n      //     if (check2.checked === true) {\n      //         validCheckbox = true;\n      //     } else {\n      //         validCheckbox = false;\n      //         form2.appendChild(messageChecked);\n      //     }\n      // }\n      // const form1 = document.getElementById('form1'); //? модалка перезвоните\n      // const check = document.getElementById('check');\n      // if (target === form1) {\n      //     if (check.checked === true) {\n      //         validCheckbox = true;\n      //     } else {\n      //         validCheckbox = false;\n      //         form1.appendChild(messageChecked);\n      //     }\n      // }\n      // const bannerForm = document.getElementById('banner-form'); //? Банер форма отправки\n      // const check1 = document.getElementById('check1');\n      // if (target === bannerForm) {\n      //     if (check1.checked === true) {\n      //         validCheckbox = true;\n      //     } else {\n      //         validCheckbox = false;\n      //         bannerForm.appendChild(messageChecked);\n      //     }\n      // }\n\n\n      console.log(validCheckbox);\n\n      if (validPhone === true && validCheckbox === true && validName === true) {\n        messageChecked.remove();\n        target.appendChild(statusMessage);\n        statusMessage.style.display = 'contents';\n        statusMessage.textContent = loadMessage;\n        var formData = new FormData(target); //? Принимаем форму\n\n        postData(formData).then(function (response) {\n          if (response.status !== 200) {\n            throw new Error('status network not 200.');\n          }\n\n          resetModal();\n          changeModal(thanksSuccess, statusSuccess);\n          setTimeout(function () {\n            resetModal();\n          }, 3000);\n        })[\"catch\"](function (error) {\n          resetModal();\n          changeModal(thanksError, statusError);\n          setTimeout(function () {\n            resetModal();\n          }, 3000);\n          console.error(error);\n        });\n      }\n    });\n  }); // eslint-disable-next-line arrow-body-style\n\n  var postData = function postData(formData) {\n    return fetch('./server.php', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json'\n      },\n      body: JSON.stringify(Object.fromEntries(formData))\n    });\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack://curse__js_2/./src/modules/sendForm.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("415345971c900d30feac")
/******/ })();
/******/ 
/******/ }
);