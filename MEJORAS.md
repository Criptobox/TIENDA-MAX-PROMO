# 💡 Mejoras — TiendaMax Generador

Estado de las mejoras. **Ahora con apartado de Guardados v2 sincronizado en tiempo real.**

---

## ✅ NUEVO: Apartado de Guardados con Sincronización Real (v6.0)

### Lo que pediste y ya está hecho:
**Un apartado donde se guarden los productos ya editados que se sincronice con los productos de la tienda en tiempo real para que cuando uno esté agotado no me de opción de publicar. En ese apartado de guardados debe salir con un check para marcar los disponibles y descargar el ZIP con los disponibles solamente.**

#### Implementación:

1. **Sincronización en tiempo real con la tienda:**
   - Cada vez que abres la app, los guardados se cruzan con `tiendamax.org/productos.json` en vivo
   - Auto-sync cada 90 segundos: si un producto se agota mientras tienes la app abierta, se marca al instante como ⛔ Agotado
   - Botón "🔄 Sincronizar ahora" dentro del modal para forzar actualización
   - Indicador visual: punto verde palpitante ● EN VIVO + última hora de sync
   - La barra superior `#edBar` ahora muestra: `🎨 5 guardados · 3 disponibles · 2 agotados` en vivo

2. **No deja publicar agotados:**
   - Tarjetas de agotados con overlay oscuro `⛔ Agotado · No se puede publicar`
   - Botón "Abrir" deshabilitado, sin check, opacidad 55%
   - Toast explicativo si intentas abrirlo: "⛔ Producto agotado — no se puede publicar hasta que vuelva a tener stock"
   - Productos eliminados de la tienda aparecen como "Eliminado de la tienda" en gris
   - Estado del header cambia a `⚠️ X de tus guardados agotados` cuando detecta agotados

3. **Checks para marcar disponibles y ZIP selectivo:**
   - Cada tarjeta disponible tiene un checkbox ☑️ arriba a la izquierda (28px, estilo TiendaMax naranja)
   - Toolbar con:
     - `☑️ Seleccionar disponibles (N)` — selecciona solo los visibles según filtros
     - `◻️ Quitar selección`
     - `⚡ ZIP de seleccionados (X)` — solo aparece si hay selección, descarga solo los marcados
     - `📦 ZIP todos los disponibles (N)` — descarga todos los disponibles sin marcar uno por uno
     - `🗑️ Borrar agotados (N)` — limpia de un toque los que ya no sirven
   - Contador dinámico `#edZipCount` en el botón
   - El ZIP respeta el diseño guardado tal cual lo dejaste (recorte, textos, estilo, sombra, etc.) — no es solo la foto original
   - Muestra preview del lote antes de descargar, puedes quitar los que no te gusten

4. **Filtros y mejoras extra dentro de guardados:**
   - 🔍 Buscar en guardados por nombre
   - 📂 Filtro por categoría (se puebla automático con tus guardados)
   - 📊 Filtro por estado: disponibles, últimas unidades, agotados, eliminados
   - Badge de cambio de precio: si el precio actual de la tienda cambió desde que lo editaste, sale ` $old → $new `
   - Orden: disponibles primero, luego últimas, luego agotados, luego eliminados
   - Miniaturas con estilo, stock, categoría, fecha

---

## ✅ Todo lo que ya estaba funcionando (v5.8)

### 🎨 Mis ediciones — base
Cada vez que tocas algo de un diseño (recorte, tamaño, brillo, textos, color, estilo…) se guarda solo, en el propio teléfono, asociado a ese producto.

### Tabla de mejoras previas

| # | Mejora | Dónde está |
|---|---|---|
| 1 | **Sombra realista** bajo el producto recortado, con interruptor e intensidad | Panel *✨ Extras* |
| 2 | **Recordar ajustes por producto** + sección de editados | Ver arriba |
| 3 | **Recorte de fondos en lote** — toda la categoría o los marcados con ☑️ | Botón *🪄 Quitar fondos en lote* |
| 4 | **Estilo ⏰ Urgencia** — cuenta atrás real, precio anterior tachado y CTA | Estilos |
| 5 | **Marca de agua** con tu WhatsApp sobre la imagen | ⚙️ Ajustes |
| 6 | **Textos libres** — añade frases y **arrástralas** sobre el diseño; tamaño y color | Panel *✨ Extras* |
| 7 | **Colores de campaña** — Black Friday, Navidad, dorado, azul… se aplican a todos los estilos | Panel *✨ Extras* |
| 8 | **Estilo 🖼️ Galería** — hasta 4 fotos del producto en un solo post | Estilos |
| 9 | **Comparar antes / después** con deslizador dentro del estudio de recorte | Botón *👁️ Comparar* |
| 10 | **📊 Estadísticas** — totales, últimos 30 días, racha, por categoría, más publicados y olvidados | ⚙️ Ajustes |
| 11 | **Exportar en WebP o JPG** además de PNG (WebP pesa 60–70 % menos) | ⚙️ Ajustes |
| 12 | **📉 Modo ahorro de datos** — no precarga escenas ni tipografías, menos miniaturas | ⚙️ Ajustes |
| 13 | **Fondos de estudio generados** (estudio, podio, degradado) | Estilo Escena |
| 14 | **🎞️ Video carrusel** de 2 a 5 productos en vertical con transiciones | Panel de compartir |
| 15 | **⏰ Programador** de publicaciones con notificación a la hora elegida | ⚙️ Ajustes |
| 16 | **☀️ Modo claro** para usar la app con sol directo | ⚙️ Ajustes |

