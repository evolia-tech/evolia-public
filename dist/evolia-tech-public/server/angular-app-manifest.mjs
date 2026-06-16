
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-AMGKEFJ6.js"
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
    'index.csr.html': {size: 1735, hash: 'b359e5485b16e815a813bbb2e59d17f5686fe5ce7df3c27398c39d671ebf8d55', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1328, hash: '255fec2d1a01854e21ab189e9f11a4f040777a04d3d78722049e1d965ff55c72', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 66281, hash: '4bbc82d2d73208e2ef019f7dc76b535ead6f0ac74215d24d810611becf5d8dad', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'index.html': {size: 131476, hash: '3b0c76a6a66fcbb93743b65ace8e77894b875930d085d5ff8f240f052aaec443', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XXD2COIN.css': {size: 5500, hash: 'TKyWn8cYyJg', text: () => import('./assets-chunks/styles-XXD2COIN_css.mjs').then(m => m.default)}
  },
};
