(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{ZDlM:function(e,t,o){"use strict";o.r(t);var n=o("R5/Y"),r=o.n(n);function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var a=function(){function e(){var t,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n=function(){localStorage.setItem("hideIntro",!0)},(o="hideIntro")in(t=this)?Object.defineProperty(t,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[o]=n,!JSON.parse(localStorage.getItem("hideIntro"))&&this.showIntro()}var t,o,n;return t=e,(o=[{key:"showIntro",value:function(){var e=r()();e.setOptions({showProgress:!0,steps:[{intro:"Hello! This is Larry Chen. Welcome to my Homepage. Click the 'Next' button to know more about me."},{element:document.querySelector("#step1"),intro:"This sign brings me good luck, now I share it with you. ^.^"},{element:document.querySelector("#step2"),intro:"This is who I am."},{element:document.querySelector("#step3"),intro:"You can reach out to me in the following ways:"},{element:document.querySelector("#step4"),intro:"Click here to have a surprise"}]}).start(),e.onskip(this.hideIntro),e.oncomplete(this.hideIntro)}}])&&i(t.prototype,o),n&&i(t,n),e}();t.default=a}}]);