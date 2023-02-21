// キャッシュファイルの指定
var CACHE_NAME = 'pwa-caches';
var urlsToCache = [
    'Guts-Daze/index.html',
    'index.html',
    'index.html',
    // css
    '/Guts-Daze/css/main.css',
    // js
    '/Guts-Daze/js/clip.js',
    '/Guts-Daze/js/constant.js',
    '/Guts-Daze/js/guts-daze.js',
    '/Guts-Daze/js/init.js',
    '/Guts-Daze/js/panel.js',
    '/Guts-Daze/js/player.js',
    // bootstrap
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.min.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.min.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.css',
    '/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.css.map',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.min.js',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.js',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.js',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.min.js.map',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.js.map',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.js.map',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.js',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.min.js',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.min.js',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.min.js.map',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.js.map',
    '/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.min.js.map',
    // particle.js
    '/Guts-Daze/library/js/particles.min.js',
    // jquery
    '/Guts-Daze/library/js/jquery-3.6.3.min.js',
    // canvas-confetti
    '/Guts-Daze/library/canvas-confetti/LICENSE',
    '/Guts-Daze/library/canvas-confetti/dist',
    '/Guts-Daze/library/canvas-confetti/dist/confetti.module.mjs',
    '/Guts-Daze/library/canvas-confetti/dist/confetti.browser.js',
    '/Guts-Daze/library/canvas-confetti/README.md',
    '/Guts-Daze/library/canvas-confetti/package.json',
    '/Guts-Daze/library/canvas-confetti/src',
    '/Guts-Daze/library/canvas-confetti/src/confetti.js',
    // howler
    '/Guts-Daze/library/howler/plugins',
    '/Guts-Daze/library/howler/plugins/howler.spatial.js',
    '/Guts-Daze/library/howler/howler.core.js',
    // Media
    '/Guts-Daze/Media/BridgeBPM105.m4a',
    '/Guts-Daze/Media/BridgeBPM123_5.m4a',
    '/Guts-Daze/Media/EndingBPM105.m4a',
    '/Guts-Daze/Media/EndingBPM123_5.m4a',
    '/Guts-Daze/Media/Guts1BPM105.m4a',
    '/Guts-Daze/Media/Guts1BPM123_5.m4a',
    '/Guts-Daze/Media/Guts2BPM105.m4a',
    '/Guts-Daze/Media/Guts2BPM123_5.m4a',
    '/Guts-Daze/Media/IntroBPM105.m4a',
    '/Guts-Daze/Media/IntroBPM123_5.m4a',
    '/Guts-Daze/Media/MeloBesoBPM105.m4a',
    '/Guts-Daze/Media/MeloBesoBPM123_5.m4a',
    '/Guts-Daze/Media/MeloEndingBPM105.m4a',
    '/Guts-Daze/Media/MeloEndingBPM123_5.m4a',
    '/Guts-Daze/Media/MeloGuts1BPM105.m4a',
    '/Guts-Daze/Media/MeloGuts1BPM123_5.m4a',
    '/Guts-Daze/Media/MeloGuts2BPM105.m4a',
    '/Guts-Daze/Media/MeloGuts2BPM123_5.m4a',
    '/Guts-Daze/Media/bubu.m4a',
    '/Guts-Daze/Media/favicon.ico',
    '/Guts-Daze/Media/guts.png',
    '/Guts-Daze/Media/icons',
    '/Guts-Daze/Media/title.png',
    // Manual
    '/Guts-Daze/Manual/manual.html',
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
