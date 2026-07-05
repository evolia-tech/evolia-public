
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-VO6CDV5Y.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-G7CFCQTP.js"
    ],
    "route": "/estimation-projet"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1735, hash: '9fcb68f53b2cdff1424c18c9e6473f6ed746fa0e03bf1599ad5c3cd6ed893e90', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1328, hash: '2ee81acc769cdd4bb8fcb2a84a24567aba80ff2dc10adc7836ef1bdebb631d30', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 76307, hash: '20e61dff2207286fe49d5fa3b18115de2f91458b7ced50cb362200d213a3d97c', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'index.html': {size: 152521, hash: '7d695a4f32df02851a4ab216422da814846eea6748540fdec72365feb6920496', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-XXD2COIN.css': {size: 5500, hash: 'TKyWn8cYyJg', text: () => import('./assets-chunks/styles-XXD2COIN_css.mjs').then(m => m.default)}
  },
};
