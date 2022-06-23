import { p as promiseResolve, b as bootstrapLazy } from './index-ccd61a83.js';

/*
 Stencil Client Patch Browser v2.15.0 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["eg-darkmode-toggle",[[1,"eg-darkmode-toggle",{"label":[1],"active":[1540],"iconOnly":[516,"icon-only"]},[[0,"click","toggleActive"],[1,"touchstart","setStartCoordinate"],[1,"touchmove","swipeToggle"]]]]]], options);
});
