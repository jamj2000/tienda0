//// SERVICE WORKER. Siempre a la escucha en segundo plano,
//// aunque el usuario no esté en la página web.


// Nombre de la caché
const CACHE_NAME = 'tienda0-v1';

// Archivos necesarios para el funcionamiento offline
const CACHE_ASSETS = [
  '/',
  'index.html',
  'app0.html',
  'app1.html',
  'app2.html',
  'css/bootstrap.min.css',
  'css/toastr.css',
  'js/bootstrap.min.js',
  'js/jquery-1.9.1.min.js',
  'js/jquery-migrate-1.2.1.min.js',
  'js/toastr.js'
];

// EventListener para evento 'install'.
// Realizamos el cacheo de la APP SHELL
self.addEventListener('install', function (e) {
  console.log("[Service Worker] * Instalado.");

  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        console.log('[ServiceWorker] Cacheando app shell');
        return cache.addAll(CACHE_ASSETS);
      })
      .then(function () {
        console.log('[ServiceWorker] Todos los recursos han sido cacheados');
        return self.skipWaiting();
      })
  );

});


// EventListener para evento 'activate'.
// Eliminamos cachés antiguas.
self.addEventListener('activate', function (e) {
  console.log("[Service Worker] * Activado.");

  e.waitUntil(
    caches
      .keys()
      .then(function (cacheNames) {
        return Promise.all(
          cacheNames.map(function (cacheName) {
            if (cacheName !== CACHE_NAME) {
              console.log("[Service Worker] Borrando caché antigua: ", cacheName);
              return caches.delete(cacheName);
            }
          })
        )
      })
  );
});


// EventListener para evento 'fetch'.
// ...
self.addEventListener('fetch', function (e) {
  console.log("[Service Worker] * Fetch.");
  e.respondWith( fetch(e.request).catch ( function () { return caches.match(e.request)}) );
});


// EventListener para evento 'push'.
self.addEventListener('push', function (e) {
  // Mantener el service worker a la espera hasta que la notificación sea creada.
  e.waitUntil(
    // Mostrar una notification con título 'Notificación importante' y cuerpo 'Alea iacta est'.
    self.registration.showNotification('Notificación importante', {
      body: 'Alea iacta est',
    })
  );
});