# 💡 Sugerencias de mejora — TiendaMax Generador

Lista priorizada por **impacto real en ventas ÷ esfuerzo**. Lo marcado con ✅ ya quedó
hecho en esta versión; el resto son propuestas listas para pedirlas cuando quieras.

---

## ✅ Hecho en esta versión

| # | Mejora | Por qué importa |
|---|---|---|
| ✅ | **Hoja de ajustes móvil** — el lienzo se queda fijo arriba y los controles suben desde abajo | Se acabó el subir-y-bajar: mueves el deslizador y ves el cambio al instante |
| ✅ | **Quitar fondo sin API, gratis e ilimitado** (modo ⚡ Rápido + 🤖 IA local) | remove.bg se quedó sin créditos; ahora no hay clave, ni cuota, ni servidor |
| ✅ | **Pincel de retoque** (borrar / traer) dentro del estudio de recorte | Ninguna IA acierta el 100%: con dos brochazos queda perfecto |
| ✅ | **Vaciado de huecos internos** (asas, aros, espacios entre patas) | Antes quedaba un parche blanco dentro del mango o el mosquetón |
| ✅ | **Recorte automático de márgenes vacíos** | El producto sale hasta un 40 % más grande en el diseño |
| ✅ | **El deslizador de tamaño funciona en TODOS los estilos** (antes solo en Flotante) | Puedes agrandar el producto en Vitrina, Oferta, Story y Claro |
| ✅ | **Barra rápida con iconos + etiqueta** y botón 🎛️ Ajustar | Se toca sin fallar con el dedo |
| ✅ | **Botón ↺ Reiniciar** los ajustes de la foto | Volver atrás sin tener que reelegir el producto |
| ✅ | El motor de IA queda **cacheado por el service worker** | Se baja una sola vez (4,5 MB) y después funciona sin conexión |

---

## 🔥 Prioridad alta — mucho impacto, poco trabajo

1. **Sombra realista bajo el producto recortado.**
   Al quitar el fondo, el producto "flota" sin peso. Generar una elipse difuminada bajo él
   (con opacidad y desplazamiento ajustables) sube muchísimo la calidad percibida.
   *Estimado: pequeño. Todo en canvas, sin dependencias.*

2. **Recordar los ajustes por producto.**
   Hoy, si vuelves a un producto que ya editaste, pierdes el recorte, el tamaño y el brillo.
   Guardar `{escala, brillo, recorte PNG}` en IndexedDB por `id` de producto te evita
   rehacer el trabajo cada semana. *Estimado: mediano.*

3. **Recorte en lote.**
   "Quitar fondo a los 12 productos de esta categoría" y que genere el ZIP con todos los
   Flotantes ya recortados mientras tomas café. El motor ya es local, así que no cuesta dinero.
   *Estimado: mediano.*

4. **Plantilla "precio tachado + cuenta atrás".**
   Diseños con urgencia real (*"solo hasta el domingo"*) convierten notablemente mejor que
   los de catálogo. *Estimado: pequeño.*

5. **Marca de agua opcional con tu WhatsApp.**
   Cuando reenvían tu imagen en grupos, el número viaja con ella.
   *Estimado: pequeño.*

---

## ⚡ Prioridad media

6. **Editor de texto libre sobre el diseño** — arrastrar una frase donde quieras
   (hoy solo hay nombre, precio y nota fija).

7. **Colores por campaña** — un selector para cambiar el acento naranja a rojo (Black Friday),
   verde (Navidad), etc., y que se aplique a todos los estilos.

8. **Multi-foto por producto** — carrusel de 3–4 ángulos en un solo post cuadrado.

9. **Comparativa "antes / después" del recorte** con un deslizador dentro del estudio.

10. **Estadísticas de publicación** — qué categoría publicas más, cuántos días llevas sin
    publicar cada producto, qué palabra clave trajo más pedidos.

11. **Exportar en WebP** además de PNG: pesa 60–70 % menos, importante con datos móviles caros.

12. **Modo ahorro de datos** — no precargar las 7 escenas ni las fuentes hasta que hagan falta.

---

## 🧪 Prioridad baja / exploratorio

13. **Generar el fondo con IA** en lugar de usar las 7 escenas fijas (necesita servicio externo de pago).

14. **Video vertical con varios productos** (tipo carrusel animado de 15 s) para Reels.

15. **Programador de publicaciones** con recordatorio push desde la PWA.

16. **Modo claro** de la interfaz para usarla con sol directo en la calle.

---

## 🔎 Nota técnica: por qué el recorte ya no usa una API

| Opción | Gratis | Ilimitado | Sin clave | Funciona sin datos |
|---|---|---|---|---|
| remove.bg | 50/mes | ❌ | ❌ | ❌ |
| PhotoRoom / Fotor / Pixlr API | 25–40/mes | ❌ | ❌ | ❌ |
| APIs "gratis" de terceros | hasta que cierran | ❌ | a veces | ❌ |
| **Procesar en el teléfono (lo que hace ahora)** | ✅ | ✅ | ✅ | ✅ |

Cualquier API gratuita termina poniendo cuota o cerrando; por eso el recorte se hace **dentro
del navegador**. Dos motores:

- **⚡ Rápido** — análisis del color de fondo + relleno por inundación con borde suave,
  vaciado de huecos y limpieza del halo. **0 bytes de descarga**, ~0,2 s. Perfecto para las
  fotos de catálogo (fondo blanco o liso), que son la mayoría.
- **🤖 IA** — red neuronal **U²-Netp** (Apache-2.0) de 4,5 MB corriendo con ONNX Runtime Web.
  Se descarga una sola vez, queda en caché y después funciona hasta sin conexión.
  Para fotos con fondo real o desordenado.

Se descartó **RMBG-1.4** (mejor calidad) porque su licencia prohíbe el uso comercial, y
**BiRefNet** porque pesa 114 MB — inviable con datos móviles.
