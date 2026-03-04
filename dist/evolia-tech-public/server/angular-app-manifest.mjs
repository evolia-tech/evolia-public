
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-OY76DCV4.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: 'eea7fe37f7144186618d490c59c8971ce9c534d1609b7be5f61f62a834f4baef', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: 'b39e1dd5424cd05d7480f802d27c6fbcb5831cd3123452bd138cddc48f75a85b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 14407, hash: 'bfb3b56e7e5fc1c0e72ac320a672acd9584c887f9ae87a04e5bb6847de800433', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z4LDPMX7.css': {size: 2411, hash: 'TpR1DzENsEo', text: () => import('./assets-chunks/styles-Z4LDPMX7_css.mjs').then(m => m.default)}
  },
};
