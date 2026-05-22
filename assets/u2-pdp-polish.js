/* ============================================================================
   UBurn V2 — PDP Polish JS (auto-applied)
   • Auto-tags every shopify-section--u2* with data-u2-section
   • IntersectionObserver triggers .is-in-view (CSS handles motion)
   • Stagger child elements in known grid containers
   • Smooth scroll for in-page anchors
   • Safe to load globally — no-ops if .u2-root not present
   2026-05-19
   ============================================================================ */

(function () {
  'use strict';

  if (typeof window === 'undefined') return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    var root = document.querySelector('.u2-root');
    if (!root) return;

    // 1) Auto-tag each direct shopify-section as a reveal block
    var sections = document.querySelectorAll('[id^="shopify-section-"]');
    sections.forEach(function (el, idx) {
      // Skip header / footer / cart drawer
      if (!el.querySelector('.u2-root, .shopify-section--u2, [class*="u2-pdp"], [class*="u2-comparison"]')) {
        // Also tag if element itself has u2 markers
        var hasU2 = (el.className || '').indexOf('u2') >= 0;
        if (!hasU2) return;
      }
      el.setAttribute('data-u2-section', '');
      if (idx === 0) el.setAttribute('data-u2-first', '');
    });

    // 1b) Tag children of u2-section's first content row as stagger targets
    var staggerSelectors = [
      // Reviews grids
      '[class*="u2-pdp-reviews"] [class*="grid"]',
      '[class*="u2-pdp-stories"] [class*="grid"]',
      // Before/after grids
      '[class*="u2-pdp-before-after"] [class*="grid"]',
      // Formula ingredients grid
      '[class*="u2-pdp-formula"] [class*="grid"]',
      // Steps grid
      '[class*="u2-pdp-steps"] [class*="grid"]',
      // For-you cards grid
      '[class*="u2-pdp-foryou"] [class*="grid"]',
      '[class*="u2-pdp-diff"] [class*="grid"]',
      '[class*="u2-pdp-howit"] [class*="grid"]',
      // Comparison table rows
      '[class*="u2-comparison"] table tbody'
    ];

    staggerSelectors.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (el.children.length > 1) {
          el.setAttribute('data-u2-stagger', '');
          Array.prototype.forEach.call(el.children, function (child, i) {
            var d = Math.min(80 * i, 600);
            child.style.setProperty('--u2-stagger-delay', d + 'ms');
          });
        }
      });
    });

    // 2) IntersectionObserver triggers reveal class
    if (reduceMotion || !('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-u2-section], [data-u2-stagger]').forEach(function (el) {
        el.classList.add('is-in-view');
      });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.04 });

    document.querySelectorAll('[data-u2-section]').forEach(function (el) {
      // The first section (above-the-fold) is already visible — mark in-view immediately
      if (el.hasAttribute('data-u2-first')) {
        el.classList.add('is-in-view');
      } else {
        io.observe(el);
      }
    });

    document.querySelectorAll('[data-u2-stagger]').forEach(function (el) {
      io.observe(el);
    });

    // 3) Smooth scroll for in-page anchor clicks (extra safety beyond CSS)
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var href = link.getAttribute('href');
        if (!href || href === '#' || href.length < 2) return;
        try {
          var target = document.querySelector(href);
          if (!target) return;
          e.preventDefault();
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
        } catch (err) { /* invalid selector — ignore */ }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
