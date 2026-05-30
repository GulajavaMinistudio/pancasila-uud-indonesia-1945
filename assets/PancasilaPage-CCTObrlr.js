import{configurePageContainer as l,setSidebarContent as n,buildPhaseOneSidebarItems as c,setPageTitle as r,renderLoadingState as d,buildErrorStateHtml as o,bindRetryAction as p,buildShareButton as h,SILA_DECORATIVE_ICONS as u,toAppHref as m,SILA_SUMMARIES as b}from"./pageHelpers-BpmCgv2g.js";import{e as t}from"./sanitize-jDW40lB0.js";class v{constructor(a,{sidebarEl:i,silaRepository:s}){this.container=a,this.sidebarEl=i,this.silaRepository=s}async mount(){l(this.container),n(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:c("/pancasila")}),r("Pancasila"),d(this.container,"Memuat daftar sila Pancasila...");try{const a=await this.silaRepository.loadSilaPancasila();this.container.innerHTML=this._buildHtml(a)}catch{this.container.innerHTML=o({message:"Daftar sila tidak dapat dimuat. Silakan coba lagi."}),p(this.container,()=>this.mount())}}_buildHtml(a){return`
      <div class="page-shell">
        <header class="page-heading page-heading--stack-mobile page-heading--center-mobile">
          <div class="page-heading__content">
            <h1 class="page-title page-title--accent">Pancasila</h1>
            <p class="page-subtitle">Dasar Negara Republik Indonesia</p>
          </div>
          <div class="page-heading__actions">
            ${h()}
          </div>
        </header>

        <section class="pancasila-list" aria-label="Daftar sila Pancasila">
          ${a.map((i,s)=>this._buildSilaCardHtml(i,s)).join("")}
        </section>
      </div>
    `}_buildSilaCardHtml(a,i){const s=i+1,e=a.replace(/\.$/,"");return`
      <a class="pancasila-card content-card"
         href="${m(`/sila/${s}`)}"
         aria-label="Lihat detail Sila ${s}">
         <span class="pancasila-card__icon" aria-hidden="true">
           <i class="bi ${u[i]}"></i>
         </span>

         <div class="pancasila-card__number" aria-hidden="true">${s}</div>

         <div class="pancasila-card__content">
           <h2 class="pancasila-card__title">${t(e)}</h2>
           <p class="pancasila-card__summary">${t(b[i])}</p>
         </div>

         <span class="pancasila-card__arrow" aria-hidden="true">
           <i class="bi bi-arrow-right"></i>
         </span>
      </a>
    `}}export{v as PancasilaPage};
