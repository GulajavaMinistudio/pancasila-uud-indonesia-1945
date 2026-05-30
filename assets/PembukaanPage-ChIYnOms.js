import{configurePageContainer as l,setSidebarContent as r,buildPhaseOneSidebarItems as o,setPageTitle as c,renderLoadingState as u,buildErrorStateHtml as d,bindRetryAction as m,ALINEA_LABELS as n,buildShareButton as h}from"./pageHelpers-BpmCgv2g.js";import{S as b}from"./ShareButton-CCTtsmka.js";import{a as s}from"./sanitize-CUZG0sqr.js";import"./index-C_DDv9M6.js";class g{constructor(a,{sidebarEl:e,pembukaanRepository:t}){this.container=a,this.sidebarEl=e,this.pembukaanRepository=t}async mount(){l(this.container),r(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:o("/pembukaan")}),c("Pembukaan"),u(this.container,"Memuat Pembukaan UUD 1945...");try{const a=await this.pembukaanRepository.loadPembukaanUUD();this.container.innerHTML=this._buildHtml(a),this._mountAlineaShareButtons(a)}catch{this.container.innerHTML=d({message:"Teks Pembukaan UUD 1945 tidak dapat dimuat. Silakan coba lagi."}),m(this.container,()=>this.mount())}}_buildHtml(a){return`
      <div class="page-shell">
        <header class="pembukaan-hero">
          <p class="pembukaan-hero__headline d-none d-lg-block">
            UNDANG-UNDANG DASAR NEGARA REPUBLIK INDONESIA TAHUN 1945
          </p>
          <h1 class="page-title">Pembukaan</h1>
          <p class="page-subtitle pembukaan-hero__subtitle">
            Undang-Undang Dasar Negara Republik Indonesia Tahun 1945.
          </p>
        </header>

        <section class="alinea-list" aria-label="Empat alinea Pembukaan UUD 1945">
          ${a.map((e,t)=>this._buildAlineaCardHtml(e,t)).join("")}
        </section>
      </div>
    `}_buildAlineaCardHtml(a,e){return`
      <article class="alinea-card content-card">
        <span class="alinea-card__badge" aria-hidden="true">${e+1}</span>
        <div class="alinea-card__content">
          <h2 class="alinea-card__title">Alinea ${s(n[e])}</h2>
          <p class="alinea-card__text">${s(a)}</p>
          <div class="alinea-card__actions">
            ${h("Bagikan Alinea")}
          </div>
        </div>
      </article>
    `}_mountAlineaShareButtons(a){this.container.querySelectorAll(".alinea-card").forEach((t,i)=>{new b(t,{title:`Pembukaan UUD 1945 — Alinea ${n[i]}`,text:`Pembukaan UUD 1945 - Alinea ${n[i]}
${a[i]??""}`,url:window.location.href}).mount()})}}export{g as PembukaanPage};
