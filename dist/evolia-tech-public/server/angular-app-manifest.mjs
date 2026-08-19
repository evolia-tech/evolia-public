
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
    'portfolio/index.html': {size: 111345, hash: '75464db3573841c1e988961b6ba6492d2585b40f54152724abbed545d4c1eb55', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'index.html': {size: 144810, hash: '079913fc12374ce4c1ab907c778d3aaf759ee1a54f195e0cd5b40d3c2827aae4', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/presidentielles-cameroun/index.html': {size: 55959, hash: '2dcf302ababc525ac74d14f29963471ca1bc71f5133e5c9c02dd2ed7a20999e5', text: () => import('./assets-chunks/portfolio_presidentielles-cameroun_index_html.mjs').then(m => m.default)},
    'portfolio/parti-politique-purs/index.html': {size: 55941, hash: 'cfc50bff74c2d4cc5145791f45ccd49bac8e2e5d6f22619d455c14494b2b5c4b', text: () => import('./assets-chunks/portfolio_parti-politique-purs_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 95014, hash: '914681923e2d3e72e265f82969e15e1edb8a28f350ba45d0ebb5760803556882', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 64458, hash: '091f24f8436d5bf5c36d3bdbb7d15551bba631f30a117003f6658335b00a82a2', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'portfolio/association-mahol-diaspora/index.html': {size: 62637, hash: 'a7ce2d884e4d9edec3018e46b0419ea616f9b89bfd25ea9e63a6f2ecbfafc914', text: () => import('./assets-chunks/portfolio_association-mahol-diaspora_index_html.mjs').then(m => m.default)},
    'portfolio/amore-mio/index.html': {size: 56496, hash: '7e05b680982fa321c9dcb66acbfc938e2b2f4b57a7cba03d5bed77716afdba69', text: () => import('./assets-chunks/portfolio_amore-mio_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 83073, hash: '3654e2402857c888c5873f7cde99c956610ffaf69e334a7462bf51ac49db8d91', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'portfolio/presidentielles-senegal/index.html': {size: 56097, hash: '6b778e252aa0aab6ea13fcda9f1c597a7d3745e2fdadbea92b78ae5b8b2cffc3', text: () => import('./assets-chunks/portfolio_presidentielles-senegal_index_html.mjs').then(m => m.default)},
    'portfolio/liko-auto/index.html': {size: 72312, hash: '9a56f4a39268a2f0cf42f9e76b4d5e5b02c44122a4ec3a7296a2773f341c0785', text: () => import('./assets-chunks/portfolio_liko-auto_index_html.mjs').then(m => m.default)},
    'portfolio/celebrate-congo/index.html': {size: 56079, hash: 'b0d46e6e893efded1dd01310c4db973aadeaf20e67e879a531a34ad29ec7f3aa', text: () => import('./assets-chunks/portfolio_celebrate-congo_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 144672, hash: '3e2d53dddf7472fca2ea794990d050c9236a8648ba1526ae1399162981cce30e', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'politique-de-confidentialite/index.html': {size: 84550, hash: 'd9b998f844077404ac1752626569fc540f832b4c2aaa3b19fc758e41876712b7', text: () => import('./assets-chunks/politique-de-confidentialite_index_html.mjs').then(m => m.default)},
    'portfolio/elites-voyages/index.html': {size: 56058, hash: 'bb47af8fa56352e22300f5ba8245e1744381728a7d85abe2e6391f128b03109a', text: () => import('./assets-chunks/portfolio_elites-voyages_index_html.mjs').then(m => m.default)},
    'portfolio/soprano-vesinet/index.html': {size: 66375, hash: '7e047614938caaf3046228bc4649cc2ab3532ad1f4a0493058fa6fa16f4f3515', text: () => import('./assets-chunks/portfolio_soprano-vesinet_index_html.mjs').then(m => m.default)},
    'styles-CENQRYCQ.css': {size: 6495, hash: 'U6KWJFFkw4I', text: () => import('./assets-chunks/styles-CENQRYCQ_css.mjs').then(m => m.default)}
  },
};
