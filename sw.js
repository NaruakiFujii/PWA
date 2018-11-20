var CACHE_NAME = 'cache-v1';
var urlsToCache = [
	'/PWA',
	'/PWA/manifest.json',
	'/PWA/index.html',
	'/PWA/js/index.js',
	'https://code.jquery.com/jquery-3.3.1.min.js'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request)
			.then(function(response) {
			// キャッシュがあったのでそのレスポンスを返す
			if (response) {
				return response;
			}
			return fetch(event.request);
		})
	);
});
