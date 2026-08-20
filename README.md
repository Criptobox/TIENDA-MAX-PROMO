# 🛍️ TiendaMax — Generador de Diseños para Redes

Generador de imágenes y videos promocionales conectado en vivo al catálogo de [tiendamax.org](https://tiendamax.org). Instalable como aplicación (PWA) en el teléfono.

## ✨ Funciones

- **Catálogo en vivo**: carga los productos, precios, specs y stock directamente de `tiendamax.org/productos.json` — solo muestra productos con stock
- **5 estilos de diseño**: Vitrina (1080×1080), Oferta del día, Story (1080×1920), Flotante PNG sin fondo (1080×1350) y Claro para estados de WhatsApp (1080×1920)
- **🎬 Video animado de 6 s** para Reels/Stories con entrada cinematográfica, barrido de brillo y pulso del botón
- **🎁 Generador de combos** de 2-3 productos con cálculo de ahorro y fotos sin fondo opcionales
- **📅 Plan semanal**: elige 7 productos variados automáticamente y genera ZIP con guía de publicación
- **⚡ Generación por lotes**: toda una categoría o selección múltiple con checkboxes → ZIP
- **🔳 Código QR** de cada producto apuntando a la tienda
- **🪄 Quitar fondo GRATIS e ILIMITADO** — se procesa dentro del propio teléfono, sin clave API y sin cuota mensual. Dos motores: **⚡ Rápido** (instantáneo, 0 datos) y **🤖 IA** (red U²-Netp de 4,5 MB que se descarga una sola vez), más **pincel de retoque** para dejarlo perfecto
- **🎨 Mis ediciones**: cada diseño que tocas se guarda solo en el teléfono y el producto vuelve a abrirse exactamente como lo dejaste — con su recorte, tamaño, brillo, textos y estilo. Chip “✏️ Ya editados” y galería con miniaturas
- **🌑 Sombra realista** bajo el producto recortado, **✍️ textos libres arrastrables**, **🎨 colores de campaña** (Black Friday, Navidad, dorado…) y **marca de agua** con tu WhatsApp
- **⏰ Estilo Urgencia** con cuenta atrás real y precio anterior tachado · **🖼️ Estilo Galería** con hasta 4 fotos
- **🪄 Recorte de fondos en lote** para toda una categoría, y **🎬 fondos de estudio generados** (estudio, podio, degradado)
- **🎞️ Video carrusel** de 2 a 5 productos · **📊 Estadísticas** de publicación · **⏰ Programador** con avisos
- **⚙️ Ajustes**: modo claro, ahorro de datos y exportación en PNG / WebP / JPG
- **📱 Hoja de ajustes móvil** — el diseño queda fijo arriba y los controles (tamaño, brillo, quitar fondo, estilo) suben desde abajo: se edita viendo el resultado, sin subir y bajar la pantalla
- **📤 Registro de publicaciones**: marca qué producto publicaste y cuándo; orden "sin publicar primero"
- **🗓️ Historial visual**: galería de todo lo publicado agrupado por día — toca cualquiera para republicarlo
- **⭐ Estilo Reseña**: convierte las opiniones reales de clientes (de la web) en tarjetas con estrellas doradas, compra verificada y el producto comprado
- **🆕 Detector de novedades**: al abrir la app avisa qué productos se añadieron a la tienda desde tu última visita
- **📋 Plantillas de caption** idénticas a las del generador interno de la tienda (Facebook, oferta, Revolico, estado de WhatsApp) con hashtags
- **Identidad de marca completa**: logo oficial, tipografía Poppins, paleta de colores por categoría, precios en degradado naranja→dorado

## 🚀 Publicar en GitHub Pages

1. Crea un repositorio en GitHub (por ejemplo `tiendamax-disenos`)
2. Sube todos los archivos de esta carpeta a la rama `main`
3. Ve a **Settings → Pages → Source**: elige `Deploy from a branch`, rama `main`, carpeta `/ (root)` y guarda
4. En 1-2 minutos tu app estará en: `https://TU-USUARIO.github.io/tiendamax-disenos/`

## 📱 Instalar como app en el teléfono

1. Abre la URL de GitHub Pages en Chrome/Opera/Edge del teléfono
2. Aparecerá el aviso **"Añadir a pantalla de inicio"** (o Menú ⋮ → *Instalar aplicación*)
3. Se instala con su ícono, abre a pantalla completa y guarda caché para funcionar aun con mala conexión

## 📁 Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La aplicación completa (autónoma) |
| `manifest.json` | Configuración de la PWA (nombre, íconos, colores) |
| `sw.js` | Service worker: caché offline y datos frescos |
| `icon-192.png` / `icon-512.png` / `icon-maskable-512.png` | Íconos de la app |

## ⚙️ Notas técnicas

- Los datos vienen de `tiendamax.org` con CORS abierto — no necesita servidor propio ni claves
- Todo se genera en el navegador (canvas): no se sube nada a ningún servidor
- El registro de publicaciones y las preferencias se guardan en `localStorage` del dispositivo
- Quitar el fondo **no necesita ninguna clave ni conexión a un servicio**: todo se calcula en el navegador. El modelo de IA (4,5 MB, licencia Apache-2.0) se descarga una única vez desde Hugging Face y queda en caché
- remove.bg sigue disponible como opción avanzada dentro del estudio de recorte, para quien tenga clave propia
- Consulta [`MEJORAS.md`](MEJORAS.md) para la lista de mejoras propuestas
