(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  var statusbar = document.getElementById("statusbar");
  var navToggle = document.getElementById("navToggle");
  if (navToggle && statusbar) {
    navToggle.addEventListener("click", function () {
      var isOpen = statusbar.classList.toggle("nav-open");
      navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    statusbar.querySelectorAll(".statusbar__nav a").forEach(function (link) {
      link.addEventListener("click", function () {
        statusbar.classList.remove("nav-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- Back to top ---------- */
  var backToTop = document.getElementById("backtotop");
  if (backToTop) {
    window.addEventListener("scroll", function () {
      backToTop.classList.toggle("is-visible", window.scrollY > 500);
    }, { passive: true });
  }

  /* ---------- Terminal typewriter ---------- */
  var typedEl = document.getElementById("typedRole");
  var roles = [
    "Cloud Architect",
    "DevSecOps Engineer",
    "AI Solutions Builder",
    "Data Engineer",
    "Multi-Cloud Specialist"
  ];

  if (typedEl) {
    if (reduceMotion) {
      typedEl.textContent = roles[0];
    } else {
      (function typeLoop() {
        var roleIndex = 0;
        var charIndex = 0;
        var deleting = false;

        function tick() {
          var current = roles[roleIndex];

          if (!deleting) {
            charIndex++;
            typedEl.textContent = current.slice(0, charIndex);
            if (charIndex === current.length) {
              deleting = true;
              return setTimeout(tick, 1400);
            }
          } else {
            charIndex--;
            typedEl.textContent = current.slice(0, charIndex);
            if (charIndex === 0) {
              deleting = false;
              roleIndex = (roleIndex + 1) % roles.length;
            }
          }
          setTimeout(tick, deleting ? 35 : 65);
        }
        tick();
      })();
    }
  }

  /* ---------- Portfolio filters ---------- */
  var filterButtons = document.querySelectorAll(".filter");
  var workCards = document.querySelectorAll(".workcard");

  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");

      var filter = btn.getAttribute("data-filter");
      workCards.forEach(function (card) {
        var match = filter === "*" || card.getAttribute("data-cat") === filter;
        card.hidden = !match;
      });
    });
  });

  /* ---------- Lightbox for project images ---------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lastFocused = null;

  function openLightbox(src, caption) {
    if (!lightbox) return;
    lastFocused = document.activeElement;
    lightboxImg.src = src;
    lightboxImg.alt = caption || "";
    lightboxCaption.textContent = caption || "";
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lightbox.querySelector(".lightbox__close").focus();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.hidden = true;
    lightboxImg.src = "";
    document.body.style.overflow = "";
    if (lastFocused) lastFocused.focus();
  }

  document.querySelectorAll(".workcard__img[data-full]").forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      openLightbox(trigger.getAttribute("data-full"), trigger.getAttribute("data-caption"));
    });
  });

  if (lightbox) {
    lightbox.querySelectorAll("[data-close]").forEach(function (el) {
      el.addEventListener("click", closeLightbox);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });
  }

  /* ---------- Scroll-spy on status bar nav ---------- */
  var navLinks = document.querySelectorAll(".statusbar__nav a");
  var sections = Array.prototype.slice.call(navLinks).map(function (link) {
    return document.querySelector(link.getAttribute("href"));
  }).filter(Boolean);

  if (sections.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (l) { l.style.color = ""; });
          var active = document.querySelector('.statusbar__nav a[href="#' + entry.target.id + '"]');
          if (active) active.style.color = "var(--signal)";
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });

    sections.forEach(function (s) { observer.observe(s); });
  }
})();
