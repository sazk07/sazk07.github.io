(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();class b extends HTMLElement{constructor(){super()}connectedCallback(){try{const e=this.attachShadow({mode:"open"}),s=document.querySelector("template");if(!s)throw new Error("vocab template not found");const n=document.createElement("link");if(!n)throw new Error("shadow link element could not be created");n.setAttribute("rel","stylesheet"),n.setAttribute("href","./assets/shadowstyle.css"),e.appendChild(n),e.appendChild(s.content.cloneNode(!0))}catch(e){console.error(e.message)}}}customElements.define("vocab-element",b);const v=async t=>{try{const e=await fetch(t);if(!e.ok)throw new Error(e.statusText);const s=await e.json();if(!s)throw new Error("no data found");return s.sort((o,r)=>{var m,a;const c=(m=o.word)==null?void 0:m.toUpperCase(),i=(a=r.word)==null?void 0:a.toUpperCase();if(!c||!i)throw new Error("word not found");return c<i?-1:c>i?1:0})}catch(e){return console.error(e.message),[]}},E=(t,e,s)=>{const n=document.createElement("span");n.setAttribute("slot",t),n.textContent=e,s.appendChild(n)},w=(t,e,s)=>{const n=document.createElement("li");n.setAttribute("slot",t),n.innerHTML=e,s.appendChild(n)},L=async()=>{const t=document.querySelector("main")??document.createElement("main"),e=await v("data/data.json");if(e instanceof Error){t.textContent=e.message;return}for(const s of e){const{word:n,definition:o,mark:r,etym:c}=s,i=document.createElement("vocab-element");t.appendChild(i),E("vocab",n,i);const m=Array.isArray(o)?o:[o];for(const a of m)w("definition",a,i);if(r){const a=Array.isArray(r)?r:[r];a==null||a.forEach((h,u)=>{const l=Array.isArray(c)?c[u]:c,d=`<mark>${h}</mark>: <span>${l}</span>`;w("etym",d,i)})}i.addEventListener("click",a=>{var u;const h=document.querySelectorAll("vocab-element");for(const l of h)if(l!==a.currentTarget){const d=(u=l.shadowRoot)==null?void 0:u.querySelector("details");if(!l.shadowRoot){console.error("vocab shadow root not found");return}if(!d){console.error("details not found");return}d.open&&d.removeAttribute("open")}})}};L();const A=({localStorageTheme:t,sysSettingsDark:e})=>t||(e.matches?"dark":"light"),g=({buttonEl:t,isDark:e})=>{const o=e?'switch to <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM160 256a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zm224 0a128 128 0 1 0 -256 0 128 128 0 1 0 256 0z"/></svg> theme':'switch to <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"/></svg> theme',r=e?"dark mode":"light mode";t.setAttribute("aria-label",r),t.innerHTML=o},y=({theme:t})=>{document.documentElement.setAttribute("data-theme",t)},p=document.querySelector("[data-theme-toggle]")??document.createElement("button"),k=localStorage.getItem("theme"),C=window.matchMedia("(prefers-color-scheme: dark)");let f=A({localStorageTheme:k,sysSettingsDark:C});const S=f==="dark";g({buttonEl:p,isDark:S});y({theme:f});p.addEventListener("click",()=>{const t=f==="light"?"dark":"light";localStorage.setItem("theme",t),g({buttonEl:p,isDark:t==="dark"}),y({theme:t}),f=t});