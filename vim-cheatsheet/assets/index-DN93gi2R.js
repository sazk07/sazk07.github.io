(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();class y extends HTMLElement{constructor(){super()}connectedCallback(){try{const e=this.attachShadow({mode:"open"}),r=document.querySelector("template");if(!r)throw new Error("Template not found");const c=document.createElement("link");c.setAttribute("rel","stylesheet"),c.setAttribute("href","./assets/shadowstyle.css"),e.appendChild(c),e.appendChild(r.content.cloneNode(!0))}catch(e){console.error(e.message)}}}customElements.define("vim-component",y);const v=async t=>{try{const e=await fetch(t);if(!e.ok)throw new Error(e.statusText);const r=await e.json();if(!r)throw new Error("No data");return r}catch(e){return console.error(e.message),e}},C=(t,e)=>Object.values(t).find(n=>typeof n=="object"&&n!==null&&"htmlId"in n?n.htmlId===(e==null?void 0:e.id):!1),L=(t,e)=>{e.textContent=(t==null?void 0:t.title)??""},k=(t,e)=>{const r=["<kbd>","</kbd>"],c=o=>o==null?void 0:o.replace(/</g,"&lt;"),{commands:n}=t;for(const{keyword:o,additional_keyword2:s,additional_keyword3:a,description:d}of n){const g=[o,s,a].map(c).filter(l=>l!==void 0).map((l,w)=>`${w===0?"":" or "}${r[0]}${l}${r[1]}`).join(""),h=document.createElement("li");h.innerHTML=`${g} - ${d}`,e.appendChild(h)}},E=(t,e)=>{e.innerHTML=(t==null?void 0:t.tip)??"",e.innerHTML||(e.style.display="none")},b=async()=>{const t=await v("./data/en_us.json");if(t instanceof Error){const o=document.createElement("p");o.textContent=t.message,document.body.appendChild(o);return}const r=Array.from(document.querySelectorAll("vim-component")).map(o=>C(t,o));for(const o of r){const s=document.querySelector(`#${o.htmlId}`)??document.createElement("vim-component"),a=s.querySelector("[name='heading']")??document.createElement("h2");L(o,a);const d=s.querySelector("[name='list']")??document.createElement("ul");k(o,d);const u=s.querySelector("[name='tip']")??document.createElement("div");E(o,u)}const c=document.querySelector("footer")??document.createElement("footer"),n=document.createElement("a");n.setAttribute("href","https://github.com/sazk07/vim-cheatsheet-web-components"),n.textContent="GitHub",c.textContent=`${t.footer} `,c.appendChild(n)};b();const S=({localStorageTheme:t,sysSettingDark:e})=>t||(e.matches?"dark":"light"),p=({buttonEl:t,isDark:e})=>{const n=e?'switch to <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg> theme':'switch to <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg> theme',o=e?"Switch to light theme":"Switch to dark theme";t.setAttribute("aria-label",o),t.innerHTML=n},f=({theme:t})=>{document.documentElement.setAttribute("data-theme",t)},m=document.querySelector("[data-theme-toggle]")??document.createElement("button"),T=localStorage.getItem("theme"),x=window.matchMedia("(prefers-color-scheme: dark)");let i=S({localStorageTheme:T,sysSettingDark:x});const M=i==="dark";p({buttonEl:m,isDark:M});f({theme:i});m.addEventListener("click",()=>{const t=i==="light"?"dark":"light";localStorage.setItem("theme",t),p({buttonEl:m,isDark:t==="dark"}),f({theme:t}),i=t});