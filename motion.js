(function () {
  if (!('IntersectionObserver' in window)) return;

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Animated stats counter ---------- */

  function parseStat(text) {
    var match = text.trim().match(/^([+-]?)(\d+(?:\.\d+)?)(.*)$/);
    if (!match) return null;
    var decimals = (match[2].split('.')[1] || '').length;
    return { prefix: match[1], target: parseFloat(match[2]), suffix: match[3], decimals: decimals };
  }

  function animateStat(el) {
    var stat = parseStat(el.textContent);
    if (!stat) return;
    var duration = 1300;
    var start = null;

    function tick(timestamp) {
      if (start === null) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = (stat.target * eased).toFixed(stat.decimals);
      el.textContent = stat.prefix + current + stat.suffix;
      if (progress < 1) {
        requestAnimationFrame(tick);
      } else {
        el.textContent = stat.prefix + stat.target.toFixed(stat.decimals) + stat.suffix;
      }
    }
    requestAnimationFrame(tick);
  }

  var statEls = document.querySelectorAll('.stats strong');
  if (statEls.length && !prefersReduced) {
    var counterObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statEls.forEach(function (el) { counterObserver.observe(el); });
  }

  /* ---------- 2. Scroll reveal ---------- */

  var sections = document.querySelectorAll('.section');
  if (sections.length && !prefersReduced) {
    var groupSelector = '.cards, .pills, .stats, .channels, .compare, .sectors';
    document.querySelectorAll('.section ' + groupSelector).forEach(function (group) {
      Array.prototype.forEach.call(group.children, function (child, i) {
        child.style.transitionDelay = (i * 70) + 'ms';
      });
    });

    var sectionObserver = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    sections.forEach(function (section) { sectionObserver.observe(section); });
  }

  /* ---------- 3. Sliding nav highlight ---------- */

  var nav = document.querySelector('.nav');
  var highlight = nav ? nav.querySelector('.nav-highlight') : null;
  if (nav && highlight) {
    var links = nav.querySelectorAll('a');

    function moveHighlight(link) {
      if (!link) {
        highlight.style.opacity = '0';
        return;
      }
      var navRect = nav.getBoundingClientRect();
      var linkRect = link.getBoundingClientRect();
      highlight.style.width = linkRect.width + 'px';
      highlight.style.transform = 'translateX(' + (linkRect.left - navRect.left) + 'px)';
      highlight.style.opacity = '0.14';
    }

    links.forEach(function (link) {
      link.addEventListener('mouseenter', function () { moveHighlight(link); });
      link.addEventListener('focus', function () { moveHighlight(link); });
    });

    nav.addEventListener('mouseleave', function () { moveHighlight(null); });
    nav.addEventListener('focusout', function (e) {
      if (!nav.contains(e.relatedTarget)) moveHighlight(null);
    });
    window.addEventListener('resize', function () { moveHighlight(null); });
  }
})();
