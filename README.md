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

- `netlify.toml` publica solo `public/`. README, `fotos-sin-usar/` y `.claude/` no llegan al servidor.
- `public/_headers` añade cabeceras de seguridad en todas las páginas.
- Fotos, CSS e icono en caché durante 7 días. Si reemplazas una foto con el mismo nombre, puede tardar hasta una semana en verse en navegadores que ya la tenían; para un cambio inmediato, usa un nombre de archivo nuevo.

Netlify sirve `404.html` automáticamente cuando una dirección no existe.

### Cuando haya dominio

Con el dominio definitivo conectado en Netlify (*Domain management*), conviene añadir en las dos páginas:

- `<link rel="canonical">` con la URL completa de cada versión.
- `og:url` y `og:image` con URL completa (por ejemplo `https://dominio.pt/img/foto-1.jpg`), para que WhatsApp y las redes muestren la foto al compartir el enlace.
- Las URL completas en los `<link rel="alternate" hreflang>`.
- Un `sitemap.xml` y su línea `Sitemap:` en `robots.txt`.

## Diseño

- **Concepto:** una fachada encalada del Algarve. El borde verde que enmarca la portada es la *barra* pintada alrededor de puertas y ventanas. El pie de página es el *rodapé*, la franja pintada de la base de la casa.
- **Colores** (variables en `public/estilo.css`, dentro de `:root`):

  | Variable | Color | Uso |
  |---|---|---|
  | `--cal` | `#FBFBF8` | Fondo, el blanco de la cal |
  | `--barra` | `#134A3B` | Verde de marca (la pared del local) |
  | `--tinta` | `#16140F` | Texto |
  | `--cortica` | `#9A6B45` | Acento: duraciones y foco del teclado |

- **Tipografía:** *Big Shoulders Display* para rótulos y precios, *Albert Sans* para el texto.
- **Modo oscuro:** automático según el sistema del visitante. Los colores de los dos modos están en las variables de `:root` de `estilo.css`; el logo cambia a la versión blanca.

## Editar contenido

Cualquier cambio de contenido hay que hacerlo en **las dos versiones** (`public/index.html` y `public/en/index.html`).

- **Precios y servicios:** sección `id="precos"`. Cada servicio es un bloque `.servico` con nombre, precio y duración.
- **Equipo:** sección `id="equipa"`, lista `.barbeiros`. El primer elemento (`.fundador`) se muestra más grande.
- **Horario:** hay que cambiarlo en dos sitios de cada página:
  1. la tabla `id="horario"`. Cada fila lleva en `data-dias` los días que cubre (0 = domingo, 1 = lunes … 6 = sábado), para marcar "(hoje)";
  2. el objeto `horario` / `hours` del `<script>` al final, que calcula el aviso "Aberto agora" / "Open now" (siempre en hora de Lisboa).
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
