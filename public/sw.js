if(!self.define){let e,s={};const t=(t,i)=>(t=new URL(t+".js",i).href,s[t]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=t,e.onload=s,document.head.appendChild(e)}else e=t,importScripts(t),s()})).then((()=>{let e=s[t];if(!e)throw new Error(`Module ${t} didn’t register its module`);return e})));self.define=(i,n)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const r=e=>t(e,a),o={module:{uri:a},exports:c,require:r};s[a]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/2BSHWOlOGtiMr7zDTbAtk/_buildManifest.js",revision:"124917c8ab80db3cd8f342991e84256b"},{url:"/_next/static/2BSHWOlOGtiMr7zDTbAtk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-3f2d023f4b59cde8.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/173-b9db1857582be03d.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/250-a53390aab0021471.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/298-5320fc95a37491bc.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/339-0f1ed3da05b81863.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/365-25201076f4b6ebf1.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/455-de2533cdb2650d31.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/4bd1b696-25217cba9c947c9f.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/563-3998caac1de697e4.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/612-40b0a90088b8c4f1.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/789-fc0156bcbb870376.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/834-6c62ae05ae0221bc.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/840-849c7be127442f35.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/_not-found/page-ff173e9c27337cfa.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-729f05cd09f35a35.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/blog/layout-683bdf90be068098.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/blog/page-9e4aeca5e9768709.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/docs/%5B%5B...slug%5D%5D/page-d6f24a45c7e33ca9.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/docs/layout-c03546a1dac3104f.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/error-18eb61f0232e19b7.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/layout-7804ac2806085814.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/not-found-11dd66796f438d09.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/app/page-61320e9dc63db07c.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/framework-d29117d969504448.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/main-017d7376bc6437f9.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/main-app-de3af0e6b56cc0bc.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-36c312b850fb5e70.js",revision:"2BSHWOlOGtiMr7zDTbAtk"},{url:"/_next/static/css/3fae4e1df8956a69.css",revision:"3fae4e1df8956a69"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/docs.png",revision:"9820956bb668e2b7784ba545fb33102a"},{url:"/docsw.png",revision:"32ed12467029e3abe1953d7caf0dfa44"},{url:"/favicon-48x48.png",revision:"449f9c9a8a02e88a48bd70eedacd7508"},{url:"/favicon.svg",revision:"162bc19e2e6d54ee8063f89745412f83"},{url:"/git-cheatsheet.pdf",revision:"1fcf70393d2aed298ef2c521126e8cd3"},{url:"/git_explained_in_100_seconds.mp4",revision:"9d2862eaa4cc9a5e4ee124fd1b02f1fd"},{url:"/og.png",revision:"d7a7f37ff8a8606e2875e6c13e597558"},{url:"/site.webmanifest",revision:"9090e674d41e265d5f03c180fe5f6721"},{url:"/web-app-manifest-192x192.png",revision:"2400582de736bff158753d90da169185"},{url:"/web-app-manifest-512x512.png",revision:"f7e574f41f07994ea5b03f45d0e18b96"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:t})=>"1"===e.headers.get("RSC")&&t&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
