function showContact() {
  const el = document.getElementById("contact");
  
  // Memasukkan HTML dengan desain premium ke dalam element #contact
  el.innerHTML = `
<div class="max-w-5xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 animate-fade-in-up">

  <a href="https://mail.google.com/mail/?view=cm&fs=1&to=aldi.alfian861@email.com" 
   target="_blank"
     class="group relative bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 text-center transition-all duration-500 hover:border-sky-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-500/10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg class="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-sky-400 group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
    </svg>
    <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Email</p>
    <p class="text-sky-400 font-medium text-xs md:text-sm break-all">aldi.alfian861@email.com</p>
    <div class="absolute bottom-0 left-0 w-0 h-1 bg-sky-500 transition-all duration-500 group-hover:w-full"></div>
  </a>

  <a href="https://wa.me/628563147718" target="_blank"
     class="group relative bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 text-center transition-all duration-500 hover:border-green-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg class="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
    </svg>
    <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">WhatsApp</p>
    <p class="text-green-400 font-medium text-xs md:text-sm">+62 856 3147 718</p>
    <div class="absolute bottom-0 left-0 w-0 h-1 bg-green-500 transition-all duration-500 group-hover:w-full"></div>
  </a>

  <a href="https://instagram.com/aldialfnn" target="_blank"
     class="group relative bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 text-center transition-all duration-500 hover:border-pink-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg class="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C8.396 0 7.996.014 6.79.067 5.584.12 4.775.302 4.082.566c-.716.28-1.325.69-1.84 1.204C1.728 2.284 1.318 2.893.998 3.61c-.264.693-.446 1.502-.5 2.708C.448 7.524.434 7.924.434 11.545s.014 4.021.067 5.227c.054 1.206.236 2.015.5 2.708.322.717.732 1.326 1.246 1.84.515.514 1.124.924 1.84 1.204.693.264 1.502.446 2.708.5C7.996 23.552 8.396 23.566 12.017 23.566s4.021-.014 5.227-.067c1.206-.054 2.015-.236 2.708-.5.716-.28 1.325-.69 1.84-1.204.514-.515.924-1.124 1.204-1.84.264-.693.446-1.502.5-2.708.067-1.206.081-1.606.081-5.227s-.014-4.021-.067-5.227c-.054-1.206-.236-2.015-.5-2.708-.28-.716-.69-1.325-1.204-1.84-.515-.514-1.124-.924-1.84-1.204-.693-.264-1.502-.446-2.708-.5C16.038.014 15.638 0 12.017 0zm0 2.163c3.532 0 3.958.014 5.357.081 1.37.066 2.104.29 2.59.483.637.25 1.092.582 1.572.982.49.4.894.894 1.294 1.384.4.49.732.945.982 1.572.193.486.417 1.22.483 2.59.067 1.399.081 1.825.081 5.357s-.014 3.958-.081 5.357c-.066 1.37-.29 2.104-.483 2.59-.25.637-.582 1.092-.982 1.572-.4.49-.894.894-1.384 1.294-.49.4-.945.732-1.572.982-.486.193-1.22.417-2.59.483-1.399.067-1.825.081-5.357.081s-3.958-.014-5.357-.081c-1.37-.066-2.104-.29-2.59-.483-.637-.25-1.092-.582-1.572-.982-.49-.4-.894-.894-1.294-1.384-.4-.49-.732-.945-.982-1.572-.193-.486-.417-1.22-.483-2.59-.067-1.399-.081-1.825-.081-5.357s.014-3.958.081-5.357c.066-1.37.29-2.104.483-2.59.25-.637.582-1.092.982-1.572.4-.49.894-.894 1.384-1.294.49-.4.945-.732 1.572-.982.486-.193 1.22-.417 2.59-.483C8.059 2.177 8.485 2.163 12.017 2.163zm0 3.597a6.42 6.42 0 100 12.84 6.42 6.42 0 000-12.84zm0 10.583a4.163 4.163 0 110-8.326 4.163 4.163 0 010 8.326zm6.406-11.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
    </svg>
    <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Instagram</p>
    <p class="text-pink-400 font-medium text-xs md:text-sm">@aldialfnn</p>
    <div class="absolute bottom-0 left-0 w-0 h-1 bg-pink-500 transition-all duration-500 group-hover:w-full"></div>
  </a>

  <a href="https://www.linkedin.com/in/aldialfian" target="_blank"
     class="group relative bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 text-center transition-all duration-500 hover:border-blue-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg class="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-blue-400 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">LinkedIn</p>
    <p class="text-blue-400 font-medium text-xs md:text-sm">aldialfian</p>
    <div class="absolute bottom-0 left-0 w-0 h-1 bg-blue-500 transition-all duration-500 group-hover:w-full"></div>
  </a>

  <a href="https://github.com/aldialfian861" target="_blank"
     class="group relative bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 text-center transition-all duration-500 hover:border-white/20 hover:-translate-y-2 hover:shadow-2xl hover:shadow-white/5 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg class="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-slate-200 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
    <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">GitHub</p>
    <p class="text-slate-200 font-medium text-xs md:text-sm">aldialfian861</p>
    <div class="absolute bottom-0 left-0 w-0 h-1 bg-white transition-all duration-500 group-hover:w-full"></div>
  </a>

  <a href="https://pinterest.com/aldialfian861" target="_blank"
     class="group relative bg-slate-900/50 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] border border-white/5 text-center transition-all duration-500 hover:border-red-500/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    <svg class="w-10 h-10 md:w-12 md:h-12 mx-auto mb-4 text-red-400 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
    </svg>
    <p class="text-[10px] text-slate-500 uppercase tracking-widest mb-1 font-bold">Pinterest</p>
    <p class="text-red-400 font-medium text-xs md:text-sm">aldialfian861</p>
    <div class="absolute bottom-0 left-0 w-0 h-1 bg-red-500 transition-all duration-500 group-hover:w-full"></div>
  </a>
</div>
  `;

  // Memberikan efek muncul perlahan
  el.style.opacity = "1";
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

/* ===== LIGHTBOX PORTFOLIO WITH LIVE LINKS ===== */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".gallery-img").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.dataset.full || img.src;
    const link = img.dataset.link;
    const currentLinkBtn = lightbox.querySelector('.lightbox-link');
    if (link && !currentLinkBtn) {
      // Create link button if not exists
      const linkBtn = document.createElement('a');
      linkBtn.href = link;
      linkBtn.target = '_blank';
      linkBtn.className = 'absolute bottom-8 left-1/2 -translate-x-1/2 px-8 py-3 bg-sky-500 hover:bg-sky-400 text-white font-bold rounded-full shadow-2xl transition-all hover:scale-105 z-20 text-sm';
      linkBtn.textContent = 'Link Project';
      lightbox.appendChild(linkBtn);
    } else if (link) {
      currentLinkBtn.href = link;
      currentLinkBtn.style.display = 'block';
    } else {
      const btn = lightbox.querySelector('.lightbox-link');
      if (btn) btn.style.display = 'none';
    }
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
  const linkBtn = lightbox.querySelector('.lightbox-link');
  if (linkBtn) linkBtn.style.display = 'none';
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




