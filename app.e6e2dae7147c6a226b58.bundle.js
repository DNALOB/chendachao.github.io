(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{0:function(e,n,t){t("55Il"),e.exports=t("tjUo")},Zdl6:function(e,n,t){"use strict";var o=t("x04a");t("h5zZ");function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var a=new o.a(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},{position:"bottom-center",theme:"alive",fullWidth:!0,fitToScreen:!1}));n.a=a},rG0W:function(e,n,t){"use strict";(function(e){t.d(n,"a",(function(){return c}));var o=t("Zdl6");function r(e,n,t,o,r,i,a){try{var c=e[i](a),s=c.value}catch(e){return void t(e)}c.done?n(s):Promise.resolve(s).then(o,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var a=e.apply(n,t);function c(e){r(a,o,i,c,s,"next",e)}function s(e){r(a,o,i,c,s,"throw",e)}c(void 0)}))}}var a=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function c(n){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL||"",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t=e.env.PUBLIC_URL||"",o="".concat(t,"/sw.js");a?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):s(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(o,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):s(o,n)}))}}function s(e,n){var t=document.querySelector(".subscribe-btn");["default","denied"].includes(Notification.permission)&&t.removeAttribute("hidden"),t.addEventListener("click",i(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Notification.requestPermission();case 3:if("granted"!==e.sent){e.next=8;break}navigator.serviceWorker.getRegistration().then((function(e){e.pushManager.subscribe({userVisibleOnly:!0})})),e.next=9;break;case 8:throw new Error("Notifications blocked. Please enable them in your browser.");case 9:e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),o.a.error(e.t0,{action:{text:"Close",onClick:function(e,n){n.delete()}}}),console.log("Notifications error",e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))),navigator.serviceWorker.register(e).then((function(e){e.addEventListener("updatefound",(function(){var t=e.installing;null!=t&&t.addEventListener("statechange",(function(){switch(console.log("statechange",t.state),t.state){case"installed":navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use.",t.state),n&&n.onSuccess&&n.onSuccess(e));break;case"redundant":console.error("The installing service worker became redundant.")}}))}))})).catch((function(e){console.log("SW registration failed: ",e)}))}}).call(this,t("8oxB"))},tjUo:function(e,n,t){"use strict";t.r(n);var o=t("Zdl6"),r=(t("9d8Q"),t("rG0W"));Promise.all([t.e(8),t.e(11)]).then(t.bind(null,"NjgO")),t.e(14).then(t.bind(null,"sA7o")),r.a({onUpdate:function(e){var n=function(){var e,n;e="New version available.",n="Please refresh the window","granted"===Notification.permission&&navigator.serviceWorker.getRegistration().then((function(t){var o={body:n,icon:"/images/bell.svg",badge:"/images/notification.svg"};t.showNotification(e,o)})),o.a.success("New version available.",{action:{text:"Update",onClick:function(e,n){window.location.reload()}}})},t=e.waiting;t&&(t.addEventListener("statechange",(function(e){console.log("onUpdate statechange",e.target.state),"activated"===e.target.state&&n()})),t.postMessage({type:"SKIP_WAITING"}))},onSuccess:function(e){console.log("registered app for offline use. details:",e)}})}},[[0,0,1,6]]]);