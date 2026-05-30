import{configurePageContainer as n,setSidebarContent as r,setPageTitle as s,toAppHref as i}from"./pageHelpers-BpmCgv2g.js";const t=[{path:"/pancasila",title:"5 Sila Pancasila",description:"Eksplorasi lima dasar falsafah negara yang menjadi pedoman kehidupan berbangsa dan bernegara.",icon:"bi-star",featured:!0},{path:"/pembukaan",title:"Pembukaan UUD 1945",description:"Teks proklamasi kemerdekaan dan tujuan berdirinya negara.",icon:"bi-book"},{path:"/pasal",title:"Daftar Pasal",description:"Akses cepat ke seluruh pasal dalam Undang-Undang Dasar 1945.",icon:"bi-list-ol"},{path:"/butir-pancasila",title:"Butir Pancasila",description:"Pedoman penghayatan dan pengamalan Pancasila per sila.",icon:"bi-card-checklist"},{path:"/bab-pasal",title:"Struktur Bab",description:"Navigasi konstitusi berdasarkan hierarki bab dan bagian.",icon:"bi-diagram-3"},{path:"/uud-asli",title:"UUD Asli",description:"Naskah otentik sebelum perubahan konstitusi.",icon:"bi-journal-bookmark"},{path:"/amandemen",title:"Amandemen",description:"Riwayat perubahan UUD 1945 dari Amandemen I sampai IV.",icon:"bi-clock-history"}];class l{constructor(a,{sidebarEl:e}){this.container=a,this.sidebarEl=e}mount(){n(this.container,{wide:!0}),r(this.sidebarEl,{visible:!1}),s("Beranda"),this.container.innerHTML=this._buildHtml()}_buildHtml(){return`
      <div class="home-page">
        <section class="home-hero content-card">
          <div class="home-hero__orb home-hero__orb--right" aria-hidden="true"></div>
          <div class="home-hero__orb home-hero__orb--left" aria-hidden="true"></div>
          <div class="home-hero__badge" aria-hidden="true">
            <img
              src="${i("/images/logo_pancasila.svg")}"
              class="home-hero__logo"
              alt=""
              loading="eager"
              decoding="async"
            />
          </div>
          <h1 class="home-hero__title">Pancasila &amp; UUD 1945</h1>
          <p class="home-hero__subtitle">
            Portal internet untuk mengeksplorasi landasan ideologi dan konstitusi negara Republik
            Indonesia. Pelajari butir-butir, pasal-pasal, dan sejarah amandemen dengan antarmuka
            yang bersih dan berwibawa.
          </p>
        </section>

        <section class="home-grid" aria-label="Navigasi cepat konten utama">
          ${t.map(a=>this._buildQuickLinkHtml(a)).join("")}
        </section>
      </div>
    `}_buildQuickLinkHtml(a){return`
      <a class="home-card content-card${a.featured?" home-card--featured":""}"
         href="${i(a.path)}">
        <div class="home-card__body">
          <div class="home-card__icon" aria-hidden="true">
            <i class="bi ${a.icon}"></i>
          </div>
          <div>
            <h2 class="home-card__title">${a.title}</h2>
            <p class="home-card__description">${a.description}</p>
          </div>
        </div>
        <div class="home-card__action" aria-hidden="true">
          <i class="bi bi-arrow-right"></i>
        </div>
      </a>
    `}}export{l as HomePage};
