if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,d,s)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+c.slice(1)};return Promise.all(d.map(c=>{switch(c){case"exports":return a;case"module":return i;default:return e(c)}})).then(e=>{const c=s(...e);return a.default||(a.default=c),a})}))}}define("./sw.js",["./workbox-8bc83683"],(function(e){"use strict";importScripts("assets/sw-patch.js"),self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.clientsClaim(),e.precacheAndRoute([{url:"./images/bg.ea2ccd94172d6c7e54bb0ac80f073a8e.jpg",revision:"467e26e02d5ca5ed0e3c6f5320cdabdd"},{url:"./images/signature.8e1dc1aa746aaf4d5e7ccae290e58107.svg",revision:"4a0ae24cf01a78ebce3b2e209bc3ecc8"},{url:"./images/site.7e09efeb73a34e73c6c1743d95b91bad.png",revision:"5f62c1b299a68146ca8f0db51bd0fb55"},{url:"./images/wechat-qr-code.4d8b2b6837d5b12e7d0efc6ba55e9920.jpg",revision:"c8d4fe131afb80931ca32f8f48e1501d"},{url:"1.391ed6f93170a8bf4607.css",revision:"7ee1d228dadbf9a1a9c99eff1c899d39"},{url:"10.3ccd567e9b50759ee135.bundle.js",revision:"4c0fe26c30586d79d4e9a2b4a014af6b"},{url:"10.4af8b432196f227bdeb4.css",revision:"ccfe873fe88bdbdda1dd8d890c33f557"},{url:"11.590f5a5dad12b0908624.bundle.js",revision:"31904191ab547f0e7f927f9c82dc1f3d"},{url:"11.bf292f432cefdfbde7ea.css",revision:"2ea7740a8e64faa41b2b762f271eab81"},{url:"12.7d825c56a1775d370f4c.bundle.js",revision:"4a750df077def6c03a363d9d0729cc1e"},{url:"13.a6f692bf6c914c959974.bundle.js",revision:"e9fe8015e7a9323e0ea62d38366d784b"},{url:"13.ce8d2b1e1cd4d1bec91c.css",revision:"6c8a675337454e1f159b16cf9a6487e2"},{url:"14.0e4338761429b4eb16ac.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"14.2f47f18c0a0f8281670b.bundle.js",revision:"a1db6674298a417f8d75871c3445a808"},{url:"15.d5864ac7ed260191a16d.css",revision:"a40131300bb38c8ec9a68abf6c758bd6"},{url:"15.fe3e35ed93fd64b65b86.bundle.js",revision:"1f4cabea19c86f11de6fffa6db05948f"},{url:"16.1831a2795e09dc7bdb4e.css",revision:"a3481277b41ef949a70fa2e3c8d1d782"},{url:"16.64710bb2ee3ab89dad3d.bundle.js",revision:"8564519113d9f1971cf99e583ea3e1e5"},{url:"17.177619f611470ebdf806.bundle.js",revision:"a40c0e3b9a0d0f3468d315cae9931d6e"},{url:"18.061d0103945c0bf40361.bundle.js",revision:"34a0bc9bbfc4818b51b8df8b31e56811"},{url:"2.24dab12163fdbf85ff3e.css",revision:"6225dabb7f2c7f530b6cca1143b5f59e"},{url:"3.e9615f836f2cc1a4a14e.css",revision:"a9e4ce540d1224728cebf0e7e5ed63bc"},{url:"7.bf3ff6c25dec61dd8706.css",revision:"5416cf0afab048b992216407ada9c37e"},{url:"8.4ff606ac83e473023c2b.bundle.js",revision:"e7b43c34338bdaf4f22a0a03219ce2c7"},{url:"8.4ff606ac83e473023c2b.bundle.js.LICENSE.txt",revision:"455f9f3ae849b1b7c9d5b5f2d351830a"},{url:"8.b6c3d1e146c1a3d3d6e2.css",revision:"0f3d7cd857866dd90d6eabeb886ae9b0"},{url:"9.9bfce51ec5d4d9a7a395.bundle.js",revision:"65d52329668bae6b5f6a5ccb05227714"},{url:"9.9bfce51ec5d4d9a7a395.bundle.js.LICENSE.txt",revision:"783f14fa45b10e088e68f98251448010"},{url:"COMMITHASH",revision:"6e1fe73156d0f4ebc4da09dd5d681563"},{url:"VERSION",revision:"f726c7f802e0476e4e01ee2481145105"},{url:"app.d54a2a82601baafcda3a.bundle.js",revision:"748e7f37036cd937ca3ed5b117a1552d"},{url:"assets/data/en/chendachao.json",revision:"138c34b69892fed1311dda38f279eee8"},{url:"assets/data/zh/chendachao.json",revision:"9419c5ce6c9883eaa8df4cf368010039"},{url:"assets/i18n/en.json",revision:"da3b897ccc4f180222ee30388b76facd"},{url:"assets/i18n/zh.json",revision:"d82e249c547ebf1c4fe85cb165b39671"},{url:"assets/sw-patch.js",revision:"6b872636bee010cf6da8ae0161ca0fba"},{url:"cv.1d2703097c95bf5ed81a.bundle.js",revision:"2bcc0490ee48daf4c4d54f6386648380"},{url:"cv.html",revision:"ec346d5f0cdecf11a14740c3c61f9291"},{url:"favicon.ico",revision:"2351817742ecc337ea75f189d6e3a821"},{url:"images/icons/icon-128x128.png",revision:"313cd83b50d857131d55d04f221ddd03"},{url:"images/icons/icon-144x144.png",revision:"5f380e168dd6c89f31a5ca0968661da1"},{url:"images/icons/icon-152x152.png",revision:"5a7efb209a32dca59ce7805805b526a1"},{url:"images/icons/icon-192x192.png",revision:"367759619dec2e13b6b235485004f487"},{url:"images/icons/icon-384x384.png",revision:"fc07c039cf77c092b5cecd0ecaf9b380"},{url:"images/icons/icon-512x512.png",revision:"548db322e8d457f71fc71763559dac0c"},{url:"images/icons/icon-72x72.png",revision:"74ec60f8550144e535a268c34ca4d89f"},{url:"images/icons/icon-96x96.png",revision:"3d4f59a7594f5ceda615bf2ad9afb499"},{url:"index.html",revision:"c82ee5cfe63406a48c1bc3ae9e7de9ec"},{url:"install.26b281c6ecec729cba24.bundle.js",revision:"604ce79ebcd21461ca07639bb7dc5039"},{url:"manifest.json",revision:"6c8074ac79ddc45ac3ac6216dab15b1e"},{url:"print.8f7366dee16a096a00cd.bundle.js",revision:"3ef3af31c5a967116faeaa10f9ea254b"},{url:"robots.txt",revision:"81044e0a6407ec221462d85721544a16"},{url:"runtime.c8d6903558a9e884cbc9.bundle.js",revision:"7695e168983fe7b177755cc930ea7b2c"},{url:"stone.b47b9ab05762c4cd521c.bundle.js",revision:"a91496b0efa3cce0ede88352968e6924"},{url:"stone.html",revision:"0de8fe9119ae5216689b22674adc653a"},{url:"sw-offline-google-analytics.js",revision:"d3c6216683b1108bd37114412eaa23ca"},{url:"vendors~app.cc1c4015d4f40b00ced8.bundle.js",revision:"776e280affcdce1c5d5f5543770a51f8"},{url:"vendors~app.cc1c4015d4f40b00ced8.bundle.js.LICENSE.txt",revision:"11ba6bbe7acfcc6f0660e132a4496982"},{url:"vendors~app~cv~stone.7efeb02b5b1a93dce210.bundle.js",revision:"df58fd9bd63ffb4af59b9f8859023cd6"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(/^\/api\//,new e.StaleWhileRevalidate,"GET"),e.registerRoute(/\.(?:js|css)$/,new e.StaleWhileRevalidate({cacheName:"js-css-cache",plugins:[]}),"GET"),e.registerRoute(/\.(?:png|gif|jpg|jpeg|svg|ico)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:200,purgeOnQuotaError:!0,maxAgeSeconds:31536e3})]}),"GET"),e.initialize({parameterOverrides:{cd1:"offline"}})}));
//# sourceMappingURL=sw.js.map
