/* ============================================================================
   UBurn LP "4pm Killer US" — interactive JS
   - Sticky ATC reveal at 60% hero scroll
   - Live proof popup (7 US names hardcoded, 12s rotation)
   - AJAX add-to-cart /cart/add.js
   - Pixel + GA4 ViewContent/AddToCart/InitiateCheckout in USD
   - Reveal-on-scroll
   ============================================================================ */
(function () {
  if (!window.__UB_LP) {
    console.warn('[LP 4pm] __UB_LP data missing');
    return;
  }
  var LP = window.__UB_LP;

  // ===========================================================================
  // Pixel + GA4 event helpers
  // ===========================================================================
  function eventId(prefix) {
    return prefix + '_' + Date.now() + '_' + Math.random().toString(36).slice(2, 9);
  }

  function fbq() { return (typeof window.fbq === 'function') ? window.fbq.apply(this, arguments) : null; }
  function gtag() { return (typeof window.gtag === 'function') ? window.gtag.apply(this, arguments) : null; }

  function trackViewContent() {
    fbq('track', 'ViewContent', {
      content_ids: [LP.maximum.variant_id, LP.starter.variant_id],
      content_name: 'UBurn LP 4pm Killer US',
      content_type: 'product',
      value: LP.maximum.price,
      currency: LP.currency
    }, { eventID: eventId('lp_vc') });

    gtag('event', 'view_item', {
      currency: LP.currency,
      value: LP.maximum.price,
      items: [
        { item_id: String(LP.maximum.id), item_name: LP.maximum.name, price: LP.maximum.price, quantity: 1 },
        { item_id: String(LP.starter.id), item_name: LP.starter.name, price: LP.starter.price, quantity: 1 }
      ]
    });
  }

  function trackAddToCart(variantKey) {
    var v = LP[variantKey];
    if (!v) return;
    fbq('track', 'AddToCart', {
      content_ids: [v.variant_id],
      content_name: v.name,
      content_type: 'product',
      value: v.price,
      currency: LP.currency
    }, { eventID: eventId('lp_atc') });

    gtag('event', 'add_to_cart', {
      currency: LP.currency,
      value: v.price,
      items: [{ item_id: String(v.id), item_name: v.name, price: v.price, quantity: 1 }]
    });
  }

  function trackInitiateCheckout(variantKey) {
    var v = LP[variantKey];
    if (!v) return;
    fbq('track', 'InitiateCheckout', {
      content_ids: [v.variant_id],
      contents: [{ id: v.variant_id, quantity: 1 }],
      num_items: 1,
      value: v.price,
      currency: LP.currency
    }, { eventID: eventId('lp_ic') });

    gtag('event', 'begin_checkout', {
      currency: LP.currency,
      value: v.price,
      items: [{ item_id: String(v.id), item_name: v.name, price: v.price, quantity: 1 }]
    });
  }

  // ===========================================================================
  // AJAX cart add → redirect to checkout
  // ===========================================================================
  function addToCartAndCheckout(variantKey) {
    var v = LP[variantKey];
    if (!v) return;

    trackAddToCart(variantKey);

    var btns = document.querySelectorAll('[data-lp-atc="' + variantKey + '"]');
    btns.forEach(function (b) { b.disabled = true; b.dataset.lpOriginal = b.innerHTML; b.innerHTML = '<span>adding…</span>'; });

    fetch('/cart/add.js', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ items: [{ id: v.id, quantity: 1 }] })
    })
      .then(function (r) { return r.ok ? r.json() : Promise.reject('cart add failed: ' + r.status); })
      .then(function () {
        trackInitiateCheckout(variantKey);
        // Small delay so Pixel events flush before nav
        setTimeout(function () { window.location.href = '/checkout'; }, 250);
      })
      .catch(function (err) {
        console.error('[LP 4pm ATC]', err);
        btns.forEach(function (b) { b.disabled = false; if (b.dataset.lpOriginal) b.innerHTML = b.dataset.lpOriginal; });
        // Fallback: navigate to cart
        window.location.href = '/cart';
      });
  }

  // Wire all CTAs with data-lp-atc
  document.addEventListener('click', function (e) {
    var btn = e.target.closest('[data-lp-atc]');
    if (!btn) return;
    e.preventDefault();
    var key = btn.dataset.lpAtc;
    addToCartAndCheckout(key);
  });

  // ===========================================================================
  // Sticky ATC reveal at 60% hero scroll
  // ===========================================================================
  function initStickyATC() {
    var sticky = document.getElementById('lp4-sticky');
    var hero = document.querySelector('.lp4-hero');
    if (!sticky || !hero) return;

    function onScroll() {
      var rect = hero.getBoundingClientRect();
      var heroBottom = rect.bottom;
      var triggered = heroBottom < (window.innerHeight * 0.4);
      sticky.classList.toggle('is-visible', triggered);
      sticky.setAttribute('aria-hidden', triggered ? 'false' : 'true');
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ===========================================================================
  // Live proof popup — 7 US names hardcoded, 12s rotation
  // ===========================================================================
  var PROOF_DATA = [
    { name: 'Sarah', city: 'Phoenix', time: '2 minutes ago' },
    { name: 'Jessica', city: 'Brooklyn', time: '7 minutes ago' },
    { name: 'Megan', city: 'Austin', time: '12 minutes ago' },
    { name: 'Ashley', city: 'Seattle', time: '18 minutes ago' },
    { name: 'Rachel', city: 'Denver', time: '24 minutes ago' },
    { name: 'Lauren', city: 'Miami', time: '31 minutes ago' },
    { name: 'Emma', city: 'Portland', time: '47 minutes ago' }
  ];

  function initLiveProof() {
    var popup = document.getElementById('lp4-proof');
    var avatar = document.getElementById('lp4-proof-avatar');
    var text = document.getElementById('lp4-proof-text');
    var time = document.getElementById('lp4-proof-time');
    var closeBtn = document.querySelector('[data-lp-proof-close]');
    if (!popup) return;

    var idx = 0;
    var dismissed = false;

    function show() {
      if (dismissed) return;
      var d = PROOF_DATA[idx % PROOF_DATA.length];
      idx++;
      if (avatar) avatar.textContent = d.name[0];
      if (text) text.innerHTML = '<span class="lp4-proof__name">' + d.name + '</span> from ' + d.city + ' just started her ritual';
      if (time) time.textContent = d.time;
      popup.classList.add('is-visible');
      popup.setAttribute('aria-hidden', 'false');
      setTimeout(function () {
        popup.classList.remove('is-visible');
        popup.setAttribute('aria-hidden', 'true');
      }, 5500);
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        dismissed = true;
        popup.classList.remove('is-visible');
        popup.setAttribute('aria-hidden', 'true');
      });
    }

    // First show after 6s, then loop every 12s
    setTimeout(show, 6000);
    setInterval(show, 12000);
  }

  // ===========================================================================
  // Reveal-on-scroll
  // ===========================================================================
  function initReveal() {
    var els = document.querySelectorAll('.lp4-reveal');
    if (!els.length) return;
    if (!('IntersectionObserver' in window)) {
      els.forEach(function (e) { e.classList.add('is-in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.15 });
    els.forEach(function (e) { io.observe(e); });
  }

  // ===========================================================================
  // Init
  // ===========================================================================
  function init() {
    trackViewContent();
    initStickyATC();
    initLiveProof();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
