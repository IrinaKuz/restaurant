/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/About.js":
/*!**********************!*\
  !*** ./src/About.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction load_about(container) {\r\n    if(container.innerText !== '') {\r\n        container.innerText = '';\r\n    }\r\n    const h1 = document.createElement('h1');\r\n    h1.innerHTML = 'About <span class=\"emp\">The Breakfast Club</span>';\r\n    container.appendChild(h1);\r\n\r\n    const p = document.createElement('p');\r\n    p.innerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';\r\n    container.appendChild(p);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load_about);\n\n//# sourceURL=webpack://restaurant/./src/About.js?");

/***/ }),

/***/ "./src/Contact.js":
/*!************************!*\
  !*** ./src/Contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction load_contact(container) {\r\n    if(container.innerText !== '') {\r\n        container.innerText = '';\r\n    }\r\n    const h1 = document.createElement('h1');\r\n    h1.innerText = 'Contact Us';\r\n    container.appendChild(h1);\r\n\r\n    const address = document.createElement('p');\r\n    address.innerText = '100 Water St, New York, NY';\r\n    container.appendChild(address);\r\n    const tel = document.createElement('p');\r\n    tel.innerText = '(555)555-5555';\r\n    container.appendChild(tel);\r\n    const email = document.createElement('p');\r\n    email.innerText = 'thebreakfastclub@gmail.com';\r\n    container.appendChild(email);\r\n\r\n    const sched = document.createElement('p');\r\n    sched.innerText = 'Tue - Sun';\r\n    container.appendChild(sched);\r\n    const time = document.createElement('p');\r\n    time.innerText = '7-30 am - 2 pm';\r\n    container.appendChild(time);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load_contact);\n\n//# sourceURL=webpack://restaurant/./src/Contact.js?");

/***/ }),

/***/ "./src/HomePage.js":
/*!*************************!*\
  !*** ./src/HomePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _LoadNav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadNav.js */ \"./src/LoadNav.js\");\n\r\n\r\nfunction load_home(container) {\r\n    if(container.innerText !== '') {\r\n        container.innerText = '';\r\n    }\r\n    const header = document.createElement('header');\r\n    const p_welcome = document.createElement('p');\r\n    p_welcome.innerHTML = 'Welcome to'\r\n    const h1 = document.createElement('h1');\r\n    h1.innerHTML = '<span class=\"emp\">The Breakfast Club<span>';\r\n    const p = document.createElement('p');\r\n    p.innerText = 'Best breakfast in town!';\r\n    const img = document.createElement('img');\r\n    img.setAttribute('src', './img/english_breakfast.jpg');\r\n    img.setAttribute('alt', 'English breakfast');\r\n    header.appendChild(p_welcome);\r\n    header.appendChild(h1);\r\n    header.appendChild(p);\r\n    header.appendChild(img);\r\n    container.appendChild(header);\r\n    return container;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load_home);\r\n\n\n//# sourceURL=webpack://restaurant/./src/HomePage.js?");

/***/ }),

/***/ "./src/LoadNav.js":
/*!************************!*\
  !*** ./src/LoadNav.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/*\r\n<nav>\r\n                <ul>\r\n                    <li>Home</li>\r\n                    <li>Menu</li>\r\n                    <li>About</li>\r\n                    <li>Contact</li>\r\n                </ul>\r\n            </nav>\r\n            <header>\r\n                <h1>At Irina's</h1>\r\n                <p>Best breakfast in town!</p>\r\n                <img src=\"./img/english_breakfast.jpg\" alt=\"logo\">\r\n            </header>\r\n*/\r\n\r\nfunction load_nav(container) {\r\n    if(container.innerText !== '') {\r\n        return;\r\n    }\r\n    const mobile_nav = document.createElement('div');\r\n    mobile_nav.innerHTML = '&#9776;';\r\n    mobile_nav.setAttribute('id', 'mobile_nav');\r\n    container.appendChild(mobile_nav);\r\n\r\n    const arr_li = ['Home', 'Menu', 'About', 'Contact'];\r\n    const nav = document.createElement('nav');\r\n    const ul = document.createElement('ul');\r\n    for(let i = 0; i < arr_li.length; i++) {\r\n        const li = document.createElement('li');\r\n        li.innerText = arr_li[i];\r\n        li.setAttribute('id', arr_li[i].toLowerCase());\r\n        ul.appendChild(li);\r\n    }\r\n    nav.appendChild(ul);\r\n    container.appendChild(nav);\r\n\r\n    mobile_nav.addEventListener('click', function() {\r\n        nav.classList.toggle('open');\r\n    })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load_nav);\n\n//# sourceURL=webpack://restaurant/./src/LoadNav.js?");

