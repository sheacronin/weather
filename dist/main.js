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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    padding: 0;\\n}\\n\\nbody {\\n    background-color: #bde0fe;\\n    text-align: center;\\n    font-family: 'Lato', sans-serif;\\n    font-weight: 300;\\n    font-size: 26px;\\n}\\n\\nheader {\\n    width: 100vw;\\n    height: 100px;\\n    background-color: #ffafcc;\\n    color: #51355a;\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n    font-family: 'Fredoka One', cursive;\\n    font-size: 24px;\\n    letter-spacing: 3px;\\n}\\n\\nmain {\\n    margin: 50px auto;\\n    width: 300px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n}\\n\\nmain #weather-info,\\nmain form {\\n    box-shadow: -2px 2px 10px #00000030;\\n    border-radius: 10px;\\n}\\n\\n#weather-info {\\n    background-color: #27394990;\\n    color: white;\\n    width: 100%;\\n    height: 450px;\\n    margin-bottom: 50px;\\n    display: grid;\\n    grid-template-rows: 3fr 1fr 3fr 3fr 2fr;\\n    align-items: center;\\n    position: relative;\\n}\\n\\n#country {\\n    position: absolute;\\n    font-size: 18px;\\n    opacity: 50%;\\n    top: 6px;\\n    left: 12px;\\n    height: 30px;\\n    display: flex;\\n    align-items: center;\\n}\\n\\n#unit-toggle-container {\\n    position: absolute;\\n    top: 8px;\\n    right: 8px;\\n    width: 50px;\\n    height: 30px;\\n    background-color: #00000050;\\n    border-radius: 20px;\\n}\\n\\n#unit-toggle {\\n    background-color: #cdb4db;\\n    height: 30px;\\n    width: 30px;\\n    border-radius: 50%;\\n    position: absolute;\\n    font-weight: 400;\\n    font-size: 20px;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    transition: left 500ms ease-in-out;\\n}\\n\\n.fahrenheit {\\n    left: 0;\\n}\\n\\n.celsius {\\n    left: 20px;\\n}\\n\\n#location {\\n    text-decoration: underline;\\n    align-self: end;\\n}\\n\\n#weather-icon {\\n    margin: 0 auto;\\n}\\n\\n.temp-div {\\n    position: relative;\\n}\\n\\n#temp {\\n    font-size: 60px;\\n    align-self: start;\\n}\\n\\n#high-and-low {\\n    display: flex;\\n    justify-content: space-around;\\n    font-size: 40px;\\n    align-self: start;\\n}\\n\\n.degrees-unit {\\n    position: absolute;\\n}\\n\\n#temp .degrees-unit {\\n    top: 5px;\\n    font-size: 30px;\\n}\\n\\n#high-and-low .degrees-unit {\\n    font-size: 20px;\\n    top: 2px;\\n}\\n\\nform {\\n    position: relative;\\n}\\n\\n#errors {\\n    color: red;\\n    position: absolute;\\n    top: -35px;\\n    width: 100%;\\n    height: 30px;\\n    font-size: 16px;\\n    font-weight: 400;\\n    display: flex;\\n    align-items: flex-end;\\n    justify-content: center;\\n}\\n\\n.enter-error {\\n    animation: enter-error 1s ease-in;\\n}\\n\\n@keyframes enter-error {\\n    0% {\\n        opacity: 0;\\n    }\\n    50% {\\n        transform: translateY(-5px);\\n    }\\n    100% {\\n        opacity: 1;\\n        transform: translate(0, 0);\\n    }\\n}\\n\\ninput {\\n    width: 100%;\\n    height: 40px;\\n    font-size: 20px;\\n    text-align: center;\\n    border: none;\\n    border-radius: 10px 10px 0 0;\\n    font-family: 'Lato', sans-serif;\\n}\\n\\nbutton {\\n    width: 100%;\\n    height: 40px;\\n    font-size: 20px;\\n    border: none;\\n    border-radius: 0 0 10px 10px;\\n    background-color: #ffafcc;\\n    color: #51355a;\\n    font-family: 'Fredoka One', cursive;\\n    cursor: pointer;\\n}\\n\\n@media (max-height: 750px), (max-width: 350px) {\\n    header {\\n        height: 70px;\\n        font-size: 20px;\\n    }\\n    main {\\n        margin: 20px auto;\\n    }\\n    #weather-info {\\n        margin-bottom: 30px;\\n    }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://weather/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://weather/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://weather/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://weather/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/dom-weather.js":
/*!****************************!*\
  !*** ./src/dom-weather.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"weatherInfo\": () => (/* binding */ weatherInfo),\n/* harmony export */   \"errorLog\": () => (/* binding */ errorLog)\n/* harmony export */ });\n/* harmony import */ var _img_clear_gif__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/clear.gif */ \"./src/img/clear.gif\");\n/* harmony import */ var _img_moon_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/moon.gif */ \"./src/img/moon.gif\");\n/* harmony import */ var _img_few_clouds_gif__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/few-clouds.gif */ \"./src/img/few-clouds.gif\");\n/* harmony import */ var _img_moon_clouds_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/moon-clouds.gif */ \"./src/img/moon-clouds.gif\");\n/* harmony import */ var _img_clouds_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/clouds.gif */ \"./src/img/clouds.gif\");\n/* harmony import */ var _img_rain_gif__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/rain.gif */ \"./src/img/rain.gif\");\n/* harmony import */ var _img_storm_gif__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/storm.gif */ \"./src/img/storm.gif\");\n/* harmony import */ var _img_snow_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/snow.gif */ \"./src/img/snow.gif\");\n/* harmony import */ var _img_mist_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./img/mist.gif */ \"./src/img/mist.gif\");\n\n\n\n\n\n\n\n\n\n\nconst icons = {\n    clear: _img_clear_gif__WEBPACK_IMPORTED_MODULE_0__,\n    moon: _img_moon_gif__WEBPACK_IMPORTED_MODULE_1__,\n    fewClouds: _img_few_clouds_gif__WEBPACK_IMPORTED_MODULE_2__,\n    moonClouds: _img_moon_clouds_gif__WEBPACK_IMPORTED_MODULE_3__,\n    clouds: _img_clouds_gif__WEBPACK_IMPORTED_MODULE_4__,\n    rain: _img_rain_gif__WEBPACK_IMPORTED_MODULE_5__,\n    storm: _img_storm_gif__WEBPACK_IMPORTED_MODULE_6__,\n    snow: _img_snow_gif__WEBPACK_IMPORTED_MODULE_7__,\n    mist: _img_mist_gif__WEBPACK_IMPORTED_MODULE_8__,\n};\n\nconst unitToggleBtn = document.querySelector('#unit-toggle');\nunitToggleBtn.addEventListener('click', animateUnitToggleBtn);\n\nfunction animateUnitToggleBtn() {\n    console.log('moving button...');\n    // Determine new class.\n    const newCls = unitToggleBtn.classList.contains('fahrenheit')\n        ? 'celsius'\n        : 'fahrenheit';\n    // Clear current class.\n    unitToggleBtn.className = '';\n    unitToggleBtn.classList.add(newCls);\n\n    const newUnit = newCls === 'fahrenheit' ? 'F' : 'C';\n    // Change text content for new unit.\n    unitToggleBtn.textContent = newUnit;\n\n    weatherInfo.temp.displayTemperature(weatherInfo.data.temp, newUnit);\n}\n\nconst weatherInfo = {\n    location: document.querySelector('#location'),\n    country: document.querySelector('#country'),\n    desc: document.querySelector('#desc'),\n    icon: document.querySelector('#weather-icon'),\n    temp: {\n        main: document.querySelector('#temp'),\n        high: document.querySelector('#high-temp'),\n        low: document.querySelector('#low-temp'),\n\n        displayTemperature(temp, unit) {\n            for (const tempType in this) {\n                // Don't include methods.\n                if (typeof this[tempType] == 'function') {\n                    continue;\n                }\n                this[tempType].querySelector('.degrees-num').textContent =\n                    temp[tempType][unit.toLowerCase()];\n                this[tempType].querySelector('.degrees-unit').textContent =\n                    '°' + unit;\n            }\n        },\n    },\n    data: undefined,\n    update(weather) {\n        this.location.textContent = weather.location;\n        // Add country flag emoji and acronym.\n        this.country.textContent =\n            weather.country.replace(/./g, (char) =>\n                String.fromCodePoint(char.charCodeAt(0) + 127397)\n            ) +\n            ' ' +\n            weather.country;\n        this.desc.textContent = weather.desc;\n        this.icon.src = icons[weather.iconName];\n        this.temp.displayTemperature(weather.temp, 'F');\n        this.data = weather;\n    },\n};\n\nconst errorLog = {\n    el: document.querySelector('#errors'),\n    display(input) {\n        this.el.classList.add('enter-error');\n        this.el.textContent = `Could not find the location \"${input}\"`;\n    },\n    clear() {\n        console.log('clearing errors!');\n        this.el.textContent = '';\n        this.el.classList.remove('enter-error');\n    },\n};\n\n\n\n\n//# sourceURL=webpack://weather/./src/dom-weather.js?");

