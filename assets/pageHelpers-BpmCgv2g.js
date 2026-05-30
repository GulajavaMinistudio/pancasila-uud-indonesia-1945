const u="Pancasila & UUD 1945",s="/pancasila-uud-indonesia-1945/".replace(/\/$/,""),m=["bi-star-fill","bi-people-fill","bi-globe2","bi-chat-square-text-fill","bi-flower1"],I=["Sila pertama menegaskan pengakuan bangsa Indonesia terhadap Tuhan Yang Maha Esa.","Mengakui persamaan derajat, hak, dan kewajiban setiap manusia secara beradab.","Menempatkan persatuan, kesatuan, dan keselamatan bangsa di atas kepentingan pribadi.","Mengutamakan musyawarah dalam mengambil keputusan untuk kepentingan bersama.","Mendorong keadilan sosial, gotong royong, dan kesejahteraan yang merata."],h=["Pertama","Kedua","Ketiga","Keempat"],b=[{path:"/pancasila",label:"Pancasila",icon:"bi-star"},{path:"/butir-pancasila",label:"Butir Pancasila",icon:"bi-list-check"},{path:"/pembukaan",label:"Pembukaan",icon:"bi-book"},{path:"/pasal",label:"Daftar Pasal",icon:"bi-journal-text"},{path:"/bab-pasal",label:"Daftar Bab",icon:"bi-diagram-3"},{path:"/amandemen",label:"Amandemen",icon:"bi-clock-history"},{path:"/cari",label:"Pencarian Cepat",icon:"bi-search",dividerBefore:!0}];function c(a){return s?`${s}${a}`:a}function f(a){document.title=`${a} — ${u}`}function _(a,e={}){const{wide:t=!1}=e;a.classList.toggle("page-container--wide",t)}function v(a,e={}){const{visible:t=!0,title:n="Navigasi Hukum",subtitle:r="Pancasila & UUD 1945",items:i=[]}=e,l=a.closest(".app-layout");if(l&&l.classList.toggle("app-layout--sidebar-hidden",!t),!t){a.innerHTML="";return}a.innerHTML=`
    <div class="app-sidebar__header">
      <h2 class="app-sidebar__title">${n}</h2>
      <p class="app-sidebar__subtitle">${r}</p>
    </div>
    <nav aria-label="${n}">
      <ul class="app-sidebar__nav">
        ${i.map(o=>d(o)).join("")}
      </ul>
    </nav>
  `}function A(a,e="Memuat konten..."){a.innerHTML=`
    <div class="loading-state flex-column gap-3 text-center">
      <div class="spinner-border" role="status" aria-hidden="true"></div>
      <p class="mb-0 text-secondary">${e}</p>
    </div>
  `}function k(a){const{title:e="Konten tidak dapat dimuat",message:t,retryLabel:n="Muat Ulang"}=a;return`
    <div class="alert alert-danger d-flex flex-column gap-3 align-items-start" role="alert" data-page-error>
      <div>
        <h2 class="h5 mb-2">${e}</h2>
        <p class="mb-0">${t}</p>
      </div>
      <button type="button" class="btn btn-outline-danger btn-sm" data-action="retry">
        <i class="bi bi-arrow-clockwise me-2" aria-hidden="true"></i>
        ${n}
      </button>
    </div>
  `}function $(a="Bagikan"){return`
    <button type="button"
            class="page-share-button btn btn-outline-secondary btn-sm"
            data-share-btn>
      <i class="bi bi-share me-2" aria-hidden="true"></i>
      ${a}
    </button>
  `}function S(a){return!Array.isArray(a)||a.length===0?"":`
    <nav class="page-breadcrumb" aria-label="Breadcrumb">
      <ol class="page-breadcrumb__list">
        ${a.map((t,n)=>{const r=n===a.length-1,i=g(t.label);return r||!t.path?`<li class="page-breadcrumb__item active" aria-current="page">${i}</li>`:`
        <li class="page-breadcrumb__item">
          <a href="${c(t.path)}" class="page-breadcrumb__link">${i}</a>
        </li>
      `}).join("")}
      </ol>
    </nav>
  `}function d(a){return`
    <li>
      <a class="${["app-sidebar__nav-item",a.isActive?"active":"",a.dividerBefore?"mt-3 pt-3 border-top":""].filter(Boolean).join(" ")}"
         href="${c(a.path)}"
         aria-current="${a.isActive?"page":"false"}">
        <i class="bi ${a.icon}" aria-hidden="true"></i>
        <span>${a.label}</span>
      </a>
    </li>
  `}function y(a,e){const t=a.querySelector('[data-action="retry"]');t&&t.addEventListener("click",()=>{e()})}function L(a){return b.map(e=>({...e,isActive:p(a,e.path)}))}function p(a,e){return e==="/pancasila"&&a.startsWith("/sila/")?!0:a===e}function g(a){return String(a).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;")}const X=["I","II","III","IV","V","VI","VII","VIII","IX","X","XI","XII","XIII","XIV","XV","XVI","XVII","XVIII","XIX","XX","XXI"];export{h as ALINEA_LABELS,X as ROMAN_NUMERALS,m as SILA_DECORATIVE_ICONS,I as SILA_SUMMARIES,y as bindRetryAction,S as buildBreadcrumbHtml,k as buildErrorStateHtml,L as buildPhaseOneSidebarItems,$ as buildShareButton,_ as configurePageContainer,A as renderLoadingState,f as setPageTitle,v as setSidebarContent,c as toAppHref};
