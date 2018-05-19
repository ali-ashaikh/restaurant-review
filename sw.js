importScripts('/cache-resturants.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('/cache-resturants.js').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html',
       '/resturants.html',
       '/css/styles.css',
       '/data/resturants.json',
       '/img/1.jpg',
       '/img/2.jpg',
       '/img/3.jpg',
       '/img/4.jpg',
       '/img/5.jpg',
       '/img/6.jpg',
       '/img/7.jpg',
       '/img/8.jpg',
       '/img/9.jpg',
       '/img/10.jpg',
       '/js/dbhelper.js',
       '/js/main.js',
       'js/resturant_info.js',
     ]);
   })
 );
});


self.addEventListener('activate',  function(e) {
  e.waitUntil(self.clients.claim());
});


self.addEventListener('fetch', function(e) {

  console.log(e.request.url);

  e.respondWith(

    caches.match(e.request).then(function(response) {

      return response || fetch(e.request);

    })

    );

});