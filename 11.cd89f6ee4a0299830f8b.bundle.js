(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{NjgO:function(e,t,n){"use strict";n.r(t);var o=n("Zdl6"),r=n("sEcA"),a=function(){return window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop||window.scrollY},i=function(){return document.body.offsetHeight||document.documentElement&&document.documentElement.scrollHeight||document.body.scrollHeight},c=a();window.addEventListener("scroll",(function(e){console.log("Scroll vertical or herizontal");var t=a(),n=i();t>c?(console.log("Scroll down"),t+window.innerHeight>=n&&console.log("you're at the bottom of the page")):(console.log("Scroll up"),0===t&&console.log("you're at the top of the page"));c=t}));var l=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=arguments.length>1?arguments[1]:void 0;if(n)window.scrollTo({top:0,behavior:"smooth"});else{var o=a();o>0&&(window.requestAnimationFrame(e),window.scrollTo(0,o-o/t))}},u=document.querySelector(".scroll-to-top-btn");u&&u.addEventListener("click",(function(){l(null,!0)}));var d=document.querySelector(".scroll-to-bottom-btn");d&&d.addEventListener("click",(function(){!function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:20,n=arguments.length>1?arguments[1]:void 0,o=i();if(n)window.scrollTo({top:o,behavior:"smooth"});else{var r=a()+window.innerHeight-o;r<0&&(window.requestAnimationFrame(e),window.scrollTo(0,r-r/t))}}(null,!0)}));var s=document.querySelector(".scroll-to-view-btn");s&&s.addEventListener("click",(function(){document.querySelector(".hello").scrollIntoView({behavior:"smooth"})}));var f=new Date(2020,3,4),v=new Date(2020,7,4);var g=function(){var e=function(e){document.getElementsByTagName("body")[0].setAttribute("data-theme-style",e)};if(Object(r.a)(new Date,f,v))e("gray");else{var t=localStorage.getItem("theme");t&&e(t),document.querySelector(".moon").addEventListener("click",(function(){var t="light"===document.getElementsByTagName("body")[0].getAttribute("data-theme-style")?"dark":"light";e(t),localStorage.setItem("theme",t)}))}},m=n("mTgQ");(g(),m.a.init(),Promise.all([n.e(9),n.e(16)]).then(n.bind(null,"Amp2")).then((function(e){return e.default()})),Promise.all([n.e(7),n.e(12)]).then(n.bind(null,"rDv0")).then((function(e){return e.default()})),Promise.all([n.e(10),n.e(15)]).then(n.bind(null,"JmQe")).then((function(e){var t=new e.default;t.init();var n=document.querySelector(".start-replay-tour"),o=document.querySelector(".start-hint");n.addEventListener("click",(function(){t.initAndShowIntro()})),o.addEventListener("click",(function(){t.toggleHint()}))})),Object(r.b)())&&document.getElementById("btnInstall").setAttribute("hidden","");window.addEventListener("load",(function(){var e;l(),document.querySelector(".developer-mode-link").setAttribute("href","/assets/data/".concat(m.a.locale,"/chendachao.json"));var t=function(t){var n=navigator.onLine?"":"You are offline!";n?e=o.a.error(n.toUpperCase(),{action:{text:"Close",onClick:function(e,t){t.delete()}}}):e&&e.delete()};t(),window.addEventListener("online",t),window.addEventListener("offline",t)})),window.addEventListener("error",(function(e){var t=(e.error||e.message).toString();o.a.error(t)}))},mTgQ:function(e,t,n){"use strict";var o=n("6QKu"),r=n("vDqi"),a=n.n(r);function i(e,t,n,o,r,a,i){try{var c=e[a](i),l=c.value}catch(e){return void n(e)}c.done?t(l):Promise.resolve(l).then(o,r)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(o,r){var a=e.apply(t,n);function c(e){i(a,o,r,c,l,"next",e)}function l(e){i(a,o,r,c,l,"throw",e)}c(void 0)}))}}var l=function(){var e,t,n=(e=localStorage.getItem("lang")||window.navigator.languages&&window.navigator.languages[0]||null,-1!==(t=e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage).indexOf("-")&&(t=t.split("-")[0]),-1!==t.indexOf("_")&&(t=t.split("_")[0]),console.log(e,t),t||"en"),r=n,i={};function l(e,t){t=t||{};var n=i[r];return new o.a(n[e],r).format(t)}function u(){document.querySelectorAll("*[data-i18n-id]").forEach((function(e){var t=e.dataset.i18nId;e.innerHTML=l(t)})),document.querySelectorAll("*[data-i18n-attr]").forEach((function(e){var t=e.dataset.i18nAttr.split("=");e.setAttribute(t[0],l(t[1]))}))}var d=function(){var e=c(regeneratorRuntime.mark((function e(t){var n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/assets/i18n/".concat(t,".json"),e.prev=1,e.next=4,a.a.get(n);case 4:o=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,a.a.get("/assets/i18n/en.json");case 11:o=e.sent;case 12:return e.abrupt("return",o.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();function s(){return(s=c(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(t);case 2:n=e.sent,i[t]=n,u();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=function(){!function(e){r=e,localStorage.setItem("lang",e)}(r),function(e){s.apply(this,arguments)}(r)};return{init:function(){f(),document.querySelector(".language-btn").addEventListener("click",(function(e){r="en"===r?"zh":"en",f(),window.location.reload()}))},format:l,locale:r}}();t.a=l},sEcA:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return u}));var o=n("M39V"),r=n.n(o),a=(n("mTgQ"),n("Zdl6"),r.a.getParser(window.navigator.userAgent));function i(){return"Internet Explorer"===a.getBrowserName()}var c=function(){return"desktop"===a.getPlatformType()},l=function(e,t){return(e.getTime()-t.getTime())/864e5},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Date,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new Date,o=l(e,t),r=l(n,e);return o>=-1&&r>=-1}}}]);