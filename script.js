/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/home.js":
/*!************************!*\
  !*** ./src/js/home.js ***!
  \************************/
/***/ (function() {

const images = document.querySelectorAll('.home__img'),
      imgActive = document.querySelector('.home__head-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    imgActive.querySelector('img').src = img.querySelector('img').src;
  })
});

/***/ }),

/***/ "./src/js/order.js":
/*!*************************!*\
  !*** ./src/js/order.js ***!
  \*************************/
/***/ (function() {

groupNums = (
  function() {
      var r = /(\d{3})/g;
      return function(text) {
          text = String(text);
          return text.split("").reverse().join("").replace(r, "$1 ").split("").reverse().join("");
      }
  }
)();

//===============================================================

const colors = document.querySelectorAll('.item-colors__border'),
      titlePage = document.querySelector('.home-info__title'),
      titleOrder = document.querySelector('.order__title'),
      img = document.querySelector('.left-order__img');

colors.forEach((color, i) => {
  color.addEventListener('click', () => {
    colors.forEach(color => {
      color.classList.remove('_active');
    });
    color.classList.add('_active');
    titleOrder.innerHTML = `ПАРАМЕТРЫ ОБОЕВ | ${titlePage.textContent} | №${i+1}`;
    index = (i < 10) ? '0'+(i+1) : i + 1;
    imgSrc = `${img.querySelector('img').src.slice(0, img.querySelector('img').src.lastIndexOf("/") + 1)}img${index}.jpg`;
    img.querySelector('img').src = imgSrc;
    index = i+1;
  })
});

//==============================================================

const price = 2500;
let index = 1;
let imgSrc = `${img.querySelector('img').src.slice(0, img.querySelector('img').src.lastIndexOf("/") + 1)}img01.jpg`
let invoiceActive = document.querySelector('.material-home ._active').previousSibling.previousElementSibling.textContent;

//================================================================

const materials = document.querySelectorAll('.item-material__border'),
      materialSub = document.querySelector('.right-order__material-subtitle');

const setMaterial = (material) => {
  let value = material.previousSibling.previousElementSibling.textContent;
  invoiceActive = value[0].toUpperCase() + value.toLowerCase().slice(1);
  materialSub.textContent = invoiceActive;
} 

setMaterial(materials[0]);

materials.forEach(material => {
  material.addEventListener('click', () => {
    materials.forEach(material => {
      material.classList.remove('_active');
    });
    material.classList.add('_active');
    setMaterial(material);
  })
});

//================================================================

const width = document.querySelector('.right-order__input-width'),
      height = document.querySelector('.right-order__input-height'),
      widthImg = document.querySelector('.left-order__width'),
      heightImg = document.querySelector('.left-order__height'),
      square = document.querySelector('.right-order__square');
      sum = document.querySelector('.right-order__sum');

const changeParam = (param, v) => {
  square.innerHTML = `${(width.value * height.value / 10000).toFixed(1)} м<sup>2</sup>`;
  param.textContent = `${v.value} см`
  sum.textContent = `${groupNums((price * width.value * height.value / 10000).toFixed(1))} ₽`
}

window.onload = function() {
  changeParam(widthImg, width);
  changeParam(heightImg, height);
};


width.addEventListener('input', () => {
  changeParam(widthImg, width);
})

height.addEventListener('input', () => {
  changeParam(heightImg, height);
})

//================================================================

const title = document.querySelector('.popup-form__title'),
      num = document.querySelector('.popup-form__num span'),
      size = document.querySelector('.popup-form__size span'),
      invoice = document.querySelector('.popup-form__invoice span'),
      quantityInput = document.querySelector('.popup-form__input-quantity'),
      priceOne = document.querySelector('.popup-form__text-block .popup-form__subtitle'),
      numTotal = document.querySelector('.popup-form__title-bottom-price'),
      numTotalClone = document.querySelector('.popup-form__text-sum-q'),
      popupImg = document.querySelector('.popup-form__img img');

//================================================================

const fPopup = document.querySelector('.popup-form'),
      close = document.querySelector('.popup-form__close'),
      body = document.querySelector('body'),
      btnAdd = document.querySelector('.right-order__buy-btn'),
      btnClear = document.querySelector('.popup-form__btn-clear'),
      btnSend = document.querySelector('.popup-form__btn-send');

btnAdd.addEventListener('click', () =>{
  fPopup.classList.remove('off');
  body.classList.add('_lock');

  let chekbox = document.querySelector('.right-order__checkbox input[type=checkbox]');
  let chekboxPopup = document.querySelector('.person-popup-form__checkbox input[type=checkbox]');

  chekboxPopup.checked = chekbox.checked;   

  title.textContent = titlePage.textContent;
  popupImg.src = imgSrc;
  num.textContent = index;
  size.innerHTML = `${width.value} см x ${height.value} см = ${(width.value * height.value / 10000).toFixed(1)} м<sup>2</sup>`;
  invoice.textContent = invoiceActive;
  priceOne.textContent = `${groupNums((price * width.value * height.value / 10000).toFixed(1))} ₽`;
  numTotal.textContent = `${groupNums((quantityInput.value * price * width.value * height.value / 10000).toFixed(1))} ₽`;
  numTotalClone.textContent = `${groupNums((quantityInput.value * price * width.value * height.value / 10000).toFixed(1))} ₽`;
})

quantityInput.addEventListener('input', () => {
  if (quantityInput.value < 1) {
    quantityInput.value = 1;
  }
  numTotal.textContent = `${groupNums((quantityInput.value * price * width.value * height.value / 10000).toFixed(1))} ₽`;
  numTotalClone.textContent = `${groupNums((quantityInput.value * price * width.value * height.value / 10000).toFixed(1))} ₽`;
}) 

close.addEventListener('click', () =>{
  document.forms["mail"].reset()
  fPopup.classList.add('off');
  body.classList.remove('_lock');
})

btnClear.addEventListener('click', () => {
  let chekbox = document.querySelector('.right-order__checkbox input[type=checkbox]');
  let chekboxPopup = document.querySelector('.person-popup-form__checkbox input[type=checkbox]');
  document.forms["mail"].reset()
  chekboxPopup.checked = chekbox.checked;   
})

//===========================================================================

const mPopup = document.querySelector('.popup-material'),
      CPopup = document.querySelector('.popup-connection');


CPopup.addEventListener('click', (e) => {
  if (!e.target.closest('.popup-connection__body')) {
    CPopup.classList.add('off');
    body.classList.remove('_lock');
  }
})

CPopup.querySelector('.popup-connection__close').addEventListener('click', () => {
  CPopup.classList.add('off');
  body.classList.remove('_lock');
})


//============================================================================

formValidate = (form) => {
  let error = 0;
  let formReq = document.querySelectorAll('._req');

  formReq.forEach((item, i) => {
    const input = formReq[i];
    formRemoveError(input);
    console.log();
    if (input.classList.contains('_email')){
      if (!emailTest(input)){
        formAddError(input);
        error++;
      }
    } else {
      if (input.value === '') {
        formAddError(input);
        error++;
    }
  }})

  return error;
}

formAddError = (input) => {
  // input.parentElement.classList.add('_error')
  input.classList.add('_error');
}

formRemoveError = (input) => {
  // input.parentElement.classList.add('_error')
  input.classList.remove('_error');
}

emailTest = (input) => {
  return /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/.test(input.value)
}

btnSend.addEventListener('click', (e) => {
  let error = formValidate(e);

  let formData = new FormData(form);
  formData.append('title', title)
  formData.append('num', num)
  formData.append('invoice', invoice)
  formData.append('size', size)
  formData.append('quantity', quantityInput.value)
  formData.append('total', `${groupNums((quantityInput.value * price * width.value * height.value / 10000).toFixed(1))} ₽`)

  if (error === 0 ) {
    // let response = await fetch('sendmail.php', {
    //   method: 'POST',
    //   body: formData
    // });
    // if (response.ok) {
    //   let result = await response.json();
    //   fPopup.classList.add('off');
    //   document.forms["mail"].reset()
    // }
  }
})



/***/ }),

