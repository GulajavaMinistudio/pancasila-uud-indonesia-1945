import{setPageTitle as e,toAppHref as i}from"./pageHelpers-BpmCgv2g.js";const n=[{path:"/",label:"Beranda",icon:"bi-house-fill"},{path:"/pancasila",label:"Pancasila",icon:"bi-star-fill"},{path:"/pasal",label:"Daftar Pasal",icon:"bi-journal-text"}];class s{constructor(a,{router:t}){this.container=a,this.router=t}mount(){this.container.innerHTML=this._buildHtml(),e("Halaman Tidak Ditemukan"),this._bindEvents()}_buildHtml(){return`
      <div class="text-center py-5 px-3">

        <!-- Ilustrasi 404 -->
        <div aria-hidden="true"
             style="font-size: 5rem; font-weight: 800; line-height: 1;
                    color: var(--color-primary); opacity: 0.15; user-select: none;">
          404
        </div>
        <div class="mt-2 mb-1" aria-hidden="true">
          <i class="bi bi-map" style="font-size: 3rem; color: var(--color-primary); opacity: 0.5;"></i>
        </div>

        <!-- Pesan -->
        <h1 class="fs-3 fw-bold mt-3" style="color: var(--color-on-surface);">
          Halaman Tidak Ditemukan
        </h1>
        <p class="mt-2 mb-4" style="color: var(--color-text-secondary); max-width: 400px; margin-inline: auto;">
          Halaman yang Anda cari tidak ada atau telah dipindahkan.
          Coba navigasi ke salah satu halaman berikut:
        </p>

        <!-- Pintasan navigasi -->
        <div class="d-flex flex-wrap justify-content-center gap-2 mb-4">
          ${n.map(a=>this._buildShortcutHtml(a)).join("")}
        </div>

        <!-- Tombol kembali ke beranda -->
        <a href="${i("/")}"
           class="btn fw-semibold px-4 py-2 text-white"
           style="background-color: var(--color-primary);"
           data-nav-to="/">
          <i class="bi bi-house-fill me-2" aria-hidden="true"></i>
          Kembali ke Beranda
        </a>

      </div>
    `}_buildShortcutHtml(a){return`
      <a class="btn btn-outline-secondary btn-sm fw-semibold"
         href="${i(a.path)}"
         data-nav-to="${a.path}">
        <i class="bi ${a.icon} me-1" aria-hidden="true"></i>
        ${a.label}
      </a>
    `}_bindEvents(){this.container.addEventListener("click",a=>{const t=a.target.closest("[data-nav-to]");t&&(a.preventDefault(),this.router.navigate(t.getAttribute("data-nav-to")))})}}export{s as NotFoundPage};
