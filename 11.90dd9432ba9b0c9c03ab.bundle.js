(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{rDv0:function(t,e,o){"use strict";o.r(e);var i=o("0FX9"),n=o.n(i),a=o("pWKE");e.default=function(){var t=/localhost|127.0.0.1/.test(window.location.origin)?"https://chendachao.github.io":window.location.origin,e=document.querySelector("#dialog"),o=document.querySelectorAll(".dialog-dismiss-trigger"),i=document.querySelector(".qrcode-handler");function c(){e.classList.add("shake"),setTimeout((function(){return e.classList.remove("shake")}),300)}a.a.registerDialog(e),i.addEventListener("click",(function(){e.showModal(),e.classList.add("appear-from-top"),setTimeout((function(){e.classList.remove("appear-from-top")}),500);var o=document.querySelector(".mobile-qrcode");o.setAttribute("alt",t);var i=document.createElement("canvas");n.a.toCanvas(i,t,{width:320,height:320,margin:1.5,errorCorrectionLevel:"H",quality:1,version:4}).then((function(t){var e=80,i=80,n=t.getContext("2d"),a=new Image;a.src="favicon.ico",a.onload=function(){n.lineWidth=20,n.lineJoin="round",n.lineCap="round",n.strokeStyle="#ffffff",n.beginPath(),n.rect(t.width/2-e/2-10,t.width/2-e/2-10,e+20,i+20),n.stroke(),n.fillStyle="#BADA55",n.fillRect(t.width/2-e/2-10,t.height/2-i/2-10,e+20,i+20),n.drawImage(a,t.width/2-e/2,t.height/2-i/2,e,i),o.src=t.toDataURL("image/png")}})).catch((function(e){o.setAttribute("alt","Failed to generate QRCode, please visit ".concat(t)),console.error(e)}))})),o.forEach((function(t){t.addEventListener("click",(function(){e.classList.add("disappear-from-top"),setTimeout((function(){e.classList.remove("disappear-from-top"),e.close()}),300)}))})),e.addEventListener("click",(function(t){var o=e.getBoundingClientRect();o.top<=t.clientY&&t.clientY<=o.bottom&&o.left<=t.clientX&&t.clientX<=o.right||c()})),e.addEventListener("cancel",(function(t){t.preventDefault(),c()}))}}}]);