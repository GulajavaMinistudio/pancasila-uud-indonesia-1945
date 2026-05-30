import{configurePageContainer as u,setSidebarContent as g,buildPhaseOneSidebarItems as m,setPageTitle as $,renderLoadingState as f,buildErrorStateHtml as v,bindRetryAction as y,ROMAN_NUMERALS as H,toAppHref as d}from"./pageHelpers-BpmCgv2g.js";import{a as r,e as p}from"./sanitize-CUZG0sqr.js";class S{constructor(i,{sidebarEl:a,babRepository:s}){this.container=i,this.sidebarEl=a,this.babRepository=s}async mount(){u(this.container),g(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:m("/bab-pasal")}),$("Daftar Bab UUD 1945"),f(this.container,"Memuat daftar bab...");try{const i=await this.babRepository.loadBabPasal();this.container.innerHTML=this._buildHtml(i),this._bindToggleEvents()}catch{this.container.innerHTML=v({message:"Daftar bab tidak dapat dimuat. Silakan coba lagi."}),y(this.container,()=>this.mount())}}_buildHtml(i){const{bab_pasal:a,keterangan_bab_pasal:s,isi_bab_pasal:e}=i,t=e.map((n,o)=>this._buildBabAccordionHtml(n,a[o],s[o],o)).join("");return`
      <div class="page-shell">
        <div class="page-section-header">
          <h1 class="page-section-title">Daftar Bab</h1>
          <span class="page-section-count">${e.length} Bab</span>
        </div>

        <div class="bab-list" role="list" aria-label="Daftar bab UUD 1945">
          ${t}
        </div>
      </div>
    `}_buildBabAccordionHtml(i,a,s,e){const t=e+1,n=H[e]??String(t),o=i.isi_bab.length,l=`bab-body-${t}`,b=`bab-header-${t}`,_=i.isi_bab.map(c=>{if(c.startsWith("Pasal sudah dihapus"))return`
            <li class="bab-accordion__pasal-item bab-accordion__pasal-item--deleted">
              <i class="bi bi-x-circle" aria-hidden="true"></i>
              <span>${r(c)}</span>
            </li>
          `;const h=c.replace("Pasal ","");return`
          <li class="bab-accordion__pasal-item" role="listitem">
            <a href="${d(`/pasal/${p(h)}`)}"
               class="bab-accordion__pasal-link">
              <i class="bi bi-file-text" aria-hidden="true"></i>
              <span>${r(c)}</span>
            </a>
          </li>
        `}).join("");return`
      <div class="bab-accordion content-card" role="listitem" data-bab-nomor="${t}">
        <button
          class="bab-accordion__header"
          type="button"
          id="${b}"
          aria-expanded="false"
          aria-controls="${l}"
          data-bab-toggle>
          <span class="bab-accordion__badge" aria-hidden="true">
            <span class="bab-accordion__roman">${r(n)}</span>
          </span>
          <span class="bab-accordion__info">
            <span class="bab-accordion__label">${r(a)}</span>
            <span class="bab-accordion__keterangan">${r(s)}</span>
          </span>
          <span class="bab-accordion__meta">
            <span class="badge badge-pasal-count">${o} Pasal</span>
            <i class="bi bi-chevron-down bab-accordion__chevron" aria-hidden="true"></i>
          </span>
        </button>

        <div class="bab-accordion__body"
             id="${l}"
             role="region"
             aria-labelledby="${b}"
             hidden>
          <ul class="bab-accordion__pasal-list" role="list" aria-label="Pasal dalam ${p(a)}">
            ${_}
          </ul>
          <div class="bab-accordion__footer">
            <a href="${d(`/bab-pasal/${t}`)}"
               class="bab-accordion__detail-link">
              <i class="bi bi-arrow-right-circle" aria-hidden="true"></i>
              Lihat Detail Bab
            </a>
          </div>
        </div>
      </div>
    `}_bindToggleEvents(){this.container.addEventListener("click",i=>{const a=i.target.closest("[data-bab-toggle]");if(!a)return;const s=a.getAttribute("aria-expanded")==="true",e=a.getAttribute("aria-controls"),t=this.container.querySelector(`#${e}`);if(!t)return;a.setAttribute("aria-expanded",String(!s)),t.hidden=s;const n=a.closest(".bab-accordion");n&&n.classList.toggle("is-open",!s)})}}export{S as BabPasalListPage};
