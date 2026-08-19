
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
    'index.csr.html': {size: 6437, hash: '3f9e937d805cb2858139ca0f8b769a38c06a5871107492e59fa885714cd00271', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 6037, hash: '9c4ae67092e5a9f641535f0fe6cc1e77ef758224de4a3f44ca199a7383fa46db', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'portfolio/for-you-media-africa/index.html': {size: 74679, hash: '2ee1cfe166d2fd2f9052766e13d05ad36cc03dc0211b68ba5ee4d09385d4361d', text: () => import('./assets-chunks/portfolio_for-you-media-africa_index_html.mjs').then(m => m.default)},
    'portfolio/index.html': {size: 111459, hash: 'd27b87e3cd617ccdb43dc1d52cc6bab97d2ed1bcaaf774408ef3b4fab7f1665e', text: () => import('./assets-chunks/portfolio_index_html.mjs').then(m => m.default)},
    'portfolio/stella/index.html': {size: 69913, hash: '3ecca84e6fb8a83206d408d12b526a8547eec6b6d80a0029a3d33a745c00fe3f', text: () => import('./assets-chunks/portfolio_stella_index_html.mjs').then(m => m.default)},
    'index.html': {size: 145662, hash: '2e7e0eb70160b666049a335142aa6c3e347b2d47da5a8ce1b47576a5659fcfab', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'portfolio/parti-politique-purs/index.html': {size: 56309, hash: '00dc5dd910212c86244eda0554b79fc131303c72b9fcbaafd85c0eaac592882b', text: () => import('./assets-chunks/portfolio_parti-politique-purs_index_html.mjs').then(m => m.default)},
    'portfolio/presidentielles-cameroun/index.html': {size: 56355, hash: 'a1cec52aa8eaa9f6441d6dce2a4c924bd1e4ed2e1c2b30392757f80e24b17fb6', text: () => import('./assets-chunks/portfolio_presidentielles-cameroun_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 95128, hash: '05c6125bf397903ba8f38dcb4d0955a2da33e4dd70d0bc4bf0b42df821fc7cd7', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'estimation-projet/index.html': {size: 64572, hash: '48e1204bdd3800e5c28bfd488a06e1afe16e2ee066a0db1b0d4248bf623fda73', text: () => import('./assets-chunks/estimation-projet_index_html.mjs').then(m => m.default)},
    'mentions-legales/index.html': {size: 83187, hash: '3a54e6cfad0cfb1409e68a726ff1afe38b28f542300a69b2dff7e6ccdc9ccb25', text: () => import('./assets-chunks/mentions-legales_index_html.mjs').then(m => m.default)},
    'portfolio/amore-mio/index.html': {size: 56878, hash: '1646b3e370678123f947d2cc713a03ee9cbd99f74f6b38ee5f08c3919bfe8700', text: () => import('./assets-chunks/portfolio_amore-mio_index_html.mjs').then(m => m.default)},
    'portfolio/association-mahol-diaspora/index.html': {size: 63019, hash: '517efd8240e7409348982c700ea0e33659322655fc134e6528262777578833e3', text: () => import('./assets-chunks/portfolio_association-mahol-diaspora_index_html.mjs').then(m => m.default)},
    'portfolio/presidentielles-senegal/index.html': {size: 56465, hash: '40bac1a83ceec84b7eb46ee028f2101643c57e83a7a66c67d72eac0355c0fd89', text: () => import('./assets-chunks/portfolio_presidentielles-senegal_index_html.mjs').then(m => m.default)},
    'portfolio/celebrate-congo/index.html': {size: 56447, hash: '199ab379d29fb923ce6ac76a6e93e96d403792e700d5f6f63331b2ea0869225d', text: () => import('./assets-chunks/portfolio_celebrate-congo_index_html.mjs').then(m => m.default)},
    'portfolio/liko-auto/index.html': {size: 72708, hash: '154081396baa25bc3f017ed35c5c22de55e6806510b70af16dffa06d3d13932b', text: () => import('./assets-chunks/portfolio_liko-auto_index_html.mjs').then(m => m.default)},
    'about/index.html': {size: 144786, hash: '8a865b8a5b55ed6ac7161d9ee5076007a541e26c00165d05fc8b0cc83ef0c53a', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'politique-de-confidentialite/index.html': {size: 84664, hash: 'c75cad5ea4ebd8b28d77c8fc6462018b853d776b232f8e842d2194265bb1a0a2', text: () => import('./assets-chunks/politique-de-confidentialite_index_html.mjs').then(m => m.default)},
    'portfolio/elites-voyages/index.html': {size: 56440, hash: '91f30cf2576add98ea80714645df22de1ce9155090be45b83898dcfc6dbdb48c', text: () => import('./assets-chunks/portfolio_elites-voyages_index_html.mjs').then(m => m.default)},
    'portfolio/soprano-vesinet/index.html': {size: 66757, hash: '8624bed4d28e09a930289cc01e65e7c34e8ffdf488e1b6db2850707f1ff3a8a7', text: () => import('./assets-chunks/portfolio_soprano-vesinet_index_html.mjs').then(m => m.default)},
    'styles-CENQRYCQ.css': {size: 6495, hash: 'U6KWJFFkw4I', text: () => import('./assets-chunks/styles-CENQRYCQ_css.mjs').then(m => m.default)}
  },
};
