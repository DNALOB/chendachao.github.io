(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{NjgO:function(e,t,n){"use strict";n.r(t);var a=n("6QKu"),r=n("j6J2"),o=new Date(2020,3,4);var i=function(){var e=function(e){document.getElementsByTagName("body")[0].setAttribute("data-theme-style",e)};if(Object(r.a)(new Date,o)<=1)e("gray");else{var t=localStorage.getItem("theme");t&&e(t),document.querySelector(".moon").addEventListener("click",(function(){var t="light"===document.getElementsByTagName("body")[0].getAttribute("data-theme-style")?"dark":"light";e(t),localStorage.setItem("theme",t)}))}},u=n("vDqi"),c=n.n(u);function l(e,t,n,a,r,o,i){try{var u=e[o](i),c=u.value}catch(e){return void n(e)}u.done?t(c):Promise.resolve(c).then(a,r)}function s(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function i(e){l(o,a,r,i,u,"next",e)}function u(e){l(o,a,r,i,u,"throw",e)}i(void 0)}))}}var d=function(){var e,t,n=(e=localStorage.getItem("lang")||window.navigator.languages&&window.navigator.languages[0]||null,-1!==(t=e=e||window.navigator.language||window.navigator.browserLanguage||window.navigator.userLanguage).indexOf("-")&&(t=t.split("-")[0]),-1!==t.indexOf("_")&&(t=t.split("_")[0]),console.log(e,t),t||"en"),r=n,o={};function i(e,t){t=t||{};var n=o[r];return new a.a(n[e],r).format(t)}function u(){document.querySelectorAll("*[data-i18n-id]").forEach((function(e){var t=e.dataset.i18nId;e.innerHTML=i(t)})),document.querySelectorAll("*[data-i18n-attr]").forEach((function(e){var t=e.dataset.i18nAttr.split("=");e.setAttribute(t[0],i(t[1]))})),document.querySelectorAll("template").forEach((function(e){e.content.querySelectorAll("[data-i18n-id]").forEach((function(e){console.log("i18nLabel",e);var t=e.dataset.i18nId;e.innerHTML=i(t)}))}))}var l=function(){var e=s(regeneratorRuntime.mark((function e(t){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="/assets/i18n/".concat(t,".json"),e.prev=1,e.next=4,c.a.get(n);case 4:a=e.sent,e.next=12;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,c.a.get("/assets/i18n/en.json");case 11:a=e.sent;case 12:return e.abrupt("return",a.data);case 13:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();function d(){return(d=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l(t);case 2:n=e.sent,o[t]=n,u();case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var f=document.querySelector(".language-btn");f.setAttribute("data-lang",n),function(e){d.apply(this,arguments)}(n);return f.addEventListener("click",(function(){var e=this.dataset.lang;(function(e){r=e,localStorage.setItem("lang",e)})(e="en"===e?"zh":"en"),window.location.reload()})),{format:i}}();(Promise.all([n.e(8),n.e(10)]).then(n.bind(null,"ZDlM")).then((function(e){var t=new e.default(d.format);setTimeout((function(){t.init()}),6e3);var n=document.querySelector(".start-replay-tour"),a=document.querySelector(".start-hint");n.addEventListener("click",(function(){t.initAndShowIntro()})),a.addEventListener("click",(function(){t.toggleHint()}))})),Promise.all([n.e(7),n.e(12)]).then(n.bind(null,"yvT+")).then((function(e){return e.default()})),Promise.all([n.e(5),n.e(11)]).then(n.bind(null,"RaDY")).then((function(e){return e.default()})),Object(r.b)())&&document.getElementById("btnInstall").setAttribute("hidden","");window.addEventListener("load",(function(){i();var e=document.getElementById("status"),t=function(t){var n=navigator.onLine?"":"offline simida, will use cache!";e.className=n,e.innerHTML=n.toUpperCase()};t(),window.addEventListener("online",t),window.addEventListener("offline",t)}));var f=new a.a("My name is {name}.","en-US");console.log("IntlMessageFormat",f.format({name:"larry"}))},j6J2:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return u}));var a=n("M39V"),r=n.n(a).a.getParser(window.navigator.userAgent);function o(){return"Internet Explorer"===r.getBrowserName()}function i(){var e=window.matchMedia||window.msMatchMedia;return!!e&&e("(pointer:coarse)").matches}var u=function(e,t){return Math.abs(e.getTime()-t.getTime())/864e5}}}]);