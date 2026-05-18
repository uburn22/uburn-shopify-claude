/* ============================================================================
   UBurn V2 — Theme JS helpers
   - Reveal observer (IntersectionObserver)
   - Sticky ATC trigger
   - Accordion toggle
   - Mobile drawer
   ============================================================================ */

(function() {
  'use strict';

  // Reveal observer
  function initReveals() {
    var els = document.querySelectorAll('.u2-reveal');
    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      els.forEach(function(el) { el.classList.add('is-in'); });
      return;
    }

    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    els.forEach(function(el) { observer.observe(el); });
  }

  // Sticky ATC trigger on scroll past trigger element
  function initStickyATC() {
    var atc = document.querySelector('.u2-sticky-atc');
    var trigger = document.querySelector('[data-u2-sticky-trigger]');
    if (!atc || !trigger) return;

    function onScroll() {
      var rect = trigger.getBoundingClientRect();
      var shouldShow = rect.bottom < 0;
      atc.classList.toggle('is-visible', shouldShow);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // Accordion toggle
  function initAccordions() {
    document.querySelectorAll('.u2-accordion__item').forEach(function(item) {
      var q = item.querySelector('.u2-accordion__q');
      if (!q) return;
      q.addEventListener('click', function() {
        var isOpen = item.classList.contains('is-open');
        // Single-open behavior: close siblings in same accordion
        var parent = item.parentElement;
        if (parent) {
          parent.querySelectorAll('.u2-accordion__item.is-open').forEach(function(other) {
            if (other !== item) other.classList.remove('is-open');
          });
        }
        item.classList.toggle('is-open', !isOpen);
      });
    });
  }

  // Mobile drawer
  function initDrawer() {
    var trigger = document.querySelector('[data-u2-drawer-trigger]');
    var drawer = document.querySelector('[data-u2-drawer]');
    if (!trigger || !drawer) return;

    function open() {
      drawer.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
    function close() {
      drawer.classList.remove('is-open');
      document.body.style.overflow = '';
    }

    trigger.addEventListener('click', function(e) {
      e.preventDefault();
      drawer.classList.contains('is-open') ? close() : open();
    });

    drawer.querySelectorAll('[data-u2-drawer-close]').forEach(function(btn) {
      btn.addEventListener('click', close);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') close();
    });
  }

  // Header scroll state
  function initHeader() {
    var header = document.querySelector('[data-u2-header]');
    if (!header) return;
    function onScroll() {
      header.classList.toggle('is-scrolled', window.scrollY > 16);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  function init() {
    initReveals();
    initStickyATC();
    initAccordions();
    initDrawer();
    initHeader();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
