function showContact() {
  const el = document.getElementById("contact");

  el.innerHTML = `
<div class="max-w-4xl mx-auto mt-8 grid grid-cols-2 md:grid-cols-3 gap-6">

  <!-- EMAIL -->
  <a href="mailto:aldi.alfian861@email.com"
     class="bg-slate-800 p-6 rounded-xl text-center
            hover:bg-slate-700 hover:-translate-y-1 transition">

    <img src="icons/email.png"
         alt="Email"
         class="w-10 h-10 mx-auto mb-3">

    <p class="text-sm text-slate-400">Email</p>
    <p class="text-sky-400 font-medium text-sm break-all">
      aldi.alfian861@email.com
    </p>
  </a>

  <!-- LINKEDIN -->
  <a href="https://www.linkedin.com/in/aldialfian"
     target="_blank"
     class="bg-slate-800 p-6 rounded-xl text-center
            hover:bg-slate-700 hover:-translate-y-1 transition">

    <img src="icons/linkedin.png"
         alt="LinkedIn"
         class="w-10 h-10 mx-auto mb-3">

    <p class="text-sm text-slate-400">LinkedIn</p>
    <p class="text-sky-400 font-medium text-sm">
      aldialfian
    </p>
  </a>

  <!-- GITHUB -->
  <a href="https://github.com/aldialfian861"
     target="_blank"
     class="bg-slate-800 p-6 rounded-xl text-center
            hover:bg-slate-700 hover:-translate-y-1 transition">

    <img src="icons/github.png"
         alt="GitHub"
         class="w-10 h-10 mx-auto mb-3">

    <p class="text-sm text-slate-400">GitHub</p>
    <p class="text-sky-400 font-medium text-sm">
      aldialfian861
    </p>
  </a>

  <!-- WHATSAPP -->
  <a href="https://wa.me/628563147718"
     target="_blank"
     class="bg-slate-800 p-6 rounded-xl text-center
            hover:bg-slate-700 hover:-translate-y-1 transition">

    <img src="icons/whatsapp.png"
         alt="WhatsApp"
         class="w-10 h-10 mx-auto mb-3">

    <p class="text-sm text-slate-400">WhatsApp</p>
    <p class="text-sky-400 font-medium text-sm">
      +62 856-314-7718
    </p>
  </a>

  <!-- INSTAGRAM -->
  <a href="https://instagram.com/aldialfnn"
     target="_blank"
     class="bg-slate-800 p-6 rounded-xl text-center
            hover:bg-slate-700 hover:-translate-y-1 transition">

    <img src="icons/instagram.png"
         alt="Instagram"
         class="w-10 h-10 mx-auto mb-3">

    <p class="text-sm text-slate-400">Instagram</p>
    <p class="text-sky-400 font-medium text-sm">
      @aldialfnn
    </p>
  </a>

    <!-- TIKTOK -->
  <a href="https://tiktok.com/@aldialfnn"
     target="_blank"
     class="bg-slate-800 p-6 rounded-xl text-center
            hover:bg-slate-700 hover:-translate-y-1 transition">

    <img src="icons/tiktok.png"
         alt="TIKTOK"
         class="w-10 h-10 mx-auto mb-3">

    <p class="text-sm text-slate-400">TikTok</p>
    <p class="text-sky-400 font-medium text-sm">
      @aldialfnn
    </p>
  </a>
</div>


  `;

  el.classList.remove("opacity-0");
  el.classList.add("opacity-100");
}

/* ANIMASI FOTO 4x6 */
const foto = document.querySelector(".foto-4x6");

if (foto) {
  foto.style.opacity = 0;
  foto.style.transform = "translateY(30px)";

  setTimeout(() => {
    foto.style.transition = "all 1s ease";
    foto.style.opacity = 1;
    foto.style.transform = "translateY(0)";
  }, 300);
}

/* ===============================
   SCROLL REVEAL ANIMATION
================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  reveals.forEach(section => {
    const windowHeight = window.innerHeight;
    const elementTop = section.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      section.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ===============================
   HOVER ANIMATION (CURSOR)
================================ */
const hoverElements = document.querySelectorAll(
  ".card, .skill, button, a, .foto-4x6"
);

hoverElements.forEach(el => {
  el.style.transition = "all 0.3s ease";

  el.addEventListener("mouseenter", () => {
    el.style.transform = "translateY(-5px) scale(1.03)";
    el.style.boxShadow = "0 10px 25px rgba(56,189,248,0.3)";
  });

  el.addEventListener("mouseleave", () => {
    el.style.transform = "translateY(0) scale(1)";
    el.style.boxShadow = "none";
  });
});

