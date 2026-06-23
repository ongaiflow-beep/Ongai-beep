/* OngaiFlow visual guidebook — progressive enhancement only.
   The deck is fully usable (scroll + native anchor links) with JS disabled. */
(function () {
  "use strict";

  var deck   = document.querySelector(".deck");
  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var dots   = Array.prototype.slice.call(document.querySelectorAll(".rail a"));
  var hint   = document.querySelector(".hint");
  if (!deck || !slides.length) return;

  var current = 0;

  /* Highlight the active dot as slides pass the viewport centre. */
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        current = slides.indexOf(e.target);
        dots.forEach(function (d, i) { d.classList.toggle("is-active", i === current); });
      });
    }, { threshold: 0.6 });
    slides.forEach(function (s) { io.observe(s); });
  }

  function go(i) {
    current = Math.max(0, Math.min(slides.length - 1, i));
    slides[current].scrollIntoView({ behavior: "smooth", block: "center" });
  }

  /* Keyboard: arrows / page / home-end to move, P to print. */
  document.addEventListener("keydown", function (e) {
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    switch (e.key) {
      case "ArrowDown": case "PageDown": case " ":
        e.preventDefault(); go(current + 1); break;
      case "ArrowUp": case "PageUp":
        e.preventDefault(); go(current - 1); break;
      case "Home": e.preventDefault(); go(0); break;
      case "End":  e.preventDefault(); go(slides.length - 1); break;
      case "p": case "P": e.preventDefault(); window.print(); break;
    }
  });

  /* Fade the on-screen hint once the reader starts moving. */
  if (hint) {
    var dismiss = function () { hint.style.opacity = "0"; };
    deck.addEventListener("scroll", dismiss, { once: true, passive: true });
    document.addEventListener("keydown", dismiss, { once: true });
  }
})();