Y de la ronda anterior: hoja de ajustes móvil, recorte de fondo local gratis e ilimitado (⚡ Rápido + 🤖 IA), pincel de retoque, vaciado de huecos y recorte de márgenes.

---

## 🔭 Ideas de mejoras futuras (20 ideas priorizadas)

### 🔥 Prioridad alta — ventas directas

1. **Alerta push de agotados en guardados:** Si un producto que tienes guardado se agota, notificación inmediata + email/WhatsApp interno. Evita publicar algo que ya no vendes.

2. **Precios y stock en vivo en el ZIP:** Antes de generar el ZIP, mostrar una tablita con `Precio guardado → Precio actual` y `Stock actual`. Si cambió mucho, sugerir reeditar.

3. **Modo "Solo disponibles" global:** Un switch en el header que oculte en TODA la app (catálogo, combos, plan semanal) los productos que ya tienes guardados como agotados.

4. **Historial de precios por producto guardado:** Gráfica chiquita de cómo ha cambiado el precio del producto desde que lo guardaste. Útil para saber cuándo poner "OFERTA".

5. **Auto-borrado inteligente:** Opción "Borrar agotados automáticamente después de 7 días" para no acumular basura.

### ⚡ Flujo de trabajo

6. **Carpetas / Etiquetas en guardados:** Poder ponerle etiqueta a cada guardado: "Para Facebook", "Ofertas Black Friday", "Revisar foto". Luego filtrar por etiqueta y descargar ZIP por etiqueta.

7. **Duplicar edición:** Botón "Duplicar" para crear 2 versiones del mismo producto (ej: una en estilo Oferta y otra en Story) sin tener que reeditar desde cero.

8. **Plantillas de edición:** Guardar tu configuración (sombra 60%, texto "ENVÍO GRATIS", color dorado) como plantilla y aplicarla con 1 click a cualquier guardado.

9. **Comparador de ediciones:** Ver lado a lado la miniatura guardada vs cómo se ve ahora con el stock/precio actualizado de la tienda.

10. **Exportar guardados como JSON + imágenes:** Para pasar tu trabajo de un teléfono a otro sin perder nada (ya existe respaldo general, pero este sería solo de guardados).

### 📤 Publicación

11. **Cola de publicación con progreso:** En lugar de ZIP, opción "Publicar cola": te va mostrando producto por producto con su caption ya copiado y su imagen lista, vas publicando y marca ✅ automáticamente.

12. **Caption personalizado por guardado:** Guardar un caption distinto por cada producto editado (ej: para uno pones "Ideal para gamers" y se queda guardado solo para ese).

13. **Hashtags inteligentes por guardado:** Sugerir hashtags basados en el nombre del producto + categoría + palabras que más trajeron mensajes según tu historial.

14. **Programar guardados:** Desde el modal de guardados, seleccionar varios y programarlos para distintos días/horas de la semana con 1 click.

15. **Marca de agua dinámica por guardado:** Poder elegir que algunos guardados lleven marca de agua y otros no.

### 📊 Inteligencia

16. **Productos guardados que más se venden:** Cruzar tus guardados con `vendidos.json` y ordenar por "los que más se han vendido esta semana" para priorizar qué publicar.

17. **Detector de productos sin edición:** "Tienes 12 productos nuevos en la tienda que aún no has editado" con botón para editarlos rápido.

18. **Sugerencia de combos desde guardados:** "Estos 3 guardados se compran mucho juntos" (si tuvieras datos de pedidos) — sugerir combo automático.

19. **Modo oscuro para fotos:** Detectar si la foto del producto es muy clara y sugerir automáticamente estilo Claro o ajustar brillo.

20. **Sincronización en la nube opcional:** Backend simple en Cloudflare Workers + KV para que tus ediciones se sincronicen entre teléfono y PC sin perder el modo offline-first.

---

## 📌 Detalles técnicos de la nueva versión

- **IndexedDB v1** sigue siendo la base, ahora guarda también `precioGuardado`, `precioOrigGuardado`, `imagenOriginal`
- **Polling de stock:** `fetch(productos.json)` cada 90s, solo si la app está abierta. No gasta datos casi nada (~30KB por sync)
- **ZIP de guardados:** reutiliza `aplicarEdicionRegistro()` + `dibujar()` + `canvasBlob()` — respeta todo: recorte en base64, textos, sombra, campaña
- **Checks:** `Set<String>` en memoria, se mantiene al filtrar y al re-sincronizar
- **Compatibilidad:** si el producto ya no existe, no se borra automático — se muestra como eliminado para que decidas tú si borrarlo
