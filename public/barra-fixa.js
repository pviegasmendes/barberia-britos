// Booking bar: shown once the hero's booking button has scrolled away,
// hidden again while the closing booking button or the footer is on screen,
// so there is never a second "book" button competing with one already visible.
(function () {
  const barra = document.getElementById("barra-fixa");
  const heroBtn = document.querySelector(".letreiro .btn");
  const fim = document.querySelectorAll(".reservar-fim, .rodape");
  if (!barra || !heroBtn || !("IntersectionObserver" in window)) return;

  let heroVisivel = true;
  const fimVisiveis = new Set();

  const atualizar = () => {
    const mostrar = !heroVisivel && fimVisiveis.size === 0;
    barra.classList.toggle("visivel", mostrar);
  };

  new IntersectionObserver(([e]) => {
    heroVisivel = e.isIntersecting;
    atualizar();
  }).observe(heroBtn);

  const obsFim = new IntersectionObserver(entradas => {
    for (const e of entradas) {
      if (e.isIntersecting) fimVisiveis.add(e.target);
      else fimVisiveis.delete(e.target);
    }
    atualizar();
  });
  fim.forEach(el => obsFim.observe(el));
})();
