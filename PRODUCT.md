# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

People looking for a barber in São Brás de Alportel (Algarve, Portugal), usually on a phone, deciding whether to book and when. Two real groups:

- Portuguese residents of São Brás and nearby towns.
- Foreign residents and visitors in the Algarve, who read the English version.

Their job: check what Brito's does and what it costs, see who will cut their hair, see if the shop is open, and book.

## Product Purpose

The website of Brito's Barbearia, a three-barber shop founded by Diogo Brito. Success means the visitor books online through Fresha. Phone calls and Google Maps directions are secondary paths.

The site is built and maintained by Digital Montra (digitalmontra.pt) for the client, Diogo Brito.

## Positioning

A real neighbourhood barbershop in São Brás de Alportel with a 5.0 rating from 419 reviews on Fresha. Clients praise the fade (degradê) most. Every beard service includes a hot-towel treatment (barboterapia). The relaxed atmosphere is part of the offer, and dogs are welcome.

## Operating Context

- **Bookings:** all bookings go through Fresha (https://www.fresha.com/a/britos-barbearia-sao-bras-de-alportel-sao-bras-de-alportel-rua-jornal-o-sambrazense-u63k7c5z). The site links out to it; it does not take bookings itself. On Fresha the client picks the service, the barber and the time, and the booking is confirmed straight away.
- **Address:** Rua Jornal O Sambrazense 20, Edifício Flórida, 8150-101 São Brás de Alportel.
- **Phone:** +351 289 841 568.
- **Hours:** Monday to Friday 9:00–13:00 and 14:00–20:00, Saturday 9:00–13:00, closed Sunday. Always Lisbon time.
- **Facilities:** parking nearby, wheelchair accessible, pets welcome.

## Capabilities and Constraints

- Static site in Portuguese (`public/index.html`, the main version) and English (`public/en/index.html`), sharing `public/estilo.css`. Every content change must be made in both languages.
- Deployed on Netlify from the GitHub repo `pviegasmendes/barberia-britos`. Netlify publishes only `public/`.
- **Services and prices** (source: Fresha, October 2026):
  - Cortes: degradê 14 €, tesoura 14 €, simples 10 €.
  - Barba e sobrancelhas: barba 10 €, sobrancelhas 6 €.
  - Combos: degradê + barba 22 €, simples + barba 17 €, degradê + barba + sobrancelhas 28 €, simples + barba + sobrancelhas 23 €, tesoura + sobrancelhas 20 €, simples + sobrancelhas 16 €.
- **Undecided:**
  - Fresha lists 12 services; the site shows 11. The missing one has not been confirmed.
  - No final domain yet. Canonical URLs, absolute `og:image` and the sitemap wait for it.

## Brand Commitments

- **Name:** Brito's Barbearia. The full mark on the uniforms reads "Brito's — Barbearia by Diogo Brito". In English the page title uses "Brito's Barbershop"; the mark stays "Barbearia by Diogo Brito".
- **Brand assets in the shop:** a white script "Brito's" logo, a deep bottle-green wall, black uniforms and brown leather aprons.
- **Logo files:** no original artwork has been supplied. `public/img/logo-verde.svg` and `public/img/logo-branco.svg` are a vector redraw made from the embroidered logo: the script is the Lobster font and the banner text is Oswald, both OFL. It is a close approximation, not the original; replace it if the client provides the source file.
- **Voice in Portuguese:** informal "tu", as in the shop's own Fresha text ("Marca a tua sessão"). Plain, warm and direct.
- **Voice in English:** plain and friendly, written for residents and visitors rather than translated word for word.
- **Credit:** the footer credits "Site criado por Digital Montra" / "Website by Digital Montra", linking to https://digitalmontra.pt/.

## Evidence on Hand

- **Rating:** 5.0 from 419 Fresha reviews (October 2026). The count is written by hand in both pages and must be refreshed periodically.
- **Real reviews quoted:**
  - João C.: "Excelente serviço, grande profissionalismo e atenção ao detalhe. O Diogo nunca desilude."
  - Zé P.: "Obrigado por mais um serviço espectacular."
  - Thomas I.: "Very good manners, very pleasant all round."
- **Photos from the shop's Fresha gallery:**
  - In use, in `public/img/`: foto-1 (whole team at work), foto-2 (hot towel), foto-6 (Diogo Brito, confirmed), foto-7 (Inês, assumed), foto-8 (second Diogo, assumed), foto-9 (fresh fade).
  - Unused, in `fotos-sin-usar/`: foto-3 (embroidered logo), foto-4, foto-5 (shaving brush).
  - Permission from the client to use them on the website is still pending.
- **Team:** Diogo Brito (barber and founder), Inês (barber), Diogo (barber).
- **Must not be fabricated:** reviews, awards, years in business, extra services, prices or team members. Anything not listed here needs confirmation from the client.

## Product Principles

1. **Booking first.** Every section should leave the visitor one step from booking on Fresha, wherever they stop scrolling.
2. **Real over generic.** Use the shop's own photos, prices, names and reviews; never stock imagery or invented claims.
3. **Two audiences, one shop.** Portuguese and English carry the same facts and the same weight; neither is a lesser copy.
4. **Local truth.** Hours, opening status and directions must match reality in Lisbon time, because people act on them immediately.
5. **Easy to maintain.** Digital Montra keeps the site by hand, so content stays simple to find and edit in both files.
