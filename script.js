const loadingScreen = document.querySelector('.loading-screen');
const cursorDot = document.querySelector('.cursor-dot');
const cursorRing = document.querySelector('.cursor-ring');
const navShell = document.querySelector('.nav-shell');
const progressBar = document.querySelector('.scroll-progress');
const revealItems = document.querySelectorAll('.timeline-item, .education-card, .portfolio-card, .gallery-item');
const mobileToggle = document.querySelector('.mobile-nav-toggle');
const mobilePanel = document.querySelector('.mobile-nav-panel');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('main section[id]');

const setProgress = () => {
  const scrollTop = window.scrollY;
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollTop / height) * 100 : 0;
  progressBar.style.width = `${progress}%`;
};

const handleNavVisibility = () => {
  // Keep navbar visible while scrolling
  navShell.classList.remove('is-hidden');
};


const revealOnScroll = () => {
  revealItems.forEach((item) => {
    const rect = item.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      item.classList.add('is-visible');
    }
  });
};

const setActiveNav = () => {
  const offset = window.scrollY + 160;
  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (offset >= top && offset < bottom) {
      navLinks.forEach((link) => {
        const target = link.getAttribute('href');
        link.classList.toggle('is-active', target === `#${section.id}`);
      });
    }
  });
};

const toggleMobileNav = () => {
  mobileToggle.classList.toggle('is-open');
  mobilePanel.classList.toggle('is-open');
};

const updateCursor = (event) => {
  cursorDot.style.left = `${event.clientX}px`;
  cursorDot.style.top = `${event.clientY}px`;
  cursorRing.style.left = `${event.clientX}px`;
  cursorRing.style.top = `${event.clientY}px`;
};

const attachMagnetic = () => {
  document.querySelectorAll('.magnetic').forEach((button) => {
    button.addEventListener('mousemove', (event) => {
      const rect = button.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      button.style.transform = `translate(${(x - rect.width / 2) * 0.04}px, ${(y - rect.height / 2) * 0.04}px)`;
    });

    button.addEventListener('mouseleave', () => {
      button.style.transform = '';
    });
  });
};

const initVectorCarousel = () => {
  const root = document.querySelector('.vector-carousel');
  if (!root) return;

  const slider = root.querySelector('.vector-slider');
  const track = root.querySelector('.vector-track');
  const prevBtn = root.querySelector('.vector-prev');
  const nextBtn = root.querySelector('.vector-next');
  const slides = Array.from(root.querySelectorAll('.vector-slide'));

  if (!slider || !track || !prevBtn || !nextBtn || slides.length === 0) return;

  let index = 0;
  let autoTimer = null;

  const getSlideWidth = () => {
    const first = slides[0];
    if (!first) return 0;
    return first.getBoundingClientRect().width;
  };

  const goTo = (nextIndex) => {
    index = Math.max(0, Math.min(nextIndex, slides.length - 1));
    const w = getSlideWidth();
    track.style.transform = `translateX(${-index * w}px)`;
  };

  const resetAuto = () => {
    if (autoTimer) clearInterval(autoTimer);
    autoTimer = setInterval(() => {
      goTo((index + 1) % slides.length);
    }, 4500);
  };

  prevBtn.addEventListener('click', () => {
    goTo((index - 1 + slides.length) % slides.length);
    resetAuto();
  });

  nextBtn.addEventListener('click', () => {
    goTo((index + 1) % slides.length);
    resetAuto();
  });

  // Basic touch swipe
  let startX = 0;
  let isTouching = false;

  slider.addEventListener('touchstart', (e) => {
    if (!e.touches || !e.touches[0]) return;
    isTouching = true;
    startX = e.touches[0].clientX;
  }, { passive: true });

  slider.addEventListener('touchend', (e) => {
    if (!isTouching || !e.changedTouches || !e.changedTouches[0]) return;
    isTouching = false;
    const endX = e.changedTouches[0].clientX;
    const dx = endX - startX;

    const threshold = 40;
    if (Math.abs(dx) < threshold) return;

    if (dx < 0) goTo((index + 1) % slides.length);
    if (dx > 0) goTo((index - 1 + slides.length) % slides.length);
    resetAuto();
  });

  // Ensure correct position on resize
  let resizeTimer = null;
  window.addEventListener('resize', () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => goTo(index), 120);
  });

  goTo(0);
  resetAuto();
};

const initLightbox = () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const galleryImages = Array.from(document.querySelectorAll('.gallery-item img'));
  let activeIndex = 0;

  const openLightbox = (index) => {
    activeIndex = index;
    lightboxImg.src = galleryImages[activeIndex].src;
    lightbox.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  };

  galleryImages.forEach((image, index) => {
    image.addEventListener('click', () => openLightbox(index));
  });

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) closeLightbox();
  });

  prevBtn.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
    lightboxImg.src = galleryImages[activeIndex].src;
  });

  nextBtn.addEventListener('click', () => {
    activeIndex = (activeIndex + 1) % galleryImages.length;
    lightboxImg.src = galleryImages[activeIndex].src;
  });

  document.addEventListener('keydown', (event) => {
    if (lightbox.classList.contains('hidden')) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') {
      activeIndex = (activeIndex - 1 + galleryImages.length) % galleryImages.length;
      lightboxImg.src = galleryImages[activeIndex].src;
    }
    if (event.key === 'ArrowRight') {
      activeIndex = (activeIndex + 1) % galleryImages.length;
      lightboxImg.src = galleryImages[activeIndex].src;
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loadingScreen.classList.add('is-hidden');
  }, 900);

  attachMagnetic();
  initVectorCarousel();
  initLightbox();
  setProgress();
  handleNavVisibility();
  revealOnScroll();
  setActiveNav();

  if (mobileToggle && mobilePanel) {
    mobileToggle.addEventListener('click', toggleMobileNav);
    mobilePanel.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        mobileToggle.classList.remove('is-open');
        mobilePanel.classList.remove('is-open');
      });
    });
  }

  window.addEventListener('scroll', () => {
    setProgress();
    handleNavVisibility();
    revealOnScroll();
    setActiveNav();
  });

  window.addEventListener('mousemove', (event) => {
    updateCursor(event);
  });

  document.querySelectorAll('a, button, .portfolio-card, .gallery-item').forEach((element) => {
    element.addEventListener('mouseenter', () => cursorRing.classList.add('is-active'));
    element.addEventListener('mouseleave', () => cursorRing.classList.remove('is-active'));
  });
});

