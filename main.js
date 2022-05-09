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
/* harmony export */   "components": () => (/* binding */ components),
/* harmony export */   "renderKeyboard": () => (/* binding */ addKeyboard)
/* harmony export */ });
/* harmony import */ var _keyboard_renderKeyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard/renderKeyboard */ "./src/components/keyboard/renderKeyboard.js");


// document wrapper
const windowContainer = document.createElement("div")
windowContainer.classList.add("window-wrapper")

// Title
const title = document.createElement("h1")
title.textContent = "RSS Виртуальная клавиатура"
// create input
// const input = document.createElement("input")
// // input.classList.add("input")
// input.id = "input"

// input textarea
const textarea = document.createElement("textarea")
textarea.classList.add("input")
textarea.id = "textarea"
// textarea.rows=10;

// keyboard contaner
const keyboardContainer = document.createElement("div")


// join blocks on page
windowContainer.append(title)
windowContainer.append(textarea)
windowContainer.append(keyboardContainer)
addKeyboard("Key")

async function addKeyboard(mode){
    const keyboard = await (0,_keyboard_renderKeyboard__WEBPACK_IMPORTED_MODULE_0__.renderKeyboard)(mode)
    keyboardContainer.append(keyboard)
}

function Components() {
    this.windowContainer = windowContainer 
    this.windowContainer.textarea = textarea
}
const components = new Components()


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
        this.width = width ?  width : "30px";
        this.height = "31px";
        this.value = value;
    }
    build(){
        let key = document.createElement("div");
        key.classList.add("key");
        key.style.width = this.width;
        key.style.height = this.height
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
/* harmony export */   "keySetArrow": () => (/* binding */ keySetArrow),
/* harmony export */   "keySetMain": () => (/* binding */ keySetMain)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);


async function keySetMain(){
    const url = "https://opensheet.elk.sh/10DId3PsrfSAyKLMCOT60f-7nNOBnH1GV-gzfZbM3xGg/main"
    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url);
    const Map = await response.json();
    const keyMap = {}
    Map.forEach(element => {
        keyMap[element.Code] = element
    });
    keyMap.Equal.Key ="="
    return keyMap
}
async function keySetArrow(){
    const url = "https://opensheet.elk.sh/10DId3PsrfSAyKLMCOT60f-7nNOBnH1GV-gzfZbM3xGg/arrow"
    const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url);
    const Map = await response.json();
    const keyMap = {}
    Map.forEach(element => {
        keyMap[element.Code] = element
    });
    return keyMap
}


    
//, keySetArrow

/***/ }),

/***/ "./src/components/keyboard/renderKeyboard.js":
/*!***************************************************!*\
  !*** ./src/components/keyboard/renderKeyboard.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderKeyboard": () => (/* binding */ renderKeyboard)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/components/keyboard/key.js");
/* harmony import */ var _keyMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyMap */ "./src/components/keyboard/keyMap.js");



const keyContainer = document.createElement("div")
keyContainer.classList.add("keyboard-container")

async function renderKeyboard(value){
    // draw all basic buttons 
    const buttonSetMain = await renderButtons(_keyMap__WEBPACK_IMPORTED_MODULE_1__.keySetMain,value)

    // make round border for 4  end elements
    makeEndsRound(buttonSetMain)

    // append buttons to conteiner
    appendButtons(buttonSetMain,keyContainer)
    
    
    // draw arrow buttons 
    const buttonSetArrow = await renderButtons(_keyMap__WEBPACK_IMPORTED_MODULE_1__.keySetArrow,value)

    // transform arrow buttons to fit the its container
    fitArrowButtons(buttonSetArrow)

    // create grid container for Arrow block buttons
    const arrowBlockContainer = await addArrowContainer()

    //append arrow buttons in container
    appendButtons(buttonSetArrow,arrowBlockContainer)
    

    return keyContainer
}
async function renderButtons(keySet,value = "Key"){
    const Map = await keySet()
    for (let el in Map){
        console.log(value)
        let button = new _key__WEBPACK_IMPORTED_MODULE_0__.Key(Map[el].Width,Map[el][value]).build()
        button.id = Map[el].Code
        button.dataset.Value = Map[el].Value
        Map[el]=button
    }
    return Map
}
const makeEndsRound = (buttonSet) => {
    buttonSet["Escape"].style.borderTopLeftRadius = "16px"
    buttonSet["sleep"].style.borderTopRightRadius = "16px"
    buttonSet["fn"].style.borderBottomLeftRadius = "16px"
}
const addArrowContainer = () => {
    const arrowBlockContainer = document.createElement("div")
    arrowBlockContainer.classList.add("arrow-block")
    keyContainer.append(arrowBlockContainer)
    return arrowBlockContainer
}
async function appendButtons(Map,container){
    for (let el in Map){
    container.append(Map[el])
    }
}
const fitArrowButtons = (buttonSet) => {
    buttonSet["ArrowRight"].style.borderBottomRightRadius = "16px"
    buttonSet["ArrowUp"].style.height = "13px"
    buttonSet["ArrowDown"].style.height = "13px"
    buttonSet["ArrowLeft"].style.gridArea = "1/1/3/2"
    buttonSet["ArrowRight"].style.gridArea = "1/3/3/4"
    buttonSet["ArrowUp"].style.gridArea =  "1/2/2/3"
    buttonSet["ArrowUp"].classList.add("up-down-buttons")
    buttonSet["ArrowDown"].style.gridArea = "2/2/3/4"
    buttonSet["ArrowDown"].classList.add("up-down-buttons")
}



