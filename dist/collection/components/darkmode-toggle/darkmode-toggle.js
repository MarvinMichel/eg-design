import { Component, Prop, h, Listen, Host, Watch } from '@stencil/core';
export class DarkmodeToggle {
  constructor() {
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
    return (h(Host, null,
      h("button", { "aria-labelledby": "toggleLabel" },
        h("span", { class: "sr-label", id: "toggleLabel" },
          this.label,
          ", ",
          this.active ? 'on' : 'off'),
        h("span", { id: "knob", part: "knob", "aria-hidden": "true" }, !this.active ? (h("slot", { key: "a", name: "iconIdle" },
          h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" },
            h("circle", { cx: "12", cy: "12", r: "5" }),
            h("line", { x1: "12", y1: "1", x2: "12", y2: "3" }),
            h("line", { x1: "12", y1: "21", x2: "12", y2: "23" }),
            h("line", { x1: "4.22", y1: "4.22", x2: "5.64", y2: "5.64" }),
            h("line", { x1: "18.36", y1: "18.36", x2: "19.78", y2: "19.78" }),
            h("line", { x1: "1", y1: "12", x2: "3", y2: "12" }),
            h("line", { x1: "21", y1: "12", x2: "23", y2: "12" }),
            h("line", { x1: "4.22", y1: "19.78", x2: "5.64", y2: "18.36" }),
            h("line", { x1: "18.36", y1: "5.64", x2: "19.78", y2: "4.22" })))) : (h("slot", { key: "b", name: "iconActive" },
          h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "1", "stroke-linecap": "round", "stroke-linejoin": "round" },
            h("path", { d: "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" }))))))));
  }
  static get is() { return "eg-darkmode-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() { return {
    "$": ["darkmode-toggle.scss"]
  }; }
  static get styleUrls() { return {
    "$": ["darkmode-toggle.css"]
  }; }
  static get properties() { return {
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The label that's been read by screen readers"
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "'darkmode theme'"
    },
    "active": {
      "type": "boolean",
      "mutable": true,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "The current state of the toggle button"
      },
      "attribute": "active",
      "reflect": true
    },
    "iconOnly": {
      "type": "boolean",
      "mutable": false,
      "complexType": {
        "original": "boolean",
        "resolved": "boolean",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": "Only use an icon as the component instead of a toggle button"
      },
      "attribute": "icon-only",
      "reflect": true,
      "defaultValue": "false"
    }
  }; }
  static get watchers() { return [{
      "propName": "active",
      "methodName": "setHTMLDataTheme"
    }]; }
  static get listeners() { return [{
      "name": "click",
      "method": "toggleActive",
      "target": undefined,
      "capture": false,
      "passive": false
    }, {
      "name": "touchstart",
      "method": "setStartCoordinate",
      "target": undefined,
      "capture": false,
      "passive": true
    }, {
      "name": "touchmove",
      "method": "swipeToggle",
      "target": undefined,
      "capture": false,
      "passive": true
    }]; }
}
