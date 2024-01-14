document.addEventListener('DOMContentLoaded', function() {
    console.log('Bienvenue sur mon site !');
});

function fitElementToParent(el, padding) {
    var timeout = null;
    function resize() {
      if (timeout) clearTimeout(timeout);
      anime.set(el, {scale: 1});
      var pad = padding || 0;
      var parentEl = el.parentNode;
      var elOffsetWidth = el.offsetWidth - pad;
      var parentOffsetWidth = parentEl.offsetWidth;
      var ratio = parentOffsetWidth / elOffsetWidth;
      timeout = setTimeout(anime.set(el, {scale: ratio}), 10);
    }
    resize();
    window.addEventListener('resize', resize);
  }

  // main.js

function changePage() {
  // Ajoutez une classe à la balise body pour déclencher l'animation de transition
  document.body.classList.add('page-transition');

  // Attendez la fin de l'animation (par exemple, 1 seconde) puis redirigez vers la nouvelle page
  setTimeout(function () {
      window.location.href = 'page2.html';
  }, 1000); // 1000 millisecondes = 1 seconde
}