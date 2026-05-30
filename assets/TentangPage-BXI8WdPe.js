import{configurePageContainer as i,setSidebarContent as t,buildPhaseOneSidebarItems as s,setPageTitle as r}from"./pageHelpers-BpmCgv2g.js";const l="v1.0.0",d="Pancasila &amp; UUD 1945",a={koreksi:"#",saran:"#"};class p{constructor(e,{sidebarEl:n}){this.container=e,this.sidebarEl=n}mount(){i(this.container),t(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"Pancasila & UUD 1945",items:s("/tentang")}),r("Tentang Aplikasi"),this.container.innerHTML=o()}}function o(){return`
    <div class="page-shell tentang-page" data-tentang>

      ${c()}
      ${b()}
      ${u()}
      ${m()}

    </div>
  `}function c(){return`
    <section class="tentang-hero text-center mb-4" aria-label="Identitas aplikasi">
      <div
        class="tentang-logo-circle mx-auto mb-3"
        role="img"
        aria-label="Logo aplikasi Pancasila dan UUD 1945"
      >
        <i class="bi bi-shield-fill tentang-logo-icon" aria-hidden="true"></i>
      </div>
      <h1 class="tentang-app-name h4 fw-bold mb-2">${d}</h1>
      <span class="tentang-version-badge badge rounded-pill border">
        <i class="bi bi-patch-check me-1" aria-hidden="true"></i>
        ${l}
      </span>
    </section>
  `}function b(){return`
    <section class="card border rounded-3 mb-4" aria-label="Deskripsi aplikasi">
      <div class="card-body">
        <p class="tentang-description mb-0 text-secondary text-center lh-lg">
          Aplikasi ini menyediakan akses digital yang mudah dan terstruktur
          untuk membaca naskah otentik Pancasila dan Undang-Undang Dasar
          Negara Republik Indonesia Tahun 1945 beserta amandemennya.
        </p>
      </div>
    </section>
  `}function u(){return`
    <section
      class="card border rounded-3 mb-4 tentang-sumber-data"
      aria-label="Sumber data aplikasi"
    >
      <div class="card-header bg-transparent border-bottom d-flex align-items-center gap-2 py-3">
        <i class="bi bi-bank text-primary" aria-hidden="true"></i>
        <h2 class="h6 fw-semibold mb-0">Sumber Data</h2>
      </div>
      <div class="card-body d-flex align-items-start gap-3">
        <div
          class="tentang-source-icon flex-shrink-0 rounded-2 border p-2
                 d-flex align-items-center justify-content-center"
          aria-hidden="true"
        >
          <i class="bi bi-journal-bookmark-fill text-secondary fs-5"></i>
        </div>
        <div>
          <p class="fw-semibold small mb-1">Sekretariat Jenderal MPR RI</p>
          <p class="text-secondary small mb-0">
            Naskah komprehensif merujuk pada publikasi resmi
            Majelis Permusyawaratan Rakyat Republik Indonesia.
          </p>
        </div>
      </div>
    </section>
  `}function m(){return`
    <section class="tentang-bantuan" aria-label="Bantuan dan dukungan">
      <h2 class="h6 fw-bold mb-3">Bantuan &amp; Dukungan</h2>
      <div class="d-flex flex-column gap-2">
        <a
          class="btn btn-danger w-100 d-flex align-items-center justify-content-center gap-2"
          href="${a.koreksi}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kirim koreksi pasal melalui Google Forms (membuka tab baru)"
          data-koreksi-link
        >
          <i class="bi bi-file-earmark-text" aria-hidden="true"></i>
          Koreksi Pasal
        </a>
        <a
          class="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2"
          href="${a.saran}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Kirim saran masukan melalui Google Forms (membuka tab baru)"
          data-saran-link
        >
          <i class="bi bi-chat-square-text" aria-hidden="true"></i>
          Saran Masukan
        </a>
      </div>
    </section>
  `}export{p as TentangPage};
