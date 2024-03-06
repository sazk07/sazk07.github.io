(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function l(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=l(e);fetch(e.href,s)}})();document.querySelector("#app").innerHTML=`
  <template>
    <slot name="heading"></slot>
    <slot name="list"></slot>
    <slot name="eg"></slot>
    <slot name="tip" class="well"></slot>
  </template>
  <vim-component id="globals" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="exiting" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="insert-mode" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="editing-mode" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="marking-text" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="visual-commands" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="registers" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="special-registers" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="marks" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="macros" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="cut-and-paste" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="indent-text" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="cursor-movement" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="search-and-replace" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="search-multiple-files" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <p slot="eg">e.g.</p>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="working-multiple-files" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="tabs" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
  <vim-component id="diff" class="flex-child">
    <h2 name="heading" slot="heading" class="heading"></h2>
    <ul name="list" slot="list" class="list"></ul>
    <div name="tip" slot="tip" class="tip well"></div>
  </vim-component>
`;class h extends HTMLElement{constructor(){super()}connectedCallback(){const t=this.attachShadow({mode:"open"}),l=document.querySelector("template"),n=document.createElement("style");n.textContent=`
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
    `,t.appendChild(l.content.cloneNode(!0))}}customElements.define("vim-component",h);const u=async i=>{try{const t=await fetch(i);if(!t.ok)throw new Error(t.statusText);const l=await t.json();if(!l)throw new Error("No data");return l}catch(t){return console.error(t.message),t}},v=(i,t)=>Object.values(i).find(e=>(e==null?void 0:e.htmlId)===(t==null?void 0:t.id)),g=(i,t)=>{t.textContent=(i==null?void 0:i.title)??""},f=(i,t)=>{const l=["<kbd>","</kbd>"],n=e=>e==null?void 0:e.replace(/</g,"&lt;");for(const{keyword:e,additional_keyword2:s,additional_keyword3:o,description:a}of i.commands){const c=[e,s,o].map(n).filter(Boolean).map((r,p)=>`${p===0?"":" or "}${l[0]}${r}${l[1]}`).join(""),m=document.createElement("li");m.innerHTML=`${c} - ${a}`,t.appendChild(m)}},w=(i,t)=>{t.innerHTML=(i==null?void 0:i.tip)??"",t.innerHTML||(t.style.display="none")},y=async()=>{const i=await u("data/en_us.json");if(i instanceof Error){const s=document.createElement("p");s.textContent=i.message,document.body.appendChild(s);return}const l=Array.from(document.querySelectorAll("vim-component")).map(s=>v(i,s)).filter(Boolean);for(const s of l){const o=document.querySelector(`#${s.htmlId}`),a=o.querySelector("[name='heading']");g(s,a);const d=o.querySelector("[name='list']");f(s,d);const c=o.querySelector("[name='tip']");w(s,c)}const n=document.querySelector("footer"),e=document.createElement("a");e.setAttribute("href","https://github.com/sazk07/vim-cheatsheet-web-components"),e.textContent="GitHub",n.textContent=`${i.footer} `,n.appendChild(e)};y();
