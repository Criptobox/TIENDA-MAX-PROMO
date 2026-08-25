# 💡 Mejoras — TiendaMax Generador v6.0 — TODAS IMPLEMENTADAS

**Estado: 20/20 mejoras implementadas + apartado Guardados v2 sincronizado en tiempo real.**

---

## ✅ NUEVO: Apartado de Guardados v2 con Sincronización Real

### Lo que pediste originalmente:
> Un apartado donde se guarden los productos ya editados que se sincronice con los productos de la tienda en tiempo real para que cuando uno esté agotado no me de opción de publicar. En ese apartado de guardados debe salir con un check para marcar los disponibles y descargar el ZIP con los disponibles solamente.

#### Implementación:

1. **Sincronización en tiempo real:**
   - Cruce con `tiendamax.org/productos.json` en vivo al abrir
   - Auto-sync cada 90s, detecta agotados nuevos
   - Botón "🔄 Sincronizar ahora"
   - Indicador ● EN VIVO + última hora
   - Barra superior: `🎨 5 guardados · 3 disponibles · 2 agotados`

2. **No deja publicar agotados:**
   - Overlay oscuro `⛔ Agotado · No se puede publicar`
   - Botón deshabilitado, sin check, opacidad 55%
   - Toast explicativo
   - Productos eliminados en gris

3. **Checks y ZIP selectivo:**
   - Checkbox ☑️ por tarjeta disponible
   - Toolbar: seleccionar visibles, quitar, ZIP sel, ZIP todos, cola, programar, borrar agotados, export JSON, nube
   - ZIP respeta edición exacta (recorte, textos, sombra, estilo)
   - Preview del lote con tabla de precios/stock en vivo

---

## ✅ LAS 20 MEJORAS IMPLEMENTADAS

### 🔥 Prioridad alta — ventas directas

**1. Alerta push de agotados en guardados**
- Función `alertaAgotados()` detecta cuando un producto que tenías disponible se agota entre syncs
- Guarda en `localStorage tm_alertados` para no repetir alerta
- Usa `Notification API` si tienes permiso, si no toast: `⛔ 2 de tus guardados se agotaron: Router, Celular…`
- Se dispara en `iniciarAutoSync()` cada 90s

**2. Precios y stock en vivo en el ZIP**
- `mostrarPreviewLote()` ahora construye `tablaPrecios` mapeando archivos a productos actuales
- Muestra nombre, precio actual, stock, badge "últimas" si stock ≤3
- Antes de descargar ves si algo cambió de precio o se está agotando

**3. Modo "Solo disponibles" global**
- Toggle `#btnSoloDisp` en controles + switch en ⚙️ Ajustes `solo_disponibles`
- `filtrados()` respeta el modo: oculta todo lo que no tenga stock>0
- También oculta agotados en guardados, en barra, en plan semanal
- Guardado en `localStorage`

**4. Historial de precios por producto guardado**
- `registrarHistorialPrecios()` guarda cada cambio de precio/stock en `tm_historial_precios` (max 20 por producto)
- Estructura: `{precio, stock, ts}`
- `abrirHistorialPrecio(pid)` modal con lista cronológica, badges ↗ subió / ↘ bajó
- Botón 📈 Precios en cada tarjeta de guardados
- Detecta diferencia entre `precioGuardado` y actual y muestra badge `$100→$135`

**5. Auto-borrado inteligente**
- Pref `auto_borrar_dias` (0=nunca, 7,15,30) en ⚙️ Ajustes
- `aplicarAutoBorrado()` corre en `edCargarIndice()` y en auto-sync
- Borra guardados con estado agotado/eliminado y `ts < limite`
- Toast `🧹 Auto-borrado: 3 guardados agotados eliminados`

### ⚡ Flujo de trabajo