/***/ }),

/***/ "./src/img/clear.gif":
/*!***************************!*\
  !*** ./src/img/clear.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6e4c3a9bc4da94614bd7.gif\";\n\n//# sourceURL=webpack://weather/./src/img/clear.gif?");

/***/ }),

/***/ "./src/img/clouds.gif":
/*!****************************!*\
  !*** ./src/img/clouds.gif ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"69ba3b64d90d9bb014f0.gif\";\n\n//# sourceURL=webpack://weather/./src/img/clouds.gif?");

/***/ }),

/***/ "./src/img/few-clouds.gif":
/*!********************************!*\
  !*** ./src/img/few-clouds.gif ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3107255734d834c72db.gif\";\n\n//# sourceURL=webpack://weather/./src/img/few-clouds.gif?");

/***/ }),

/***/ "./src/img/mist.gif":
/*!**************************!*\
  !*** ./src/img/mist.gif ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"04703ff8c15a613b543c.gif\";\n\n//# sourceURL=webpack://weather/./src/img/mist.gif?");

/***/ }),

/***/ "./src/img/moon-clouds.gif":
/*!*********************************!*\
  !*** ./src/img/moon-clouds.gif ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"6b92db81a23bd57657f6.gif\";\n\n//# sourceURL=webpack://weather/./src/img/moon-clouds.gif?");

/***/ }),

