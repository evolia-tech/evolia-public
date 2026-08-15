
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-FTE5WVIO.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-E4IR55O5.js"
    ],
    "route": "/estimation-projet"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PA66OQPX.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-5ZLYDZUW.js"
    ],
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2041, hash: 'd488d1ca5258666fa0662dbd08ba0cf349cf97b926fc359300053745deb190bb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1634, hash: 'bd3680105393e2985da87fd2a42394e10e8cd244b1800efaed7a2c261c509b77', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 81909, hash: '2a6d9d77da3a02c8c3baf87b757444b427e281c0b7da3e7a19fa41413a2de7fe', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 78633, hash: 'e25ff12d203911d481a9733aed73473f8b0be028166f220f9d85e88c190ed723', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'index.html': {size: 122627, hash: '8d09c6422f925cfad3308689d21bf082f03c90e4ebafb8ca9dad57463df217bc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 132086, hash: '6c091d2ce4f999cc171ecf251ed8c3f9152023733de0812828b5303915adbc75', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-S5CEN6OC.css': {size: 6218, hash: 'xZmwsQ9m8CI', text: () => import('./assets-chunks/styles-S5CEN6OC_css.mjs').then(m => m.default)}
  },
};
