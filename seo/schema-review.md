# Revisión de datos estructurados: Brito's Barbearia

- **Estado:** completado en local (pendiente de despliegue y de la prueba de Google)
- **Fecha de la evidencia:** 2026-10-15
- **Alcance:** `public/index.html` (pt-PT) y `public/en/index.html` (en). Una sola entidad: la barbería.
- **Responsable:** Digital Montra
- **Siguiente destino:** probar la URL publicada en la prueba de resultados enriquecidos de Google y en validator.schema.org; añadir `url` e `image` cuando haya dominio.

## Inventario previo

Antes de este cambio las dos páginas no tenían JSON-LD, Microdata ni RDFa. No había grafos duplicados ni en conflicto.

## Qué se implementó

Un bloque `<script type="application/ld+json">` estático en el `<head>` de cada página, idéntico en los dos idiomas porque describe la misma entidad. No se inyecta con JavaScript, así que el rastreador lo ve sin ejecutar código.

- **Tipo:** `HairSalon`. Schema.org v30.1 (2026-09-16) **no tiene tipo `BarberShop`**; los subtipos de `HealthAndBeautyBusiness` son BeautySalon, DaySpa, HairSalon, HealthClub, NailSalon y TattooParlor. `HairSalon` es el más preciso para una barbería.
- **Propiedades:** `name`, `alternateName`, `address` (PostalAddress), `geo`, `telephone`, `openingHoursSpecification` (3 franjas), `priceRange`, `founder` y `sameAs`.

## Validación en tres partes (resultados por separado)

| Comprobación | Resultado | Método |
|---|---|---|
| 1. Sintaxis y vocabulario | **Pasa.** El JSON se parsea; todos los tipos y propiedades existen en Schema.org para su tipo | Página servida en local, parseada en el navegador; cada propiedad comprobada contra schema.org/{Tipo} |
| 2. Elegibilidad en Google | **Elegible para datos de negocio local**; guía vigente, sin aviso de retirada | Documentación de Google "Local Business (LocalBusiness) Structured Data", actualizada el 2026-09-08 |
| 3. Paridad con el contenido visible | **Pasa: 14/14 en las dos versiones** | Texto visible de la página servida, sin scripts ni texto solo para lectores de pantalla (ver [entity-parity.md](entity-parity.md)) |

"Válido" no significa "se mostrará": Google decide si usa estos datos y cómo. No hay garantía de resultado enriquecido, posición ni tráfico.

El registro de controles de plataforma de la suite (vigente hasta 2026-11-02) no tiene fila para LocalBusiness, así que la fuente es la documentación primaria citada. Su validador automático no se pudo ejecutar porque a la instalación le falta `manifests/artifact-schemas/platform-controls.schema.json`.

## Campos que se dejaron fuera, a propósito

| Campo | Motivo |
|---|---|
| `aggregateRating`, `review` | Google los recomienda **solo para sitios que reseñan a otros negocios**. Marcar la valoración propia (5,0 de Fresha) sería una valoración autopromocional. |
| `url` | Google exige una URL completa y que funcione. Aún no hay dominio definitivo. |
| `image`, `logo` | Requieren URL absoluta; mismo motivo. |
| `hasOfferCatalog` (servicios con precio) | Válido y visible, pero duplicaría los precios en un cuarto sitio que mantener a mano. Opcional más adelante. |
| `potentialAction` (reserva) | Google no lo usa para negocios locales; la reserva va por Fresha. |

## Despliegue y vuelta atrás

- **Despliegue:** el siguiente push a `main` lo publica en Netlify.
- **Prueba tras publicar:** pasar la URL publicada por la prueba de resultados enriquecidos de Google y por validator.schema.org.
- **Vuelta atrás:** borrar el bloque `application/ld+json` de las dos páginas; no afecta a nada más.
- **Mantenimiento:** si cambian el horario, el teléfono, la dirección o los precios extremos, hay que cambiarlos también en este bloque, en las dos páginas.
