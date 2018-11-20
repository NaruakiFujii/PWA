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

//動的リクエストcache
//重要：リクエストを clone する。リクエストは Stream なので
//一度しか処理できない。ここではキャッシュ用、fetch 用と2回
//必要なので、リクエストは clone しないといけない
var fetchRequest = event.request.clone();

return fetch(fetchRequest).then(
    function(response) {
    // レスポンスが正しいかをチェック
    if(!response || response.status !== 200 || response.type !== 'basic') {
        return response;
    }

    // 重要：レスポンスを clone する。レスポンスは Stream で
    // ブラウザ用とキャッシュ用の2回必要。なので clone して
    // 2つの Stream があるようにする
    var responseToCache = response.clone();

    caches.open(CACHE_NAME)
        .then(function(cache) {
        	cache.put(event.request, responseToCache);
        });

    return response;
    });
});