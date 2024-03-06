(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();document.querySelector("#app").innerHTML=`
  <template>
    <details>
      <summary>
        <span>
          <slot name="vocab">NEED WORD</slot>
        </span>
      </summary>
      <div>
        <h4>Meaning</h4>
        <ul>
          <slot name="definition"></slot>
        </ul>
        <h4>Etymology</h4>
        <ul>
          <slot name="etym">N/A</slot>
        </ul>
      </div>
      <div>
      </div>
    </details>
    <hr>
  </template>
  <main>
  </main>
`;class y extends HTMLElement{constructor(){super()}connectedCallback(){try{const e=this.attachShadow({mode:"open"}),r=document.querySelector("template");if(!r)throw new Error("vocab template not found");const n=document.createElement("style");n.textContent=`
        html {
          box-sizing: border-box;
          font-family: "Lato", sans-serif;
          font-style: normal;
        }
        *,
        *::before,
        *::after {
          box-sizing: inherit;
          margin: 0px;
        }
        summary {
          font-weight: 800;
        }
        h4 {
          font-weight: 600;
        }
      `,e.appendChild(n),e.appendChild(r.content.cloneNode(!0))}catch(e){console.error(e.message)}}}customElements.define("vocab-element",y);const h=async a=>{try{const e=await fetch(a);if(!e.ok)throw new Error(e.statusText);const r=await e.json();if(!r)throw new Error("no data found");return r}catch(e){return console.error(e.message),e}},b=(a,e,r)=>{const n=document.createElement("span");n.setAttribute("slot",a),n.textContent=e,r.appendChild(n)},u=(a,e,r)=>{const n=document.createElement("li");n.setAttribute("slot",a),n.innerHTML=e,r.appendChild(n)},E=async()=>{const a=document.querySelector("main")??document.createElement("main"),e=await h("data/data.json");if(e instanceof Error){a.textContent=e.message;return}for(const r of e){const{word:n,definition:t,mark:o,etym:s}=r,i=document.createElement("vocab-element");a.appendChild(i),b("vocab",n,i);const f=Array.isArray(t)?t:[t];for(const c of f)u("definition",c,i);if(o){const c=Array.isArray(o)?o:[o];c==null||c.forEach((m,d)=>{const l=Array.isArray(s)?s[d]:s,p=`<mark>${m}</mark>: <span>${l}</span>`;u("etym",p,i)})}i.addEventListener("click",c=>{const m=document.querySelectorAll("vocab-element");for(const d of m)if(d!==c.currentTarget){const l=d.shadowRoot.querySelector("details");if(!l)return;l.open&&l.removeAttribute("open")}})}};E();
