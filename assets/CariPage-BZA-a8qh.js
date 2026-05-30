import{a as u,e as n}from"./sanitize-jDW40lB0.js";import{t as _}from"./index-DqLdtWsg.js";import{F as y}from"./fuse-CMLop-UK.js";import{configurePageContainer as f,setSidebarContent as S,buildPhaseOneSidebarItems as g,setPageTitle as b,renderLoadingState as E,buildErrorStateHtml as w,bindRetryAction as v,toAppHref as m}from"./pageHelpers-BpmCgv2g.js";const k="Cari pasal UUD 1945...",T=300;class P{constructor(a={}){this.initialQuery=a.initialQuery??"",this.placeholder=a.placeholder??k,this.debounceMs=a.debounceMs??T,this.onSearch=a.onSearch??(()=>{}),this.container=null,this.inputEl=null,this._debounceTimer=null,this._handleInput=this._handleInput.bind(this),this._handleKeyDown=this._handleKeyDown.bind(this)}mount(a){if(this.container=a,this.container.innerHTML=this._buildHtml(),this.inputEl=this.container.querySelector("[data-search-input]"),!this.inputEl)throw new Error("SearchPasal gagal mount: input tidak ditemukan.");this.inputEl.addEventListener("input",this._handleInput),this.inputEl.addEventListener("keydown",this._handleKeyDown)}destroy(){this.inputEl&&(this.inputEl.removeEventListener("input",this._handleInput),this.inputEl.removeEventListener("keydown",this._handleKeyDown)),this._debounceTimer!==null&&(window.clearTimeout(this._debounceTimer),this._debounceTimer=null)}setValue(a,t={}){if(!this.inputEl)return;const i=typeof a=="string"?a:"";this.inputEl.value=i,t.emit&&this.onSearch(i)}_buildHtml(){return`
      <div class="search-pasal" data-search-pasal>
        <div class="search-pasal__input-wrap">
          <i class="bi bi-search search-pasal__icon" aria-hidden="true"></i>
          <input
            type="search"
            class="search-pasal__input"
            placeholder="${u(this.placeholder)}"
            value="${u(this.initialQuery)}"
            aria-label="Pencarian pasal"
            data-search-input
          />
        </div>
      </div>
    `}_handleInput(a){const t=a.target instanceof HTMLInputElement?a.target:null;t&&(this._debounceTimer!==null&&window.clearTimeout(this._debounceTimer),this._debounceTimer=window.setTimeout(()=>{this.onSearch(t.value)},this.debounceMs))}_handleKeyDown(a){a.key==="Enter"&&this.inputEl&&(this._debounceTimer!==null&&(window.clearTimeout(this._debounceTimer),this._debounceTimer=null),this.onSearch(this.inputEl.value))}}const H={keys:["namapasal","arrayisi.isi"],threshold:.3,includeMatches:!0,includeScore:!0,ignoreLocation:!0,shouldSort:!0};let l=null,o=null;function M(e){if(!Array.isArray(e))throw new Error("initializePasalSearchIndex membutuhkan array pasal.");return l&&o===e||(o=e,l=new y(e,H)),l}function C(e,a={}){const t=typeof e=="string"?e.trim():"";if(!t)return[];if(!l)throw new Error("Search index belum diinisialisasi. Panggil initializePasalSearchIndex() dulu.");const{limit:i=50}=a;return l.search(t,{limit:i})}const q=300;class F{constructor(a,{sidebarEl:t,router:i,pasalRepository:r}){this.container=a,this.sidebarEl=t,this.router=i,this.pasalRepository=r,this._pasalList=[],this._results=[],this._query="",this._searchComponent=null}async mount(){f(this.container),S(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:g("/cari")}),b("Cari Pasal UUD 1945"),E(this.container,"Memuat data pencarian...");try{this._pasalList=await this.pasalRepository.loadPasalUUD(),M(this._pasalList),this._query=D(),this._renderShell(),this._mountSearchBar(),this._query?this._runSearch(this._query):this._updateSearchView()}catch{this.container.innerHTML=w({message:"Fitur pencarian tidak dapat dimuat. Silakan coba lagi."}),v(this.container,()=>this.mount())}}_renderShell(){this.container.innerHTML=`
      <div class="page-shell cari-page" data-cari-page>
        <div class="page-section-header">
          <h1 class="page-section-title">Pencarian Pasal</h1>
          <span class="page-section-count" data-search-count>0 Hasil</span>
        </div>

        <div class="cari-search-slot" data-search-slot></div>

        <p class="cari-search-note text-secondary mb-0">
          Ketik kata kunci untuk mencari pasal dan ayat terkait.
        </p>

        <div class="cari-search-state text-secondary" data-search-state></div>

        <div
          class="cari-result-list"
          role="list"
          aria-label="Hasil pencarian pasal"
          data-search-results
        ></div>
      </div>
    `}_mountSearchBar(){const a=this.container.querySelector("[data-search-slot]");a&&(this._searchComponent?.destroy(),this._searchComponent=new P({initialQuery:this._query,debounceMs:q,onSearch:t=>this._runSearch(t)}),this._searchComponent.mount(a))}_runSearch(a){if(this._query=a.trim(),L(this._query),!this._query){this._results=[],this._updateSearchView();return}this._results=C(this._query,{limit:50}),this._results.length>0&&_("search","query",this._query),this._updateSearchView()}_updateSearchView(){const a=this.container.querySelector("[data-search-count]"),t=this.container.querySelector("[data-search-state]"),i=this.container.querySelector("[data-search-results]");if(!(!a||!t||!i)){if(a.textContent=`${this._results.length} Hasil`,!this._query){t.textContent="Masukkan kata kunci untuk memulai pencarian.",i.innerHTML="";return}if(this._results.length===0){t.textContent="Tidak ada pasal yang mengandung kata kunci tersebut. Coba kata lain.",i.innerHTML=`
        <div class="cari-empty-state" data-search-empty>
          <i class="bi bi-search" aria-hidden="true"></i>
          <p class="mb-0">Tidak ada pasal yang mengandung kata kunci tersebut.</p>
        </div>
      `;return}t.textContent=`Ditemukan ${this._results.length} pasal yang mengandung "${this._query}"`,i.innerHTML=this._results.map(r=>U(r)).join("")}}}function U(e){const a=e.item,t=a.namapasal.replace("Pasal ",""),i=d(e,"namapasal"),r=d(e,"arrayisi.isi"),h=i?p(i.value,i.indices):n(a.namapasal),s=r?r.value:x(a.arrayisi),c=r?p(s,r.indices):n(s);return`
    <a
      class="pasal-card content-card cari-result-card"
      href="${m(`/pasal/${encodeURIComponent(t)}`)}"
      role="listitem"
      data-search-result
      data-pasal="${u(a.namapasal)}"
    >
      <div class="pasal-card__header">
        <div class="pasal-card__meta">
          <h2 class="pasal-card__title">${h}</h2>
        </div>
        <div class="pasal-card__arrow" aria-hidden="true">
          <i class="bi bi-arrow-right"></i>
        </div>
      </div>
      <p class="pasal-card__excerpt cari-result-card__excerpt">${c}</p>
    </a>
  `}function d(e,a){if(!e.matches)return null;const t=e.matches.find(i=>String(i.key)===a);return t||(a==="arrayisi.isi"?e.matches.find(i=>String(i.key).includes("arrayisi"))??null:null)}function x(e){return e.length===0?"":e.length===1?e[0].isi:e.slice(0,2).map((a,t)=>`(${t+1}) ${a.isi}`).join(" ")}function p(e,a){if(!Array.isArray(a)||a.length===0)return n(e);let t=0,i="";for(const[r,h]of a){const s=Math.max(0,r),c=Math.max(s,h);i+=n(e.slice(t,s)),i+=`<mark class="cari-mark">${n(e.slice(s,c+1))}</mark>`,t=c+1}return i+=n(e.slice(t)),i}function D(){return(new URLSearchParams(window.location.search).get("q")??"").trim()}function L(e){const a=new URLSearchParams(window.location.search);e?a.set("q",e):a.delete("q");const t=a.toString(),i=t?`/cari?${t}`:"/cari";window.history.replaceState(null,"",m(i))}export{F as CariPage};