/* ===============================
   EDUCATION ANIMATION
================================ */
const eduCards = document.querySelectorAll(".edu-card");
const eduLogos = document.querySelectorAll(".edu-logo");

/* hover animation card */
eduCards.forEach(card => {
  card.style.transition = "all 0.4s ease";

  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
    card.style.boxShadow = "0 15px 35px rgba(56,189,248,0.35)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
    card.style.boxShadow = "none";
  });
});

/* logo animation */
eduLogos.forEach(logo => {
  logo.style.transition = "all 0.4s ease";

  logo.addEventListener("mouseenter", () => {
    logo.style.transform = "rotate(-5deg) scale(1.1)";
  });

  logo.addEventListener("mouseleave", () => {
    logo.style.transform = "rotate(0) scale(1)";
  });
});

/* slide reveal education */
function revealEducationOnScroll() {
  eduCards.forEach((card, index) => {
    const windowHeight = window.innerHeight;
    const elementTop = card.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {
      card.style.opacity = 1;
      card.style.transform = "translateX(0)";
    }
  });
}

window.addEventListener("scroll", revealEducationOnScroll);
revealEducationOnScroll();

/* ===== GALLERY SLIDER (LOOP AMAN) ===== */
function initSlider(trackClass, prevClass, nextClass, interval = 4000) {
  const track = document.querySelector(trackClass);
  if (!track) return;

  const slides = track.querySelectorAll("img");
  const prevBtn = document.querySelector(prevClass);
  const nextBtn = document.querySelector(nextClass);

  let index = 0;
  const total = slides.length;

  function showSlide() {
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index++;
    if (index >= total) {
      index = 0; // 🔁 kembali ke gambar pertama
    }
    showSlide();
  }

  function prevSlide() {
    index--;
    if (index < 0) {
      index = total - 1; // 🔁 lompat ke gambar terakhir
    }
    showSlide();
  }

  nextBtn?.addEventListener("click", nextSlide);
  prevBtn?.addEventListener("click", prevSlide);

  /* AUTO SLIDE */
  setInterval(nextSlide, interval);
}

/* ===== INIT SEMUA GALERI ===== */
initSlider(".gallery-track", ".prev", ".next", 3000);
initSlider(".gallery-track-2", ".prev-2", ".next-2", 3000);

/* ===== LIGHTBOX PORTFOLIO ===== */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.dataset.full || img.src;
    lightbox.classList.remove("hidden");
    lightbox.classList.add("flex");
  });
});

/* CLOSE */
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeLightbox();
});

function closeLightbox() {
  lightbox.classList.add("hidden");
  lightbox.classList.remove("flex");
  lightboxImg.src = "";
}

// Slider Portfolio Website – Mobile + Desktop + Auto-slide
const trackWeb = document.querySelector('.gallery-track-web');
const prevWeb = document.querySelector('.prev-web');
const nextWeb = document.querySelector('.next-web');

if (trackWeb && prevWeb && nextWeb) {
  const slidesWeb = trackWeb.querySelectorAll('img');
  let indexWeb = 0;
  const totalWeb = slidesWeb.length;
  let autoSlide;

  function updateSlider() {
    trackWeb.style.transform = `translateX(-${indexWeb * 100}%)`;
  }

  function nextSlide() {
    indexWeb = (indexWeb + 1) % totalWeb;
    updateSlider();
  }

  function prevSlide() {
    indexWeb = (indexWeb - 1 + totalWeb) % totalWeb;
    updateSlider();
  }

  prevWeb.addEventListener('click', () => {
    prevSlide();
    restartAuto();
  });

  nextWeb.addEventListener('click', () => {
    nextSlide();
    restartAuto();
  });

  // AUTO SLIDE
  function startAuto() {
    autoSlide = setInterval(nextSlide, 3000);
  }

  function stopAuto() {
    clearInterval(autoSlide);
  }

  function restartAuto() {
    stopAuto();
    startAuto();
  }

  // Pause saat hover desktop
  trackWeb.addEventListener('mouseenter', stopAuto);
  trackWeb.addEventListener('mouseleave', startAuto);

  // Swipe HP
  let startX = 0, currentX = 0, isDragging = false;

  trackWeb.addEventListener('touchstart', e => {
    stopAuto();
    startX = e.touches[0].clientX;
    isDragging = true;
  });

  trackWeb.addEventListener('touchmove', e => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
  });

  trackWeb.addEventListener('touchend', () => {
    const diff = startX - currentX;
    if (diff > 50) nextSlide();
    else if (diff < -50) prevSlide();
    isDragging = false;
    startAuto();
  });

  // Inisialisasi
  updateSlider();
  startAuto();
}

