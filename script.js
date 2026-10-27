(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

  /* ---------- Teks raksasa: pas selebar kontainernya ---------- */
  const teksPas = $$("[data-fit]");

  function pasUkuran() {
    teksPas.forEach((el) => {
      const induk = el.parentElement;
      const gaya = getComputedStyle(induk);
      const tersedia =
        induk.clientWidth - parseFloat(gaya.paddingLeft) - parseFloat(gaya.paddingRight);

      el.style.fontSize = "100px";
      const lebar = el.getBoundingClientRect().width;
      if (lebar > 0) el.style.fontSize = (100 * tersedia) / lebar + "px";
    });
  }

  let jadwal = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(jadwal);
    jadwal = requestAnimationFrame(pasUkuran);
  });
  pasUkuran();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(pasUkuran);

  /* ---------- Menu di layar kecil ---------- */
  const tombolMenu = $(".menu-tombol");
  const menu = $("#menu");

  function aturMenu(buka) {
    menu.classList.toggle("terbuka", buka);
    tombolMenu.setAttribute("aria-expanded", String(buka));
    tombolMenu.textContent = buka ? "Tutup" : "Menu";
  }

  if (tombolMenu && menu) {
    tombolMenu.addEventListener("click", () =>
      aturMenu(tombolMenu.getAttribute("aria-expanded") !== "true")
    );
    menu.addEventListener("click", (e) => {
      if (e.target.closest("a")) aturMenu(false);
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") aturMenu(false);
    });
  }

  /* ---------- Galeri proyek ---------- */
  const lightbox = $("#lightbox");
  const gambar = $("#lbGambar");
  const judul = $("#lbJudul");
  const hitung = $("#lbHitung");
  const tautan = $("#lbLink");
  const tombolPrev = $(".lb-prev");
  const tombolNext = $(".lb-next");

  let daftar = [];
  let indeks = 0;
  let namaProyek = "";

  function tampil() {
    const item = daftar[indeks];
    gambar.src = item.src;
    gambar.alt = `${namaProyek}, gambar ${indeks + 1} dari ${daftar.length}`;
    judul.textContent = namaProyek;
    hitung.textContent = `${indeks + 1} / ${daftar.length}`;

    if (item.link) {
      tautan.href = item.link;
      tautan.hidden = false;
    } else {
      tautan.hidden = true;
    }
  }

  function pindah(arah) {
    if (daftar.length < 2) return;
    indeks = (indeks + arah + daftar.length) % daftar.length;
    tampil();
  }

  $$(".kartu").forEach((kartu) => {
    kartu.addEventListener("click", () => {
      try {
        daftar = JSON.parse(kartu.dataset.gallery);
      } catch {
        return;
      }
      if (!daftar.length) return;

      namaProyek = kartu.dataset.judul || "";
      indeks = 0;

      const banyak = daftar.length > 1;
      tombolPrev.hidden = !banyak;
      tombolNext.hidden = !banyak;

      tampil();
      lightbox.showModal();
    });
  });

  tombolPrev.addEventListener("click", () => pindah(-1));
  tombolNext.addEventListener("click", () => pindah(1));
  $(".lb-tutup").addEventListener("click", () => lightbox.close());

  // Klik di area kosong menutup galeri
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox || e.target.classList.contains("lb-panggung")) lightbox.close();
  });
  lightbox.addEventListener("close", () => gambar.removeAttribute("src"));

  document.addEventListener("keydown", (e) => {
    if (!lightbox.open) return;
    if (e.key === "ArrowLeft") pindah(-1);
    if (e.key === "ArrowRight") pindah(1);
  });

  // Geser jari atau mouse di dalam galeri
  let awalX = null;
  gambar.addEventListener("pointerdown", (e) => (awalX = e.clientX));
  gambar.addEventListener("pointerup", (e) => {
    if (awalX === null) return;
    const selisih = e.clientX - awalX;
    awalX = null;
    if (Math.abs(selisih) > 50) pindah(selisih < 0 ? 1 : -1);
  });
  gambar.addEventListener("pointercancel", () => (awalX = null));
  gambar.addEventListener("dragstart", (e) => e.preventDefault());
})();
