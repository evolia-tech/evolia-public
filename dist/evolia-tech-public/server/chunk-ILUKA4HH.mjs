import './polyfills.server.mjs';
var o={rating:4.2,count:8,url:"https://g.page/r/evolia-tech"};function i(r=o.rating){let t=typeof r=="number"?r:parseFloat(String(r))||5;return[1,2,3,4,5].map(n=>{let e=t-(n-1);return e>=1?100:e<=0?0:Math.round(e*100)})}export{o as a,i as b};
