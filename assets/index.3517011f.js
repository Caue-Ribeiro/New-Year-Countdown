(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const m=document.querySelector("#day"),y=document.querySelector("#hour"),h=document.querySelector("#minutes"),p=document.querySelector("#seconds"),L=document.querySelector(".all__content"),g=document.querySelector("body");let M=new Date("Jan 1, 2023 00:00:00").getTime();function a(){let d=new Date().getTime(),n=M-d,l=1e3,o=l*60,e=o*60,t=e*24,r=Math.floor(n/t),s=Math.floor(n%t/e),c=Math.floor(n%e/o),i=Math.floor(n%o/l);m.innerHTML=r,y.innerHTML=s<10?`0${s}`:s,h.innerHTML=c<10?`0${c}`:c,p.innerHTML=i<10?`0${i}`:i;let f=setTimeout(a,1e3);if(r=="0"&&s=="0"&&c=="0"&&i=="0"){L.style.display="none";let u=document.createElement("div");u.innerHTML="<h1>Happy New Year!</h1>",u.classList.add("newyear-msg"),g.appendChild(u),clearInterval(f)}}a();