**6. Carpetas / Etiquetas en guardados**
- Campo `etiquetas: []` en cada registro
- `guardarEtiquetasEnEdicion()` + prompt con coma
- Chips en tarjeta: `#oferta #fb`
- `etiquetasGlobal` Set para filtro
- Filtro por etiqueta (puedes escribir en búsqueda `#etiqueta`)

**7. Duplicar edición**
- `duplicarEdicion(uid)` crea copia con `uid = productoId__dup__timestamp`
- Guarda `productoId` original para seguir sincronizando stock
- Prompt opcional para cambiar estilo al duplicar
- Botón 📋 Duplicar en cada tarjeta

**8. Plantillas de edición**
- `tm_plantillas` en localStorage: guarda estilo, escalas, sombra, textos, campaña, escena
- `guardarPlantillaActual()` prompt nombre
- `aplicarPlantilla(id)` restaura todo y llama `dibujar()`
- Modal `abrirPlantillas()` con lista, aplicar, borrar, guardar actual
- Botón 🎨 Plantillas en controles y en guardados

**9. Comparador de ediciones**
- `compararEdicion(uid)` modal 2 columnas: guardado (miniatura + precio guardado) vs vivo (imagen actual + precio actual + stock)
- Botón 🔄 Actualizar miniatura con precio actual — regenera miniatura sin perder edición
- Botón 🔍 Comparar en cada tarjeta

**10. Exportar guardados como JSON**
- `exportarGuardadosJSON()` exporta `{app, fecha, total, guardados}` con todas las ediciones
- `importarGuardadosJSON(file)` importa y hace `edCargarIndice()`
- Botones 💾 Export JSON / ⬆️ Import JSON en toolbar guardados
- También en ⚙️ Ajustes y en respaldo general (claves incluyen `tm_plantillas`, `tm_historial_precios`, etc.)

### 📤 Publicación

**11. Cola de publicación con progreso**
- `iniciarColaPublicacion(uids)` toma seleccionados con check
- `mostrarPasoCola()` modal inferior fijo con imagen, nombre, caption, progreso `3/10`
- Botones: 📂 Abrir diseño (abre y vuelve a cola), 📋 Copiar caption, ✅ Publicado siguiente, ⏭️ Saltar, ✕ Cerrar
- Llama `registrarPub()` al marcar como publicado
- Botón 📤 Cola publicación en toolbar guardados

**12. Caption personalizado por guardado**
- Campo `captionPersonalizado` en registro
- `editarCaptionPersonalizado(uid)` prompt
- Badge `✏️ caption custom` en tarjeta si existe
- `caption(p)` revisa `window._ultimaListaGuardados` y devuelve custom si existe, si no plantilla global

**13. Hashtags inteligentes por guardado**
- `sugerirHashtagsInteligentes(prod)` combina: hashtags por categoría guardados + palabras del nombre + #MasVendido si ventas>5 + #UltimasUnidades si stock≤3 + #Disponible
- Botón #️⃣ Tags por tarjeta abre modal con hashtags y botón copiar
- `caption()` usa inteligentes si no hay custom de categoría

**14. Programar guardados**
- `programarGuardadosSeleccionados()` toma `guardadosSel` y abre modal con `datetime-local` inicio
- Programa 1 por día a las 10AM desde fecha inicio usando `programarPublicacion()` existente
- Reutiliza `agenda` y `Notification API`
- Botón ⏰ Programar en toolbar guardados

**15. Marca de agua dinámica por guardado**
- Campo `marcaAgua: null|true|false` (null = usar global)
- `toggleMarcaAguaGuardado(uid)` cicla: null → true → false → null
- Badge en tarjeta: 💧 con marca / 🚫 sin marca
- `marcaAgua(ctx,W,H)` revisa edición actual y overridea pref global

### 📊 Inteligencia

**16. Productos guardados que más se venden**
- `ventasDe(pid)` lee `vendidos` (de `vendidos.json`)
- Badge 🏆 X ventas en cada tarjeta si >0
- En `filtrados()` cuando filtro es "editado" y orden "rel", ordena por ventas descendente
- En guardados, los más vendidos aparecen primero (porque `filtrados()` no afecta guardados pero en comparador se ve)

