(function () {
  var cfg = window.TAJREEB_CONFIG || {};

  var builders = {
    email: function (el) {
      if (!cfg.email) return null;
      var subject = el.getAttribute("data-subject");
      return "mailto:" + cfg.email + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    },
    whatsapp: function () { return cfg.whatsapp ? "https://wa.me/" + cfg.whatsapp : null; },
    booking: function () { return cfg.bookingUrl || null; },
    linkedin: function () { return cfg.linkedinUrl || null; },
    privacy: function () { return cfg.privacyUrl || null; },
    terms: function () { return cfg.termsUrl || null; }
  };

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var build = builders[el.getAttribute("data-link")];
    var href = build && build(el);
    if (href) {
      el.setAttribute("href", href);
      if (/^https?:/.test(href)) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
      el.classList.remove("is-pending");
    } else {
      el.classList.add("is-pending");
    }
  });

  var texts = {
    email: cfg.email,
    whatsapp: cfg.whatsapp ? "+" + cfg.whatsapp : "",
    legalEntity: cfg.legalEntity,
    licenseNo: cfg.licenseNo,
    legalLastUpdated: cfg.legalLastUpdated
  };

  document.querySelectorAll("[data-text]").forEach(function (el) {
    var value = texts[el.getAttribute("data-text")];
    if (value) {
      el.textContent = value;
      el.classList.remove("is-pending");
    } else {
      el.classList.add("is-pending");
    }
  });
})();
