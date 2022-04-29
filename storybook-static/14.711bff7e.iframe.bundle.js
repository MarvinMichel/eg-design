(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./dist/esm/eg-darkmode-toggle.entry.js":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"eg_darkmode_toggle",(function(){return DarkmodeToggle}));__webpack_require__("./node_modules/core-js/modules/es.object.define-property.js");var _index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/esm/index-8c86037b.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var DarkmodeToggle=function(){function DarkmodeToggle(hostRef){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,DarkmodeToggle),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.e)(this,hostRef),this.label="Darkmode theme"}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(DarkmodeToggle,[{key:"setHTMLDataTheme",value:function setHTMLDataTheme(newValue){document.documentElement.setAttribute("data-theme",newValue?"dark":"light")}},{key:"toggleActive",value:function toggleActive(){this.active=!this.active,localStorage.setItem("darkmode",JSON.stringify(this.active))}},{key:"componentWillLoad",value:function componentWillLoad(){var savedTheme=localStorage.getItem("darkmode"),prefersDarkmode=window.matchMedia("(prefers-color-scheme: dark)").matches;this.active=savedTheme?JSON.parse(savedTheme):prefersDarkmode}},{key:"render",value:function render(){return Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.a,null,Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("button",{role:"switch","aria-labelledby":"toggleLabel","aria-checked":""+this.active},Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("span",{class:"sr-label",id:"toggleLabel"},this.label),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("span",{id:"toggle",part:"toggle","aria-hidden":"true"},this.active?Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("slot",{key:"b",name:"iconActive"},Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"},Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))):Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("slot",{key:"a",name:"iconIdle"},Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"},Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("circle",{cx:"12",cy:"12",r:"5"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),Object(_index_8c86037b_js__WEBPACK_IMPORTED_MODULE_1__.c)("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))))))}}],[{key:"watchers",get:function get(){return{active:["setHTMLDataTheme"]}}}]),DarkmodeToggle}();DarkmodeToggle.style=".sr-label{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;height:1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important}:root{--cl-grey-100:#f4f4f4;--cl-grey-200:#b7b7b7;--cl-grey-300:#525252;--cl-grey-400:#2d302f;--cl-eg-blue:#00b4e5;--cl-eg-pink:#cf10d9;--cl-primary:var(--cl-grey-400);--cl-secondary:var(--cl-grey-200);--cl-tertiary:var(--cl-grey-100)}:root[data-theme=dark]{--cl-primary:var(--cl-grey-100);--cl-tertiary:var(--cl-grey-400)}*{box-sizing:border-box}:host{--clr-shadow:#0e141a30;background:var(--clr-idle, #b7b7b7);border-radius:calc(var(--size, 2rem) / 1.5);box-shadow:0.125em 0.125em 0.5em var(--clr-shadow);color:var(--clr-icon, #525252);display:inline-block;height:var(--size, 2rem);padding:0.125em;position:relative;width:calc(var(--size, 2rem) * 2)}@media (prefers-reduced-motion: no-preference){:host{--transition:500ms cubic-bezier(0.6, 0.01, 0.05, 0.95)}}:host([active]){background:var(--clr-active, linear-gradient(90deg, #00b4e5, #cf10d9))}button[role=switch]{align-items:center;appearance:none;-webkit-appearance:none;background-color:transparent;border:0;color:inherit;cursor:pointer;display:flex;font:inherit;inset:0;padding:0.125em;position:absolute}button[role=switch] span#toggle{background:var(--clr-toggle, #f4f4f4);border-radius:50%;box-shadow:0.125em 0 0.5em var(--clr-shadow);color:inherit;display:grid;height:100%;padding:12.5%;place-content:center;pointer-events:none;position:relative;transition:transform var(--transition);width:50%}button[role=switch] span#toggle svg{height:100%;width:100%}button[role=switch][aria-checked=true] span#toggle{box-shadow:-0.125em 0 0.5em var(--clr-shadow);transform:translateX(100%)}"}}]);