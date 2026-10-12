// Booking bar: the site's goal is an online booking, so a "book" button must
// always be on screen once the visitor scrolls. The bar shows whenever neither
// of the page's own booking buttons (hero, closing) is visible, and steps aside
// while one of them is, so two identical buttons never compete.
(function () {
  const barra = document.getElementById("barra-fixa");
  const botoes = document.querySelectorAll(".letreiro .btn, .reservar-fim");
  if (!barra || !botoes.length || !("IntersectionObserver" in window)) return;

  const visiveis = new Set();
  const obs = new IntersectionObserver(entradas => {
    for (const e of entradas) {
      if (e.isIntersecting) visiveis.add(e.target);
      else visiveis.delete(e.target);
    }
    barra.classList.toggle("visivel", visiveis.size === 0);
  });
  botoes.forEach(b => obs.observe(b));
})();
