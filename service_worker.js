// キャッシュファイルの指定
var CACHE_NAME = 'pwa-caches';
var urlsToCache = [
    '/gotojo.github.io/Guts-Daze',
    '/gotojo.github.io/Guts-Daze/index.html',
    // css
    '/gotojo.github.io/Guts-Daze/css/main.css',
    // js
    '/gotojo.github.io/Guts-Daze/js/clip.js',
    '/gotojo.github.io/Guts-Daze/js/constant.js',
    '/gotojo.github.io/Guts-Daze/js/guts-daze.js',
    '/gotojo.github.io/Guts-Daze/js/init.js',
    '/gotojo.github.io/Guts-Daze/js/panel.js',
    '/gotojo.github.io/Guts-Daze/js/player.js',
    // bootstrap
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.min.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.min.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.css',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.css.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.min.js',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.js',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.js',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.min.js.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.js.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.js.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.js',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.min.js',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.min.js',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.min.js.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.js.map',
    '/gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.min.js.map',
    // particle.js
    '/gotojo.github.io/Guts-Daze/library/js/particles.min.js',
    // jquery
    '/gotojo.github.io/Guts-Daze/library/js/jquery-3.6.3.min.js',
    // canvas-confetti
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/LICENSE',
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/dist',
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/dist/confetti.module.mjs',
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/dist/confetti.browser.js',
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/README.md',
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/package.json',
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/src',
    '/gotojo.github.io/Guts-Daze/library/canvas-confetti/src/confetti.js',
    // howler
    '/gotojo.github.io/Guts-Daze/library/howler/plugins',
    '/gotojo.github.io/Guts-Daze/library/howler/plugins/howler.spatial.js',
    '/gotojo.github.io/Guts-Daze/library/howler/howler.core.js',
    // Media
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
    '/gotojo.github.io/Guts-Daze/Media/bubu.m4a',
    '/gotojo.github.io/Guts-Daze/Media/favicon.ico',
    '/gotojo.github.io/Guts-Daze/Media/guts.png',
    '/gotojo.github.io/Guts-Daze/Media/icons',
    '/gotojo.github.io/Guts-Daze/Media/title.png',
    // Manual
    '/gotojo.github.io/Guts-Daze/Manual/manual.html',
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
