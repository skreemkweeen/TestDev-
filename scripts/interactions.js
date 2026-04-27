/* ============================================================
   VANTA STUDIO — Interactions
   ============================================================ */

/* ── Nav scroll state ───────────────────────────────────── */
const nav = document.querySelector('.nav');

const navObserver = new IntersectionObserver(
  ([entry]) => nav.classList.toggle('scrolled', !entry.isIntersecting),
  { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
);

const heroSentinel = document.querySelector('.hero');
if (heroSentinel) navObserver.observe(heroSentinel);

/* ── Scroll reveal ──────────────────────────────────────── */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
);

document.querySelectorAll('[data-reveal]').forEach(el => revealObserver.observe(el));

/* ── Hero media Ken Burns ───────────────────────────────── */
const heroImg = document.querySelector('.hero__media img');
if (heroImg) {
  heroImg.addEventListener('load', () => heroImg.classList.add('loaded'));
  if (heroImg.complete) heroImg.classList.add('loaded');
}

/* ── Custom cursor (desktop only) ──────────────────────── */
if (window.matchMedia('(pointer: fine)').matches) {
  const cursorDot  = document.querySelector('.cursor__dot');
  const cursorRing = document.querySelector('.cursor__ring');

  let mouseX = 0, mouseY = 0;
  let ringX  = 0, ringY  = 0;
  let raf;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (cursorDot) {
      cursorDot.style.left = mouseX + 'px';
      cursorDot.style.top  = mouseY + 'px';
    }
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.12;
    ringY += (mouseY - ringY) * 0.12;
    if (cursorRing) {
      cursorRing.style.left = ringX + 'px';
      cursorRing.style.top  = ringY + 'px';
    }
    raf = requestAnimationFrame(animateRing);
  }
  animateRing();

  const hoverables = document.querySelectorAll('a, button, .work-card, .service-card');
  hoverables.forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
}

/* ── Press marquee clone (seamless loop) ────────────────── */
const pressTrack = document.querySelector('.press__track');
if (pressTrack) {
  const clone = pressTrack.cloneNode(true);
  pressTrack.parentElement.appendChild(clone);
}

/* ── Testimonials carousel ──────────────────────────────── */
const testimonialSlides = document.querySelectorAll('[data-slide]');
const testimonialDots   = document.querySelectorAll('.testimonials__dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
  testimonialSlides.forEach((slide, i) => {
    slide.style.opacity    = i === index ? '1' : '0';
    slide.style.position   = i === index ? 'relative' : 'absolute';
    slide.style.pointerEvents = i === index ? '' : 'none';
  });
  testimonialDots.forEach((dot, i) => dot.classList.toggle('active', i === index));
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % testimonialSlides.length);
}

if (testimonialSlides.length > 1) {
  testimonialDots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      clearInterval(slideInterval);
      showSlide(i);
      slideInterval = setInterval(nextSlide, 6000);
    });
  });
  showSlide(0);
  slideInterval = setInterval(nextSlide, 6000);
}

/* ── Parallax hero media (subtle) ──────────────────────── */
const heroMedia = document.querySelector('.hero__media img');
if (heroMedia && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const limit   = window.innerHeight;
    if (scrollY < limit) {
      heroMedia.style.transform = `scale(1) translateY(${scrollY * 0.15}px)`;
    }
  }, { passive: true });
}

/* ── Work-card hover: magnetic pull ────────────────────── */
document.querySelectorAll('.work-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect  = card.getBoundingClientRect();
    const x     = ((e.clientX - rect.left) / rect.width  - 0.5) * 10;
    const y     = ((e.clientY - rect.top)  / rect.height - 0.5) * 6;
    card.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
  });
});

/* ── Mobile nav toggle ──────────────────────────────────── */
const menuToggle = document.querySelector('.nav__menu-toggle');
const mobileNav  = document.querySelector('.nav__links');

if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('nav__links--open');
    menuToggle.setAttribute('aria-expanded', open);
  });
}

/* ── CTA form submission (demo) ─────────────────────────── */
const ctaForm = document.querySelector('.cta__form');
if (ctaForm) {
  ctaForm.addEventListener('submit', e => {
    e.preventDefault();
    const input = ctaForm.querySelector('.cta__input');
    const btn   = ctaForm.querySelector('.btn--primary');
    if (btn) {
      btn.textContent = 'Thank you';
      btn.style.background = '#2A6E48';
      btn.style.borderColor = '#2A6E48';
    }
    if (input) input.value = '';
  });
}