/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* \r\n<h3>Breakfast options</h3>\r\n<ul>\r\n    <li>English breakfast</li>\r\n    <li>Vegetable omelete</li>\r\n    <li>Oatmeal</li>\r\n    <li>Waffles</li>\r\n    <li>Pancakes</li>\r\n    <li>Avocado and egg toast</li>\r\n    <li>Kids breakfast</li>\r\n</ul>\r\n<h3>Add-ons</h3>\r\n<ul>\r\n    <li>Banana</li>\r\n    <li>Yogurt</li>\r\n    <li>Sausage</li>\r\n    <li>Croissant</li>\r\n</ul>\r\n<h3>Beverages</h3>\r\n<ul>\r\n    <li>Coffee</li>\r\n    <li>Orange juice</li>\r\n    <li>Tea</li>\r\n</ul>\r\n*/\r\n\r\nfunction makeList (list, options) {\r\n    options.map(el => {\r\n        const li = document.createElement('li');\r\n        li.innerText = el;\r\n        list.appendChild(li);\r\n    });\r\n    return list;\r\n}\r\nfunction load_menu(container) {\r\n    if(container.innerText !== '') {\r\n        container.innerText = '';\r\n    }\r\n    const h1 = document.createElement('h1');\r\n    h1.innerText = 'Our Menu';\r\n    container.appendChild(h1);\r\n\r\n    const h3_meal = document.createElement('h3');\r\n    h3_meal.innerText = 'Breakfast options';\r\n    const ul_meal = document.createElement('ul');\r\n    makeList(ul_meal, ['English breakfast', 'Vegetable omelete', 'Oatmeal', 'Waffles', 'Pancakes', 'Avocado and egg toast', 'Kids Breakfst']);\r\n    container.appendChild(h3_meal);\r\n    container.appendChild(ul_meal);\r\n\r\n    const h3_addons = document.createElement('h3');\r\n    h3_addons.innerText = 'Add-ons';\r\n    const ul_addons = document.createElement('ul');\r\n    makeList(ul_addons, ['Banana', 'Yogurt', 'Sausage', 'Croissant']);\r\n    container.appendChild(h3_addons);\r\n    container.appendChild(ul_addons);\r\n\r\n    const h3_beverage = document.createElement('h3');\r\n    h3_beverage.innerText = 'Beverages';\r\n    const ul_beverage = document.createElement('ul');\r\n    makeList(ul_beverage, ['Coffee', 'Orange juice', 'Tea']);\r\n    container.appendChild(h3_beverage);\r\n    container.appendChild(ul_beverage);\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (load_menu);\n\n//# sourceURL=webpack://restaurant/./src/Menu.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HomePage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HomePage.js */ \"./src/HomePage.js\");\n/* harmony import */ var _LoadNav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadNav.js */ \"./src/LoadNav.js\");\n/* harmony import */ var _Menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu.js */ \"./src/Menu.js\");\n/* harmony import */ var _About_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About.js */ \"./src/About.js\");\n/* harmony import */ var _Contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Contact.js */ \"./src/Contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst content = document.querySelector('#content');\r\n(0,_LoadNav_js__WEBPACK_IMPORTED_MODULE_1__.default)(content);\r\n\r\nlet container = document.createElement('div');\r\ncontainer.setAttribute('class', 'container');\r\ncontent.appendChild(container);\r\n\r\n(0,_HomePage_js__WEBPACK_IMPORTED_MODULE_0__.default)(container);\r\n\r\ndocument.querySelector('#home').addEventListener('click', function() {\r\n    console.log('Loading home page');\r\n    (0,_HomePage_js__WEBPACK_IMPORTED_MODULE_0__.default)(container);\r\n}, false);\r\n\r\ndocument.querySelector('#menu').addEventListener('click', function() {\r\n    console.log('Loading menu');\r\n    (0,_Menu_js__WEBPACK_IMPORTED_MODULE_2__.default)(container);\r\n}, false);\r\n\r\ndocument.querySelector('#about').addEventListener('click', function() {\r\n    console.log('Loading about page');\r\n    (0,_About_js__WEBPACK_IMPORTED_MODULE_3__.default)(container);\r\n}, false);\r\n\r\ndocument.querySelector('#contact').addEventListener('click', function() {\r\n    console.log('Loading contact page');\r\n    (0,_Contact_js__WEBPACK_IMPORTED_MODULE_4__.default)(container);\r\n}, false);\r\n\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;