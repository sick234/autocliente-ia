'use strict';

document.addEventListener('DOMContentLoaded', () => {

  /* === Navbar scroll ========================================= */
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* === Smooth scroll ========================================= */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id === '#' || id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* === GSAP animations ======================================= */
  const runGSAP = () => {
    if (!window.gsap) { setTimeout(runGSAP, 50); return; }
    const { gsap } = window;

    if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      document.querySelectorAll('.gsap-hidden').forEach(el => el.classList.remove('gsap-hidden'));
      return;
    }

    /* Hero entrance */
    gsap.to('[data-anim="hero"]', {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.1,
      onStart: () => {
        document.querySelectorAll('[data-anim="hero"]').forEach(el => el.classList.remove('gsap-hidden'));
      },
    });

    gsap.from('[data-anim="hero"]', {
      y: 30,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.12,
      delay: 0.1,
    });

    /* Mockup entrance */
    gsap.from('.mockup', {
      opacity: 0,
      y: 40,
      scale: 0.96,
      duration: 1,
      delay: 0.3,
      ease: 'power3.out',
    });

    /* Hero parallax (solo desktop con puntero fino) */
    const heroEl = document.querySelector('.hero');
    const heroBgEl = document.querySelector('.hero-bg');
    if (heroEl && heroBgEl && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      heroEl.addEventListener('mousemove', (e) => {
        const r = heroEl.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - 0.5;
        const y = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(heroBgEl, { x: x * 20, y: y * 14, duration: 1.1, ease: 'power3.out' });
      });
      heroEl.addEventListener('mouseleave', () => {
        gsap.to(heroBgEl, { x: 0, y: 0, duration: 1.5, ease: 'power3.out' });
      });
    }

    /* Scroll reveal genérico */
    if (window.ScrollTrigger) {
      gsap.utils.toArray('[data-anim="fade-up"]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 40,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });

      const chipWrap = document.querySelector('#audience-chips');
      if (chipWrap) {
        gsap.from(chipWrap.querySelectorAll('.audience-chip'), {
          opacity: 0,
          y: 18,
          scale: 0.96,
          duration: 0.55,
          stagger: 0.065,
          ease: 'power3.out',
          scrollTrigger: { trigger: chipWrap, start: 'top 88%', toggleActions: 'play none none none' },
        });
      }

      const proofRow = document.querySelector('.proof-stats');
      if (proofRow) {
        gsap.from(proofRow.querySelectorAll(':scope > div'), {
          opacity: 0,
          y: 28,
          duration: 0.65,
          stagger: 0.11,
          ease: 'power3.out',
          scrollTrigger: { trigger: proofRow, start: 'top 88%', toggleActions: 'play none none none' },
        });
      }

      gsap.utils.toArray('.section-header').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          y: 24,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
    }

    /* Botones magnéticos (sutil, solo desktop) */
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      document.querySelectorAll('.btn-primary, .btn-whatsapp').forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
          const r = btn.getBoundingClientRect();
          const x = e.clientX - r.left - r.width / 2;
          const y = e.clientY - r.top - r.height / 2;
          gsap.to(btn, { x: x * 0.15, y: y * 0.2, duration: 0.3, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.4, ease: 'power2.out' });
        });
      });
    }
  };

  runGSAP();

});
