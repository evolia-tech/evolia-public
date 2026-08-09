
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-75YJRZKZ.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-3PN5W3UO.js"
    ],
    "route": "/estimation-projet"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PP2TXLZ6.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JCH4MICW.js"
    ],
    "route": "/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1990, hash: 'c2a2471290cf9eba8bbb166ba8bc37f30df0000ed506301ca71160e4d1d92b85', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1583, hash: '129523c91bc276a934d69677d55c438e1bf57e42d1a1d1d72fc93a17675ceb7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 78581, hash: '619e7f43406f593e0434bbbc016c18a9b87811d003debac9b4a68c9f26281bc0', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 81752, hash: 'f10efba40a4a6846461acd996f21815f99e2b67d1c89b44eb335f57eb9eec9a1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 122574, hash: 'b8e42177defaa70b672bdd24143eb25f273764cecdbb2665f5342d5db1460995', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 115957, hash: '5e496745abda938df10913c202973538976dad0553a6405298f02834c46cb02f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'styles-S5CEN6OC.css': {size: 6218, hash: 'xZmwsQ9m8CI', text: () => import('./assets-chunks/styles-S5CEN6OC_css.mjs').then(m => m.default)}
  },
};
