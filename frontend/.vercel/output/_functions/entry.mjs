import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BsOnRXby.mjs';
import { manifest } from './manifest_CeGn7R2H.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/dashboard.astro.mjs');
const _page2 = () => import('./pages/editor/_id_.astro.mjs');
const _page3 = () => import('./pages/login.astro.mjs');
const _page4 = () => import('./pages/markdown-page.astro.mjs');
const _page5 = () => import('./pages/post/_slug_.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/dashboard.astro", _page1],
    ["src/pages/editor/[id].astro", _page2],
    ["src/pages/login.astro", _page3],
    ["src/pages/markdown-page.md", _page4],
    ["src/pages/post/[slug].astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2b5b0dcd-dad3-4061-9043-25390940c913",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
