import{configurePageContainer as p,setSidebarContent as m,buildPhaseOneSidebarItems as h,setPageTitle as b,renderLoadingState as u,buildErrorStateHtml as g,bindRetryAction as _,toAppHref as c}from"./pageHelpers-BpmCgv2g.js";import{b as f,a as v}from"./pasal-6aLTvRxw.js";import{a as d,e as n}from"./sanitize-jDW40lB0.js";class y{constructor(a,{sidebarEl:s,pasalRepository:t,pasalKetAmandemenRepository:e}){this.container=a,this.sidebarEl=s,this.pasalRepository=t,this.pasalKetAmandemenRepository=e}async mount(){p(this.container),m(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:h("/pasal")}),b("Daftar Pasal UUD 1945"),u(this.container,"Memuat daftar pasal...");try{const[a,s]=await Promise.all([this.pasalRepository.loadPasalUUD(),this.pasalKetAmandemenRepository.loadPasalUUDKetAmandemen()]),t=f(s);this.container.innerHTML=this._buildHtml(a,t)}catch{this.container.innerHTML=g({message:"Daftar pasal tidak dapat dimuat. Silakan coba lagi."}),_(this.container,()=>this.mount())}}_buildHtml(a,s){const t=a.map(e=>{const l=s.get(e.namapasal);return this._buildPasalCardHtml(e,l)}).join("");return`
      <div class="page-shell">
        <a class="pasal-search-hint"
           href="${c("/cari")}"
           aria-label="Cari pasal atau kata kunci">
          <i class="bi bi-search" aria-hidden="true"></i>
          <span>Cari pasal, bab, atau kata kunci...</span>
        </a>

        <div class="page-section-header">
          <h1 class="page-section-title">Daftar Pasal</h1>
          <span class="page-section-count">${a.length} Pasal</span>
        </div>

        <div class="pasal-list" role="list" aria-label="Daftar pasal UUD 1945">
          ${t}
        </div>
      </div>
    `}_buildPasalCardHtml(a,s){const t=a.namapasal.replace("Pasal ",""),e=a.arrayisi.length,l=P(a.arrayisi),r=s?.babpasal??"",o=v(s?.amandemen);return`
      <a class="pasal-card content-card"
         href="${c(`/pasal/${d(t)}`)}"
         role="listitem"
         data-pasal="${d(a.namapasal)}">
        <div class="pasal-card__header">
          <div class="pasal-card__meta">
            ${r?`<span class="pasal-card__bab-label">${n(r)}</span>`:""}
            <h2 class="pasal-card__title">${n(a.namapasal)}</h2>
          </div>
          <div class="pasal-card__arrow" aria-hidden="true">
            <i class="bi bi-arrow-right"></i>
          </div>
        </div>
        <p class="pasal-card__excerpt">${n(l)}</p>
        <div class="pasal-card__footer">
          <span class="badge-ayat">${e} Ayat</span>
          ${o}
        </div>
      </a>
    `}}function P(i){return i.length===1?i[0].isi:i.slice(0,2).map((a,s)=>`(${s+1}) ${a.isi}`).join(" ")}export{y as PasalListPage};
