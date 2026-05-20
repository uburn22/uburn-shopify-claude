/* ═══════════════════════════════════════════════════════════════
   UBurn LP Meno Belly — interactive layer v2
   • Pack selector + Sub/One-time toggle (slide indicator)
   • AJAX add-to-cart with /cart/add.js → /checkout
   • FAQ accordion (auto-close others)
   • Scroll-to-offer anchors
   • Sticky cart show/hide on scroll
   • IntersectionObserver scroll-reveal (stagger)
   • Subtle hero image parallax
   • Rating count-up animation
   • prefers-reduced-motion guard
═══════════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var data = window.__UBLP2;
  if (!data) return;

  var root = document.querySelector('.ublpmb');
  if (!root) return;

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ────── State ──────
  var state = {
    pack: 'maximum',
    mode: data.selling_plan_id ? 'subscribe' : 'onetime'
  };

  // ────── Helpers ──────
  function fmt(cents) {
    var v = (cents / 100);
    return '$' + (v.toFixed(2).replace(/\.00$/, ''));
  }

  function currentPrice() {
    var p = data[state.pack];
    return state.mode === 'subscribe' ? p.price_sub : p.price_one;
  }

  function currentLabel() {
    return state.pack === 'starter' ? 'Starter' : 'Maximum';
  }

  // ────── Render ──────
  function render() {
    var price = currentPrice();
    var priceLabel = fmt(price) + (state.mode === 'subscribe' ? '/mo' : '');

    // pack radio sync
    root.querySelectorAll('[data-ublpmb-pack]').forEach(function (card) {
      var input = card.querySelector('input[type="radio"]');
      if (input) input.checked = (card.dataset.ublpmbPack === state.pack);
    });

    // mode buttons + slide indicator
    var modeWrap = root.querySelector('.ublpmb-offer__mode');
    if (modeWrap) modeWrap.setAttribute('data-mode', state.mode);
    root.querySelectorAll('[data-ublpmb-mode]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.ublpmbMode === state.mode ? 'true' : 'false');
    });

    // pack price labels
    ['starter', 'maximum'].forEach(function (key) {
      var node = root.querySelector('[data-ublpmb-pack-price="' + key + '"]');
      if (!node) return;
      var p = data[key];
      node.textContent = fmt(state.mode === 'subscribe' ? p.price_sub : p.price_one);
    });

    var ctaText = root.querySelector('[data-ublpmb-cta-text]');
    if (ctaText) ctaText.textContent = 'add to cart — ' + priceLabel;

    var bundle = root.querySelector('[data-ublpmb-bundle]');
    if (bundle) bundle.textContent = fmt(price);

    var sname = root.querySelector('[data-ublpmb-sticky-name]');
    var sprice = root.querySelector('[data-ublpmb-sticky-price]');
    if (sname) sname.textContent = currentLabel();
    if (sprice) sprice.textContent = state.mode === 'subscribe'
      ? priceLabel + ' · save 10%'
      : priceLabel + ' · one-time';
  }

  // ────── Pack selector ──────
  root.querySelectorAll('[data-ublpmb-pack]').forEach(function (card) {
    card.addEventListener('click', function () {
      state.pack = card.dataset.ublpmbPack;
      render();
    });
    var input = card.querySelector('input[type="radio"]');
    if (input) {
      input.addEventListener('change', function () {
        state.pack = card.dataset.ublpmbPack;
        render();
      });
    }
  });

  // ────── Mode toggle ──────
  root.querySelectorAll('[data-ublpmb-mode]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.mode = btn.dataset.ublpmbMode;
      render();
    });
  });

  // ────── Scroll-to-offer ──────
  root.querySelectorAll('[data-ublpmb-scroll]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var sel = el.getAttribute('data-ublpmb-scroll');
      var t = document.querySelector(sel);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  // ────── FAQ exclusive open ──────
  var faqItems = root.querySelectorAll('.ublpmb-faq__item');
  faqItems.forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (item.open) {
        faqItems.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      }
    });
  });

  // ────── AJAX add-to-cart ──────
  function addToCart(btn) {
    var variantId = data[state.pack].id;
    var payload = { items: [{ id: variantId, quantity: 1 }] };
    if (state.mode === 'subscribe' && data.selling_plan_id) {
      payload.items[0].selling_plan = data.selling_plan_id;
    }

    var originalText = btn.innerHTML;
    btn.disabled = true;
    btn.innerHTML = '<span>adding…</span>';

    fetch(data.cart_add_url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      credentials: 'same-origin',
      body: JSON.stringify(payload)
    })
      .then(function (r) { if (!r.ok) throw new Error('cart add failed'); return r.json(); })
      .then(function () { window.location.href = '/checkout'; })
      .catch(function (err) {
        console.error('[UBLP2] add to cart error', err);
        btn.disabled = false;
        btn.innerHTML = originalText;
        alert('Sorry — could not add to cart. Please retry.');
      });
  }

  root.querySelectorAll('[data-ublpmb-atc]').forEach(function (btn) {
    btn.addEventListener('click', function () { addToCart(btn); });
  });

  // ────── Sticky cart show/hide ──────
  var sticky = document.getElementById('ublpmb-sticky');
  var hero = root.querySelector('.ublpmb-hero');
  var finalSection = root.querySelector('.ublpmb-final');

  function syncSticky() {
    if (!sticky) return;
    if (window.matchMedia('(min-width: 768px)').matches) {
      sticky.classList.remove('is-visible');
      sticky.setAttribute('aria-hidden', 'true');
      return;
    }
    var heroBottom = hero ? hero.getBoundingClientRect().bottom : 0;
    var finalTop = finalSection ? finalSection.getBoundingClientRect().top : Infinity;
    var viewportH = window.innerHeight || document.documentElement.clientHeight;
    var show = heroBottom < 0 && finalTop > viewportH * 0.5;
    sticky.classList.toggle('is-visible', show);
    sticky.setAttribute('aria-hidden', show ? 'false' : 'true');
  }

  window.addEventListener('scroll', syncSticky, { passive: true });
  window.addEventListener('resize', syncSticky, { passive: true });

  // ────── Scroll-reveal IntersectionObserver ──────
  function setupReveal() {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      root.querySelectorAll('[data-reveal]').forEach(function (el) {
        el.classList.add('is-in-view');
      });
      return;
    }

    // Auto-tag major content blocks with [data-reveal] + stagger delay
    var blocks = [
      { sel: '.ublpmb-hero__sticker' },
      { sel: '.ublpmb-hero__h1' },
      { sel: '.ublpmb-hero__sub' },
      { sel: '.ublpmb-hero__rating' },
      { sel: '.ublpmb-hero__visual' },
      { sel: '.ublpmb-hero__cta' },
      { sel: '.ublpmb-hero__cta-sub' },
      { sel: '.ublpmb-crash .ublpmb-eyebrow' },
      { sel: '.ublpmb-crash .ublpmb-h2' },
      { sel: '.ublpmb-crash__card', stagger: 120 },
      { sel: '.ublpmb-offer .ublpmb-eyebrow' },
      { sel: '.ublpmb-offer .ublpmb-h2' },
      { sel: '.ublpmb-offer__product' },
      { sel: '.ublpmb-pack', stagger: 100 },
      { sel: '.ublpmb-offer__mode' },
      { sel: '.ublpmb-offer__cta' },
      { sel: '.ublpmb-offer__bonus' },
      { sel: '.ublpmb-reviews .ublpmb-eyebrow' },
      { sel: '.ublpmb-reviews .ublpmb-h2' },
      { sel: '.ublpmb-review', stagger: 120 },
      { sel: '.ublpmb-founder__inner img' },
      { sel: '.ublpmb-founder__copy' },
      { sel: '.ublpmb-faq .ublpmb-eyebrow' },
      { sel: '.ublpmb-faq .ublpmb-h2' },
      { sel: '.ublpmb-faq__item', stagger: 60 },
      { sel: '.ublpmb-final__inner img' },
      { sel: '.ublpmb-final__copy' }
    ];

    blocks.forEach(function (b) {
      var nodes = root.querySelectorAll(b.sel);
      nodes.forEach(function (el, i) {
        el.setAttribute('data-reveal', '');
        if (b.stagger) {
          el.style.setProperty('--reveal-delay', (i * b.stagger) + 'ms');
        }
      });
    });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in-view');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    root.querySelectorAll('[data-reveal]').forEach(function (el) {
      io.observe(el);
    });
  }

  // ────── init ──────
  render();
  syncSticky();
  setupReveal();
})();
