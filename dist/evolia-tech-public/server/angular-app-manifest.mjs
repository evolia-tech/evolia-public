
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-5CY3VNYM.js",
      "chunk-FDTZDUNQ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-N3WRUC7D.js",
      "chunk-FDTZDUNQ.js"
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
      "chunk-3FEYGEMB.js"
    ],
    "route": "/estimation-projet"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-DYLGQAPT.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3WOAZVNX.js"
    ],
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2041, hash: 'd052b29f5447b0fb3254d35ac52af66dd04406a88432303a85657688bded3da6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1634, hash: '5a54d7b94f5cf6661cd58a01051e36fb6edb3fa7f9a1e91c51139926c7a3feca', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 132515, hash: '698d30a80da98723ddf825f46a4b0d7af05369bf0aef032b36094819c3861023', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 97583, hash: 'f5d45fb730ea09c8ff44a531c8db7d62f8d6380bdcfae6f96498950a87cdbe96', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 131069, hash: '43cbd1ee0608a72ff39a4a735022ca6e3ff3c6b9cdff5a67ea82f84a57848400', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 81445, hash: '198b8168a6e9f7a1dffa631998c8333a8e463382cb6ff7dd857f0b01c3ea8ca4', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 83825, hash: '579705c9ebcfd579c3452697ff63a63b3890bfca7c898f4f89a9158f9d799922', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'styles-NURMBUMH.css': {size: 6509, hash: 'ZHvWkRB2Y7U', text: () => import('./assets-chunks/styles-NURMBUMH_css.mjs').then(m => m.default)}
  },
};