/***/ "./src/js/popupMateria.js":
/*!********************************!*\
  !*** ./src/js/popupMateria.js ***!
  \********************************/
/***/ (function() {

const materials = document.querySelectorAll('.item-material__img'),
      mPopup = document.querySelector('.popup-material'),
      body = document.querySelector('body');

materials.forEach(material => {
  material.addEventListener('click', () => {
    mPopup.querySelector('img').src = material.querySelector('img').src;
    mPopup.classList.remove('off');
    body.classList.add('_lock');
  })
});

mPopup.querySelector('.popup-material__body').addEventListener('click', (e) => {
  if (!e.target.closest('.popup-material__img')) {
    mPopup.classList.add('off');
    body.classList.remove('_lock');
  }
})

mPopup.querySelector('.popup-material__close').addEventListener('click', () => {
  mPopup.classList.add('off');
  body.classList.remove('_lock');
})



/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/***/ (function() {

const menuBtns = document.querySelectorAll('.menu-info__btn'),
      tabs = document.querySelectorAll('.info__item');

console.log();

menuBtns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    menuBtns.forEach((btn, j) => {
      btn.classList.remove('_active');
      tabs[j].classList.remove('_active');
    });
    tabs[i].classList.add('_active');
    btn.classList.add('_active');
  })
});

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/js/home.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _popupMateria__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popupMateria */ "./src/js/popupMateria.js");
/* harmony import */ var _popupMateria__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_popupMateria__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.js */ "./src/js/order.js");
/* harmony import */ var _order_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_order_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tabs */ "./src/js/tabs.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tabs__WEBPACK_IMPORTED_MODULE_4__);






}();
/******/ })()
;
//# sourceMappingURL=script.js.map