/***/ }),

/***/ "./src/events/keyboardEvents.js":
/*!**************************************!*\
  !*** ./src/events/keyboardEvents.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateKeyboardEvents": () => (/* binding */ evaluateKeyboardEvents)
/* harmony export */ });
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/index */ "./src/components/index.js");


let click = new Event("mousedown")
const events = function(){
    document.addEventListener("keydown",(e)=>e.preventDefault())
    document.addEventListener("keydown",(e)=>keyPress(e))
    document.addEventListener("keyup",(e)=>keyUnpressed(e))

}

const keyPress =async function(e){
    console.log(e.code)
    let element = document.getElementById(e.code)
    element.classList.add("key-down")
    element.classList.add("button-down")
    let actualText = _components_index__WEBPACK_IMPORTED_MODULE_0__.components.windowContainer.textarea.value
    _components_index__WEBPACK_IMPORTED_MODULE_0__.components.windowContainer.textarea.value = actualText+element.dataset.Value
    
}

const keyUnpressed = function(e){
    try{
        let element = document.getElementById(e.code)
        element.classList.remove("key-down")
        element.classList.remove("button-down")

    }catch(error){console.log(error)}
}







function evaluateKeyboardEvents(){
    events()
}



/***/ }),

/***/ "./src/events/mouseEvents.js":
/*!***********************************!*\
  !*** ./src/events/mouseEvents.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "evaluateMouseEvents": () => (/* binding */ evaluateMouseEvents)
/* harmony export */ });
/* harmony import */ var _components_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/index */ "./src/components/index.js");


// add mouse click event
const clickEvents = function (){
    document.addEventListener("mousedown",(e)=>select(e))
    document.addEventListener("mousedown",(e)=>tapSymbol(e))
    document.addEventListener("pointerdown",(e)=>transitionEffect(e))
    document.addEventListener("pointerup",(e)=>canselTransition(e))
}
const select = function(e){
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        document.addEventListener("mousedown",(e)=>e.preventDefault())
    }
    if(e.target.className.includes("input")){
        document.getElementById("textarea").focus()
    }
}
const  tapSymbol = function(e){
    console.log(e.target.id)
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        let actualText = _components_index__WEBPACK_IMPORTED_MODULE_0__.components.windowContainer.textarea.value
        _components_index__WEBPACK_IMPORTED_MODULE_0__.components.windowContainer.textarea.value = actualText+e.target.dataset.Value
    }
}
const transitionEffect = function(e){
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        e.target.classList.add("button-down")
    }
}
const canselTransition = function(e){
    if(e.target.className.includes("key")&& !e.target.className.includes("keyboard-container")){
        e.target.classList.remove("button-down")
    }
}
function evaluateMouseEvents(){
    clickEvents()
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
/* harmony import */ var _events_mouseEvents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events/mouseEvents */ "./src/events/mouseEvents.js");
/* harmony import */ var _events_keyboardEvents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events/keyboardEvents */ "./src/events/keyboardEvents.js");






//generate web app
function app(){
    const body = document.body
    body.append(_components_index__WEBPACK_IMPORTED_MODULE_1__.components.windowContainer)
    ;(0,_events_mouseEvents__WEBPACK_IMPORTED_MODULE_2__.evaluateMouseEvents)()
    ;(0,_events_keyboardEvents__WEBPACK_IMPORTED_MODULE_3__.evaluateKeyboardEvents)()
}
app()
})();

/******/ })()
;
//# sourceMappingURL=main.js.map