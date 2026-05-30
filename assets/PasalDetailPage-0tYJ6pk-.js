import{configurePageContainer as g,setSidebarContent as y,buildPhaseOneSidebarItems as _,setPageTitle as b,renderLoadingState as $,buildErrorStateHtml as h,bindRetryAction as U,buildBreadcrumbHtml as f,toAppHref as p,buildShareButton as P}from"./pageHelpers-BpmCgv2g.js";import{p as k,a as H,b as S}from"./pasal-CquvRIzx.js";import{S as D}from"./ShareButton-DDC5tdbt.js";import{a as d,e as i}from"./sanitize-CUZG0sqr.js";import{u as x}from"./index-D4JFV7Rh.js";class N{constructor(a,{nomor:e,sidebarEl:s,router:t,pasalRepository:l,pasalKetAmandemenRepository:n}){this.container=a,this.nomor=e,this.sidebarEl=s,this.router=t,this.pasalRepository=l,this.pasalKetAmandemenRepository=n}async mount(){g(this.container),y(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:_("/pasal")});const a=k(this.nomor);b(a||"Pasal UUD 1945"),$(this.container,`Memuat ${a}...`);try{const[e,s]=await Promise.all([this.pasalRepository.loadPasalUUD(),this.pasalKetAmandemenRepository.loadPasalUUDKetAmandemen()]),t=B(e,a);if(!t){this._renderNotFoundState(a);return}const n=H(s).get(t.namapasal),r=e.findIndex(u=>u.namapasal.toUpperCase()===t.namapasal.toUpperCase()),m=r>0?e[r-1]:null,c=r<e.length-1?e[r+1]:null;b(t.namapasal),this._updateSeoMeta(t),this.container.innerHTML=this._buildHtml({pasal:t,ketAmandemen:n,prevPasal:m,nextPasal:c}),this._mountShareButton(t)}catch{this.container.innerHTML=h({message:"Konten pasal tidak dapat dimuat. Silakan coba lagi."}),U(this.container,()=>this.mount())}}_mountShareButton(a){const e=a.arrayisi.map((s,t)=>a.arrayisi.length>1?`(${t+1}) ${s.isi}`:s.isi).join(`
`);new D(this.container,{title:a.namapasal,text:`${a.namapasal}
${e}`,url:window.location.href}).mount()}_updateSeoMeta(a){const e=a.namapasal.replace("Pasal ",""),s=a.arrayisi[0]?.isi?.substring(0,120)??"",t=s.length===120?`${s}…`:s;x({title:`${a.namapasal} UUD 1945 — Isi Lengkap`,description:`Teks lengkap ${a.namapasal} UUD 1945 beserta ayat-ayatnya. ${t}`,path:`/pasal/${e}`,ogType:"article"})}_renderNotFoundState(a){b("Pasal Tidak Ditemukan"),this.container.innerHTML=h({title:"Pasal tidak ditemukan",message:`${a} tidak terdapat dalam data UUD 1945. Pastikan nomor pasal yang dimasukkan benar.`,retryLabel:"Kembali ke Daftar Pasal"});const e=this.container.querySelector('[data-action="retry"]');e&&e.addEventListener("click",()=>{this.router.navigate("/pasal")})}_buildHtml({pasal:a,ketAmandemen:e,prevPasal:s,nextPasal:t}){const l=S(e?.amandemen),n=e?.babpasal??"",r=e?.amandemen!==void 0&&e.amandemen!=="0"&&e.amandemen!=="",m=a.namapasal.replace("Pasal ",""),c=a.arrayisi.map((u,v)=>this._buildAyatCardHtml(u.isi,v+1)).join("");return`
      <div class="page-shell">
        ${f([{label:"UUD 1945",path:"/pasal"},{label:"Batang Tubuh",path:"/bab-pasal"},{label:d(n)||d(a.namapasal)}])}

        <div class="page-topbar">
          <a class="page-back-link" href="${p("/pasal")}">
            <i class="bi bi-arrow-left" aria-hidden="true"></i>
            <span>Kembali ke Daftar Pasal</span>
          </a>
          <div class="page-heading__actions">
            ${P()}
          </div>
        </div>

        <div class="pasal-detail-header content-card">
          <div class="d-flex align-items-center gap-2 flex-wrap mb-2">
            <h1 class="pasal-detail-header__title">${d(a.namapasal)}</h1>
            ${l}
          </div>
          ${n?`<p class="pasal-detail-header__bab">${d(n)}</p>`:""}
        </div>

        <div class="pasal-ayat-list" role="list" aria-label="Ayat-ayat ${i(a.namapasal)}">
          ${c}
        </div>

        ${r?L(m,a.namapasal):""}

        ${this._buildNavHtml(s,t)}
      </div>
    `}_buildAyatCardHtml(a,e){return`
      <div class="pasal-ayat-card content-card" role="listitem">
        <div class="pasal-ayat-card__inner">
          <div class="pasal-ayat-card__number" aria-hidden="true">${e}</div>
          <p class="pasal-ayat-card__text">${d(a)}</p>
        </div>
        <div class="pasal-ayat-card__ghost" aria-hidden="true">${e}</div>
      </div>
    `}_buildNavHtml(a,e){const s=a?.namapasal.replace("Pasal ","")??null,t=e?.namapasal.replace("Pasal ","")??null,l=s?`<a class="pasal-nav__prev"
            href="${p(`/pasal/${i(s)}`)}"
            aria-label="Pasal sebelumnya: ${i(a?.namapasal)}">
           <i class="bi bi-arrow-left" aria-hidden="true"></i>
           <span>Sebelumnya</span>
         </a>`:`<span class="pasal-nav__prev pasal-nav__prev--empty" aria-hidden="true">
           <i class="bi bi-arrow-left" aria-hidden="true"></i>
           <span>Sebelumnya</span>
         </span>`,n=t?`<a class="pasal-nav__next"
            href="${p(`/pasal/${i(t)}`)}"
            aria-label="Pasal selanjutnya: ${i(e?.namapasal)}">
           <span>${d(e?.namapasal)}</span>
           <i class="bi bi-arrow-right" aria-hidden="true"></i>
         </a>`:`<span class="pasal-nav__next pasal-nav__next--empty" aria-hidden="true">
           <span>Pasal Selanjutnya</span>
           <i class="bi bi-arrow-right" aria-hidden="true"></i>
         </span>`;return`
      <nav class="pasal-nav" aria-label="Navigasi antar pasal">
        ${l}
        ${n}
      </nav>
    `}}function B(o,a){const e=a.toUpperCase();return o.find(s=>s.namapasal.toUpperCase()===e)??null}function L(o,a){return`
    <div class="pasal-compare-section" data-compare-section>
      <a
        class="pasal-compare-link"
        href="${p(`/amandemen/${i(encodeURIComponent(o))}`)}"
        aria-label="Bandingkan ${i(a)} dengan UUD 1945 asli"
        data-compare-link
      >
        <i class="bi bi-columns-gap me-2" aria-hidden="true"></i>
        Bandingkan dengan UUD 1945 Asli
        <i class="bi bi-arrow-right ms-2" aria-hidden="true"></i>
      </a>
    </div>
  `}export{N as PasalDetailPage};
