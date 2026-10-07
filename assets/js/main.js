// Progressive enhancement only: without JS the menu is always visible
// and the slider is a swipeable, scroll-snapped strip.
document.documentElement.classList.add("js");

// Mobile navigation toggle.
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();

// Homepage slider: prev/next, dots, autoplay that pauses on hover/focus
// and never runs when the visitor prefers reduced motion.
(function () {
  var slider = document.querySelector(".slider");
  if (!slider) return;

  var track = slider.querySelector(".slides");
  var slides = track.children;
  var dotsWrap = slider.querySelector(".slider-dots");
  var current = 0;
  var paused = false;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var dots = [];
  for (var i = 0; i < slides.length; i++) {
    var dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", "Show slide " + (i + 1) + " of " + slides.length);
    dot.addEventListener("click", goTo.bind(null, i));
    dotsWrap.appendChild(dot);
    dots.push(dot);
  }

  function markCurrent(index) {
    current = index;
    dots.forEach(function (d, n) {
      d.setAttribute("aria-current", n === index ? "true" : "false");
    });
  }

  function goTo(index) {
    var n = (index + slides.length) % slides.length;
    track.scrollTo({ left: slides[n].offsetLeft, behavior: reduceMotion ? "auto" : "smooth" });
    markCurrent(n);
  }

  slider.querySelector(".slider-prev").addEventListener("click", function () { goTo(current - 1); });
  slider.querySelector(".slider-next").addEventListener("click", function () { goTo(current + 1); });

  // Keep dots in sync when the visitor swipes or scrolls the strip.
  var scrollTimer;
  track.addEventListener("scroll", function () {
    clearTimeout(scrollTimer);
    scrollTimer = setTimeout(function () {
      markCurrent(Math.round(track.scrollLeft / track.clientWidth));
    }, 80);
  }, { passive: true });

  function tick() {
    if (!paused && !document.hidden) goTo(current + 1);
  }

  slider.addEventListener("mouseenter", function () { paused = true; });
  slider.addEventListener("mouseleave", function () { paused = false; });
  slider.addEventListener("focusin", function () { paused = true; });
  slider.addEventListener("focusout", function () { paused = false; });

  markCurrent(0);
  if (!reduceMotion && slides.length > 1) setInterval(tick, 6000);
})();
