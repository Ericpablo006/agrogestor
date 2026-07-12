// AgroGestor Pro — comportamento do site institucional
// Movido para arquivo externo porque a Content-Security-Policy do site
// bloqueia scripts inline (script-src 'self'), o que evita que um script
// injetado por XSS seja executado.
(function () {
  'use strict';

  var anoEl = document.getElementById('ano');
  if (anoEl) {
    anoEl.textContent = new Date().getFullYear();
  }

  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggle.classList.toggle('is-open', isOpen);
    });

    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        toggle.classList.remove('is-open');
      });
    });
  }
})();
