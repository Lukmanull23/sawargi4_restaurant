if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const f=e=>n(e,r),d={module:{uri:r},exports:s,require:f};i[r]=Promise.all(c.map((e=>d[e]||f(e)))).then((e=>(o(...e),s)))}}define(["./workbox-39f042ad"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"app.bundle.js",revision:"4f34454cf4cf915aceb0cbdeedc5ec58"},{url:"app.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app.webmanifest",revision:"45085b7bfa87b737d779f51350d48750"},{url:"bd6b63650298f334a08b.jpg",revision:null},{url:"favicon.ico",revision:"4e1fcd5e1d96a924013bef90ba6357ec"},{url:"icons/icon-128x128.png",revision:"d9d85398370da419f3a295067b96a8d4"},{url:"icons/icon-144x144.png",revision:"86f40ab881670515c48c3fc68a86f4db"},{url:"icons/icon-152x152.png",revision:"18f4c4798b8052267db5a2822036a02f"},{url:"icons/icon-192x192.png",revision:"4e1fcd5e1d96a924013bef90ba6357ec"},{url:"icons/icon-384x384.png",revision:"9cd6418c49223c554a0b7fe8fa37c791"},{url:"icons/icon-512x512.png",revision:"4ea14236f78e2fb92665d3a82d39bf31"},{url:"icons/icon-72x72.png",revision:"b12ee77d44789991bfd2b4443fd21583"},{url:"icons/icon-96x96.png",revision:"f6c77e121ddf804616befd907be24645"},{url:"images/heros/hero-image_2.jpg",revision:"49f78cae81de4f48caf1c2fe0271c828"},{url:"index.html",revision:"1ccc78ef2c83a0b3e8d98ebf3f6c0f73"}],{}),e.registerRoute(/https:\/\/restaurant-api.dicoding.dev\//,new e.StaleWhileRevalidate({cacheName:"RestaurantKatalog",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
//# sourceMappingURL=sw.bundle.js.map
