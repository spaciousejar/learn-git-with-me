if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),d={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>d[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/JmPgC3THX55xMd3klpFEL/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/JmPgC3THX55xMd3klpFEL/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-7ddd9b1d0b112c96.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/207-4fcee5133e6a1ca1.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/444-f1180c6daeb71ce4.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/466-d0573289ea3dea86.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/569-5f54ea95e1aec8e8.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/584-28e8263a633c4a3a.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/73-761555f043340c8b.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/789-6c275cb254db8bd7.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/842-2fc7e767bd128472.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/914-afc076250ef60bdd.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/923-5b2ec970b4ebec74.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/972-24ba070e7a4afced.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/997-2269ad1d30d44a32.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/_not-found/page-decd03acdb803b0d.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-8f3283beb611f12a.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/blog/layout-2e2f61b98eb06fce.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/blog/page-39c66b3626428aac.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/docs/%5B%5B...slug%5D%5D/page-7c4b8940a5c265df.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/docs/layout-4e8d9cc68670389b.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/error-1b02265204505694.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/layout-12b41bc62a45320b.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/not-found-e5fc7dfa0e5ea167.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/app/page-670417eb7587fdc0.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/fd9d1056-31cd4e5e32ed9a2a.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/main-429f2f9e9069a4cb.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/main-app-84fbb984436a84a8.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-0570e762cedb76a6.js",revision:"JmPgC3THX55xMd3klpFEL"},{url:"/_next/static/css/0f5ef4d1ccfdf18d.css",revision:"0f5ef4d1ccfdf18d"},{url:"/_next/static/media/66f30814ff6d7cdf.p.woff2",revision:"addf0d443087aa4b985f763c80182017"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/docs.png",revision:"8f6e212edc2bc734ee6bcfa764b5544c"},{url:"/docsw.png",revision:"f7fbb6e34217d818b513d60290f6da9f"},{url:"/favicon-48x48.png",revision:"855e40ed3754666fbde1f53620ed9b1d"},{url:"/favicon.svg",revision:"04e8c29e9b671c2e5e42267d55fdafd0"},{url:"/git-cheatsheet.pdf",revision:"1fcf70393d2aed298ef2c521126e8cd3"},{url:"/git_explained_in_100_seconds.mp4",revision:"9d2862eaa4cc9a5e4ee124fd1b02f1fd"},{url:"/og.png",revision:"a91bc02e59baa2a274c5c52b2460080c"},{url:"/op.png",revision:"a1517e18decf080c49092ef1b250b957"},{url:"/site.webmanifest",revision:"9090e674d41e265d5f03c180fe5f6721"},{url:"/web-app-manifest-192x192.png",revision:"06461dc6065d5ddd00eb2e38b858151e"},{url:"/web-app-manifest-512x512.png",revision:"6700fe9fb3805ebead0c5075266431f8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
