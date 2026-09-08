self.addEventListener('install', function(event){
  self.skipWaiting();
});
self.addEventListener('activate', function(event){
  self.clients.claim();
});
self.addEventListener('fetch', function(event){
  event.respondWith(
    fetch(event.request, {cache:'no-store'}).catch(function(){
      return new Response('Estás sin conexión.', {status: 503, statusText: 'offline'});
    })
  );
});
