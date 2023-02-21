// キャッシュファイルの指定
var CACHE_NAME = 'pwa-caches';
var urlsToCache = [
    '/gotojo.github.io/Guts-Daze',
    '/gotojo.github.io/Guts-Daze/Media/BridgeBPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/BridgeBPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/EndingBPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/EndingBPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/Guts1BPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/Guts1BPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/Guts2BPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/Guts2BPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/IntroBPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/IntroBPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloBesoBPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloBesoBPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloEndingBPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloEndingBPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloGuts1BPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloGuts1BPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloGuts2BPM105.m4a',
    '/gotojo.github.io/Guts-Daze/Media/MeloGuts2BPM123_5.m4a',
    '/gotojo.github.io/Guts-Daze/Media/bubu.m4a'
];

// インストール処理
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches
            .open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(urlsToCache);
            })
    );
});

// リソースフェッチ時のキャッシュロード処理
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches
            .match(event.request)
            .then(function(response) {
                return response ? response : fetch(event.request);
            })
    );
});
