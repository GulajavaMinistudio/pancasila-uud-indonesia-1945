import{configurePageContainer as o,setSidebarContent as u,buildPhaseOneSidebarItems as h,setPageTitle as b,renderLoadingState as p,buildErrorStateHtml as _,bindRetryAction as m}from"./pageHelpers-BpmCgv2g.js";import{a as c,e}from"./sanitize-jDW40lB0.js";const l="__all__";class L{constructor(a,{sidebarEl:s,uudAsliRepository:t}){this.container=a,this.sidebarEl=s,this.uudAsliRepository=t,this._selectedBab=l,this._pasalList=[],this._babList=[]}async mount(){o(this.container),u(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:h("/uud-asli")}),b("UUD 1945 Naskah Asli"),p(this.container,"Memuat naskah asli UUD 1945...");try{this._pasalList=await this.uudAsliRepository.loadPasalUUDNoAmandemen(),this._babList=g(this._pasalList),this._render(),this._bindEvents()}catch{this.container.innerHTML=_({message:"Naskah asli tidak dapat dimuat. Silakan coba lagi."}),m(this.container,()=>this.mount())}}_render(){const a=r(this._pasalList,this._selectedBab);this.container.innerHTML=this._buildHtml(a)}_buildHtml(a){return`
      <div class="page-shell" data-uud-asli>
        ${f(a.length,this._pasalList.length)}
        ${v(this._babList,this._selectedBab)}
        <div class="uud-asli-list" role="list" aria-label="Daftar pasal UUD 1945 naskah asli">
          ${a.map(d).join("")}
        </div>
      </div>
    `}_bindEvents(){this.container.addEventListener("change",a=>{const s=a.target instanceof HTMLSelectElement?a.target:null;s?.dataset.babFilter!==void 0&&this._onBabFilterChange(s.value)})}_onBabFilterChange(a){this._selectedBab=a;const s=r(this._pasalList,this._selectedBab),t=this.container.querySelector(".uud-asli-list"),n=this.container.querySelector("[data-pasal-count]");t&&(t.innerHTML=s.map(d).join("")),n&&(n.textContent=`${s.length} Pasal`)}}function g(i){const a=[];for(const s of i)s.babpasal&&!a.includes(s.babpasal)&&a.push(s.babpasal);return a}function r(i,a){return a===l?i:i.filter(s=>s.babpasal===a)}function f(i,a){return`
    <div class="uud-asli-header">
      <div class="uud-asli-header__badge">
        <i class="bi bi-clock-history" aria-hidden="true"></i>
        UUD 1945 Naskah Asli
      </div>
      <div class="page-section-header">
        <h1 class="page-section-title">Naskah Asli UUD 1945</h1>
        <span class="page-section-count" data-pasal-count>${i} Pasal</span>
      </div>
      <p class="uud-asli-header__desc">
        Teks naskah asli Undang-Undang Dasar 1945 sebagaimana disahkan oleh PPKI
        pada 18 Agustus 1945, sebelum mengalami perubahan melalui proses amandemen.
        ${a>0?`Total <strong>${a} pasal</strong>.`:""}
      </p>
    </div>
  `}function v(i,a){return`
    <div class="uud-asli-filter">
      <label for="uud-asli-bab-select" class="uud-asli-filter__label">
        <i class="bi bi-funnel" aria-hidden="true"></i>
        Filter Bab:
      </label>
      <select
        id="uud-asli-bab-select"
        class="form-select form-select-sm uud-asli-filter__select"
        data-bab-filter
        aria-label="Filter berdasarkan bab"
      >
        ${[`<option value="${l}" ${a===l?"selected":""}>Semua Bab</option>`,...i.map(t=>`<option value="${c(t)}" ${a===t?"selected":""}>${e(t)}</option>`)].join("")}
      </select>
    </div>
  `}function d(i){const a=i.arrayisi.length,s=i.arrayisi[0]?.isi??"",t=s.length>120?`${s.slice(0,120)}…`:s;return`
    <div class="uud-asli-card content-card" role="listitem" data-pasal="${c(i.namapasal)}">
      <div class="uud-asli-card__header">
        <div class="uud-asli-card__meta">
          <span class="uud-asli-card__bab-label">${e(i.babpasal)}</span>
          <h2 class="uud-asli-card__title">${e(i.namapasal)}</h2>
        </div>
      </div>
      <p class="uud-asli-card__excerpt">${e(t)}</p>
      <div class="uud-asli-card__footer">
        <span class="badge-ayat">${a} Ayat</span>
        <span class="badge-asli">
          <i class="bi bi-archive" aria-hidden="true"></i>
          Naskah Asli
        </span>
      </div>
    </div>
  `}export{L as UUDAsliPage};
