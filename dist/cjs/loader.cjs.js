'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1445f9ac.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

/*
 Stencil Client Patch Esm v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (index.BUILD.cssVarShim && !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-6ca600c2.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["eg-darkmode-toggle.cjs",[[1,"eg-darkmode-toggle",{"label":[1],"active":[1540],"iconOnly":[516,"icon-only"]},[[0,"click","toggleActive"],[1,"touchstart","setStartCoordinate"],[1,"touchmove","swipeToggle"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
