
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-DOY3Q372.js",
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
    'index.csr.html': {size: 2041, hash: '082e5316e6e5da807bd37e55b6d10b13ac8496528eacf72b960f7b29a554fde1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1634, hash: '45a214ac2f05e15973d0cbdc6f09de0a4d50e5323cab7f812a1772b6640e2f4d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 97583, hash: '274f0a984fc7828fd90733b65ffd70298c677454fdf86d4323ae0d6cea95af54', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 132515, hash: 'daed28c8f33efbacb27ff8a4a15b45dacef20c74517c5f682a0f7310abfc3991', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 131069, hash: 'ee5344a38dc821dbceb38ee9fa6e71d2a90d636e58c198fe50eef6d5c34e67e1', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 83822, hash: '881c753eb28332caf1c31e8416410c16e811e03bee03b706d2373253a5cb3d05', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 81448, hash: '8b025fa0979b69b0e96b4c5336ab8961a2d234bc42dcd0434f0baaae31815238', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'styles-NURMBUMH.css': {size: 6509, hash: 'ZHvWkRB2Y7U', text: () => import('./assets-chunks/styles-NURMBUMH_css.mjs').then(m => m.default)}
  },
};
