import{configurePageContainer as r,setSidebarContent as o,buildPhaseOneSidebarItems as c,setPageTitle as p,renderLoadingState as b,buildErrorStateHtml as u,bindRetryAction as h,toAppHref as g}from"./pageHelpers-BpmCgv2g.js";import{e as l,a as d}from"./sanitize-CUZG0sqr.js";const f=["1","2","3","4"],m={1:{label:"Amandemen I",year:"1999"},2:{label:"Amandemen II",year:"2000"},3:{label:"Amandemen III",year:"2001"},4:{label:"Amandemen IV",year:"2002"}},v={1:"col-12 col-lg-6",2:"col-12 col-lg-6",3:"col-12",4:"col-12"};class H{constructor(a,{sidebarEl:e,pasalKetAmandemenRepository:s}){this.container=a,this.sidebarEl=e,this.pasalKetAmandemenRepository=s}async mount(){r(this.container),o(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:c("/amandemen")}),p("Amandemen UUD 1945"),b(this.container,"Memuat data amandemen...");try{const a=await this.pasalKetAmandemenRepository.loadPasalUUDKetAmandemen(),e=A(a);this.container.innerHTML=this._buildHtml(e)}catch{this.container.innerHTML=u({message:"Data amandemen tidak dapat dimuat. Silakan coba lagi."}),h(this.container,()=>this.mount())}}_buildHtml(a){const e=Array.from(a.values()).reduce((t,i)=>t+i.length,0),s=f.filter(t=>a.has(t)).map(t=>{const i=a.get(t)??[];return _(t,i)}).join("");return`
      <div class="page-shell" data-amandemen>
        <div class="page-section-header">
          <h1 class="page-section-title">Amandemen UUD 1945</h1>
          <span class="page-section-count">${e} Pasal</span>
        </div>
        <p class="amandemen-page-desc">
          Daftar pasal yang mengalami perubahan melalui empat tahapan amandemen
          Undang-Undang Dasar 1945 (1999–2002). Klik "Lihat Perbandingan" untuk
          melihat teks asli vs. teks pasca-amandemen secara berdampingan.
        </p>
        <div class="row g-4" data-amandemen-groups>
          ${s}
        </div>
      </div>
    `}}function A(n){const a=new Map;for(const e of n){if(!e.amandemen||e.amandemen==="0")continue;const s=e.amandemen.split("/"),t=s[s.length-1];a.has(t)||a.set(t,[]),a.get(t)?.push(e)}return a}function _(n,a){const e=m[n];if(!e)return"";const s=v[n]??"col-12",t=a.map(i=>$(i,n)).join("");return`
    <div class="${s}">
      <section
        class="card amandemen-group border rounded-3 shadow-sm overflow-hidden h-100"
        data-amandemen-section="${n}"
        aria-label="${e.label}"
      >
        <div class="amandemen-group__header card-header border-bottom p-3 p-md-4">
          <div class="d-flex justify-content-between align-items-center mb-1">
            <h2 class="amandemen-group__title h5 mb-0">${e.label}</h2>
            <span class="amandemen-group__year badge rounded-pill border">${e.year}</span>
          </div>
          <span class="amandemen-group__count text-muted small">${a.length} pasal diubah</span>
        </div>
        <div class="card-body amandemen-group__body p-3 d-flex flex-column gap-3">
          ${t}
        </div>
      </section>
    </div>
  `}function $(n,a){const e=encodeURIComponent(n.namapasal.replace("Pasal ","")),s=m[a];return`
    <article
      class="card amandemen-card border rounded-3"
      data-pasal="${l(n.namapasal)}"
      data-amandemen-item
    >
      <div class="card-body p-3">
        <div class="d-flex justify-content-between align-items-start gap-2 mb-2">
          <div class="flex-grow-1 min-w-0">
            <span class="amandemen-row__bab d-block text-uppercase small lh-sm mb-1">
              ${d(n.babpasal)}
            </span>
            <h3 class="amandemen-row__title h6 fw-bold mb-0">
              ${d(n.namapasal)}
            </h3>
          </div>
          <span
            class="amandemen-badge amandemen-badge--${a} flex-shrink-0"
            aria-label="${s?.label??""}"
          >
            ${s?.label??""}
          </span>
        </div>
        <div class="border-top pt-2 mt-1">
          <a
            class="amandemen-compare-link"
            href="${g(`/amandemen/${e}`)}"
            aria-label="Lihat perbandingan ${l(n.namapasal)}"
            data-compare-link
          >
            <i class="bi bi-arrow-left-right d-md-none me-2" aria-hidden="true"></i>
            <span>Lihat Perbandingan</span>
            <i class="bi bi-arrow-right-short ms-1 d-none d-md-inline" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </article>
  `}export{H as AmandemenPage};
