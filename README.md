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
- **🪄 Quitar fondo automático** vía remove.bg (API key propia, 50 imágenes/mes gratis)
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
- Para quitar fondos automáticamente se necesita una API key gratuita de [remove.bg/api](https://www.remove.bg/api)
