/* Magazine-cutout headlines from real clippings.
   Each title letter is rendered as a sliced letter image (assets/letters/),
   randomly rotated with a little jitter and a hover bounce. Characters with
   no clipping (digits, punctuation) fall back to a styled CSS paper scrap. */
(function () {
  var BASE = '/assets/letters/';
  var LETTERS = {
    A: 'A.png', B: 'B.png', C: 'C.png', D: 'D.png', E: 'E.png', F: 'F.png',
    G: 'G.png', H: 'H.png', I: 'I.png', J: 'J.png', K: 'K.png', L: 'L.png',
    M: 'M.png', N: 'N.png', O: 'O.png', P: 'P.png', Q: 'Q.png', R: 'R.png',
    S: 'S.png', T: 'T.png', U: 'U.png', V: 'V.png', W: 'W.png', X: 'X.png',
    Y: 'Y.png', Z: 'Z.png', 'Ä': 'A_uml.png', 'Å': 'A_ring.png', 'Ö': 'O_uml.png'
  };
  // fallback styling for characters with no clipping
  var FONTS = ['f-anton', 'f-abril', 'f-oswald', 'f-playfair', 'f-archivo', 'f-elite', 'f-dmserif'];
  var PAPERS = ['p-white', 'p-news', 'p-cream', 'p-black', 'p-kraft', 'p-terra', 'p-red', 'p-mustard', 'p-navy', 'p-teal'];

  var SELECTORS = [
    '.site-title',
    '.piece-title',
    '.section-title',
    '.home-section-title a',
    '.piece-card-title'
  ];

  function pick(a) { return a[Math.floor(Math.random() * a.length)]; }
  function rand(lo, hi) { return Math.random() * (hi - lo) + lo; }

  function vars(node) {
    node.style.setProperty('--rot', rand(-7, 7).toFixed(2) + 'deg');
    node.style.setProperty('--dy', rand(-0.05, 0.05).toFixed(3) + 'em');
  }

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
      var key = ch.toUpperCase();
      if (LETTERS[key]) {
        var img = document.createElement('img');
        img.className = 'cutout-img-letter';
        img.src = BASE + LETTERS[key];
        img.alt = '';
        img.setAttribute('aria-hidden', 'true');
        img.loading = 'eager';
        vars(img);
        el.appendChild(img);
      } else {
        var font = pick(FONTS);
        if (font === prevFont) font = pick(FONTS);
        prevFont = font;
        var span = document.createElement('span');
        span.className = 'cutout-letter ' + font + ' ' + pick(PAPERS);
        span.setAttribute('aria-hidden', 'true');
        vars(span);
        span.textContent = ch;
        el.appendChild(span);
      }
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
