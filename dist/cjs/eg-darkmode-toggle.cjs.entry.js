'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1445f9ac.js');

const darkmodeToggleCss = ".sr-label{border:0 !important;clip:rect(1px, 1px, 1px, 1px) !important;height:1px !important;overflow:hidden !important;padding:0 !important;position:absolute !important;width:1px !important}:root{--cl-grey-100:#f4f4f4;--cl-grey-200:#b7b7b7;--cl-grey-300:#525252;--cl-grey-400:#2d302f;--cl-eg-blue:#00b4e5;--cl-eg-pink:#cf10d9;--cl-primary:var(--cl-grey-400);--cl-secondary:var(--cl-grey-200);--cl-tertiary:var(--cl-grey-100)}:root[data-theme=dark]{--cl-primary:var(--cl-grey-100);--cl-tertiary:var(--cl-grey-400)}*{box-sizing:border-box}:host{--clr-shadow:#0e141a30}@media (prefers-reduced-motion: no-preference){:host{--transition:500ms cubic-bezier(0.6, 0.01, 0.05, 0.95)}}:host button{align-items:center;appearance:none;-webkit-appearance:none;background-color:transparent;border:0;color:inherit;cursor:pointer;display:flex;font:inherit;padding:0.125em}:host(:not([iconOnly])){background:var(--clr-idle, #b7b7b7);border-radius:100rem;box-shadow:0.125em 0.125em 0.5em var(--clr-shadow);color:var(--clr-icon, #525252);display:inline-block;height:var(--size, 2rem);position:relative;width:calc(var(--size, 2rem) * 1.75)}:host(:not([iconOnly])) button{height:100%;width:100%}:host(:not([iconOnly])) button span#knob{background:var(--clr-knob, #f4f4f4);border-radius:50%;box-shadow:0.125em 0 0.5em var(--clr-shadow);color:inherit;display:grid;height:100%;padding:12.5%;place-content:center;pointer-events:none;position:relative;transition:transform var(--transition);width:calc(var(--size, 2rem) - 0.125em)}:host(:not([iconOnly])) button span#knob *{height:100%;width:100%}:host(:not([iconOnly])[active]){background:var(--clr-active, linear-gradient(90deg, #00b4e5, #cf10d9))}:host(:not([iconOnly])[active]) span#knob{box-shadow:-0.125em 0 0.5em var(--clr-shadow);transform:translateX(75%)}:host([iconOnly]){--rotate:-180deg}:host([iconOnly]) span#knob *{transition:opacity 250ms ease-in-out, transform 250ms ease-in-out}";

const DarkmodeToggle = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /**
     * The label that's been read by screen readers
     */
    this.label = 'darkmode theme';
    /**
     * Only use an icon as the component instead of a toggle button
     */
    this.iconOnly = false;
  }
  setHTMLDataTheme(newValue) {
    document.documentElement.setAttribute('data-theme', newValue ? 'dark' : 'light');
  }
  toggleActive() {
    this.active = !this.active;
    localStorage.setItem('darkmode', JSON.stringify(this.active));
  }
  setStartCoordinate({ touches }) {
    this.startX = touches[0].clientX;
  }
  swipeToggle({ touches }) {
    this.newX = touches[0].clientX;
    if ((this.newX < this.startX && this.active) || (this.newX > this.startX && !this.active)) {
      this.toggleActive();
    }
  }
  componentWillLoad() {
    const savedTheme = localStorage.getItem('darkmode');
    const prefersDarkmode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (savedTheme) {
      this.active = JSON.parse(savedTheme);
      return;
    }
    this.active = prefersDarkmode;
  }
  render() {
    return (index.h(index.Host, null, index.h("button", { "aria-labelledby": "toggleLabel" }, index.h("span", { class: "sr-label", id: "toggleLabel" }, this.label, ", ", this.active ? 'on' : 'off'), index.h("span", { id: "knob", part: "knob", "aria-hidden": "true" }, !this.active ? (index.h("slot", { key: "a", name: "iconIdle" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" }, index.h("circle", { cx: "12", cy: "12", r: "5" }), index.h("line", { x1: "12", y1: "1", x2: "12", y2: "3" }), index.h("line", { x1: "12", y1: "21", x2: "12", y2: "23" }), index.h("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }), index.h("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }), index.h("line", { x1: "1", y1: "12", x2: "3", y2: "12" }), index.h("line", { x1: "21", y1: "12", x2: "23", y2: "12" }), index.h("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }), index.h("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })))) : (index.h("slot", { key: "b", name: "iconActive" }, index.h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" }, index.h("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }))))))));
  }
  static get watchers() { return {
    "active": ["setHTMLDataTheme"]
  }; }
};
DarkmodeToggle.style = darkmodeToggleCss;

exports.eg_darkmode_toggle = DarkmodeToggle;
