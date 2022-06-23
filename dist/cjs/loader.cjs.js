'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-183af03c.js');

/*
 Stencil Client Patch Esm v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["eg-darkmode-toggle.cjs",[[1,"eg-darkmode-toggle",{"label":[1],"active":[1540],"iconOnly":[516,"icon-only"]},[[0,"click","toggleActive"],[1,"touchstart","setStartCoordinate"],[1,"touchmove","swipeToggle"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
