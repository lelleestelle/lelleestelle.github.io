/* Magazine-cutout headlines.
   Wraps each letter of selected headlines in a paper-scrap span with a
   randomised font, paper colour, rotation and vertical jitter — like
   letters snipped from different magazines and glued to the page. */
(function () {
  var FONTS = ['f-anton', 'f-abril', 'f-oswald', 'f-playfair', 'f-archivo', 'f-elite', 'f-dmserif'];
  var PAPERS = ['p-white', 'p-cream', 'p-kraft', 'p-black', 'p-terra', 'p-mustard', 'p-sky'];

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
      span.style.transform =
        'rotate(' + rand(-7, 7).toFixed(2) + 'deg) translateY(' + rand(-0.06, 0.06).toFixed(3) + 'em)';
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
