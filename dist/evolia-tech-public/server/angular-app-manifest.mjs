
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-HDJQV3AW.js"
    ],
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1633, hash: '5de391ea5648ff44355f603f308110e7eeaea4baaf47f0f0a314be67af8f21b4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1226, hash: 'e3cb6e1aba5fce7c8d45fa96b800c9f4cf56b20bf47f8bb5ab740ba132ceb830', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 49729, hash: '3a73c590fea02826f4f1d086faffeb68ecf9004dd2198fafea0005fd9db597bb', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-Z4LDPMX7.css': {size: 2411, hash: 'TpR1DzENsEo', text: () => import('./assets-chunks/styles-Z4LDPMX7_css.mjs').then(m => m.default)}
  },
};
