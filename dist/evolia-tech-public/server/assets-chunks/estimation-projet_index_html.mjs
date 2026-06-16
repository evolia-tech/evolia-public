export default `<!DOCTYPE html><html lang="fr" data-beasties-container><head>
  <meta charset="utf-8">
  <title>Evolia Tech</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css" id="fa-auto-css">:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.\$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.\$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}</style><link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="preload" href="/public/fonts/inter/inter-variable.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="/public/fonts/sora/sora-variable.woff2" as="font" type="font/woff2" crossorigin>
<style>*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}html{-webkit-text-size-adjust:100%;text-size-adjust:100%;scroll-behavior:smooth;font-size:16px;min-height:100%}body{min-height:100vh;min-height:100dvh;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-rendering:optimizeLegibility;line-height:1.5}h2,h3{font-size:inherit;font-weight:inherit;overflow-wrap:break-word}p{overflow-wrap:break-word}ul{list-style:none}a{color:inherit;text-decoration:none;-webkit-tap-highlight-color:transparent}img,svg{display:block;max-width:100%}img{height:auto;-webkit-user-drag:none;-webkit-user-select:none;user-select:none}button{font:inherit;color:inherit;background:none;border:none;outline:none}button{cursor:pointer;-webkit-tap-highlight-color:transparent}@media(prefers-reduced-motion:reduce){*,*:before,*:after{animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}@font-face{font-family:Inter;src:url(/public/fonts/inter/inter-variable.woff2) format("woff2-variations");font-weight:100 900;font-style:normal;font-display:swap}@font-face{font-family:Sora;src:url(/public/fonts/sora/sora-variable.woff2) format("woff2-variations");font-weight:100 900;font-style:normal;font-display:swap}body{font-family:Inter,sans-serif;font-size:1rem;font-weight:400;color:#f9f9d3;background-color:#0a0325}h2,h3{font-family:var("Sora", sans-serif);font-weight:900;line-height:1.1;letter-spacing:-1px;color:#f9f9d3}h2{font-size:3rem}@media(max-width:992px){h2{font-size:2.5rem}}@media(max-width:768px){h2{font-size:2rem}}h3{font-size:2rem}@media(max-width:768px){h3{font-size:1.5rem}}p{font-size:1.125rem;line-height:1.7;color:#f9f9d3cc}a{transition:color .3s ease}a:hover{color:#14694d}button{font-family:Sora,sans-serif}.container{max-width:1400px;margin:0 auto;padding:0 1rem;width:100%}
</style><link rel="stylesheet" href="styles-XXD2COIN.css" media="print" onload="this.media='all'"><noscript><link rel="stylesheet" href="styles-XXD2COIN.css"></noscript><style ng-app-id="ng">.header[_ngcontent-ng-c3263916076]{position:fixed;top:0;left:0;width:100%;z-index:1000;transition:all .4s ease-in-out;padding:1.5rem 0;background-color:transparent;backdrop-filter:blur(0);-webkit-backdrop-filter:blur(0);border-bottom:1px solid transparent}.header__container[_ngcontent-ng-c3263916076]{display:flex;align-items:center;justify-content:space-between}.header__brand[_ngcontent-ng-c3263916076]{display:flex;align-items:center;gap:1rem;text-decoration:none;-webkit-user-select:none;user-select:none}.header__brand[_ngcontent-ng-c3263916076]   .header__logo-icon[_ngcontent-ng-c3263916076]{height:75px;width:auto;transition:height .3s ease}.header__brand[_ngcontent-ng-c3263916076]   .header__logo-text[_ngcontent-ng-c3263916076]{font-family:Sora,sans-serif;font-weight:700;font-size:1.8rem;color:#f9f9d3;margin-top:20px}.header[_ngcontent-ng-c3263916076]   nav[_ngcontent-ng-c3263916076]   ul[_ngcontent-ng-c3263916076]{display:flex;gap:3rem}.header[_ngcontent-ng-c3263916076]   nav[_ngcontent-ng-c3263916076]   ul[_ngcontent-ng-c3263916076]   li[_ngcontent-ng-c3263916076]   a[_ngcontent-ng-c3263916076]{position:relative;font-size:1.05rem;font-family:Inter,sans-serif;font-weight:500;color:#a8a5b8;padding:10px 0}.header[_ngcontent-ng-c3263916076]   nav[_ngcontent-ng-c3263916076]   ul[_ngcontent-ng-c3263916076]   li[_ngcontent-ng-c3263916076]   a[_ngcontent-ng-c3263916076]:after{content:"";position:absolute;display:block;bottom:0;width:0;height:2px;background:#f9f9d3;transition:width .3s ease}.header[_ngcontent-ng-c3263916076]   nav[_ngcontent-ng-c3263916076]   ul[_ngcontent-ng-c3263916076]   li[_ngcontent-ng-c3263916076]   a[_ngcontent-ng-c3263916076]:hover{color:#f9f9d3}.header[_ngcontent-ng-c3263916076]   nav[_ngcontent-ng-c3263916076]   ul[_ngcontent-ng-c3263916076]   li[_ngcontent-ng-c3263916076]   a[_ngcontent-ng-c3263916076]:hover:after{width:100%}.header__actions[_ngcontent-ng-c3263916076]{display:flex;align-items:center}.header.scrolled[_ngcontent-ng-c3263916076]{padding:.5rem 0;background-color:#0a0325d9;backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border-bottom:1px solid rgba(249,249,211,.1)}.header.scrolled[_ngcontent-ng-c3263916076]   .header__brand[_ngcontent-ng-c3263916076]   .header__logo-icon[_ngcontent-ng-c3263916076]{height:60px}.header.scrolled[_ngcontent-ng-c3263916076]   .header__brand[_ngcontent-ng-c3263916076]   .header__logo-text[_ngcontent-ng-c3263916076]{margin-top:5px;font-size:1.5rem}</style><style ng-app-id="ng">.footer[_ngcontent-ng-c3387293599]{width:100%;padding-bottom:2rem}.footer[_ngcontent-ng-c3387293599]   .content[_ngcontent-ng-c3387293599]{display:flex;flex-direction:column}.footer[_ngcontent-ng-c3387293599]   .content[_ngcontent-ng-c3387293599]   .bottom[_ngcontent-ng-c3387293599]{display:flex;justify-content:space-between;gap:1rem;font-size:.875rem;border-top:2px solid #1E1A45;padding-top:2rem}.footer[_ngcontent-ng-c3387293599]   .content[_ngcontent-ng-c3387293599]   .bottom[_ngcontent-ng-c3387293599]   p[_ngcontent-ng-c3387293599]{font-size:1rem;color:#a8a5b8}.footer[_ngcontent-ng-c3387293599]   .content[_ngcontent-ng-c3387293599]   .bottom[_ngcontent-ng-c3387293599]   ul[_ngcontent-ng-c3387293599]{display:flex;gap:1.5rem;list-style:none;padding:0;margin:0}.footer[_ngcontent-ng-c3387293599]   .content[_ngcontent-ng-c3387293599]   .bottom[_ngcontent-ng-c3387293599]   ul[_ngcontent-ng-c3387293599]   li[_ngcontent-ng-c3387293599]:last-child{padding-left:1.3rem;border-left:1px solid #A8A5B8}.footer[_ngcontent-ng-c3387293599]   .content[_ngcontent-ng-c3387293599]   .bottom[_ngcontent-ng-c3387293599]   ul[_ngcontent-ng-c3387293599]   li[_ngcontent-ng-c3387293599]   a[_ngcontent-ng-c3387293599]{font-size:1rem;color:#a8a5b8;font-weight:400;text-decoration:none;transition:color .15s ease;line-height:1;width:fit-content}.footer[_ngcontent-ng-c3387293599]   .content[_ngcontent-ng-c3387293599]   .bottom[_ngcontent-ng-c3387293599]   ul[_ngcontent-ng-c3387293599]   li[_ngcontent-ng-c3387293599]   a[_ngcontent-ng-c3387293599]:hover{cursor:pointer;color:#f9f9d3}.footer[_ngcontent-ng-c3387293599]   .brand[_ngcontent-ng-c3387293599]{width:100%;container-type:inline-size;text-align:center;margin-bottom:4rem;margin-top:4rem;display:flex;justify-content:center;overflow:hidden;padding:2rem 0}.footer[_ngcontent-ng-c3387293599]   .brand[_ngcontent-ng-c3387293599]   .brand-container[_ngcontent-ng-c3387293599]{container-type:inline-size;width:100%}.footer[_ngcontent-ng-c3387293599]   .brand[_ngcontent-ng-c3387293599]   .brand-container[_ngcontent-ng-c3387293599]   .company-name[_ngcontent-ng-c3387293599]{margin:0;font-weight:900;white-space:nowrap;font-size:14.8cqw;color:#f9f9d3;text-align:center;font-family:Sora,sans-serif;font-weight:700;line-height:1;display:block;padding:0;letter-spacing:-.02em;will-change:transform,opacity;-webkit-font-smoothing:antialiased;transform-style:preserve-3d}</style><style ng-app-id="ng">.btn[_ngcontent-ng-c1717056994]{display:inline-flex;align-items:center;justify-content:center;padding:.6rem 1.2rem;border-radius:9999px;font-family:Sora,sans-serif;font-weight:600;font-size:1rem;text-decoration:none;cursor:pointer;border:2px solid transparent;position:relative;overflow:hidden;transition:transform .3s ease;--x: 50%;--y: 50%}.btn__content[_ngcontent-ng-c1717056994]{position:relative;z-index:5;display:flex;align-items:center;gap:.5rem;transition:color .3s ease}.btn[_ngcontent-ng-c1717056994]:before{content:"";position:absolute;inset:0;z-index:1;border-radius:inherit;background-color:var(--hover-bg, currentColor);clip-path:circle(0% at var(--x) var(--y));transition:clip-path .5s cubic-bezier(.4,0,.2,1)}.btn[_ngcontent-ng-c1717056994]:hover{transform:translateY(-3px)}.btn[_ngcontent-ng-c1717056994]:hover:before{clip-path:circle(150% at var(--x) var(--y))}.btn--green.btn--solid[_ngcontent-ng-c1717056994]{background-color:#0e4735;color:#f9f9d3;border-color:#0e4735;--hover-bg: #14694D}.btn--green.btn--solid[_ngcontent-ng-c1717056994]:hover{color:#fff}.btn--green.btn--outline[_ngcontent-ng-c1717056994]{background-color:transparent;color:#0e4735;border-color:#0e4735;--hover-bg: #0E4735}.btn--green.btn--outline[_ngcontent-ng-c1717056994]:hover{color:#f9f9d3}.btn--cream.btn--solid[_ngcontent-ng-c1717056994]{background-color:#f9f9d3;color:#0a0325;border-color:#f9f9d3;--hover-bg: #FFFFFF}.btn--cream.btn--solid[_ngcontent-ng-c1717056994]:hover{color:#0e4735}.btn--cream.btn--outline[_ngcontent-ng-c1717056994]{background-color:transparent;color:#f9f9d3;border-color:#f9f9d3;--hover-bg: #F9F9D3}.btn--cream.btn--outline[_ngcontent-ng-c1717056994]:hover{color:#0a0325}.btn--white.btn--solid[_ngcontent-ng-c1717056994]{background-color:#fff;color:#0a0325;border-color:#fff;--hover-bg: #F9F9D3}.btn--white.btn--solid[_ngcontent-ng-c1717056994]:hover{color:#0e4735}.btn--white.btn--outline[_ngcontent-ng-c1717056994]{background-color:transparent;color:#fff;border-color:#fff;--hover-bg: #FFFFFF}.btn--white.btn--outline[_ngcontent-ng-c1717056994]:hover{color:#0a0325}.btn--dark.btn--solid[_ngcontent-ng-c1717056994]{background-color:#0a0325;color:#f9f9d3;border-color:#0a0325;--hover-bg: #1E1A45}.btn--dark.btn--solid[_ngcontent-ng-c1717056994]:hover{color:#f9f9d3}.btn--dark.btn--outline[_ngcontent-ng-c1717056994]{background-color:transparent;color:#0a0325;border-color:#0a0325;--hover-bg: #0A0325}.btn--dark.btn--outline[_ngcontent-ng-c1717056994]:hover{color:#f9f9d3}</style><style type="text/css" data-primeng-style-id="primitive-variables">:root,:host{--p-stone-50:#fafaf9;--p-stone-100:#f5f5f4;--p-stone-200:#e7e5e4;--p-stone-300:#d6d3d1;--p-stone-400:#a8a29e;--p-stone-500:#78716c;--p-stone-600:#57534e;--p-stone-700:#44403c;--p-stone-800:#292524;--p-stone-900:#1c1917;--p-stone-950:#0c0a09;--p-neutral-50:#fafafa;--p-neutral-100:#f5f5f5;--p-neutral-200:#e5e5e5;--p-neutral-300:#d4d4d4;--p-neutral-400:#a3a3a3;--p-neutral-500:#737373;--p-neutral-600:#525252;--p-neutral-700:#404040;--p-neutral-800:#262626;--p-neutral-900:#171717;--p-neutral-950:#0a0a0a;--p-zinc-50:#fafafa;--p-zinc-100:#f4f4f5;--p-zinc-200:#e4e4e7;--p-zinc-300:#d4d4d8;--p-zinc-400:#a1a1aa;--p-zinc-500:#71717a;--p-zinc-600:#52525b;--p-zinc-700:#3f3f46;--p-zinc-800:#27272a;--p-zinc-900:#18181b;--p-zinc-950:#09090b;--p-gray-50:#f9fafb;--p-gray-100:#f3f4f6;--p-gray-200:#e5e7eb;--p-gray-300:#d1d5db;--p-gray-400:#9ca3af;--p-gray-500:#6b7280;--p-gray-600:#4b5563;--p-gray-700:#374151;--p-gray-800:#1f2937;--p-gray-900:#111827;--p-gray-950:#030712;--p-slate-50:#f8fafc;--p-slate-100:#f1f5f9;--p-slate-200:#e2e8f0;--p-slate-300:#cbd5e1;--p-slate-400:#94a3b8;--p-slate-500:#64748b;--p-slate-600:#475569;--p-slate-700:#334155;--p-slate-800:#1e293b;--p-slate-900:#0f172a;--p-slate-950:#020617;--p-rose-50:#fff1f2;--p-rose-100:#ffe4e6;--p-rose-200:#fecdd3;--p-rose-300:#fda4af;--p-rose-400:#fb7185;--p-rose-500:#f43f5e;--p-rose-600:#e11d48;--p-rose-700:#be123c;--p-rose-800:#9f1239;--p-rose-900:#881337;--p-rose-950:#4c0519;--p-pink-50:#fdf2f8;--p-pink-100:#fce7f3;--p-pink-200:#fbcfe8;--p-pink-300:#f9a8d4;--p-pink-400:#f472b6;--p-pink-500:#ec4899;--p-pink-600:#db2777;--p-pink-700:#be185d;--p-pink-800:#9d174d;--p-pink-900:#831843;--p-pink-950:#500724;--p-fuchsia-50:#fdf4ff;--p-fuchsia-100:#fae8ff;--p-fuchsia-200:#f5d0fe;--p-fuchsia-300:#f0abfc;--p-fuchsia-400:#e879f9;--p-fuchsia-500:#d946ef;--p-fuchsia-600:#c026d3;--p-fuchsia-700:#a21caf;--p-fuchsia-800:#86198f;--p-fuchsia-900:#701a75;--p-fuchsia-950:#4a044e;--p-purple-50:#faf5ff;--p-purple-100:#f3e8ff;--p-purple-200:#e9d5ff;--p-purple-300:#d8b4fe;--p-purple-400:#c084fc;--p-purple-500:#a855f7;--p-purple-600:#9333ea;--p-purple-700:#7e22ce;--p-purple-800:#6b21a8;--p-purple-900:#581c87;--p-purple-950:#3b0764;--p-violet-50:#f5f3ff;--p-violet-100:#ede9fe;--p-violet-200:#ddd6fe;--p-violet-300:#c4b5fd;--p-violet-400:#a78bfa;--p-violet-500:#8b5cf6;--p-violet-600:#7c3aed;--p-violet-700:#6d28d9;--p-violet-800:#5b21b6;--p-violet-900:#4c1d95;--p-violet-950:#2e1065;--p-indigo-50:#eef2ff;--p-indigo-100:#e0e7ff;--p-indigo-200:#c7d2fe;--p-indigo-300:#a5b4fc;--p-indigo-400:#818cf8;--p-indigo-500:#6366f1;--p-indigo-600:#4f46e5;--p-indigo-700:#4338ca;--p-indigo-800:#3730a3;--p-indigo-900:#312e81;--p-indigo-950:#1e1b4b;--p-blue-50:#eff6ff;--p-blue-100:#dbeafe;--p-blue-200:#bfdbfe;--p-blue-300:#93c5fd;--p-blue-400:#60a5fa;--p-blue-500:#3b82f6;--p-blue-600:#2563eb;--p-blue-700:#1d4ed8;--p-blue-800:#1e40af;--p-blue-900:#1e3a8a;--p-blue-950:#172554;--p-sky-50:#f0f9ff;--p-sky-100:#e0f2fe;--p-sky-200:#bae6fd;--p-sky-300:#7dd3fc;--p-sky-400:#38bdf8;--p-sky-500:#0ea5e9;--p-sky-600:#0284c7;--p-sky-700:#0369a1;--p-sky-800:#075985;--p-sky-900:#0c4a6e;--p-sky-950:#082f49;--p-cyan-50:#ecfeff;--p-cyan-100:#cffafe;--p-cyan-200:#a5f3fc;--p-cyan-300:#67e8f9;--p-cyan-400:#22d3ee;--p-cyan-500:#06b6d4;--p-cyan-600:#0891b2;--p-cyan-700:#0e7490;--p-cyan-800:#155e75;--p-cyan-900:#164e63;--p-cyan-950:#083344;--p-teal-50:#f0fdfa;--p-teal-100:#ccfbf1;--p-teal-200:#99f6e4;--p-teal-300:#5eead4;--p-teal-400:#2dd4bf;--p-teal-500:#14b8a6;--p-teal-600:#0d9488;--p-teal-700:#0f766e;--p-teal-800:#115e59;--p-teal-900:#134e4a;--p-teal-950:#042f2e;--p-yellow-50:#fefce8;--p-yellow-100:#fef9c3;--p-yellow-200:#fef08a;--p-yellow-300:#fde047;--p-yellow-400:#facc15;--p-yellow-500:#eab308;--p-yellow-600:#ca8a04;--p-yellow-700:#a16207;--p-yellow-800:#854d0e;--p-yellow-900:#713f12;--p-yellow-950:#422006;--p-amber-50:#fffbeb;--p-amber-100:#fef3c7;--p-amber-200:#fde68a;--p-amber-300:#fcd34d;--p-amber-400:#fbbf24;--p-amber-500:#f59e0b;--p-amber-600:#d97706;--p-amber-700:#b45309;--p-amber-800:#92400e;--p-amber-900:#78350f;--p-amber-950:#451a03;--p-orange-50:#fff7ed;--p-orange-100:#ffedd5;--p-orange-200:#fed7aa;--p-orange-300:#fdba74;--p-orange-400:#fb923c;--p-orange-500:#f97316;--p-orange-600:#ea580c;--p-orange-700:#c2410c;--p-orange-800:#9a3412;--p-orange-900:#7c2d12;--p-orange-950:#431407;--p-red-50:#fef2f2;--p-red-100:#fee2e2;--p-red-200:#fecaca;--p-red-300:#fca5a5;--p-red-400:#f87171;--p-red-500:#ef4444;--p-red-600:#dc2626;--p-red-700:#b91c1c;--p-red-800:#991b1b;--p-red-900:#7f1d1d;--p-red-950:#450a0a;--p-lime-50:#f7fee7;--p-lime-100:#ecfccb;--p-lime-200:#d9f99d;--p-lime-300:#bef264;--p-lime-400:#a3e635;--p-lime-500:#84cc16;--p-lime-600:#65a30d;--p-lime-700:#4d7c0f;--p-lime-800:#3f6212;--p-lime-900:#365314;--p-lime-950:#1a2e05;--p-green-50:#f0fdf4;--p-green-100:#dcfce7;--p-green-200:#bbf7d0;--p-green-300:#86efac;--p-green-400:#4ade80;--p-green-500:#22c55e;--p-green-600:#16a34a;--p-green-700:#15803d;--p-green-800:#166534;--p-green-900:#14532d;--p-green-950:#052e16;--p-emerald-50:#ecfdf5;--p-emerald-100:#d1fae5;--p-emerald-200:#a7f3d0;--p-emerald-300:#6ee7b7;--p-emerald-400:#34d399;--p-emerald-500:#10b981;--p-emerald-600:#059669;--p-emerald-700:#047857;--p-emerald-800:#065f46;--p-emerald-900:#064e3b;--p-emerald-950:#022c22;--p-border-radius-none:0;--p-border-radius-xs:2px;--p-border-radius-sm:4px;--p-border-radius-md:6px;--p-border-radius-lg:8px;--p-border-radius-xl:12px;}</style><style type="text/css" data-primeng-style-id="semantic-variables">:root,:host{--p-transition-duration:0.2s;--p-disabled-opacity:0.6;--p-icon-size:1rem;--p-anchor-gutter:2px;--p-overlay-navigation-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1);--p-overlay-modal-border-radius:var(--p-border-radius-xl);--p-overlay-modal-padding:1.25rem;--p-overlay-modal-shadow:0 20px 25px -5px rgba(0,0,0,0.1),0 8px 10px -6px rgba(0,0,0,0.1);--p-overlay-popover-border-radius:var(--p-border-radius-md);--p-overlay-popover-padding:0.75rem;--p-overlay-popover-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1);--p-overlay-select-border-radius:var(--p-border-radius-md);--p-overlay-select-shadow:0 4px 6px -1px rgba(0,0,0,0.1),0 2px 4px -2px rgba(0,0,0,0.1);--p-navigation-submenu-icon-size:0.875rem;--p-navigation-submenu-label-padding:0.5rem 0.75rem;--p-navigation-submenu-label-font-weight:600;--p-navigation-item-padding:0.5rem 0.75rem;--p-navigation-item-border-radius:var(--p-border-radius-sm);--p-navigation-item-gap:0.5rem;--p-navigation-list-padding:0.25rem 0.25rem;--p-navigation-list-gap:2px;--p-mask-transition-duration:0.3s;--p-content-border-radius:var(--p-border-radius-md);--p-list-padding:0.25rem 0.25rem;--p-list-gap:2px;--p-list-option-group-padding:0.5rem 0.75rem;--p-list-option-group-font-weight:600;--p-list-option-padding:0.5rem 0.75rem;--p-list-option-border-radius:var(--p-border-radius-sm);--p-list-header-padding:0.5rem 1rem 0.25rem 1rem;--p-form-field-padding-x:0.75rem;--p-form-field-padding-y:0.5rem;--p-form-field-border-radius:var(--p-border-radius-md);--p-form-field-transition-duration:var(--p-transition-duration);--p-form-field-focus-ring-width:0;--p-form-field-focus-ring-style:none;--p-form-field-focus-ring-color:transparent;--p-form-field-focus-ring-offset:0;--p-form-field-focus-ring-shadow:none;--p-form-field-lg-font-size:1.125rem;--p-form-field-lg-padding-x:0.875rem;--p-form-field-lg-padding-y:0.625rem;--p-form-field-sm-font-size:0.875rem;--p-form-field-sm-padding-x:0.625rem;--p-form-field-sm-padding-y:0.375rem;--p-primary-50:var(--p-emerald-50);--p-primary-100:var(--p-emerald-100);--p-primary-200:var(--p-emerald-200);--p-primary-300:var(--p-emerald-300);--p-primary-400:var(--p-emerald-400);--p-primary-500:var(--p-emerald-500);--p-primary-600:var(--p-emerald-600);--p-primary-700:var(--p-emerald-700);--p-primary-800:var(--p-emerald-800);--p-primary-900:var(--p-emerald-900);--p-primary-950:var(--p-emerald-950);--p-focus-ring-width:1px;--p-focus-ring-style:solid;--p-focus-ring-color:var(--p-primary-color);--p-focus-ring-offset:2px;--p-focus-ring-shadow:none;--p-navigation-submenu-icon-color:var(--p-surface-400);--p-navigation-submenu-icon-focus-color:var(--p-surface-500);--p-navigation-submenu-icon-active-color:var(--p-surface-500);--p-navigation-submenu-label-background:transparent;--p-navigation-submenu-label-color:var(--p-text-muted-color);--p-navigation-item-focus-background:var(--p-surface-100);--p-navigation-item-active-background:var(--p-surface-100);--p-navigation-item-color:var(--p-text-color);--p-navigation-item-focus-color:var(--p-text-hover-color);--p-navigation-item-active-color:var(--p-text-hover-color);--p-navigation-item-icon-color:var(--p-surface-400);--p-navigation-item-icon-focus-color:var(--p-surface-500);--p-navigation-item-icon-active-color:var(--p-surface-500);--p-list-option-group-background:transparent;--p-list-option-group-color:var(--p-text-muted-color);--p-list-option-focus-background:var(--p-surface-100);--p-list-option-selected-background:var(--p-highlight-background);--p-list-option-selected-focus-background:var(--p-highlight-focus-background);--p-list-option-color:var(--p-text-color);--p-list-option-focus-color:var(--p-text-hover-color);--p-list-option-selected-color:var(--p-highlight-color);--p-list-option-selected-focus-color:var(--p-highlight-focus-color);--p-list-option-icon-color:var(--p-surface-400);--p-list-option-icon-focus-color:var(--p-surface-500);--p-overlay-modal-background:var(--p-surface-0);--p-overlay-modal-border-color:var(--p-surface-200);--p-overlay-modal-color:var(--p-text-color);--p-overlay-popover-background:var(--p-surface-0);--p-overlay-popover-border-color:var(--p-surface-200);--p-overlay-popover-color:var(--p-text-color);--p-overlay-select-background:var(--p-surface-0);--p-overlay-select-border-color:var(--p-surface-200);--p-overlay-select-color:var(--p-text-color);--p-content-background:var(--p-surface-0);--p-content-hover-background:var(--p-surface-100);--p-content-border-color:var(--p-surface-200);--p-content-color:var(--p-text-color);--p-content-hover-color:var(--p-text-hover-color);--p-text-color:var(--p-surface-700);--p-text-hover-color:var(--p-surface-800);--p-text-muted-color:var(--p-surface-500);--p-text-hover-muted-color:var(--p-surface-600);--p-form-field-background:var(--p-surface-0);--p-form-field-disabled-background:var(--p-surface-200);--p-form-field-filled-background:var(--p-surface-50);--p-form-field-filled-hover-background:var(--p-surface-50);--p-form-field-filled-focus-background:var(--p-surface-50);--p-form-field-border-color:var(--p-surface-300);--p-form-field-hover-border-color:var(--p-surface-400);--p-form-field-focus-border-color:var(--p-primary-color);--p-form-field-invalid-border-color:var(--p-red-400);--p-form-field-color:var(--p-surface-700);--p-form-field-disabled-color:var(--p-surface-500);--p-form-field-placeholder-color:var(--p-surface-500);--p-form-field-invalid-placeholder-color:var(--p-red-600);--p-form-field-float-label-color:var(--p-surface-500);--p-form-field-float-label-focus-color:var(--p-primary-600);--p-form-field-float-label-active-color:var(--p-surface-500);--p-form-field-float-label-invalid-color:var(--p-form-field-invalid-placeholder-color);--p-form-field-icon-color:var(--p-surface-400);--p-form-field-shadow:0 0 #0000,0 0 #0000,0 1px 2px 0 rgba(18,18,23,0.05);--p-mask-background:rgba(0,0,0,0.4);--p-mask-color:var(--p-surface-200);--p-highlight-background:var(--p-primary-50);--p-highlight-focus-background:var(--p-primary-100);--p-highlight-color:var(--p-primary-700);--p-highlight-focus-color:var(--p-primary-800);--p-primary-color:var(--p-primary-500);--p-primary-contrast-color:#ffffff;--p-primary-hover-color:var(--p-primary-600);--p-primary-active-color:var(--p-primary-700);--p-surface-0:#ffffff;--p-surface-50:var(--p-slate-50);--p-surface-100:var(--p-slate-100);--p-surface-200:var(--p-slate-200);--p-surface-300:var(--p-slate-300);--p-surface-400:var(--p-slate-400);--p-surface-500:var(--p-slate-500);--p-surface-600:var(--p-slate-600);--p-surface-700:var(--p-slate-700);--p-surface-800:var(--p-slate-800);--p-surface-900:var(--p-slate-900);--p-surface-950:var(--p-slate-950);}.p-dark{--p-navigation-submenu-icon-color:var(--p-surface-500);--p-navigation-submenu-icon-focus-color:var(--p-surface-400);--p-navigation-submenu-icon-active-color:var(--p-surface-400);--p-navigation-submenu-label-background:transparent;--p-navigation-submenu-label-color:var(--p-text-muted-color);--p-navigation-item-focus-background:var(--p-surface-800);--p-navigation-item-active-background:var(--p-surface-800);--p-navigation-item-color:var(--p-text-color);--p-navigation-item-focus-color:var(--p-text-hover-color);--p-navigation-item-active-color:var(--p-text-hover-color);--p-navigation-item-icon-color:var(--p-surface-500);--p-navigation-item-icon-focus-color:var(--p-surface-400);--p-navigation-item-icon-active-color:var(--p-surface-400);--p-list-option-group-background:transparent;--p-list-option-group-color:var(--p-text-muted-color);--p-list-option-focus-background:var(--p-surface-800);--p-list-option-selected-background:var(--p-highlight-background);--p-list-option-selected-focus-background:var(--p-highlight-focus-background);--p-list-option-color:var(--p-text-color);--p-list-option-focus-color:var(--p-text-hover-color);--p-list-option-selected-color:var(--p-highlight-color);--p-list-option-selected-focus-color:var(--p-highlight-focus-color);--p-list-option-icon-color:var(--p-surface-500);--p-list-option-icon-focus-color:var(--p-surface-400);--p-overlay-modal-background:var(--p-surface-900);--p-overlay-modal-border-color:var(--p-surface-700);--p-overlay-modal-color:var(--p-text-color);--p-overlay-popover-background:var(--p-surface-900);--p-overlay-popover-border-color:var(--p-surface-700);--p-overlay-popover-color:var(--p-text-color);--p-overlay-select-background:var(--p-surface-900);--p-overlay-select-border-color:var(--p-surface-700);--p-overlay-select-color:var(--p-text-color);--p-content-background:var(--p-surface-900);--p-content-hover-background:var(--p-surface-800);--p-content-border-color:var(--p-surface-700);--p-content-color:var(--p-text-color);--p-content-hover-color:var(--p-text-hover-color);--p-text-color:var(--p-surface-0);--p-text-hover-color:var(--p-surface-0);--p-text-muted-color:var(--p-surface-400);--p-text-hover-muted-color:var(--p-surface-300);--p-form-field-background:var(--p-surface-950);--p-form-field-disabled-background:var(--p-surface-700);--p-form-field-filled-background:var(--p-surface-800);--p-form-field-filled-hover-background:var(--p-surface-800);--p-form-field-filled-focus-background:var(--p-surface-800);--p-form-field-border-color:var(--p-surface-600);--p-form-field-hover-border-color:var(--p-surface-500);--p-form-field-focus-border-color:var(--p-primary-color);--p-form-field-invalid-border-color:var(--p-red-300);--p-form-field-color:var(--p-surface-0);--p-form-field-disabled-color:var(--p-surface-400);--p-form-field-placeholder-color:var(--p-surface-400);--p-form-field-invalid-placeholder-color:var(--p-red-400);--p-form-field-float-label-color:var(--p-surface-400);--p-form-field-float-label-focus-color:var(--p-primary-color);--p-form-field-float-label-active-color:var(--p-surface-400);--p-form-field-float-label-invalid-color:var(--p-form-field-invalid-placeholder-color);--p-form-field-icon-color:var(--p-surface-400);--p-form-field-shadow:0 0 #0000,0 0 #0000,0 1px 2px 0 rgba(18,18,23,0.05);--p-mask-background:rgba(0,0,0,0.6);--p-mask-color:var(--p-surface-200);--p-highlight-background:color-mix(in srgb,var(--p-primary-400),transparent 84%);--p-highlight-focus-background:color-mix(in srgb,var(--p-primary-400),transparent 76%);--p-highlight-color:rgba(255,255,255,.87);--p-highlight-focus-color:rgba(255,255,255,.87);--p-primary-color:var(--p-primary-400);--p-primary-contrast-color:var(--p-surface-900);--p-primary-hover-color:var(--p-primary-300);--p-primary-active-color:var(--p-primary-200);--p-surface-0:#ffffff;--p-surface-50:var(--p-zinc-50);--p-surface-100:var(--p-zinc-100);--p-surface-200:var(--p-zinc-200);--p-surface-300:var(--p-zinc-300);--p-surface-400:var(--p-zinc-400);--p-surface-500:var(--p-zinc-500);--p-surface-600:var(--p-zinc-600);--p-surface-700:var(--p-zinc-700);--p-surface-800:var(--p-zinc-800);--p-surface-900:var(--p-zinc-900);--p-surface-950:var(--p-zinc-950);}</style><style type="text/css" data-primeng-style-id="global-variables">:root,:host{color-scheme:light}.p-dark{color-scheme:dark}</style><style type="text/css" data-primeng-style-id="global-style">*,::before,::after{box-sizing:border-box;}.p-collapsible-enter-active{animation:p-animate-collapsible-expand 0.2s ease-out;overflow:hidden;}.p-collapsible-leave-active{animation:p-animate-collapsible-collapse 0.2s ease-out;overflow:hidden;}@keyframes p-animate-collapsible-expand{from{grid-template-rows:0fr;}to{grid-template-rows:1fr;}} @keyframes p-animate-collapsible-collapse{from{grid-template-rows:1fr;}to{grid-template-rows:0fr;}} .p-disabled,.p-disabled *{cursor:default;pointer-events:none;user-select:none;}.p-disabled,.p-component:disabled{opacity:var(--p-disabled-opacity);}.pi{font-size:var(--p-icon-size);}.p-icon{width:var(--p-icon-size);height:var(--p-icon-size);}.p-overlay-mask{background:var(--px-mask-background,var(--p-mask-background));color:var(--p-mask-color);position:fixed;top:0;left:0;width:100%;height:100%;}.p-overlay-mask-enter-active{animation:p-animate-overlay-mask-enter var(--p-mask-transition-duration) forwards;}.p-overlay-mask-leave-active{animation:p-animate-overlay-mask-leave var(--p-mask-transition-duration) forwards;}@keyframes p-animate-overlay-mask-enter{from{background:transparent;}to{background:var(--px-mask-background,var(--p-mask-background));}} @keyframes p-animate-overlay-mask-leave{from{background:var(--px-mask-background,var(--p-mask-background));}to{background:transparent;}} .p-anchored-overlay-enter-active{animation:p-animate-anchored-overlay-enter 300ms cubic-bezier(.19,1,.22,1);}.p-anchored-overlay-leave-active{animation:p-animate-anchored-overlay-leave 300ms cubic-bezier(.19,1,.22,1);}@keyframes p-animate-anchored-overlay-enter{from{opacity:0;transform:scale(0.93);}} @keyframes p-animate-anchored-overlay-leave{to{opacity:0;transform:scale(0.93);}} li.p-autocomplete-option,div.p-cascadeselect-option-content,li.p-listbox-option,li.p-multiselect-option,li.p-select-option,li.p-listbox-option,div.p-tree-node-content,li.p-datatable-filter-constraint,.p-datatable .p-datatable-tbody > tr,.p-treetable .p-treetable-tbody > tr,div.p-menu-item-content,div.p-tieredmenu-item-content,div.p-contextmenu-item-content,div.p-menubar-item-content,div.p-megamenu-item-content,div.p-panelmenu-header-content,div.p-panelmenu-item-content,th.p-datatable-header-cell,th.p-treetable-header-cell,thead.p-datatable-thead > tr > th,.p-treetable thead.p-treetable-thead>tr>th{transition:none;}</style><style ng-app-id="ng">[_nghost-ng-c302096299]{display:block;min-height:100vh;background-color:#0a0325;background-image:radial-gradient(circle at 10% 20%,rgba(14,71,53,.15) 0%,transparent 40%),radial-gradient(circle at 90% 80%,rgba(30,26,69,.3) 0%,transparent 50%);color:#f9f9d3;display:flex;justify-content:center;align-items:center;padding:2rem 1rem}@media(max-width:576px){[_nghost-ng-c302096299]{padding:1rem 0;align-items:flex-start}}.quote-wizard[_ngcontent-ng-c302096299]{width:100%;max-width:700px;background:#1e1a4559;backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(249,249,211,.06);border-radius:24px;padding:2rem;box-shadow:0 20px 25px -5px #0000001a,0 10px 10px -5px #0000000a,0 0 40px #0e47350d;display:flex;flex-direction:column;gap:2rem;transition:all .3s ease}@media(max-width:576px){.quote-wizard[_ngcontent-ng-c302096299]{border:none;background:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;padding:1rem;gap:1.5rem}}.quote-wizard--modal[_ngcontent-ng-c302096299]{border:none;background:transparent;-webkit-backdrop-filter:none;backdrop-filter:none;box-shadow:none;padding:0;max-width:100%}.quote-wizard__header[_ngcontent-ng-c302096299]{display:flex;align-items:center;gap:1rem;position:relative}.quote-wizard__progress-container[_ngcontent-ng-c302096299]{flex:1;height:4px;background:#ffffff14;border-radius:9999px;overflow:hidden}.quote-wizard__progress-bar[_ngcontent-ng-c302096299]{height:100%;background:linear-gradient(90deg,#14694d,#b9b4e9);border-radius:9999px;transition:width .4s cubic-bezier(.4,0,.2,1)}.quote-wizard__step-indicator[_ngcontent-ng-c302096299]{font-size:.75rem;font-family:Sora,sans-serif;color:#a8a5b8;font-weight:600;white-space:nowrap}.quote-wizard__close-btn[_ngcontent-ng-c302096299]{background:#ffffff0a;border:1px solid rgba(255,255,255,.05);color:#a8a5b8;width:28px;height:28px;border-radius:9999px;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s ease}.quote-wizard__close-btn[_ngcontent-ng-c302096299]:hover{background:#ffffff1a;color:#fff;transform:scale(1.05)}.quote-wizard__form[_ngcontent-ng-c302096299]{display:flex;flex-direction:column;gap:2rem}.quote-wizard__step[_ngcontent-ng-c302096299]{display:flex;flex-direction:column;gap:1rem}.quote-wizard__title[_ngcontent-ng-c302096299]{font-size:1.8rem;font-weight:500;line-height:1.25}.quote-wizard__title[_ngcontent-ng-c302096299]   .text-gradient[_ngcontent-ng-c302096299]{background:linear-gradient(135deg,#14694d,#b9b4e9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700}@media(max-width:576px){.quote-wizard__title[_ngcontent-ng-c302096299]{font-size:1.5rem}}.quote-wizard__subtitle[_ngcontent-ng-c302096299]{font-size:1.125rem;color:#a8a5b8;margin-bottom:.5rem}@media(max-width:576px){.quote-wizard__subtitle[_ngcontent-ng-c302096299]{font-size:1rem}}.quote-wizard[_ngcontent-ng-c302096299]   .options-grid[_ngcontent-ng-c302096299]{display:flex;flex-direction:column;gap:.5rem}.quote-wizard[_ngcontent-ng-c302096299]   .options-grid--cols-2[_ngcontent-ng-c302096299]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}@media(max-width:576px){.quote-wizard[_ngcontent-ng-c302096299]   .options-grid--cols-2[_ngcontent-ng-c302096299]{grid-template-columns:1fr;gap:.5rem}}.quote-wizard[_ngcontent-ng-c302096299]   .option-card[_ngcontent-ng-c302096299]{width:100%;display:flex;align-items:center;gap:1rem;padding:1rem;background:#ffffff05;border:1px solid rgba(255,255,255,.05);border-radius:16px;text-align:left;cursor:pointer;position:relative;transition:all .3s cubic-bezier(.4,0,.2,1)}.quote-wizard[_ngcontent-ng-c302096299]   .option-card[_ngcontent-ng-c302096299]:hover{background:#ffffff0a;border-color:#14694d66;transform:translateY(-2px);box-shadow:0 4px 20px #00000026}.quote-wizard[_ngcontent-ng-c302096299]   .option-card.active[_ngcontent-ng-c302096299]{background:#14694d1f;border-color:#14694d;box-shadow:0 4px 25px #14694d1a}.quote-wizard[_ngcontent-ng-c302096299]   .option-card.active[_ngcontent-ng-c302096299]   .option-card__icon-wrapper[_ngcontent-ng-c302096299]{background:#14694d;color:#fff}.quote-wizard[_ngcontent-ng-c302096299]   .option-card.active[_ngcontent-ng-c302096299]   .option-card__label[_ngcontent-ng-c302096299]{color:#fff}.quote-wizard[_ngcontent-ng-c302096299]   .option-card__icon-wrapper[_ngcontent-ng-c302096299]{width:44px;height:44px;border-radius:12px;background:#ffffff0a;color:#a8a5b8;display:flex;align-items:center;justify-content:center;font-size:1.15rem;transition:all .3s ease;flex-shrink:0}.quote-wizard[_ngcontent-ng-c302096299]   .option-card__content[_ngcontent-ng-c302096299]{flex:1}.quote-wizard[_ngcontent-ng-c302096299]   .option-card__label[_ngcontent-ng-c302096299]{font-size:1rem;font-weight:600;color:#f9f9d3;margin-bottom:2px;line-height:1.2}.quote-wizard[_ngcontent-ng-c302096299]   .option-card__desc[_ngcontent-ng-c302096299]{font-size:.82rem;color:#a8a5b8;line-height:1.4}.quote-wizard[_ngcontent-ng-c302096299]   .option-card__check[_ngcontent-ng-c302096299]{position:absolute;right:1rem;top:50%;transform:translateY(-50%);width:20px;height:20px;border-radius:9999px;background:#14694d;color:#fff;display:flex;align-items:center;justify-content:center;font-size:.65rem}.quote-wizard[_ngcontent-ng-c302096299]   .contact-form-fields[_ngcontent-ng-c302096299]{display:flex;flex-direction:column;gap:1rem;margin-top:.5rem}.quote-wizard[_ngcontent-ng-c302096299]   .form-fields-row[_ngcontent-ng-c302096299]{display:grid;grid-template-columns:1fr 1fr;gap:1rem}@media(max-width:576px){.quote-wizard[_ngcontent-ng-c302096299]   .form-fields-row[_ngcontent-ng-c302096299]{grid-template-columns:1fr;gap:1rem}}.quote-wizard[_ngcontent-ng-c302096299]   .form-field[_ngcontent-ng-c302096299]{display:flex;flex-direction:column;gap:6px}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__label[_ngcontent-ng-c302096299]{font-size:.85rem;font-weight:600;color:#f9f9d3cc;font-family:Sora,sans-serif}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__input-wrapper[_ngcontent-ng-c302096299]{position:relative;display:flex;align-items:center}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__icon[_ngcontent-ng-c302096299]{position:absolute;left:14px;color:#a8a5b8;font-size:.9rem;pointer-events:none}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__input[_ngcontent-ng-c302096299]{width:100%;background:#0003;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:11px 11px 11px 38px;color:#fff;font-family:Inter,sans-serif;font-size:.95rem;transition:all .15s ease}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__input[_ngcontent-ng-c302096299]:focus{outline:none;border-color:#14694d;box-shadow:0 0 10px #14694d26;background:#0000004d}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__textarea[_ngcontent-ng-c302096299]{width:100%;height:100px;background:#0003;border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:11px;color:#fff;font-family:Inter,sans-serif;font-size:.95rem;resize:vertical;transition:all .15s ease}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__textarea[_ngcontent-ng-c302096299]:focus{outline:none;border-color:#14694d;box-shadow:0 0 10px #14694d26;background:#0000004d}.quote-wizard[_ngcontent-ng-c302096299]   .form-field__error[_ngcontent-ng-c302096299]{font-size:.75rem;color:#ef4444;font-weight:500}.quote-wizard__footer[_ngcontent-ng-c302096299]{display:flex;align-items:center;margin-top:1rem}@media(max-width:576px){.quote-wizard__footer[_ngcontent-ng-c302096299]{margin-top:.5rem}}.quote-wizard__footer-spacer[_ngcontent-ng-c302096299]{flex:1}.quote-wizard[_ngcontent-ng-c302096299]   .wizard-btn[_ngcontent-ng-c302096299]{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:9999px;font-size:.9rem;font-weight:600;cursor:pointer;transition:all .15s ease;border:none}.quote-wizard[_ngcontent-ng-c302096299]   .wizard-btn--primary[_ngcontent-ng-c302096299]{background:#14694d;color:#fff}.quote-wizard[_ngcontent-ng-c302096299]   .wizard-btn--primary[_ngcontent-ng-c302096299]:hover:not(:disabled){background:#187e5d;transform:translateY(-1px);box-shadow:0 4px 15px #14694d4d}.quote-wizard[_ngcontent-ng-c302096299]   .wizard-btn--primary[_ngcontent-ng-c302096299]:disabled{background:#ffffff0d;color:#fff3;cursor:not-allowed}.quote-wizard[_ngcontent-ng-c302096299]   .wizard-btn--secondary[_ngcontent-ng-c302096299]{background:transparent;border:1px solid rgba(255,255,255,.15);color:#f9f9d3}.quote-wizard[_ngcontent-ng-c302096299]   .wizard-btn--secondary[_ngcontent-ng-c302096299]:hover{background:#ffffff0a;border-color:#fff}.quote-wizard__success[_ngcontent-ng-c302096299]{display:flex;justify-content:center;align-items:center;padding:2rem 0}.quote-wizard[_ngcontent-ng-c302096299]   .success-card[_ngcontent-ng-c302096299]{text-align:center;display:flex;flex-direction:column;align-items:center;gap:1rem;max-width:460px}.quote-wizard[_ngcontent-ng-c302096299]   .success-card__icon-wrapper[_ngcontent-ng-c302096299]{width:64px;height:64px;border-radius:9999px;background:#14694d26;border:2px solid #14694D;color:#14694d;display:flex;align-items:center;justify-content:center;font-size:1.75rem;animation:_ngcontent-ng-c302096299_pulse 2s infinite;box-shadow:0 0 20px #14694d33}.quote-wizard[_ngcontent-ng-c302096299]   .success-card__title[_ngcontent-ng-c302096299]{font-size:2rem;font-weight:500}.quote-wizard[_ngcontent-ng-c302096299]   .success-card__title[_ngcontent-ng-c302096299]   .text-gradient[_ngcontent-ng-c302096299]{background:linear-gradient(135deg,#14694d,#b9b4e9);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;font-weight:700}.quote-wizard[_ngcontent-ng-c302096299]   .success-card__message[_ngcontent-ng-c302096299]{font-size:1.05rem;color:#f9f9d3e6;line-height:1.5}.quote-wizard[_ngcontent-ng-c302096299]   .success-card__message[_ngcontent-ng-c302096299]   strong[_ngcontent-ng-c302096299]{color:#fff}.quote-wizard[_ngcontent-ng-c302096299]   .success-card__submessage[_ngcontent-ng-c302096299]{font-size:.9rem;color:#a8a5b8;line-height:1.5}.quote-wizard[_ngcontent-ng-c302096299]   .success-card__redirect[_ngcontent-ng-c302096299]{margin-top:.5rem;font-size:.8rem;color:#f9f9d359;font-family:monospace}.animate-fade-in[_ngcontent-ng-c302096299]{animation:_ngcontent-ng-c302096299_fadeIn .4s cubic-bezier(.4,0,.2,1) forwards}@keyframes _ngcontent-ng-c302096299_fadeIn{0%{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes _ngcontent-ng-c302096299_pulse{0%{transform:scale(1);box-shadow:0 0 #14694d66}70%{transform:scale(1.05);box-shadow:0 0 0 12px #14694d00}to{transform:scale(1);box-shadow:0 0 #14694d00}}</style></head>
<body><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit"],[]);</script>
  <app-root ng-version="21.2.0" ngh="3" ng-server-context="ssg"><app-header _nghost-ng-c3263916076 ngh="1"><header _ngcontent-ng-c3263916076 class="header"><div _ngcontent-ng-c3263916076 class="container header__container"><a _ngcontent-ng-c3263916076 routerlink="/" class="header__brand" href="/" jsaction="click:;"><img _ngcontent-ng-c3263916076 src="/images/logo-evolia-tech.png" alt="Évolia Tech Logo" class="header__logo-icon"><span _ngcontent-ng-c3263916076 class="header__logo-text"> Évolia <span _ngcontent-ng-c3263916076 class="text-highlight">Tech</span></span></a><nav _ngcontent-ng-c3263916076><ul _ngcontent-ng-c3263916076><li _ngcontent-ng-c3263916076><a _ngcontent-ng-c3263916076 routerlink="/portfolio" href="/portfolio" jsaction="click:;">Nos Réalisations</a></li><li _ngcontent-ng-c3263916076><a _ngcontent-ng-c3263916076 routerlink="/about" href="/about" jsaction="click:;">À Propos</a></li><li _ngcontent-ng-c3263916076><a _ngcontent-ng-c3263916076 routerlink="/contact" href="/contact" jsaction="click:;">Contact</a></li></ul></nav><div _ngcontent-ng-c3263916076 class="header__actions"><app-evo-button _ngcontent-ng-c3263916076 text="Devis Gratuit" preset="green" variant="solid" _nghost-ng-c1717056994 ngh="0" jsaction="click:;"><!----><button _ngcontent-ng-c1717056994 class="btn btn--green btn--solid"><span _ngcontent-ng-c1717056994 class="btn__content"> Devis Gratuit <!----></span></button><!----></app-evo-button></div></div></header></app-header><main><router-outlet></router-outlet><app-page-quote-wizard _nghost-ng-c302096299 ngh="2"><div _ngcontent-ng-c302096299 class="quote-wizard"><header _ngcontent-ng-c302096299 class="quote-wizard__header"><div _ngcontent-ng-c302096299 class="quote-wizard__progress-container"><div _ngcontent-ng-c302096299 class="quote-wizard__progress-bar" style="width: 25%;"></div></div><span _ngcontent-ng-c302096299 class="quote-wizard__step-indicator">Étape 1 / 4</span><!----><button _ngcontent-ng-c302096299 aria-label="Fermer" class="quote-wizard__close-btn" jsaction="click:;"><fa-icon _ngcontent-ng-c302096299 class="ng-fa-icon" ngh="1"><svg data-prefix="fas" data-icon="xmark" class="svg-inline--fa fa-xmark fa-undefined fa-pull-undefined" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M55.1 73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L147.2 256 9.9 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192.5 301.3 329.9 438.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.8 256 375.1 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192.5 210.7 55.1 73.4z"/></svg></fa-icon></button></header><form _ngcontent-ng-c302096299 novalidate class="quote-wizard__form ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><div _ngcontent-ng-c302096299 class="quote-wizard__step animate-fade-in"><h2 _ngcontent-ng-c302096299 class="quote-wizard__title">Quel type de <span _ngcontent-ng-c302096299 class="text-gradient">projet</span> souhaitez-vous réaliser ?</h2><p _ngcontent-ng-c302096299 class="quote-wizard__subtitle">Sélectionnez la catégorie qui correspond le mieux à votre idée.</p><div _ngcontent-ng-c302096299 class="options-grid"><button _ngcontent-ng-c302096299 type="button" class="option-card" jsaction="click:;"><div _ngcontent-ng-c302096299 class="option-card__icon-wrapper"><fa-icon _ngcontent-ng-c302096299 class="ng-fa-icon" ngh="1"><svg data-prefix="fas" data-icon="laptop-code" class="svg-inline--fa fa-laptop-code fa-undefined fa-pull-undefined" role="img" viewBox="0 0 640 512" aria-hidden="true"><path fill="currentColor" d="M64 96c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 240-64 0 0-240-384 0 0 240-64 0 0-240zM0 403.2C0 392.6 8.6 384 19.2 384l601.6 0c10.6 0 19.2 8.6 19.2 19.2 0 42.4-34.4 76.8-76.8 76.8L76.8 480C34.4 480 0 445.6 0 403.2zM281 209l-31 31 31 31c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-9.4-9.4-9.4-24.6 0-33.9l48-48c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9zM393 175l48 48c9.4 9.4 9.4 24.6 0 33.9l-48 48c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l31-31-31-31c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z"/></svg></fa-icon></div><div _ngcontent-ng-c302096299 class="option-card__content"><h3 _ngcontent-ng-c302096299 class="option-card__label">Application Web / SaaS</h3><p _ngcontent-ng-c302096299 class="option-card__desc">Plateformes d'entreprise, portails, et architectures complexes.</p></div><!----></button><button _ngcontent-ng-c302096299 type="button" class="option-card" jsaction="click:;"><div _ngcontent-ng-c302096299 class="option-card__icon-wrapper"><fa-icon _ngcontent-ng-c302096299 class="ng-fa-icon" ngh="1"><svg data-prefix="fas" data-icon="mobile-screen-button" class="svg-inline--fa fa-mobile-screen-button fa-undefined fa-pull-undefined" role="img" viewBox="0 0 384 512" aria-hidden="true"><path fill="currentColor" d="M16 64C16 28.7 44.7 0 80 0L304 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L80 512c-35.3 0-64-28.7-64-64L16 64zm64 0l0 304 224 0 0-304-224 0zM192 472c17.7 0 32-14.3 32-32s-14.3-32-32-32-32 14.3-32 32 14.3 32 32 32z"/></svg></fa-icon></div><div _ngcontent-ng-c302096299 class="option-card__content"><h3 _ngcontent-ng-c302096299 class="option-card__label">Application Mobile</h3><p _ngcontent-ng-c302096299 class="option-card__desc">Expérience native double iOS &amp; Android avec Flutter.</p></div><!----></button><button _ngcontent-ng-c302096299 type="button" class="option-card" jsaction="click:;"><div _ngcontent-ng-c302096299 class="option-card__icon-wrapper"><fa-icon _ngcontent-ng-c302096299 class="ng-fa-icon" ngh="1"><svg data-prefix="fas" data-icon="paintbrush" class="svg-inline--fa fa-paintbrush fa-undefined fa-pull-undefined" role="img" viewBox="0 0 576 512" aria-hidden="true"><path fill="currentColor" d="M480.5 10.3L259.1 158c-29.1 19.4-47.6 50.9-50.6 85.3 62.3 12.8 111.4 61.9 124.3 124.3 34.5-3 65.9-21.5 85.3-50.6L565.7 95.5c6.7-10.1 10.3-21.9 10.3-34.1 0-33.9-27.5-61.4-61.4-61.4-12.1 0-24 3.6-34.1 10.3zM288 400c0-61.9-50.1-112-112-112S64 338.1 64 400c0 3.9 .2 7.8 .6 11.6 1.8 17.5-10.2 36.4-27.8 36.4L32 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0c61.9 0 112-50.1 112-112z"/></svg></fa-icon></div><div _ngcontent-ng-c302096299 class="option-card__content"><h3 _ngcontent-ng-c302096299 class="option-card__label">UI/UX Design</h3><p _ngcontent-ng-c302096299 class="option-card__desc">Recherche utilisateurs, wireframes et prototypes Figma.</p></div><!----></button><button _ngcontent-ng-c302096299 type="button" class="option-card" jsaction="click:;"><div _ngcontent-ng-c302096299 class="option-card__icon-wrapper"><fa-icon _ngcontent-ng-c302096299 class="ng-fa-icon" ngh="1"><svg data-prefix="fas" data-icon="rocket" class="svg-inline--fa fa-rocket fa-undefined fa-pull-undefined" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"/></svg></fa-icon></div><div _ngcontent-ng-c302096299 class="option-card__content"><h3 _ngcontent-ng-c302096299 class="option-card__label">Identité &amp; Logo</h3><p _ngcontent-ng-c302096299 class="option-card__desc">Chartes graphiques, logotypes et image de marque.</p></div><!----></button><!----></div></div><!----><!----><!----><!----><footer _ngcontent-ng-c302096299 class="quote-wizard__footer"><!----><div _ngcontent-ng-c302096299 class="quote-wizard__footer-spacer"></div><button _ngcontent-ng-c302096299 type="button" class="wizard-btn wizard-btn--primary" disabled jsaction="click:;"> Suivant <fa-icon _ngcontent-ng-c302096299 class="ng-fa-icon" ngh="1"><svg data-prefix="fas" data-icon="arrow-right" class="svg-inline--fa fa-arrow-right fa-undefined fa-pull-undefined" role="img" viewBox="0 0 512 512" aria-hidden="true"><path fill="currentColor" d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-105.4 105.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/></svg></fa-icon></button><!----><!----></footer></form><!----><!----></div></app-page-quote-wizard><!----></main><app-footer _nghost-ng-c3387293599 ngh="1"><footer _ngcontent-ng-c3387293599 class="footer"><div _ngcontent-ng-c3387293599 class="content container"><div _ngcontent-ng-c3387293599 class="contact-info"><h3 _ngcontent-ng-c3387293599>Contactez-nous</h3><p _ngcontent-ng-c3387293599>Email : <a _ngcontent-ng-c3387293599 href="mailto:contact@evolia-tech.com">contact@evolia-tech.com</a></p></div><div _ngcontent-ng-c3387293599 class="bottom"><p _ngcontent-ng-c3387293599>© 2026 Évolia Tech. Tous droits réservés.</p><ul _ngcontent-ng-c3387293599><li _ngcontent-ng-c3387293599><a _ngcontent-ng-c3387293599 routerlink href="/" jsaction="click:;">Politique de confidentialité</a></li><li _ngcontent-ng-c3387293599><a _ngcontent-ng-c3387293599 routerlink href="/" jsaction="click:;">Conditions d'utilisation</a></li></ul></div></div><div _ngcontent-ng-c3387293599 class="brand"><div _ngcontent-ng-c3387293599 class="brand-container container"><h2 _ngcontent-ng-c3387293599 class="company-name">Évolia Tech</h2></div></div></footer></app-footer></app-root>
<link rel="modulepreload" href="chunk-YRQ7TZYF.js"><link rel="modulepreload" href="chunk-L6K3RWMG.js"><link rel="modulepreload" href="chunk-CKNFI534.js"><script src="main-AN2ZMT2C.js" type="module"></script>
<link rel="modulepreload" href="chunk-XAH54N4R.js">


<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"0":"t0","1":"t1"},"c":{"0":[],"1":[{"i":"t1","r":1,"t":{"3":"t2"},"c":{"3":[]}}]}},{},{"t":{"4":"t3","7":"t4","8":"t14"},"c":{"4":[{"i":"t3","r":1}],"7":[{"i":"t4","r":1,"t":{"1":"t5","2":"t8","3":"t9","4":"t10","6":"t11","8":"t12","9":"t13"},"c":{"1":[{"i":"t5","r":1,"t":{"9":"t6"},"c":{"9":[{"i":"t6","r":1,"t":{"8":"t7"},"c":{"8":[]},"x":4}]}}],"2":[],"3":[],"4":[],"6":[],"8":[{"i":"t12","r":1}],"9":[]}}],"8":[]}},{"c":{"2":[{"i":"c302096299","r":1}]}}]}</script></body></html>`;