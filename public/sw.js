if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const d=e=>n(e,t),r={module:{uri:t},exports:c,require:d};s[t]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/_dnTqKvdPf6BAz3v_PK9_/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/_dnTqKvdPf6BAz3v_PK9_/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-e21fe8bbb1ba0e0f.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/183-e8df76ae15c63c3c.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/190-6b2808fd421f4b63.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/231-676db7b02884e4b1.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/329-81a1ec918e36fa1e.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/452-49ed96bb8ebd342d.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/483-cc884bf94e3ed701.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/51-0c28f71685f911d7.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/555-c0eb30419ea647ba.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/560-fa581c6bf935cf8f.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/63-6f0c4e8e10503b1c.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/723-4a111857910a6fe8.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/_not-found/page-53a3cd820d53d1d6.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-1a6e739fe8427886.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/blog/layout-65ff05c2a861637a.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/blog/page-a9042e5b7b1f2d17.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/docs/%5B%5B...slug%5D%5D/page-c4bb3e519d5a3f57.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/docs/layout-3126bb4ec5d03df6.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/error-79aaab5533143ef0.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/layout-023ce9644e18f8bb.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/not-found-471136cd545e74e3.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/app/page-a747d021bc91fcda.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/fd9d1056-bb11881ef41582aa.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/main-9e365a2b95022442.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/main-app-9ce64096fcc4963e.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-0d3010c1264c7b10.js",revision:"_dnTqKvdPf6BAz3v_PK9_"},{url:"/_next/static/css/d357e9160ffc9e39.css",revision:"d357e9160ffc9e39"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/apple-touch-icon.png",revision:"6dc8cb21f068bd62ea083475a0af5d6f"},{url:"/docs.png",revision:"0db9d440532be7cc7d4c7e9c5d315e10"},{url:"/docsw.png",revision:"32ed12467029e3abe1953d7caf0dfa44"},{url:"/favicon-48x48.png",revision:"449f9c9a8a02e88a48bd70eedacd7508"},{url:"/favicon.svg",revision:"162bc19e2e6d54ee8063f89745412f83"},{url:"/git-cheatsheet.pdf",revision:"1fcf70393d2aed298ef2c521126e8cd3"},{url:"/git_explained_in_100_seconds.mp4",revision:"9d2862eaa4cc9a5e4ee124fd1b02f1fd"},{url:"/image-201.webp",revision:"714358b2d7c232900f1307ffaa879128"},{url:"/og.png",revision:"d7a7f37ff8a8606e2875e6c13e597558"},{url:"/site.webmanifest",revision:"9090e674d41e265d5f03c180fe5f6721"},{url:"/web-app-manifest-192x192.png",revision:"2400582de736bff158753d90da169185"},{url:"/web-app-manifest-512x512.png",revision:"f7e574f41f07994ea5b03f45d0e18b96"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
