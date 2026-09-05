# TiendaMax Promo — v6.2 "TARJETAS"

Nueva versión del generador con **tarjetas del diseño encendibles/apagables**, **presets por plataforma** y utilidades pensadas para publicar en **Revolico, Facebook y WhatsApp**.

---

## 🧩 1. Panel "Tarjetas del diseño"

Nuevo panel en la columna de diseño, encima del lienzo. Cada elemento de la foto tiene su propio interruptor:

| Interruptor | Qué quita de la foto |
|---|---|
| 🏷️ Logo | El logo/marca "TiendaMax" de la esquina |
| 📁 Categoría | La pastilla con la categoría (UTILES, ENERGÍA…) |
| 🎖️ Cinta superior | "OFERTA DEL DÍA", badge "NUEVO/ÚLTIMAS", franja de cuenta atrás |
| 💰 Precio | El precio grande (útil cuando la plataforma ya muestra el precio) |
| 💵 Precio anterior | El precio tachado "Antes $XX" |
| 🔥 Ahorro/−% | El badge de descuento y la pastilla "Ahorras $X" |
| ⏳ Quedan pocas | El aviso "🔥 ÚLTIMAS X UNIDADES" |
| 📋 Specs | Los chips de especificaciones técnicas |
| ✅ Sellos | "Pago al recibir / Domicilio / Garantía" |
| 🟢 Botón WhatsApp | El botón verde "Escribe KEYWORD al WhatsApp" |
| 🌐 Pie web | El pie "pídelo en tiendamax.org" |
| 🟡 Nota | La cinta amarilla de nota destacada |
| 🇨🇺 Equiv. MN | La línea "≈ XXXX MN" (equivale en CUP) |
| 🔳 QR | Gate adicional del QR (junto al checkbox de siempre) |
| 💧 Marca de agua | Gate adicional de la marca de agua con tu número |
| 🖼️ Marco | El marco de luz decorativo |

### Reacomodo automático
Al apagar una tarjeta, **lo demás se reacomoda solo**: la foto crece, el nombre sube y no quedan huecos vacíos. Probado en los estilos Vitrina, Oferta, Story, Flotante, Claro, Reseña, Escena, Urgencia, Galería y Combos.

### Dónde se guardan los cambios
Selector de alcance dentro del panel:
- **Todos los estilos** (por defecto): la config manda en todo y limpia excepciones sueltas.
- **Solo este estilo**: excepción para el estilo actual (ej: sin precio solo en Urgencia).
- **Solo este producto**: excepción para el producto seleccionado.

Todo queda en `localStorage` (`tmgen_tarjetas_global`, `tmgen_tarjetas_estilos`, `tmgen_tarjetas_prod`) — se respeta al recargar la app. Botones rápidos "✅ Activar todas" y "⬜ Quitar todas".

---

## 🎯 2. Presets por plataforma (1 click)

| Preset | Qué hace |
|---|---|
| 🏠 **Revolico** | Estilo Vitrina, **sin precio ni QR ni botones de confianza** (el anuncio de Revolico ya muestra el precio), texto grande, con marca de agua y nota. La foto aguanta la compresión de Revolico. |
| 📘 **Facebook** | Diseño completo: todas las tarjetas encendidas, con QR. |
| 🟢 **WA Estado** | Estilo Claro (1080×1920), marca de agua con tu número, sin QR, sin nota (para no tapar la zona segura). |
| 👥 **WA Grupos** | Cuadrado 1080×1080 estilo Vitrina, todo visible, sin QR, con marca de agua. |

Los presets escriben la configuración global (puedes retocar cualquier interruptor después).

---

## 📦 3. ZIP para las 3 plataformas

Botón **"📦 Generar ZIP para las 3 plataformas"**: con un producto seleccionado genera:

```
tiendamax-{producto}-plataformas.zip
├── revolico/    tiendamax-...-revolico.jpg + caption.txt
├── facebook/    tiendamax-...-facebook.jpg + caption.txt
└── whatsapp/    tiendamax-...-whatsapp.jpg  + caption.txt
```

- Cada foto sale con **su mejor configuración** (la del preset) y en JPG comprimido **por debajo de 300 KB**.
- Cada `caption.txt` trae el texto listo para pegar según la plataforma (usa tus plantillas de caption).
- Al terminar, la app **restaura exactamente** tu estilo, tu QR y tus tarjetas como estaban.

---

## ➕ 4. Otras mejoras

- **⬇️ JPG liviano** (botón junto a PNG): exporta la foto actual en JPG ≤ 300 KB, directo para Revolico.
- **🔳 QR apunta a…** (selector bajo el checkbox de QR):
  - *Ficha del producto en tiendamax.org* (como siempre), o
  - *WhatsApp directo con el texto ya escrito*: el QR abre wa.me con "Hola, quiero: {producto}" prellenado.
- **📐 Guías de zona segura**: con estilos verticales (1080×1920) marca las franjas que WhatsApp tapa arriba (~12%) y abajo (~15%). **Solo se ven en pantalla — jamás salen en la foto exportada.**
- Las miniaturas de vista previa de estilos ahora respetan la configuración de tarjetas de **cada** estilo.
- Service worker: caché subida a `tmgen-v8` para que la PWA traiga esta versión.
- Versión mostrada: **v6.2 TARJETAS • Interruptores + Presets por plataforma**.

---

## 🔧 Notas técnicas (por si quieres retocar)

- Motor de tarjetas: bloque `TARJETAS DEL DISEÑO` en `index.html` (funciones `tarjetasEfectivas`, `tarjetaOn`, `ponerTarjeta`, `renderTarjetas`).
- Presets: objeto `PRESETS_PLAT` + función `aplicarPreset`. Edítalo para cambiar qué enciende cada plataforma.
- ZIP por plataformas: `generarZipPlataformas()`; compresión: `jpgLiviano(cv, 300*1024)`.
- Los 10 dibujos de estilo (`dVitrina`, `dOferta`, `dStory`, `dFlotante`, `dClaro`, `dResena`, `dEscenaResto`, `dCombo`, `dUrgencia`, `dGaleria`) ahora usan `const C = tarjetaOn` y apilan desde abajo: `if(C("precio"))…`.
- Preferencias nuevas: `tmgen_tarjetas_global`, `tmgen_tarjetas_estilos`, `tmgen_tarjetas_prod`, `tmgen_qr_modo`, `tmgen_guias_zona`.

## ✅ Qué se probó

- Los 9 estilos + combo dibujan sin errores (Chrome headless, con catálogo real de 70 productos).
- Interruptores: encender/apagar persiste y redibuja; alcances global/estilo/producto guardan y limpian bien.
- Presets aplican configuración + estilo + QR + marca de agua correctos.
- ZIP generado con las 3 carpetas: JPG de 158/181/246 KB (todos ≤ 300 KB) y captions reales.
- Guías visibles solo en 1080×1920 y fuera de la exportación.
- QR WhatsApp prellenado verificado.
