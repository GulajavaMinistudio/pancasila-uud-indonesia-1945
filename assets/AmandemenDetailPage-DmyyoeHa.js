import{configurePageContainer as k,setSidebarContent as w,buildPhaseOneSidebarItems as C,setPageTitle as p,renderLoadingState as N,buildErrorStateHtml as g,bindRetryAction as x,toAppHref as D}from"./pageHelpers-BpmCgv2g.js";import{e as d,a as T}from"./sanitize-jDW40lB0.js";const H=[{pattern:/\(Amendemen Ketiga dan Keempat\)/i,number:4},{pattern:/\(Amendemen Pertama dan Kedua\)/i,number:2},{pattern:/\(Amendemen Pertama\)/i,number:1},{pattern:/\(Amendemen Kedua\)/i,number:2},{pattern:/\(Amendemen Ketiga\)/i,number:3},{pattern:/\(Amendemen Keempat\)/i,number:4},{pattern:/\(Pasal ditambahkan di Amendemen Kedua.*?\)/i,number:2}],L=/\s*\((?:Amendemen (?:Pertama|Kedua|Ketiga|Keempat)(?:\s*dan\s*Keempat)?|Pasal ditambahkan di Amendemen.*?)\)\s*\.?/gi;function b(n){if(!n||typeof n!="string")return null;let a=null;for(const{pattern:e,number:s}of H)e.test(n)&&((a===null||s>a)&&(a=s),e.lastIndex=0);return a}function A(n){return!n||typeof n!="string"?"":n.replace(L,"").trim()}function E(n,a,e){const s=`Pasal ${n}`.toLowerCase().trim(),i=f(e,s),t=f(a,s);if(!i&&!t)return null;if(i&&i.namapasal.toLowerCase().includes("dihapus"))return{namapasal:`Pasal ${n}`,amandemenNumber:u(i.amandemen),isNewPasal:!1,isDeletedPasal:!0,ayatComparisons:[]};if(i&&!t){const r=u(i.amandemen);return{namapasal:i.namapasal,amandemenNumber:r,isNewPasal:!0,isDeletedPasal:!1,ayatComparisons:K(i.arrayisi)}}if(t&&!i)return{namapasal:t.namapasal,amandemenNumber:null,isNewPasal:!1,isDeletedPasal:!0,ayatComparisons:[]};if(i&&t){const r=u(i.amandemen),l=M(t.arrayisi,i.arrayisi);return{namapasal:i.namapasal,amandemenNumber:r,isNewPasal:!1,isDeletedPasal:!1,ayatComparisons:l}}return null}function f(n,a){return n.find(e=>e.namapasal.toLowerCase().trim()===a)??null}function u(n){if(!n||n==="0")return null;const a=n.split("/").map(Number).filter(s=>s>=1&&s<=4);if(a.length===0)return null;const e=Math.max(...a);return e<1||e>4?null:e}function K(n){return n.map((a,e)=>({index:e+1,originalText:null,amendedText:A(a.isi),status:"added",amandemenNumber:b(a.isi)}))}function M(n,a){const e=Math.max(n.length,a.length),s=[];for(let i=0;i<e;i++){const t=n[i]??null,r=a[i]??null,l=t?.isi??null,o=r?.isi??null,v=o?A(o):null;let m,c=null;if(l!==null&&o!==null){const P=l.trim().toLowerCase(),$=(v??"").trim().toLowerCase();m=P===$?"unchanged":"modified",c=b(o)}else l===null&&o!==null?(m="added",c=b(o)):m="deleted";s.push({index:i+1,originalText:l,amendedText:v,status:m,amandemenNumber:c})}return s}const _={1:"#1565C0",2:"#2E7D32",3:"#E65100",4:"#4A148C"},h={1:"Amandemen I",2:"Amandemen II",3:"Amandemen III",4:"Amandemen IV"};class R{render(a){const{namapasal:e,amandemenNumber:s,isNewPasal:i,isDeletedPasal:t,ayatComparisons:r}=a;return`
      <div class="comparison-card" data-comparison-card>
        ${I(e,s)}
        ${U()}
        <div class="comparison-grid" data-comparison-grid>
          <div class="comparison-grid__header" aria-hidden="true">
            <div class="comparison-col-label comparison-col-label--original">
              <i class="bi bi-archive me-2" aria-hidden="true"></i>
              UUD 1945 Naskah Asli
            </div>
            <div class="comparison-col-label comparison-col-label--amended">
              <i class="bi bi-check-circle me-2" aria-hidden="true"></i>
              Pasca-Amandemen
            </div>
          </div>
          <div class="comparison-grid__body">
            ${S(i,t,r)}
          </div>
        </div>
      </div>
    `}}function I(n,a){const e=a?`<span
        class="comparison-card__amandemen-badge"
        style="background-color: ${_[a]??"#666"};"
        aria-label="${h[a]??""}"
      >
        ${h[a]??""}
      </span>`:"";return`
    <div class="comparison-card__header">
      <h2 class="comparison-card__title">${d(n)}</h2>
      ${e}
    </div>
  `}function U(){return`
    <div class="comparison-notice" role="note" data-comparison-notice>
      <i class="bi bi-info-circle me-2" aria-hidden="true"></i>
      <span>
        Perbandingan ini menampilkan <strong>versi asli (1945)</strong> vs.
        <strong>versi akhir pasca-amandemen (2002)</strong>.
        Perubahan per-tahapan amandemen tidak dapat ditampilkan karena
        keterbatasan data yang tersedia.
      </span>
    </div>
  `}function S(n,a,e){return n?`
      <div class="comparison-row comparison-row--new-pasal" data-comparison-new>
        <div class="comparison-cell comparison-cell--original">
          <div class="comparison-placeholder comparison-placeholder--new" data-new-pasal-placeholder>
            <i class="bi bi-plus-circle" aria-hidden="true"></i>
            <p>Pasal ini tidak ada pada UUD 1945 asli.</p>
            <p>Pasal ini ditambahkan melalui proses amandemen.</p>
          </div>
        </div>
        <div class="comparison-cell comparison-cell--amended">
          <div class="comparison-ayat-list">
            ${e.map(i=>F(i)).join("")}
          </div>
        </div>
      </div>
    `:a?`
      <div class="comparison-row comparison-row--deleted-pasal" data-comparison-deleted>
        <div class="comparison-cell comparison-cell--original">
          <div class="comparison-placeholder comparison-placeholder--deleted-original">
            <i class="bi bi-archive" aria-hidden="true"></i>
            <p>Pasal ini tersedia dalam UUD 1945 asli (naskah 1945).</p>
          </div>
        </div>
        <div class="comparison-cell comparison-cell--amended">
          <div class="comparison-placeholder comparison-placeholder--deleted" data-deleted-pasal-placeholder>
            <i class="bi bi-trash3" aria-hidden="true"></i>
            <p>Pasal ini telah dihapus melalui proses amandemen.</p>
          </div>
        </div>
      </div>
    `:e.length===0?`
      <div class="comparison-row">
        <div class="comparison-cell comparison-cell--original">
          <em class="text-muted">Tidak ada data ayat.</em>
        </div>
        <div class="comparison-cell comparison-cell--amended">
          <em class="text-muted">Tidak ada data ayat.</em>
        </div>
      </div>
    `:e.map(s=>B(s)).join("")}function B(n){const{index:a,originalText:e,amendedText:s,status:i,amandemenNumber:t}=n,r=`comparison-row comparison-row--${i}`,l=e?`<p class="comparison-ayat__text">${d(e)}</p>`:'<span class="comparison-ayat__empty" aria-label="Tidak ada teks">—</span>',o=s?`${y(t,i)}
       <p class="comparison-ayat__text">${d(s)}</p>`:'<span class="comparison-ayat__empty" aria-label="Tidak ada teks">—</span>';return`
    <div class="${r}" data-ayat-row="${a}" data-status="${i}">
      <div class="comparison-cell comparison-cell--original">
        <span class="comparison-ayat__index" aria-label="Ayat ${a}">${a}</span>
        ${l}
      </div>
      <div class="comparison-cell comparison-cell--amended">
        <span class="comparison-ayat__index" aria-label="Ayat ${a}">${a}</span>
        ${o}
      </div>
    </div>
  `}function F(n){const{index:a,amendedText:e,status:s,amandemenNumber:i}=n,t=y(i,s),r=e?`<p class="comparison-ayat__text">${d(e)}</p>`:"";return`
    <div class="comparison-ayat-item" data-ayat-row="${a}">
      <span class="comparison-ayat__index" aria-label="Ayat ${a}">${a}</span>
      ${t}
      ${r}
    </div>
  `}function y(n,a){if(n===null||a!=="added"&&a!=="modified")return"";const e=_[n]??"#666",s=h[n]??"";return`
    <span
      class="comparison-ayat__badge"
      style="background-color: ${e};"
      aria-label="${T(s)}"
      data-amandemen-badge="${n}"
    >
      ${d(s)}
    </span>
  `}class j{constructor(a,{nomor:e,sidebarEl:s,router:i,uudAsliRepository:t,pasalKetAmandemenRepository:r}){this.container=a,this.nomor=e,this.sidebarEl=s,this.router=i,this.uudAsliRepository=t,this.pasalKetAmandemenRepository=r,this._comparisonCard=new R}async mount(){k(this.container,{wide:!0}),w(this.sidebarEl,{title:"Navigasi Hukum",subtitle:"UUD 1945 & Pancasila",items:C("/amandemen")});const a=(this.nomor||"").trim(),e=/^[0-9]+[A-Z]*$/i.test(a),s=`Pasal ${a}`;if(!e){this._renderNotFoundState(s);return}p(`Perbandingan ${s}`),N(this.container,`Memuat perbandingan ${s}...`);try{const[i,t]=await Promise.all([this.uudAsliRepository.loadPasalUUDNoAmandemen(),this.pasalKetAmandemenRepository.loadPasalUUDKetAmandemen()]),r=E(this.nomor,i,t);if(!r){this._renderNotFoundState(s);return}p(`Perbandingan ${r.namapasal}`),this.container.innerHTML=this._buildHtml(r)}catch{this.container.innerHTML=g({message:"Data perbandingan tidak dapat dimuat. Silakan coba lagi."}),x(this.container,()=>this.mount())}}_buildHtml(a){return`
      <div class="page-shell" data-amandemen-detail>
        <div class="page-topbar">
          <a class="page-back-link" href="${D("/amandemen")}">
            <i class="bi bi-arrow-left" aria-hidden="true"></i>
            <span>Kembali ke Daftar Amandemen</span>
          </a>
        </div>
        ${this._comparisonCard.render(a)}
      </div>
    `}_renderNotFoundState(a){p("Pasal Tidak Ditemukan"),this.container.innerHTML=g({title:"Pasal tidak ditemukan",message:`${d(a)} tidak memiliki data perbandingan amandemen. Pastikan nomor pasal yang dimasukkan benar.`,retryLabel:"Kembali ke Daftar Amandemen"});const e=this.container.querySelector('[data-action="retry"]');e&&e.addEventListener("click",()=>{this.router.navigate("/amandemen")})}}export{j as AmandemenDetailPage};
