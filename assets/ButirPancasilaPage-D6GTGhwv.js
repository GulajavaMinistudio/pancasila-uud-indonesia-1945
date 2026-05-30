import{configurePageContainer as o,setSidebarContent as l,buildPhaseOneSidebarItems as d,setPageTitle as u,renderLoadingState as b,buildErrorStateHtml as p,bindRetryAction as h,buildShareButton as g,SILA_SUMMARIES as m,toAppHref as _}from"./pageHelpers-BpmCgv2g.js";import{S as P}from"./ShareButton-BsWPD4Hd.js";import{e as s}from"./sanitize-jDW40lB0.js";import"./index-UTrDifwS.js";class y{constructor(i,{sidebarEl:a,butirRepository:t}){this.container=i,this.sidebarEl=a,this.butirRepository=t}async mount(){o(this.container),l(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:d("/butir-pancasila")}),u("Butir Pancasila"),b(this.container,"Memuat butir pengamalan Pancasila...");try{const i=await this.butirRepository.loadButirPancasila();this.container.innerHTML=this._buildHtml(i),this._bindAccordionEvents(),this._mountShareButton()}catch{this.container.innerHTML=p({message:"Butir pengamalan Pancasila tidak dapat dimuat. Silakan coba lagi."}),h(this.container,()=>this.mount())}}_buildHtml(i){return`
      <div class="page-shell">
        <header class="page-heading page-heading--stack-mobile">
          <div class="page-heading__content">
            <p class="page-eyebrow">Pedoman Pengamalan Pancasila</p>
            <h1 class="page-title page-title--accent">Butir Pancasila</h1>
            <p class="page-subtitle">
              Seluruh butir pengamalan Pancasila disusun per sila agar mudah dibaca dan dijelajahi.
            </p>
          </div>
          <div class="page-heading__actions">
            ${g()}
          </div>
        </header>

        <section class="butir-accordion" aria-label="Accordion butir Pancasila">
          ${i.map((a,t)=>this._buildAccordionItemHtml(a,t)).join("")}
        </section>
      </div>
    `}_buildAccordionItemHtml(i,a){const t=`butir-panel-${a+1}`,n=a+1,e=a===0;return`
      <article class="butir-accordion__item content-card">
        <button type="button"
                class="butir-accordion__trigger"
                data-accordion-trigger="${t}"
                aria-expanded="${e?"true":"false"}">
          <span class="butir-accordion__number" aria-hidden="true">${n}</span>
          <span class="butir-accordion__meta">
            <span class="butir-accordion__title">${s(i.namasila)}</span>
            <span class="butir-accordion__subtitle">${s(m[a])}</span>
          </span>
          <span class="butir-accordion__summary">${i.arrayisi.length} butir</span>
          <i class="bi bi-chevron-down butir-accordion__icon" aria-hidden="true"></i>
        </button>

        <div class="butir-accordion__panel" id="${t}" ${e?"":"hidden"}>
          <div class="butir-accordion__panel-actions">
            <a class="btn btn-link btn-sm px-0 text-decoration-none"
               href="${_(`/sila/${n}`)}">
              Lihat detail sila
              <i class="bi bi-arrow-right-short" aria-hidden="true"></i>
            </a>
          </div>
          <div class="butir-accordion__list">
            ${i.arrayisi.map((r,c)=>`
                  <div class="butir-accordion__point">
                    <span class="butir-accordion__point-number" aria-hidden="true">${c+1}</span>
                    <p class="butir-accordion__point-text">${s(r.isi)}</p>
                  </div>
                `).join("")}
          </div>
        </div>
      </article>
    `}_bindAccordionEvents(){this.container.addEventListener("click",i=>{const a=i.target.closest("[data-accordion-trigger]");if(!a)return;const t=a.getAttribute("data-accordion-trigger"),n=this.container.querySelector(`#${t}`);if(!n)return;const e=a.getAttribute("aria-expanded")==="true";this.container.querySelectorAll("[data-accordion-trigger]").forEach(r=>{r.setAttribute("aria-expanded","false")}),this.container.querySelectorAll(".butir-accordion__panel").forEach(r=>{r.setAttribute("hidden","")}),e||(a.setAttribute("aria-expanded","true"),n.removeAttribute("hidden"))})}_mountShareButton(){new P(this.container,{title:"Butir-butir Pengamalan Pancasila",text:"Butir-butir Pengamalan Pancasila — TAP MPR No. I/MPR/2003",url:window.location.href}).mount()}}export{y as ButirPancasilaPage};
