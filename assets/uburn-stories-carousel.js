(function(){
  if (window.__uburnUgcInit) return;
  window.__uburnUgcInit = true;
  function init() {
    var rail = document.querySelector('.pdpv9-stories__rail');
    if (!rail) return;
    var cards = rail.querySelectorAll('[data-stories-card]');
    var dots = document.querySelectorAll('[data-stories-dot]');

    rail.addEventListener('scroll', function(){
      var idx = Math.round(rail.scrollLeft / (rail.scrollWidth / cards.length));
      dots.forEach(function(d, i){ d.classList.toggle('is-active', i === idx); });
    }, { passive: true });

    dots.forEach(function(d, i){
      d.addEventListener('click', function(){
        var card = cards[i];
        if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      });
    });

    cards.forEach(function(card){
      var video = card.querySelector('video');
      var btn = card.querySelector('.pdpv9-stories__play');
      if (!video || !btn) return;
      function toggle(){
        if (video.paused) {
          cards.forEach(function(c){
            var v = c.querySelector('video');
            var b = c.querySelector('.pdpv9-stories__play');
            if (v && v !== video && !v.paused) { v.pause(); v.muted = true; b && b.classList.remove('is-playing'); }
          });
          video.muted = false;
          video.play();
          btn.classList.add('is-playing');
        } else {
          video.pause();
          video.muted = true;
          btn.classList.remove('is-playing');
        }
      }
      btn.addEventListener('click', toggle);
      video.addEventListener('click', toggle);
      video.addEventListener('ended', function(){ btn.classList.remove('is-playing'); });
    });

    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          var v = e.target.querySelector('video');
          if (!v) return;
          if (e.isIntersecting && v.paused && v.muted) {
            v.play().catch(function(){});
          } else if (!e.isIntersecting && !v.paused && v.muted) {
            v.pause();
          }
        });
      }, { threshold: 0.5 });
      if (cards[0]) io.observe(cards[0]);
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
