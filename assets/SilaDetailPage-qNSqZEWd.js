import{configurePageContainer as c,setSidebarContent as d,buildPhaseOneSidebarItems as u,setPageTitle as h,renderLoadingState as p,buildErrorStateHtml as m,bindRetryAction as b,SILA_DECORATIVE_ICONS as l,buildBreadcrumbHtml as _,toAppHref as S,buildShareButton as g,SILA_SUMMARIES as $}from"./pageHelpers-BpmCgv2g.js";import{S as v}from"./ShareButton-DDC5tdbt.js";import{u as f}from"./index-D4JFV7Rh.js";import{a as n}from"./sanitize-CUZG0sqr.js";class I{constructor(i,{nomor:a,sidebarEl:t,router:s,silaRepository:e,butirRepository:o}){this.container=i,this.nomor=a,this.sidebarEl=t,this.router=s,this.silaRepository=e,this.butirRepository=o}async mount(){c(this.container),d(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:u(`/sila/${this.nomor}`)});const i=P(this.nomor);if(i===null){this._redirectToNotFound();return}h(`Sila ${i}`),p(this.container,`Memuat detail Sila ${i}...`);try{const[a,t]=await Promise.all([this.silaRepository.loadSilaPancasila(),this.butirRepository.loadButirPancasila()]),s=a[i-1],e=t[i-1];if(!s||!e){this._redirectToNotFound();return}this.container.innerHTML=this._buildHtml({nomorSila:i,silaText:s,butirSila:e}),this._updateSeoMeta(i,s),this._mountShareButton(i,s)}catch{this.container.innerHTML=m({message:"Detail sila tidak dapat dimuat. Silakan coba lagi."}),b(this.container,()=>this.mount())}}_updateSeoMeta(i,a){const t=a.replace(/\.$/,"");f({title:`Sila ${i} Pancasila — ${t}`,description:`Teks lengkap dan butir-butir pengamalan Sila ke-${i} Pancasila: "${t}". Dasar negara Indonesia.`,path:`/sila/${i}`})}_mountShareButton(i,a){new v(this.container,{title:`Sila ke-${i} Pancasila`,text:`Sila ke-${i}: ${a}`,url:window.location.href}).mount()}_redirectToNotFound(){this.router.navigate("/404")}_buildHtml(i){const a=i.silaText.replace(/\.$/,"");return`
      <div class="page-shell">
        ${_([{label:"Pancasila",path:"/pancasila"},{label:`Sila ${i.nomorSila}`}])}

        <div class="page-topbar">
          <a class="page-back-link" href="${S("/pancasila")}">
            <i class="bi bi-arrow-left" aria-hidden="true"></i>
            <span>Kembali ke Daftar Sila</span>
          </a>
          <div class="page-heading__actions">
            ${g()}
          </div>
        </div>

        <section class="sila-hero content-card">
          <div class="sila-hero__accent" aria-hidden="true"></div>
          <div class="sila-hero__ghost" aria-hidden="true">
            <i class="bi ${l[i.nomorSila-1]}"></i>
          </div>

          <div class="sila-hero__body">
            <div class="sila-hero__icon d-none d-md-inline-flex" aria-hidden="true">
              <i class="bi ${l[i.nomorSila-1]}"></i>
            </div>

            <div class="sila-hero__content">
              <span class="sila-hero__chip">Pancasila</span>
              <h1 class="sila-hero__ordinal">Sila ${i.nomorSila}</h1>
              <p class="sila-hero__title">${n(a)}</p>
              <p class="sila-hero__description">${n($[i.nomorSila-1])}</p>
            </div>
          </div>
        </section>

        <section class="page-section">
          <div class="page-section-header">
            <div>
              <h2 class="page-section-title">Butir-butir Pengamalan</h2>
            </div>
            <span class="page-section-count">${i.butirSila.arrayisi.length} Poin Tap MPR</span>
          </div>

          <div class="sila-points">
            ${i.butirSila.arrayisi.map((t,s)=>this._buildButirCardHtml(t.isi,s,i.butirSila.arrayisi.length)).join("")}
          </div>
        </section>
      </div>
    `}_buildButirCardHtml(i,a,t){return`
      <article class="sila-point-card content-card${t%2===1&&a===t-1?" sila-point-card--full":""}">
        <span class="sila-point-card__check d-md-none" aria-hidden="true">
          <i class="bi bi-check-circle-fill"></i>
        </span>
        <span class="sila-point-card__number d-none d-md-inline-flex" aria-hidden="true">${a+1}</span>
        <p class="sila-point-card__text">${n(i)}</p>
      </article>
    `}}function P(r){const i=Number(r);return!Number.isInteger(i)||i<1||i>5?null:i}export{I as SilaDetailPage};
