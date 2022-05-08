/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/sass/main.scss":
/*!****************************!*\
  !*** ./src/sass/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {



// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "components": () => (/* binding */ components)
/* harmony export */ });
/* harmony import */ var _keyboard_key_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard/key-container */ "./src/components/keyboard/key-container.js");
// document wrapper
const windowContainer = document.createElement("div")
windowContainer.classList.add("window-wrapper")

// Title
const title = document.createElement("h1")
title.textContent = "RSS Виртуальная клавиатура"

// input textarea
const textarea = document.createElement("textarea")

// keyboard contaner
const keyboardContainer = document.createElement("div")



windowContainer.append(title)
windowContainer.append(textarea)
windowContainer.append(keyboardContainer)

;
keyboardContainer.append(_keyboard_key_container__WEBPACK_IMPORTED_MODULE_0__.keyContainer)



function Components() {
    this.windowContainer = windowContainer ;
}
const components = new Components()

/***/ }),

/***/ "./src/components/keyboard/key-container.js":
/*!**************************************************!*\
  !*** ./src/components/keyboard/key-container.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyContainer": () => (/* binding */ keyContainer)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/components/keyboard/key.js");
/* harmony import */ var _keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyMap */ "./src/components/keyboard/keyMap.js");



const keyContainer = document.createElement("div")
keyContainer.classList.add("keyboard-container")


async function renderButtons(){
    let i = 0;
    const Map = await (0,_keyMap__WEBPACK_IMPORTED_MODULE_1__.keyMap)()
    for (let el in Map){
        let button = new _key__WEBPACK_IMPORTED_MODULE_0__.Key(40,Map[el].Value).build();
        console.log(Map[el])
        keyContainer.append(button)
        if(i>100){
            break
        }
        i++
    }
}
renderButtons()



/***/ }),

/***/ "./src/components/keyboard/key.js":
/*!****************************************!*\
  !*** ./src/components/keyboard/key.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Key": () => (/* binding */ Key)
/* harmony export */ });
class Key{
    constructor(width, value){
        this.width = "20px";
        this.height = "40px";
        this.value = value;
    }
    build(){
        let key = document.createElement("div");
        key.classList.add("key");
        key.innerText = this.value;
        return key
    }
}

/***/ }),

/***/ "./src/components/keyboard/keyMap.js":
/*!*******************************************!*\
  !*** ./src/components/keyboard/keyMap.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyMap": () => (/* binding */ parser)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);


const url = "https://opensheet.elk.sh/10DId3PsrfSAyKLMCOT60f-7nNOBnH1GV-gzfZbM3xGg/json"

async function parser(){
    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url);
    const Map = await response.json();
    const keyMap = {}
    Map.forEach(element => {
        keyMap[element.Code] = element
    });
    keyMap.Equal.Value ="="
    return keyMap
}
    


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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_sass_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/sass/main.scss */ "./src/sass/main.scss");
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/index */ "./src/components/index.js");
/* harmony import */ var _components_keyboard_keyMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/keyboard/keyMap */ "./src/components/keyboard/keyMap.js");



async function app(){
    // console.log( await keyMap())
    console.log(_components_index__WEBPACK_IMPORTED_MODULE_1__.components)
    const body = document.body
    
    body.append(_components_index__WEBPACK_IMPORTED_MODULE_1__.components.windowContainer)

};
app();
})();

/******/ })()
;
//# sourceMappingURL=main.js.map