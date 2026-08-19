
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5L5HFT.js",
      "chunk-RHU3GWFD.js",
      "chunk-NTS6DYXB.js",
      "chunk-TU33MPNI.js",
      "chunk-EKIKVSQX.js",
      "chunk-V2T2H3D3.js",
      "chunk-7ROTY2IC.js",
      "chunk-2W5KZ4ON.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5L5HFT.js",
      "chunk-RHU3GWFD.js",
      "chunk-NTS6DYXB.js",
      "chunk-TU33MPNI.js",
      "chunk-EKIKVSQX.js",
      "chunk-V2T2H3D3.js",
      "chunk-7ROTY2IC.js",
      "chunk-2W5KZ4ON.js"
    ],
    "route": "/portfolio"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/liko-auto"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/association-mahol-diaspora"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/for-you-media-africa"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/soprano-vesinet"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/amore-mio"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/stella"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/celebrate-congo"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/presidentielles-cameroun"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/presidentielles-senegal"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/parti-politique-purs"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/elites-voyages"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/portfolio/*"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5L5HFT.js",
      "chunk-RHU3GWFD.js",
      "chunk-NTS6DYXB.js",
      "chunk-TU33MPNI.js",
      "chunk-EKIKVSQX.js",
      "chunk-V2T2H3D3.js",
      "chunk-7ROTY2IC.js",
      "chunk-2W5KZ4ON.js"
    ],
    "redirectTo": "/portfolio",
    "route": "/realisations"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5L5HFT.js",
      "chunk-RHU3GWFD.js",
      "chunk-NTS6DYXB.js",
      "chunk-TU33MPNI.js",
      "chunk-EKIKVSQX.js",
      "chunk-V2T2H3D3.js",
      "chunk-7ROTY2IC.js",
      "chunk-2W5KZ4ON.js"
    ],
    "route": "/contact"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5L5HFT.js",
      "chunk-RHU3GWFD.js",
      "chunk-NTS6DYXB.js",
      "chunk-TU33MPNI.js",
      "chunk-EKIKVSQX.js",
      "chunk-V2T2H3D3.js",
      "chunk-7ROTY2IC.js",
      "chunk-2W5KZ4ON.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5L5HFT.js",
      "chunk-RHU3GWFD.js",
      "chunk-NTS6DYXB.js",
      "chunk-TU33MPNI.js",
      "chunk-EKIKVSQX.js",
      "chunk-V2T2H3D3.js",
      "chunk-7ROTY2IC.js",
      "chunk-2W5KZ4ON.js"
    ],
    "route": "/mentions-legales"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-JS5L5HFT.js",
      "chunk-RHU3GWFD.js",
      "chunk-NTS6DYXB.js",
      "chunk-TU33MPNI.js",
      "chunk-EKIKVSQX.js",
      "chunk-V2T2H3D3.js",
      "chunk-7ROTY2IC.js",
      "chunk-2W5KZ4ON.js"
    ],
    "route": "/politique-de-confidentialite"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-PXJOFCWE.js"
    ],
    "route": "/estimation-projet"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 6322, hash: 'd2e1a26afd646fff8820184180cd76de81d4b18ff288621b6486ae4deeb933d4', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 5922, hash: '6d5f7a57d9e655bae0fa9e7946b5dad6ddcb3b22cb8df6f3cce7fa2887914db6', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/for-you-media-africa/index.html': {size: 74297, hash: '749dfc48769a6e952d93978388a319d07b6a1ca54c4fa9b44e312a644a0448a4', text: () => import('./assets-chunks/portfolio_for-you-media-africa_index_html.mjs').then(m => m.default)},
    'portfolio/stella/index.html': {size: 69531, hash: '75ee86635502acd5bf62e412edb02344fd8f230afe61d16995195695ad9ee63b', text: () => import('./assets-chunks/portfolio_stella_index_html.mjs').then(m => m.default)},
    'portfolio/presidentielles-cameroun/index.html': {size: 55959, hash: '2dcf302ababc525ac74d14f29963471ca1bc71f5133e5c9c02dd2ed7a20999e5', text: () => import('./assets-chunks/portfolio_presidentielles-cameroun_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 111345, hash: '75464db3573841c1e988961b6ba6492d2585b40f54152724abbed545d4c1eb55', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 144810, hash: '079913fc12374ce4c1ab907c778d3aaf759ee1a54f195e0cd5b40d3c2827aae4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/parti-politique-purs/index.html': {size: 55927, hash: '1e519c1e03fb60e0dc5cd8188073d507d32c17a949a1b52050502d249d6d5d77', text: () => import('./assets-chunks/portfolio_parti-politique-purs_index_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 64453, hash: '342657157828eecc6056ec333f0a749bb64028187898e7eb804f92f6cf7df2b9', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 95010, hash: '52eae9d5c745e7f5d79942589d55f08dd90ddfb77467809817abb4b727de54c1', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 83073, hash: 'f34be4b0dd3ca8577c912f3e3265b9828cdddd159ffe6f7ec088688193782456', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'portfolio/association-mahol-diaspora/index.html': {size: 62623, hash: '1cfc70041179a822b1da6c90cf247bb6fd2c41179365323036fc9fb064ae0ab6', text: () => import('./assets-chunks/portfolio_association-mahol-diaspora_index_html.mjs').then(m => m.default)},
    'portfolio/presidentielles-senegal/index.html': {size: 56097, hash: '6fdaa14da3d2c9ebafdd9a7c71f6bf180282ff1da4bdb2f3e961a772f58f8ef3', text: () => import('./assets-chunks/portfolio_presidentielles-senegal_index_html.mjs').then(m => m.default)},
    'portfolio/amore-mio/index.html': {size: 56496, hash: '06724c75ed68dc3ced3ad63f582559fa9040682abde627008e8daf552c6f9d55', text: () => import('./assets-chunks/portfolio_amore-mio_index_html.mjs').then(m => m.default)},
    'portfolio/celebrate-congo/index.html': {size: 56079, hash: '88219dc3ed6d13852d39e42a64979028728ecdc424f7a8e84b2ec7067b5905c6', text: () => import('./assets-chunks/portfolio_celebrate-congo_index_html.mjs').then(m => m.default)},
    'portfolio/liko-auto/index.html': {size: 72326, hash: '748ad18e3dee5a1c7c3a95a4516e2a08550776c38b19dbacaf6178376cf5db2d', text: () => import('./assets-chunks/portfolio_liko-auto_index_html.mjs').then(m => m.default)},
    'portfolio/elites-voyages/index.html': {size: 56058, hash: '212c821acd5a9206fd5c85f5f58042b7d165bf7f17f3264ac9ac17efe6b10cf4', text: () => import('./assets-chunks/portfolio_elites-voyages_index_html.mjs').then(m => m.default)},
    'politique-de-confidentialite/index.html': {size: 84546, hash: '036245589746e2fc198fb59167dadf3bfbbfb88d61dae7d2bfc2fd3d2c55118f', text: () => import('./assets-chunks/politique-de-confidentialite_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 144684, hash: '1ac03f50e8b7cfac8466219a44b74f70920e6134ed84b10e50f7375867c1e029', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'portfolio/soprano-vesinet/index.html': {size: 66375, hash: '691bd876bc3c57041a731de163f659904bf17c25e934e9e6a7b72578a29216e4', text: () => import('./assets-chunks/portfolio_soprano-vesinet_index_html.mjs').then(m => m.default)},
    'styles-CENQRYCQ.css': {size: 6495, hash: 'U6KWJFFkw4I', text: () => import('./assets-chunks/styles-CENQRYCQ_css.mjs').then(m => m.default)}
  },
};
