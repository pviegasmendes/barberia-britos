# Brito's Barbearia — website

One-page website for **Brito's Barbearia** (Barbearia by Diogo Brito), in São Brás de Alportel, Algarve, Portugal.
Built by [Digital Montra](https://digitalmontra.pt/).

Plain static HTML and CSS: no build step, no dependencies. Fonts are self-hosted (`public/fontes/`), so there are no requests to Google.

## Structure

```
public/               What gets published on Netlify
  index.html          Portuguese version (main)
  en/index.html       English version
  estilo.css          Styles shared by both versions (light and dark mode)
  barra-fixa.js       Sticky "Marcar online" (book online) bar shown while scrolling
  fontes/             Self-hosted fonts (OFL licence)
  img/                Photos used on the site (from the Fresha gallery) and the SVG logo
                      (logo-verde.svg for light backgrounds, logo-branco.svg for green/dark)
  404.html            Error page, bilingual
  favicon.svg         Browser tab icon
  robots.txt          Allows indexing of the whole site
  _headers            Netlify headers: caching and security
netlify.toml          Netlify config: which folder gets published
PRODUCT.md            Product brief: audience, purpose, positioning, tone
fotos-sin-usar/       Unused Fresha photos (not published)
seo/                  Private SEO work notes (not published), indexed in seo/index.md:
                      structured-data review, markup/visible-content parity, work log
.claude/              Local preview server config
```

## Run locally

With Python installed, from this folder:

```bash
python -m http.server 5173 -d public
```

Then open <http://localhost:5173> (Portuguese) or <http://localhost:5173/en/> (English).

## Deploy to Netlify

There is no build: Netlify publishes the `public/` folder as is, as set in `netlify.toml`.

**Option A: from Git (recommended).** Push this project to a GitHub, GitLab or Bitbucket repository. In Netlify: *Add new site → Import an existing project* and pick the repository. Netlify reads `netlify.toml` on its own, so *Build command* and *Publish directory* can stay empty. Every push redeploys.

**Option B: drag and drop.** In Netlify: *Add new site → Deploy manually* and drag **the `public/` folder** (not the project folder). Headers still apply, because `_headers` lives inside `public/`.

**Option C: Netlify CLI.**

```bash
npx netlify-cli deploy --prod
```

The first time, it asks you to log in and create or link the site.

**Configuration:**

- `netlify.toml` publishes only `public/`. The README, `PRODUCT.md`, `fotos-sin-usar/`, `seo/` and `.claude/` never reach the server.
- `public/_headers` adds security headers to every page.
- HTML, `estilo.css` and `barra-fixa.js` are revalidated on every visit: after a deploy, nobody sees the new page with old styles.
- Photos and icon are cached for 7 days: if you replace a photo under the same filename, it can take up to a week to show in browsers that already had it. For an immediate change, use a new filename.
- Fonts are cached for a year: they never change.

Netlify serves `404.html` automatically when a URL does not exist.

### Once there is a domain

With the final domain connected in Netlify (*Domain management*), add to both pages:

- `<link rel="canonical">` with the full URL of each version.
- `url` and `image` in the structured-data block (see `seo/schema-review.md`).
- `og:url` and `og:image` with a full URL (e.g. `https://domain.pt/img/foto-1.jpg`), so WhatsApp and social networks show the photo when the link is shared.
- Full URLs in the `<link rel="alternate" hreflang>` tags (they are relative for now).
- A `sitemap.xml` and its `Sitemap:` line in `robots.txt`.

## Design

- **Concept:** a whitewashed Algarve façade. The green border framing the hero is the *barra*, the band painted around doors and windows. The footer is the *rodapé*, the painted strip at the base of the house.
- **Colours** (variables in `public/estilo.css`, under `:root`):

  | Variable | Light | Dark | Use |
  |---|---|---|---|
  | `--fundo` | `#FBFBF8` | `#0E1613` | Background, the white of the lime wash |
  | `--texto` | `#16140F` | `#ECEEE9` | Text |
  | `--marca` | `#134A3B` | `#1F6B54` | Brand green: frame, buttons, footer |
  | `--marca-texto` | `#134A3B` | `#86C9AE` | Brand green when used as text |
  | `--cortica` | `#8A5D3A` | `#D6A57E` | Accent: durations and keyboard focus |

- **Typography:** *Big Shoulders Display* for headings and prices, *Albert Sans* for body text.
- **Dark mode:** automatic, following the visitor's system setting. Colours for both modes are in the `:root` variables of `estilo.css`; the logo switches to the white version.

## Editing content

Every content change must be made in **both versions** (`public/index.html` and `public/en/index.html`).

- **Prices and services:** section `id="precos"`. Each service is a `.servico` block with name, price and duration.
- **Team:** section `id="equipa"`, list `.barbeiros`. The first item (`.fundador`) is shown larger.
- **Opening hours:** must be changed in two places on each page:
  1. the `id="horario"` table. Each row's `data-dias` lists the days it covers (0 = Sunday, 1 = Monday … 6 = Saturday), used to mark "(hoje)" / "(today)";
  2. the `horario` / `hours` object in the `<script>` at the end, which drives the "Aberto agora" / "Open now" notice (always in Lisbon time).
- **Photos:** each photo exists as `.webp` (loaded by modern browsers) and `.jpg` (fallback). Photos 2, 7, 8 and 9 also have 480 px and 800 px versions (`foto-N-480.webp`, `foto-N-800.webp`) for phones, served via `srcset`. If you change a photo, replace all its versions under the same name; the 480/800 versions are generated with the `image-converter` skill (`--widths 480 800`).
- **Structured data (Google):** each page has an `application/ld+json` block in the `<head>` with name, address, phone, opening hours and price range. **If any of those change, update them there too**, in both versions. Details in `seo/schema-review.md` and `seo/entity-parity.md`.
- **Booking link:** points to the shop's Fresha page. If it changes, search for `fresha.com` in both files (it appears several times per page, including the structured data).
- **Review count:** hard-coded as text ("419") in both versions; update it from time to time.

## Data sources

Data collected in October 2026 from:

- **Google Maps:** address, phone, opening hours and map coordinates.
- **Fresha:** services, prices, team, rating (5.0 from 419 reviews), quoted reviews and photos.

## To confirm with the client

- [ ] Permission to use the Fresha gallery photos on the website.
- [ ] Which photos show Inês (`public/img/foto-7.jpg`) and Diogo, the second barber (`public/img/foto-8.jpg`). Diogo Brito (`public/img/foto-6.jpg`) is already confirmed.
- [ ] Final domain (see "Once there is a domain").
- [ ] Original logo file. The one on the site was redrawn from the embroidered version using the Lobster and Oswald fonts (OFL licence): very close, but not identical.
- [ ] Service no. 12 on Fresha, which is not on the website (probably "Corte Degradê + Sobrancelhas").
