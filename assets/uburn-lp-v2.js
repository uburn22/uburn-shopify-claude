/* ═══════════════════════════════════════════════════════════════
   UBurn LP V2 — interactive layer v2
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

  var root = document.querySelector('.ublp2');
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
    root.querySelectorAll('[data-ublp2-pack]').forEach(function (card) {
      var input = card.querySelector('input[type="radio"]');
      if (input) input.checked = (card.dataset.ublp2Pack === state.pack);
    });

    // mode buttons + slide indicator
    var modeWrap = root.querySelector('.ublp2-offer__mode');
    if (modeWrap) modeWrap.setAttribute('data-mode', state.mode);
    root.querySelectorAll('[data-ublp2-mode]').forEach(function (btn) {
      btn.setAttribute('aria-pressed', btn.dataset.ublp2Mode === state.mode ? 'true' : 'false');
    });

    // pack price labels
    ['starter', 'maximum'].forEach(function (key) {
      var node = root.querySelector('[data-ublp2-pack-price="' + key + '"]');
      if (!node) return;
      var p = data[key];
      node.textContent = fmt(state.mode === 'subscribe' ? p.price_sub : p.price_one);
    });

    var ctaText = root.querySelector('[data-ublp2-cta-text]');
    if (ctaText) ctaText.textContent = 'Checkout — ' + currentLabel();

    var bundle = root.querySelector('[data-ublp2-bundle]');
    if (bundle) bundle.textContent = fmt(price);

    var sname = root.querySelector('[data-ublp2-sticky-name]');
    var sprice = root.querySelector('[data-ublp2-sticky-price]');
    if (sname) sname.textContent = currentLabel() + ' · 30 days';
    if (sprice) sprice.textContent = state.mode === 'subscribe'
      ? priceLabel + ' · save 10%'
      : priceLabel;
  }

  // ────── Pack selector ──────
  root.querySelectorAll('[data-ublp2-pack]').forEach(function (card) {
    card.addEventListener('click', function () {
      state.pack = card.dataset.ublp2Pack;
      render();
    });
    var input = card.querySelector('input[type="radio"]');
    if (input) {
      input.addEventListener('change', function () {
        state.pack = card.dataset.ublp2Pack;
        render();
      });
    }
  });

  // ────── Mode toggle ──────
  root.querySelectorAll('[data-ublp2-mode]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      state.mode = btn.dataset.ublp2Mode;
      render();
    });
  });

  // ────── Scroll-to-offer ──────
  root.querySelectorAll('[data-ublp2-scroll]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      var sel = el.getAttribute('data-ublp2-scroll');
      var t = document.querySelector(sel);
      if (t) {
        e.preventDefault();
        t.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  // ────── FAQ exclusive open ──────
  var faqItems = root.querySelectorAll('.ublp2-faq__item');
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

  root.querySelectorAll('[data-ublp2-atc]').forEach(function (btn) {
    btn.addEventListener('click', function () { addToCart(btn); });
  });

  // ────── Sticky cart show/hide ──────
  var sticky = document.getElementById('ublp2-sticky');
  var hero = root.querySelector('.ublp2-hero');
  var finalSection = root.querySelector('.ublp2-final');

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
      { sel: '.ublp2-hero__sticker' },
      { sel: '.ublp2-hero__h1' },
      { sel: '.ublp2-hero__sub' },
      { sel: '.ublp2-hero__rating' },
      { sel: '.ublp2-hero__visual' },
      { sel: '.ublp2-hero__cta' },
      { sel: '.ublp2-hero__cta-sub' },
      { sel: '.ublp2-crash .ublp2-eyebrow' },
      { sel: '.ublp2-crash .ublp2-h2' },
      { sel: '.ublp2-crash__card', stagger: 120 },
      { sel: '.ublp2-offer .ublp2-eyebrow' },
      { sel: '.ublp2-offer .ublp2-h2' },
      { sel: '.ublp2-offer__product' },
      { sel: '.ublp2-pack', stagger: 100 },
      { sel: '.ublp2-offer__mode' },
      { sel: '.ublp2-offer__cta' },
      { sel: '.ublp2-offer__bonus' },
      { sel: '.ublp2-reviews .ublp2-eyebrow' },
      { sel: '.ublp2-reviews .ublp2-h2' },
      { sel: '.ublp2-review', stagger: 120 },
      { sel: '.ublp2-founder__inner img' },
      { sel: '.ublp2-founder__copy' },
      { sel: '.ublp2-faq .ublp2-eyebrow' },
      { sel: '.ublp2-faq .ublp2-h2' },
      { sel: '.ublp2-faq__item', stagger: 60 },
      { sel: '.ublp2-final__inner img' },
      { sel: '.ublp2-final__copy' }
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
