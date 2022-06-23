'use strict';

const index = require('./index-183af03c.js');

/*
 Stencil Client Patch Browser v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('eg-design.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["eg-darkmode-toggle.cjs",[[1,"eg-darkmode-toggle",{"label":[1],"active":[1540],"iconOnly":[516,"icon-only"]},[[0,"click","toggleActive"],[1,"touchstart","setStartCoordinate"],[1,"touchmove","swipeToggle"]]]]]], options);
});
