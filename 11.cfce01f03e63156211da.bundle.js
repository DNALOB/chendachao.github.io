(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{rDv0:function(e,t,n){"use strict";n.r(t);var o=n("0FX9"),i=n.n(o),c=n("pWKE");t.default=function(){var e=/localhost|127.0.0.1/.test(window.location.origin)?"https://chendachao.github.io":window.location.origin,t=document.querySelector("#dialog"),n=document.querySelectorAll(".dialog-dismiss-trigger"),o=document.querySelector(".download-btn"),a=document.querySelector(".qrcode-handler"),r=document.querySelector(".mobile-qrcode");function l(){t.classList.add("shake"),setTimeout((function(){return t.classList.remove("shake")}),300)}function s(e){t.classList.add("disappear-from-top"),setTimeout((function(){t.classList.remove("disappear-from-top"),t.close(e)}),300)}r.setAttribute("alt",e),c.a.registerDialog(t),a.addEventListener("click",(function(){t.showModal(),t.classList.add("appear-from-top"),setTimeout((function(){t.classList.remove("appear-from-top")}),500);var n=document.createElement("canvas");i.a.toCanvas(n,e,{width:320,height:320,margin:1.5,errorCorrectionLevel:"H",quality:1,version:4}).then((function(e){var t=80,n=80,o=e.getContext("2d"),i=new Image;i.src="favicon.ico",i.onload=function(){o.lineWidth=20,o.lineJoin="round",o.lineCap="round",o.strokeStyle="#ffffff",o.beginPath(),o.rect(e.width/2-t/2-10,e.width/2-t/2-10,t+20,n+20),o.stroke(),o.fillStyle="gold",o.fillRect(e.width/2-t/2-10,e.height/2-n/2-10,t+20,n+20),o.drawImage(i,e.width/2-t/2,e.height/2-n/2,t,n),r.src=e.toDataURL("image/png")}})).catch((function(t){r.setAttribute("alt","Failed to generate QRCode, please visit ".concat(e)),console.error(t)}))})),n.forEach((function(e){e.addEventListener("click",(function(){s()}))})),o.addEventListener("click",(function(){var e;s(),e=r.src,o.download="".concat(window.location.hostname,".png"),o.href=e})),t.addEventListener("close",(function(){t.returnValue=""})),t.addEventListener("click",(function(e){var n=t.getBoundingClientRect();n.top<=e.clientY&&e.clientY<=n.bottom&&n.left<=e.clientX&&e.clientX<=n.right||l()})),t.addEventListener("cancel",(function(e){e.preventDefault(),l()}))}}}]);