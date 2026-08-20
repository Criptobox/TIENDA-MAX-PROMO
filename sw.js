/* Service Worker — TiendaMax Generador de Diseños
   Estrategia:
   - App (index.html, íconos): cache-first con actualización en segundo plano
   - Datos de la tienda (productos.json, config.json): red primero, caché de respaldo
   - Imágenes de productos: caché con actualización (stale-while-revalidate)
*/
const CACHE = "tmgen-v7";
const CACHE_IA = "tm-modelos-v1";   /* motor de IA para quitar fondos */
const CDN_IA = ["cdn.jsdelivr.net","unpkg.com","huggingface.co","hf-mirror.com","cdn-lfs.huggingface.co","cdn-lfs-us-1.hf.co"];
const APP_FILES = [
  "./",
  "./index.html",
  "./manifest.json",
  "./icon-192.png",
  "./icon-512.png",
  "./icon-maskable-512.png",
  "./escenas/mesa.jpg",
  "./escenas/sala.jpg",
  "./escenas/taller.jpg",
  "./escenas/gym.jpg",
  "./escenas/escritorio.jpg",
  "./escenas/cocina.jpg",
  "./escenas/calle.jpg"
];

self.addEventListener("install", e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(APP_FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE && k !== CACHE_IA).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET") return;

  /* Motor de IA para quitar fondos (ONNX + wasm): caché permanente.
     Se descarga una sola vez y después funciona sin conexión y sin gastar datos. */
  if (CDN_IA.includes(url.hostname)) {
    e.respondWith(
      caches.open(CACHE_IA).then(c =>
        c.match(e.request).then(hit =>
          hit || fetch(e.request).then(r => {
            if (r && r.ok) c.put(e.request, r.clone());
            return r;
          })
        )
      )
    );
    return;
  }

  /* Datos de la tienda: red primero (siempre frescos), caché si no hay conexión */
  if (url.hostname === "tiendamax.org" && url.pathname.endsWith(".json")) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  /* Imágenes de productos: caché primero, refresco en segundo plano */
  if (url.hostname === "tiendamax.org") {
    e.respondWith(
      caches.match(e.request).then(hit => {
        const red = fetch(e.request)
          .then(r => {
            const copia = r.clone();
            caches.open(CACHE).then(c => c.put(e.request, copia));
            return r;
          })
          .catch(() => hit);
        return hit || red;
      })
    );
    return;
  }

  /* La app misma (index.html): RED PRIMERO para recibir actualizaciones al instante */
  if (url.origin === location.origin && (e.request.mode === "navigate" || url.pathname.endsWith("index.html") || url.pathname.endsWith("/"))) {
    e.respondWith(
      fetch(e.request)
        .then(r => {
          const copia = r.clone();
          caches.open(CACHE).then(c => c.put(e.request, copia));
          return r;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }

  /* Resto de archivos de la app (íconos, manifest): caché primero */
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request))
    );
  }
});
