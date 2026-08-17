
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-AWT35YGK.js",
      "chunk-FEK4Q3AW.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L4O7XSSP.js",
      "chunk-FEK4Q3AW.js"
    ],
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "redirectTo": "/portfolio",
    "route": "/realisations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-TG72NWKE.js"
    ],
    "route": "/estimation-projet"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-T2SQIM3C.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B2VIK2CI.js"
    ],
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2041, hash: 'f1b3a69bae151d67f55c195d80002494e456b8ad86ad5ba05c0f3f6b3d52a297', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1634, hash: '759c31fbc2a992cb98b99ee3b5e85f1656e95f6af6e23127e43120326969e325', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 95996, hash: 'd6d8257269096b0f321921f2070d990a8c81cb9baf68582cd5b10264de3cf3ee', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 124705, hash: '97f811a67810987865f58fae1a6e5da06ccd0b1b52d157df9a3097487013da32', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 126765, hash: '97dd5196a4decf025e8cf0d53b1147c04221432cb5dedc622bf82e7ca91ad3ef', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 77125, hash: '5898e0c8dd4cfb244193685ce6324f8f126b7506193c20f612bdbe0a91d3e629', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 80417, hash: '20bc05872b240a377c8d3f8c209b53a666b98c232940e02f2c1f1090f9c571ea', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-S5CEN6OC.css': {size: 6218, hash: 'xZmwsQ9m8CI', text: () => import('./assets-chunks/styles-S5CEN6OC_css.mjs').then(m => m.default)}
  },
};
