
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-IWXQXRI4.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-XAH54N4R.js"
    ],
    "route": "/estimation-projet"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1735, hash: '54acd2b881848c2de99932945b915bb781a9debcc92c59444d00b4cc3b1269ea', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1328, hash: 'b1bd57738b6711847d3caf5b4802cda955371836d61808c8d358c9fb060b5ce8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 76907, hash: '5d037d5d0e5882509ff138a1c43f5705682cbf39e6246c3b9fcc01bc446e7f2b', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'index.html': {size: 142962, hash: 'c66a29be427ef3fb52464bd9cb26aaf5baca02c58fb6265b582d48c2945d7035', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XXD2COIN.css': {size: 5500, hash: 'TKyWn8cYyJg', text: () => import('./assets-chunks/styles-XXD2COIN_css.mjs').then(m => m.default)}
  },
};
