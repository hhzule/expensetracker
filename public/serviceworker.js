const CACHE_NAME = 'version-1';
const urlsToCache = ['index.html', 'offline.html'];

const self = this;

//installation
self.addEventListener('install', (event) => {
event.waitUntill(
    caches.open(CACHE_NAME)
    .then((cache)=>{
        console.log(' open');
        return cache.addAll(urlsToCache);
    })
    )
});

//listen for request
self.addEventListener('fetch', (event) => {
        event.respondWith(
            caches.match(event.request)
            .then(() => {
               return fetch(event.request) 
               .catch(()=> caches.match('offline.html'))
            })
        )
});

//activate SW
self.addEventListener('activate', (event) => {
        const cacheWhiteList = [];
        cacheWhiteList.push(CACHE_NAME);

        event.waitUntill(
            caches.keys().then((cacheNames)=>Promise.all(
                cacheNames.map((cacheName)=>{
                    if(!cacheWhiteList.included(cacheName)){
                        return caches.delete(cacheName);
                    }
                })

            ) )
        )

});