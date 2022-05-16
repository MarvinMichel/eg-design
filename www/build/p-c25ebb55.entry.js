import{r as e,h as r,H as t}from"./p-a4e33a88.js";const o=class{constructor(r){e(this,r),this.label="Darkmode theme"}setHTMLDataTheme(e){document.documentElement.setAttribute("data-theme",e?"dark":"light")}toggleActive(){this.active=!this.active,localStorage.setItem("darkmode",JSON.stringify(this.active))}componentWillLoad(){const e=localStorage.getItem("darkmode"),r=window.matchMedia("(prefers-color-scheme: dark)").matches;this.active=e?JSON.parse(e):r}render(){return r(t,null,r("button",{"aria-labelledby":"toggleLabel","aria-checked":`${this.active}`},r("span",{class:"sr-label",id:"toggleLabel"},this.label,", ",this.active?"on":"off"),r("span",{id:"toggle",part:"toggle","aria-hidden":"true"},this.active?r("slot",{key:"b",name:"iconActive"},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"},r("path",{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"}))):r("slot",{key:"a",name:"iconIdle"},r("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"1","stroke-linecap":"round","stroke-linejoin":"round"},r("circle",{cx:"12",cy:"12",r:"5"}),r("line",{x1:"12",y1:"1",x2:"12",y2:"3"}),r("line",{x1:"12",y1:"21",x2:"12",y2:"23"}),r("line",{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"}),r("line",{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"}),r("line",{x1:"1",y1:"12",x2:"3",y2:"12"}),r("line",{x1:"21",y1:"12",x2:"23",y2:"12"}),r("line",{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"}),r("line",{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"}))))))}static get watchers(){return{active:["setHTMLDataTheme"]}}};o.style=".sr-label{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;height:1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important}:root{--cl-grey-100:#f4f4f4;--cl-grey-200:#b7b7b7;--cl-grey-300:#525252;--cl-grey-400:#2d302f;--cl-eg-blue:#00b4e5;--cl-eg-pink:#cf10d9;--cl-primary:var(--cl-grey-400);--cl-secondary:var(--cl-grey-200);--cl-tertiary:var(--cl-grey-100)}:root[data-theme=dark]{--cl-primary:var(--cl-grey-100);--cl-tertiary:var(--cl-grey-400)}*{box-sizing:border-box}:host{--clr-shadow:#0e141a30;background:var(--clr-idle, #b7b7b7);border-radius:calc(var(--size, 2rem) / 1.5);box-shadow:0.125em 0.125em 0.5em var(--clr-shadow);color:var(--clr-icon, #525252);display:inline-block;height:var(--size, 2rem);padding:0.125em;position:relative;width:calc(var(--size, 2rem) * 2)}@media (prefers-reduced-motion: no-preference){:host{--transition:500ms cubic-bezier(0.6, 0.01, 0.05, 0.95)}}:host([active]){background:var(--clr-active, linear-gradient(90deg, #00b4e5, #cf10d9))}button{align-items:center;appearance:none;-webkit-appearance:none;background-color:transparent;border:0;color:inherit;cursor:pointer;display:flex;font:inherit;inset:0;padding:0.125em;position:absolute}button span#toggle{background:var(--clr-toggle, #f4f4f4);border-radius:50%;box-shadow:0.125em 0 0.5em var(--clr-shadow);color:inherit;display:grid;height:100%;padding:12.5%;place-content:center;pointer-events:none;position:relative;transition:transform var(--transition);width:50%}button span#toggle svg{height:100%;width:100%}button[aria-checked=true] span#toggle{box-shadow:-0.125em 0 0.5em var(--clr-shadow);transform:translateX(100%)}";export{o as eg_darkmode_toggle}