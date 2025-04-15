<<<<<<< HEAD
/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-7144475a'], (function (workbox) { 'use strict';

  importScripts();
  self.skipWaiting();
  workbox.clientsClaim();
  workbox.registerRoute("/", new workbox.NetworkFirst({
    "cacheName": "start-url",
    plugins: [{
      cacheWillUpdate: async ({
        response: e
      }) => e && "opaqueredirect" === e.type ? new Response(e.body, {
        status: 200,
        statusText: "OK",
        headers: e.headers
      }) : e
    }]
  }), 'GET');
  workbox.registerRoute(/.*/i, new workbox.NetworkOnly({
    "cacheName": "dev",
    plugins: []
  }), 'GET');

}));
//# sourceMappingURL=sw.js.map
=======
if(!self.define){let e,s={};const n=(n,c)=>(n=new URL(n+".js",c).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>n(e,i),o={module:{uri:i},exports:t,require:r};s[i]=Promise.all(c.map((e=>o[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-f1770938"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/6IhlBsC3cZzpwYAO8VMBO/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/6IhlBsC3cZzpwYAO8VMBO/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/0e5ce63c-7ddd9b1d0b112c96.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/182-cd4a1dc29bc54ac0.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/207-ea8a6623f3e07a93.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/234-f1b25932c21caeb9.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/245-269ab7689436f35f.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/376-bb3f77094eae9d1a.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/477-87532a97d1c65dee.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/485-3946cdf6bf3ce8bb.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/569-4544ad3af90eb2cb.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/753-64eeea96fa3b7de6.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/824-bb4a7be37b74a71d.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/972-be511a3ffd55e1d0.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/997-35ef0d5c971f20b7.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/_not-found/page-decd03acdb803b0d.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/blog/%5Bslug%5D/page-68de9f3617fadcaf.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/blog/layout-2e2f61b98eb06fce.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/blog/page-879e177016a59948.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/docs/%5B%5B...slug%5D%5D/page-afb981ea66a5bb68.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/docs/layout-f7c71cb4fcbb1a88.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/error-b48adbfdf18aea38.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/layout-a4dc2d32487265f3.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/not-found-b327ea53f8970fc8.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/app/page-b35db722be1d8826.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/fd9d1056-31cd4e5e32ed9a2a.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/main-429f2f9e9069a4cb.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/main-app-28f5c1cf23bfa123.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-0f29641c19ba3acb.js",revision:"6IhlBsC3cZzpwYAO8VMBO"},{url:"/_next/static/css/5fd374e90b8f0812.css",revision:"5fd374e90b8f0812"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/docs.png",revision:"8f6e212edc2bc734ee6bcfa764b5544c"},{url:"/docsw.png",revision:"f7fbb6e34217d818b513d60290f6da9f"},{url:"/favicon-48x48.png",revision:"855e40ed3754666fbde1f53620ed9b1d"},{url:"/favicon.svg",revision:"04e8c29e9b671c2e5e42267d55fdafd0"},{url:"/git-cheatsheet.pdf",revision:"1fcf70393d2aed298ef2c521126e8cd3"},{url:"/git_explained_in_100_seconds.mp4",revision:"9d2862eaa4cc9a5e4ee124fd1b02f1fd"},{url:"/og.png",revision:"d08df9673a68bd26777d70f03ad68693"},{url:"/site.webmanifest",revision:"9090e674d41e265d5f03c180fe5f6721"},{url:"/web-app-manifest-192x192.png",revision:"06461dc6065d5ddd00eb2e38b858151e"},{url:"/web-app-manifest-512x512.png",revision:"6700fe9fb3805ebead0c5075266431f8"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:n})=>"1"===e.headers.get("RSC")&&n&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
>>>>>>> main
