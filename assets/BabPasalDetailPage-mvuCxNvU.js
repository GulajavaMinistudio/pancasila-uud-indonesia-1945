import{configurePageContainer as v,setSidebarContent as g,buildPhaseOneSidebarItems as $,setPageTitle as o,renderLoadingState as f,ROMAN_NUMERALS as k,buildErrorStateHtml as p,bindRetryAction as H,buildBreadcrumbHtml as N,toAppHref as r,buildShareButton as y}from"./pageHelpers-BpmCgv2g.js";import{a as l,e as b}from"./sanitize-CUZG0sqr.js";function B(c,a){const e=parseInt(c,10);return isNaN(e)||e<1||e>a?-1:e-1}class S{constructor(a,{nomor:e,sidebarEl:i,router:s,babRepository:t}){this.container=a,this.nomor=e,this.sidebarEl=i,this.router=s,this.babRepository=t}async mount(){v(this.container),g(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:$("/bab-pasal")}),o("Detail Bab UUD 1945"),f(this.container,"Memuat detail bab...");try{const a=await this.babRepository.loadBabPasal(),{bab_pasal:e,keterangan_bab_pasal:i,isi_bab_pasal:s}=a,t=B(this.nomor,s.length);if(t===-1){this._renderNotFoundState();return}const d=s[t],n=e[t],h=i[t],m=k[t]??String(t+1),u=t>0?{nomor:t,fullName:e[t-1]}:null,_=t<s.length-1?{nomor:t+2,fullName:e[t+1]}:null;o(`${n}`),this.container.innerHTML=this._buildHtml({bab:d,fullName:n,keterangan:h,roman:m,prevBab:u,nextBab:_})}catch{this.container.innerHTML=p({message:"Konten bab tidak dapat dimuat. Silakan coba lagi."}),H(this.container,()=>this.mount())}}_buildHtml({bab:a,fullName:e,keterangan:i,roman:s,prevBab:t,nextBab:d}){return`
      <div class="page-shell">
        ${N([{label:"UUD 1945",path:"/pasal"},{label:"Batang Tubuh",path:"/bab-pasal"},{label:l(e)}])}

        <a href="${r("/bab-pasal")}" class="page-back-link">
          <i class="bi bi-arrow-left" aria-hidden="true"></i>
          Kembali ke Daftar Bab
        </a>

        <div class="bab-detail-header content-card">
          <div class="bab-detail-header__top">
            <div class="bab-detail-header__badge" aria-hidden="true">
              <span class="bab-detail-header__roman">${l(s)}</span>
            </div>
            <div class="bab-detail-header__text">
              <h1 class="bab-detail-header__title">${l(e)}</h1>
              <p class="bab-detail-header__subtitle">${l(i)}</p>
            </div>
          </div>
          <div class="page-heading__actions">
            ${y(`Bagikan ${e}`)}
          </div>
        </div>

        <div class="page-section-header">
          <h2 class="page-section-title">Pasal dalam Bab Ini</h2>
          <span class="page-section-count">${a.isi_bab.length} Pasal</span>
        </div>

        <div class="bab-detail-pasal-list" role="list" aria-label="Daftar pasal dalam ${b(e)}">
          ${a.isi_bab.map(n=>this._buildPasalItemHtml(n)).join("")}
        </div>

        ${this._buildBabNavHtml(t,d)}
      </div>
    `}_buildPasalItemHtml(a){if(a.startsWith("Pasal sudah dihapus"))return`
        <div class="bab-detail-pasal-item bab-detail-pasal-item--deleted" role="listitem">
          <span class="bab-detail-pasal-item__icon">
            <i class="bi bi-x-circle" aria-hidden="true"></i>
          </span>
          <span class="bab-detail-pasal-item__text">${l(a)}</span>
        </div>
      `;const i=a.replace("Pasal ","");return`
      <a href="${r(`/pasal/${b(i)}`)}"
         class="bab-detail-pasal-item content-card"
         role="listitem">
        <span class="bab-detail-pasal-item__icon">
          <i class="bi bi-file-text" aria-hidden="true"></i>
        </span>
        <span class="bab-detail-pasal-item__text">${l(a)}</span>
        <i class="bi bi-chevron-right bab-detail-pasal-item__arrow" aria-hidden="true"></i>
      </a>
    `}_buildBabNavHtml(a,e){if(!a&&!e)return"";const i=a?`
        <a href="${r(`/bab-pasal/${a.nomor}`)}"
           class="bab-nav__prev"
           aria-label="Bab sebelumnya: ${b(a.fullName)}">
          <i class="bi bi-chevron-left" aria-hidden="true"></i>
          <span class="bab-nav__label">Sebelumnya</span>
          <span class="bab-nav__name">${l(a.fullName)}</span>
        </a>
      `:'<span class="bab-nav__placeholder"></span>',s=e?`
        <a href="${r(`/bab-pasal/${e.nomor}`)}"
           class="bab-nav__next"
           aria-label="Bab berikutnya: ${b(e.fullName)}">
          <span class="bab-nav__name">${l(e.fullName)}</span>
          <span class="bab-nav__label">Berikutnya</span>
          <i class="bi bi-chevron-right" aria-hidden="true"></i>
        </a>
      `:'<span class="bab-nav__placeholder"></span>';return`
      <nav class="bab-nav" aria-label="Navigasi bab">
        ${i}
        ${s}
      </nav>
    `}_renderNotFoundState(){o("Bab Tidak Ditemukan"),this.container.innerHTML=p({title:"Bab tidak ditemukan",message:`Bab ke-${this.nomor} tidak terdapat dalam data UUD 1945. Pastikan nomor bab yang diakses benar (1–21).`,retryLabel:"Kembali ke Daftar Bab"});const a=this.container.querySelector('[data-action="retry"]');a&&a.addEventListener("click",()=>{this.router.navigate("/bab-pasal")})}}export{S as BabPasalDetailPage};
