# Paridad entre el marcado y lo visible: Brito's Barbearia

- **Estado:** completado en local
- **Fecha de la evidencia:** 2026-10-15
- **Alcance:** bloque JSON-LD de `public/index.html` y `public/en/index.html`
- **Método:** se descargó cada página del servidor local, se quitaron scripts, estilos y el texto solo para lectores de pantalla, y se buscó cada valor del marcado en el texto restante. Resultado: 14/14 en las dos versiones.

## Registro campo por campo

| Ruta en el marcado | Valor | Dónde se ve (o fuente) |
|---|---|---|
| `name` | Brito's Barbearia | Título, logo y rótulo "BRITO'S" + "Barbearia em São Brás de Alportel" |
| `alternateName` | Barbearia by Diogo Brito | Pie de página, las dos versiones |
| `address.streetAddress` | Rua Jornal O Sambrazense, 20, Edifício Flórida | Sección "Como chegar" / "Find us" |
| `address.postalCode` | 8150-101 | Ídem |
| `address.addressLocality` | São Brás de Alportel | Ídem |
| `address.addressRegion` | Algarve | Pie de página ("São Brás de Alportel, Algarve") |
| `address.addressCountry` | PT | "Portugal" en la versión inglesa |
| `geo.latitude` / `geo.longitude` | 37.15465 / -7.88982 | **No visible.** Fuente: ficha de Google Maps del negocio (37.1546478, -7.8898189), recogida en octubre de 2026. Google pide al menos 5 decimales. |
| `telephone` | +351 289 841 568 | "289 841 568" (PT) y "+351 289 841 568" (EN) |
| `openingHoursSpecification[0]` | Lun-Vie 09:00-13:00 | Tabla de horario |
| `openingHoursSpecification[1]` | Lun-Vie 14:00-20:00 | Tabla de horario |
| `openingHoursSpecification[2]` | Sáb 09:00-13:00 | Tabla de horario; domingo "Fechado" (sin franja, como pide el estándar) |
| `priceRange` | 6-28 € | Precio más bajo (Sobrancelhas, 6 €) y más alto (combo de 28 €) de la tabla |
| `founder.name` | Diogo Brito | Equipo: "Diogo Brito, Barbeiro e fundador" |
| `sameAs[0]` | Página de Fresha | Enlaces "Marcar online" |
| `sameAs[1]` | Ficha de Google Maps | Enlace "Abrir no Google Maps" |

## Hechos frente a inferencias

- **Hechos verificados en la página:** todos los valores salvo `geo`.
- **Hecho de fuente externa:** `geo`, de la ficha pública del negocio en Google Maps.
- **Decisión, no hecho:** el tipo `HairSalon` (no existe `BarberShop` en Schema.org) y `addressRegion` = "Algarve" (es lo que dice la página; el distrito oficial, Faro, no aparece).

## Riesgo de desincronización

Los datos del marcado se escriben a mano. Si la barbería cambia horario, teléfono o precios, hay que actualizar la tabla visible **y** este bloque en las dos versiones; si no, el marcado dejaría de coincidir con la página.
