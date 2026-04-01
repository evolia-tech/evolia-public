
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-KTSVASLX.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: 'f4f89c02db029eca8d1ae48a0dd04e537a74d390f72d4b0f69eab0fba5790e01', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: 'a97ed8111d336e1a5f910e455e5e293f08276bb8e7f58ed5e4d40776e733335d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 98097, hash: 'a0028a64ec4a65d596084d42d1c1cdde1e10e1caa38cf588ca93d17fb6a72edb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-52LDGHUX.css': {size: 2411, hash: 'RZki6UMd8Ps', text: () => import('./assets-chunks/styles-52LDGHUX_css.mjs').then(m => m.default)}
  },
};