**17. Detector de productos sin edición**
- `verificarSinEdicion()` cuenta `productos.filter(p=> !edIds.has(pid))`
- Si >10 muestra banner `#sinEditarBar` con `🆕 Tienes 23 productos nuevos sin editar` + botón 👀 Ver sin editar + ✕ cerrar
- Al ver sin editar activa `_filtroSinEditar=true` y `render()` muestra solo sin editar
- Guarda `ocultar_sin_editar` timestamp para no molestar 1 día

**18. Sugerencia de combos desde guardados**
- `sugerirCombosGuardados()` toma hasta 12 guardados disponibles
- Agrupa por categoría para combos misma categoría, y mix variado de categorías distintas
- Modal con chips de productos y botón 🎁 Armar este combo
- Activa modo combo y llena `comboSel` con productos reales de la tienda
- Botón 🎁 Combos guardados en controles y en guardados

**19. Modo oscuro para fotos (detectar foto clara)**
- `analizarBrilloImagen(url)` canvas 32x32 + luminancia promedio
- `sugerirEstiloPorBrillo()` si brillo>200 sugiere 🌅 Claro WA o ✨ Flotante
- Inserta `#brilloSug` en panel estilo con botón "Usar Claro"
- Se llama en `seleccionar()` y en `init()`

**20. Sincronización en la nube opcional**
- Pref `cloud_sync_url` en ⚙️ Ajustes (ej: `https://tu-worker.workers.dev/sync`)
- `cloudExport()` POST guardados a URL
- `cloudImport()` GET ?t=timestamp y guarda
- Botones ☁️ Subir nube / ☁️ Bajar nube en toolbar guardados y en ajustes
- Si no hay URL, toast "Configura URL en ⚙️"
- Compatible con Cloudflare Workers + KV, Supabase, o cualquier endpoint JSON

---

## 📌 Detalles técnicos v6

- **IDB v2:** store `ed_v2` con `keyPath uid`, índices `productoId` y `ts`. Migración automática desde `ed` v1
- **Campos nuevos por guardado:** `uid`, `productoId`, `etiquetas[]`, `captionPersonalizado`, `marcaAgua`, `precioGuardado`, `precioOrigGuardado`, `imagenOriginal`
- **Nuevos prefs:** `solo_disponibles`, `auto_borrar_dias`, `tm_plantillas`, `tm_historial_precios`, `cloud_sync_url`, `tm_alertados`, `ocultar_sin_editar`
- **Funciones nuevas:** 20+ (ver arriba)
- **Auto-sync:** 90s, incluye historial precios, alerta agotados, verificar sin edición, refrescar modal guardados manteniendo selección
- **Compatibilidad:** duplicados usan `__dup__timestamp`, `getProductoIdDeUid()` los resuelve

---

## 🚀 Cómo probar todo

1. Edita 3 productos (cambia tamaño, añade texto) — aparecen en guardados
2. Pon etiquetas "oferta, fb" a uno
3. Marca 2 con ☑️ y dale ZIP sel — solo esos 2
4. Deja uno agotarse en la tienda (simula quitándolo de productos.json) — en guardados sale ⛔ sin publicar
5. Prueba Plantillas → Guardar actual → Aplicar a otro producto
6. Duplicar → cambia estilo
7. Comparar → ver precio guardado vs actual
8. Historial precios → ver evolución
9. Cola publicación → publicar uno por uno
10. Programar guardados → agenda 1 por día
11. Export JSON → Import en otro navegador
12. Solo disponibles toggle → oculta agotados
13. Auto-borrar 7 días → borra viejos agotados
14. Sugerir combos → arma combo desde guardados
15. Foto clara → sugerencia Claro WA
16. Nube → pon URL y sube/baja
