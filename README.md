# Brito's Barbearia — sitio web

Web de una página para **Brito's Barbearia** (Barbearia by Diogo Brito), en São Brás de Alportel, Algarve.
Hecha por [Digital Montra](https://digitalmontra.pt/).

Es HTML y CSS estático, sin build ni dependencias. Las fuentes están alojadas en la propia web (`public/fontes/`), sin peticiones a Google.

## Estructura

```
public/               Lo que se publica en Netlify
  index.html          Versión en portugués (principal)
  en/index.html       Versión en inglés
  estilo.css          Estilos compartidos por las dos versiones (modo claro y oscuro)
  barra-fixa.js       Barra de "Marcar online" que aparece al bajar por la página
  fontes/             Tipografías alojadas en la propia web (licencia OFL)
  img/                Fotos usadas en la web (galería de Fresha) y el logo en SVG
                      (logo-verde.svg para fondo claro, logo-branco.svg para fondo verde)
  404.html            Página de error, bilingüe
  favicon.svg         Icono de la pestaña
  robots.txt          Permite indexar todo el sitio
  _headers            Cabeceras de Netlify: caché y seguridad
netlify.toml          Configuración de Netlify: carpeta que se publica
fotos-sin-usar/       Fotos de Fresha que no se usan (no se publican)
seo/                  Notas privadas de SEO: revisión de datos estructurados (no se publican)
.claude/              Configuración del servidor de vista previa local
```

## Ver la web en local

Con Python instalado, desde esta carpeta:

```bash
python -m http.server 5173 -d public
```

Luego abre <http://localhost:5173> (portugués) o <http://localhost:5173/en/> (inglés).

## Publicar en Netlify

No hay build: Netlify publica la carpeta `public/` tal cual, según `netlify.toml`.

**Opción A: desde Git (recomendada).** Sube este proyecto a un repositorio de GitHub, GitLab o Bitbucket. En Netlify: *Add new site → Import an existing project* y elige el repositorio. Netlify lee `netlify.toml` solo, así que no hay que rellenar *Build command* ni *Publish directory*. Cada push vuelve a publicar.

**Opción B: arrastrar y soltar.** En Netlify: *Add new site → Deploy manually* y arrastra **la carpeta `public/`** (no la carpeta del proyecto). Las cabeceras se aplican igual, porque `_headers` va dentro de `public/`.

**Opción C: Netlify CLI.**

```bash
npx netlify-cli deploy --prod
```

La primera vez pide iniciar sesión y crear o enlazar el sitio.

**Configuración:**

- `netlify.toml` publica solo `public/`. README, `fotos-sin-usar/`, `seo/` y `.claude/` no llegan al servidor.
- `public/_headers` añade cabeceras de seguridad en todas las páginas.
- HTML, `estilo.css` y `barra-fixa.js` se revalidan en cada visita: tras publicar, nadie ve la página nueva con estilos viejos.
- Fotos e icono en caché 7 días: si reemplazas una foto con el mismo nombre, puede tardar hasta una semana en verse en navegadores que ya la tenían; para un cambio inmediato, usa un nombre de archivo nuevo.
- Tipografías en caché un año: no cambian.

Netlify sirve `404.html` automáticamente cuando una dirección no existe.

### Cuando haya dominio

Con el dominio definitivo conectado en Netlify (*Domain management*), conviene añadir en las dos páginas:

- `<link rel="canonical">` con la URL completa de cada versión.
- `url` e `image` en el bloque de datos estructurados (ver `seo/schema-review.md`).
- `og:url` y `og:image` con URL completa (por ejemplo `https://dominio.pt/img/foto-1.jpg`), para que WhatsApp y las redes muestren la foto al compartir el enlace.
- Las URL completas en los `<link rel="alternate" hreflang>`.
- Un `sitemap.xml` y su línea `Sitemap:` en `robots.txt`.

## Diseño

- **Concepto:** una fachada encalada del Algarve. El borde verde que enmarca la portada es la *barra* pintada alrededor de puertas y ventanas. El pie de página es el *rodapé*, la franja pintada de la base de la casa.
- **Colores** (variables en `public/estilo.css`, dentro de `:root`):

  | Variable | Claro | Oscuro | Uso |
  |---|---|---|---|
  | `--fundo` | `#FBFBF8` | `#0E1613` | Fondo, el blanco de la cal |
  | `--texto` | `#16140F` | `#ECEEE9` | Texto |
  | `--marca` | `#134A3B` | `#1F6B54` | Verde de marca: marco, botones, pie |
  | `--marca-texto` | `#134A3B` | `#86C9AE` | Verde de marca cuando es texto |
  | `--cortica` | `#8A5D3A` | `#D6A57E` | Acento: duraciones y foco del teclado |

- **Tipografía:** *Big Shoulders Display* para rótulos y precios, *Albert Sans* para el texto.
- **Modo oscuro:** automático según el sistema del visitante. Los colores de los dos modos están en las variables de `:root` de `estilo.css`; el logo cambia a la versión blanca.

## Editar contenido

Cualquier cambio de contenido hay que hacerlo en **las dos versiones** (`public/index.html` y `public/en/index.html`).

- **Precios y servicios:** sección `id="precos"`. Cada servicio es un bloque `.servico` con nombre, precio y duración.
- **Equipo:** sección `id="equipa"`, lista `.barbeiros`. El primer elemento (`.fundador`) se muestra más grande.
- **Horario:** hay que cambiarlo en dos sitios de cada página:
  1. la tabla `id="horario"`. Cada fila lleva en `data-dias` los días que cubre (0 = domingo, 1 = lunes … 6 = sábado), para marcar "(hoje)";
  2. el objeto `horario` / `hours` del `<script>` al final, que calcula el aviso "Aberto agora" / "Open now" (siempre en hora de Lisboa).
- **Fotos:** cada foto existe en `.webp` (la que cargan los navegadores actuales) y `.jpg` (respaldo). Las fotos 2, 7, 8 y 9 tienen además versiones de 480 y 800 px (`foto-N-480.webp`, `foto-N-800.webp`) para móviles. Si cambias una foto, sustituye todas sus versiones con el mismo nombre; las de 480/800 se generan con la skill `image-converter` (`--widths 480 800`).
- **Datos estructurados (Google):** cada página lleva en el `<head>` un bloque `application/ld+json` con nombre, dirección, teléfono, horario y rango de precios. **Si cambia alguno de esos datos, hay que cambiarlo también ahí**, en las dos versiones. Detalle en `seo/schema-review.md`.
- **Enlace de reservas:** apunta a la página de la barbería en Fresha. Si cambia, busca `fresha.com` en ambos archivos.

## Fuentes de los datos

Datos recogidos en octubre de 2026 de:

- **Google Maps:** dirección, teléfono y horario.
- **Fresha:** servicios, precios, equipo, valoración (5,0 con 419 reseñas), reseñas citadas y fotos.

## Pendiente de confirmar con el cliente

- [ ] Permiso para usar las fotos de la galería de Fresha en la web.
- [ ] Qué fotos corresponden a Inês (`public/img/foto-7.jpg`) y a Diogo, el segundo barbero (`public/img/foto-8.jpg`). Diogo Brito (`public/img/foto-6.jpg`) ya está confirmado.
- [ ] Dominio definitivo (ver «Cuando haya dominio»).
- [ ] Archivo original del logo. El de la web está redibujado a partir del bordado, con las fuentes Lobster y Oswald (licencia OFL): se parece mucho, pero no es idéntico.
- [ ] Servicio número 12 de Fresha, que no aparece en la web (probablemente "Corte Degradê + Sobrancelhas").
- [ ] Actualizar el número de reseñas de vez en cuando: está escrito a mano en las dos versiones.
