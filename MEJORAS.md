# 💡 Mejoras — TiendaMax Generador

Estado de las 16 sugerencias propuestas. **15 implementadas**, 1 sustituida por una
alternativa gratuita (ver el final).

---

## ✅ Todo lo que ya está funcionando

### 🎨 Mis ediciones — lo que pediste
Cada vez que tocas algo de un diseño (recorte, tamaño, brillo, textos, color, estilo…)
se guarda **solo**, en el propio teléfono, asociado a ese producto.

- Vuelves a tocar el producto y **se abre exactamente como lo dejaste**.
- Chip **✏️ Ya editados** en el catálogo para verlos filtrados.
- Barra **🎨 N diseños guardados** arriba, con botón para abrir la galería.
- Galería con miniatura de cada diseño, el estilo que usaste y botón para borrar.
- Distintivo **✏️ editado** en la tarjeta de cada producto del catálogo.
- Se guarda en IndexedDB: sobrevive a cerrar la app y a quedarte sin conexión.

### El resto

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
| 13 | **Fondos de estudio generados** (ver nota abajo) | Estilo Escena |
| 14 | **🎞️ Video carrusel** de 2 a 5 productos en vertical con transiciones | Panel de compartir |
| 15 | **⏰ Programador** de publicaciones con notificación a la hora elegida | ⚙️ Ajustes |
| 16 | **☀️ Modo claro** para usar la app con sol directo | ⚙️ Ajustes |

Y de la ronda anterior: hoja de ajustes móvil, recorte de fondo local gratis e ilimitado
(⚡ Rápido + 🤖 IA), pincel de retoque, vaciado de huecos y recorte de márgenes.

---

## ⚠️ Nota sobre la #13 (generar el fondo con IA)

Generar fondos fotorrealistas con IA **necesita un servicio de pago** (unos 3–4 ¢ por
imagen) y un servidor con la clave: no se puede hacer gratis ni dentro del navegador con
una calidad decente.

En su lugar añadí **tres fondos generados por código**, gratis e instantáneos, dentro del
estilo Escena:

- **🎬 Estudio** — ciclorama de estudio fotográfico con foco y viñeteado.
- **⬜ Podio** — pedestal oscuro con halo del color de la categoría o de la campaña.
- **🌈 Degradado** — degradado premium con luces suaves.

Se combinan con el producto recortado y la sombra realista, así que el resultado se parece
mucho a una foto de estudio, sin datos ni coste.

---

## 📌 Detalles prácticos

- **El recorte en lote** guarda cada recorte como una edición: después vas a
  *🎨 Mis ediciones* y todos están listos para publicar.
- **Las notificaciones del programador** funcionan con la app abierta o en segundo plano.
  Si el teléfono cierra la app del todo, verás el aviso al volver a abrirla (una PWA en
  GitHub Pages no puede recibir avisos push sin servidor).
- **El modo claro y el ahorro de datos** solo cambian la interfaz: las imágenes que generas
  salen siempre igual.
- **Borrar el motor de IA** desde ⚙️ Ajustes libera unos 5 MB si te hace falta espacio.

---

## 🔭 Ideas para más adelante

1. **Publicación directa** a Facebook/Instagram con la API de Meta (requiere cuenta de
   empresa y aprobación de la app).
2. **Detección automática del mejor encuadre** del producto para recortar el post al vuelo.
3. **A/B de captions**: guardar cuál trajo más mensajes por palabra clave.
4. **Plantillas propias**: que puedas diseñar tu estilo y guardarlo como plantilla.
5. **Sincronizar las ediciones entre teléfono y PC** (necesitaría un pequeño backend).