/***/ "./src/img/moon.gif":
/*!**************************!*\
  !*** ./src/img/moon.gif ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"07ec7342097014b94dbf.gif\";\n\n//# sourceURL=webpack://weather/./src/img/moon.gif?");

/***/ }),

/***/ "./src/img/rain.gif":
/*!**************************!*\
  !*** ./src/img/rain.gif ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"1a04f8e7f753e28c546c.gif\";\n\n//# sourceURL=webpack://weather/./src/img/rain.gif?");

/***/ }),

/***/ "./src/img/snow.gif":
/*!**************************!*\
  !*** ./src/img/snow.gif ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f4dfc405719242577aac.gif\";\n\n//# sourceURL=webpack://weather/./src/img/snow.gif?");

/***/ }),

/***/ "./src/img/storm.gif":
/*!***************************!*\
  !*** ./src/img/storm.gif ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"28b2fd6fea8cb82246aa.gif\";\n\n//# sourceURL=webpack://weather/./src/img/storm.gif?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _dom_weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-weather */ \"./src/dom-weather.js\");\n/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather */ \"./src/weather.js\");\n\n\n\n\n(0,_weather__WEBPACK_IMPORTED_MODULE_2__.processWeatherData)('London,uk').then((weather) => {\n    _dom_weather__WEBPACK_IMPORTED_MODULE_1__.weatherInfo.update(weather);\n});\n\nconst searchInput = document.querySelector('input');\nconst searchBtn = document.querySelector('#search-btn');\n\nsearchBtn.addEventListener('click', (e) => {\n    (0,_weather__WEBPACK_IMPORTED_MODULE_2__.processWeatherData)(searchInput.value)\n        .then((weather) => {\n            _dom_weather__WEBPACK_IMPORTED_MODULE_1__.weatherInfo.update(weather);\n        })\n        .catch(console.log);\n\n    searchInput.value = '';\n    e.preventDefault();\n});\n\n\n//# sourceURL=webpack://weather/./src/index.js?");

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"processWeatherData\": () => (/* binding */ processWeatherData)\n/* harmony export */ });\n/* harmony import */ var _dom_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-weather */ \"./src/dom-weather.js\");\n\n\nasync function getWeather(location) {\n    try {\n        // Clear error log.\n        _dom_weather__WEBPACK_IMPORTED_MODULE_0__.errorLog.clear();\n\n        const response = await fetch(\n            `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=558df500de211a9bd9d1847f6d74894c`,\n            { mode: 'cors' }\n        );\n        // If 404 error, throw error.\n        if (!response.ok) throw new Error('Network response was not ok');\n\n        const weatherData = await response.json();\n        return weatherData;\n    } catch (error) {\n        console.log(error);\n        _dom_weather__WEBPACK_IMPORTED_MODULE_0__.errorLog.display(location);\n        return error;\n    }\n}\n\nclass Weather {\n    constructor(location, country, temp, lowTemp, highTemp, desc, iconCode) {\n        this.tempUnit = 'F';\n        this.temp = {\n            main: {\n                f: Math.round(((temp - 273.15) * 9) / 5 + 32),\n                c: Math.round(temp - 273.15),\n            },\n            low: {\n                f: Math.round(((lowTemp - 273.15) * 9) / 5 + 32),\n                c: Math.round(lowTemp - 273.15),\n            },\n            high: {\n                f: Math.round(((highTemp - 273.15) * 9) / 5 + 32),\n                c: Math.round(highTemp - 273.15),\n            },\n        };\n        this.location = location;\n        this.country = country;\n        this.desc = desc;\n        // Set the icon name based on the icon code provided by the API.\n        this.iconName = ((code) => {\n            if (code.match(/01d/)) {\n                return 'clear';\n            } else if (code.match(/01n/)) {\n                return 'moon';\n            } else if (code.match(/02d/)) {\n                return 'fewClouds';\n            } else if (code.match(/02n/)) {\n                return 'moonClouds';\n            } else if (code.match(/0[34][dn]/)) {\n                return 'clouds';\n            } else if (code.match(/09|10[dn]/)) {\n                return 'rain';\n            } else if (code.match(/11[dn]/)) {\n                return 'storm';\n            } else if (code.match(/13[dn]/)) {\n                return 'snow';\n            } else if (code.match(/50[dn]/)) {\n                return 'mist';\n            }\n        })(iconCode);\n    }\n    convertTemp(newUnit) {\n        switch (this.tempUnit) {\n            case 'F':\n                this.temp.k = ((this.temp.k - 32) * 5) / 9;\n                break;\n            case 'C':\n                this.temp.k = (this.temp.k * 9) / 5 + 32;\n                break;\n            default:\n                console.log('Invalid temperature unit.');\n        }\n        this.tempUnit = newUnit;\n        return this.temp.k;\n    }\n}\n\nasync function processWeatherData(location) {\n    const data = await getWeather(location);\n    const weather = new Weather(\n        data.name,\n        data.sys.country,\n        data.main.temp,\n        data.main['temp_min'],\n        data.main['temp_max'],\n        data.weather[0].description,\n        data.weather[0].icon\n    );\n    console.log(weather);\n    return weather;\n}\n\n\n\n\n//# sourceURL=webpack://weather/./src/weather.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;