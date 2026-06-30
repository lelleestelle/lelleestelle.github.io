/* Magazine-cutout headlines.
   Wraps each letter of selected headlines in a paper-scrap span with a
   randomised font, paper colour, rotation and vertical jitter — like
   letters snipped from different magazines and glued to the page. */
(function () {
  var FONTS = ['f-anton', 'f-abril', 'f-oswald', 'f-playfair', 'f-archivo', 'f-elite', 'f-dmserif'];
  // weighted toward newsprint white/black with colour accents, like the
  // reference sheet (repeats bias the random pick)
  var PAPERS = [
    'p-white', 'p-white', 'p-news', 'p-news', 'p-cream',
    'p-black', 'p-black', 'p-kraft',
    'p-terra', 'p-red', 'p-mustard', 'p-navy', 'p-teal', 'p-green', 'p-pink', 'p-sky'
  ];

  // Headlines to treat as cutouts.
  var SELECTORS = [
    '.site-title',
    '.piece-title',
    '.section-title',
    '.home-section-title a',
    '.piece-card-title'
  ];

  function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
  function rand(min, max) { return Math.random() * (max - min) + min; }

  function cutoutify(el) {
    if (el.dataset.cutoutDone) return;
    var text = el.textContent;
    el.textContent = '';
    el.classList.add('cutout');
    el.setAttribute('aria-label', text);

    var prevFont = null;
    for (var i = 0; i < text.length; i++) {
      var ch = text[i];
      if (ch === ' ') {
        var sp = document.createElement('span');
        sp.className = 'cutout-space';
        sp.setAttribute('aria-hidden', 'true');
        el.appendChild(sp);
        continue;
      }
      // avoid two identical fonts in a row, for more collage variety
      var font = pick(FONTS);
      if (font === prevFont) font = pick(FONTS);
      prevFont = font;

      var span = document.createElement('span');
      span.className = 'cutout-letter ' + font + ' ' + pick(PAPERS);
      span.setAttribute('aria-hidden', 'true');
      // rotation + jitter as CSS vars so the :hover bounce can layer on
      // top without overriding the letter's individual tilt
      span.style.setProperty('--rot', rand(-7, 7).toFixed(2) + 'deg');
      span.style.setProperty('--dy', rand(-0.06, 0.06).toFixed(3) + 'em');
      span.textContent = ch;
      el.appendChild(span);
    }
    el.dataset.cutoutDone = '1';
  }

  function run() {
    SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(cutoutify);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }
})();
