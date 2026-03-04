
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OOHY3CCC.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: '66a3488796ae5f77990050a6f8edf7b9a828fcc0b112ea1cc74471a554389aa3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: 'b7998538be7ffdb6e1572cf99ecc41a815d99418b13fbcd71585decad02cc469', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 39395, hash: 'bd3cd351b2fe2349b315535db02181bbe1cdda6391c2f0d57ff46fb00e61eba9', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z4LDPMX7.css': {size: 2411, hash: 'TpR1DzENsEo', text: () => import('./assets-chunks/styles-Z4LDPMX7_css.mjs').then(m => m.default)}
  },
};
