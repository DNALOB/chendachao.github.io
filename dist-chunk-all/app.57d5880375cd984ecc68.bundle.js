(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{137:function(e,t,n){n(138),e.exports=n(353)},324:function(e,t,n){},325:function(e,t,n){"use strict";n.r(t);var o=n(93),i=n.n(o),r=n(94);t.default=function(){var e=/localhost|127.0.0.1/.test(window.location.origin)?"https://chendachao.github.io":window.location.origin,t=document.querySelector("#dialog"),n=document.querySelector("#closeBtn"),o=document.querySelector(".qrcode-handler");r.default.registerDialog(t),o.addEventListener("click",(function(){t.showModal(),i.a.toDataURL(e,{errorCorrectionLevel:"H",type:"image/jpeg",quality:1,margin:1,color:{}}).then((function(e){document.querySelector(".mobile-qrcode").src=e})).catch((function(e){console.error(e)}))})),n.onclick=function(){t.close()},t.addEventListener("click",(function(e){var n=t.getBoundingClientRect();n.top<=e.clientY&&e.clientY<=n.bottom&&n.left<=e.clientX&&e.clientX<=n.right||t.close()}))}},353:function(e,t,n){"use strict";n.r(t);n(324);var o=function(){var e=function(e){document.getElementsByTagName("body")[0].setAttribute("data-theme-style",e)},t=localStorage.getItem("theme");t&&e(t),document.querySelector(".moon").addEventListener("click",(function(){var t="light"===document.getElementsByTagName("body")[0].getAttribute("data-theme-style")?"dark":"light";e(t),localStorage.setItem("theme",t)}))};n(325);o(),Promise.all([n.e(10),n.e(8)]).then(n.bind(null,354)).then((function(e){return new e.default})),Promise.all([n.e(2),n.e(9)]).then(n.bind(null,355)).then((function(e){return e.default()})),Promise.resolve().then(n.bind(null,325)).then((function(e){return e.default()})),"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/sw.js").then((function(e){console.log("SW registered: ",e)})).catch((function(e){console.log("SW registration failed: ",e)}))}))}},[[137,0,1,7]]]);