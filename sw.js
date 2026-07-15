const CACHE_NAME = 'aiwebdom-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/main-article.html',
  '/article-1.html',
  '/article-2.html',
  // Добавляй сюда самые популярные статьи по мере роста
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Возвращаем из кэша или грузим из сети
        return response || fetch(event.request);
      })
  );
});
