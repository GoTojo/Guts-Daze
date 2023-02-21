// キャッシュファイルの指定
var CACHE_NAME = 'pwa-caches';
var urlsToCache = [
    'https://gotojo.github.io/Guts-Daze',
    'https://gotojo.github.io/Guts-Daze/index.html',
    // css
    'https://gotojo.github.io/Guts-Daze/css/main.css',
    // js
    'https://gotojo.github.io/Guts-Daze/js/clip.js',
    'https://gotojo.github.io/Guts-Daze/js/constant.js',
    'https://gotojo.github.io/Guts-Daze/js/guts-daze.js',
    'https://gotojo.github.io/Guts-Daze/js/init.js',
    'https://gotojo.github.io/Guts-Daze/js/panel.js',
    'https://gotojo.github.io/Guts-Daze/js/player.js',
    // bootstrap
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap.rtl.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-utilities.rtl.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.rtl.min.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.min.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-grid.rtl.css',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/css/bootstrap-reboot.css.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.min.js',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.js',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.js',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.min.js.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.js.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.js.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.js',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.bundle.min.js',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.min.js',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.esm.min.js.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.js.map',
    'https://gotojo.github.io/Guts-Daze/library/bootstrap-5_3_0/js/bootstrap.min.js.map',
    // particle.js
    'https://gotojo.github.io/Guts-Daze/library/js/particles.min.js',
    // jquery
    'https://gotojo.github.io/Guts-Daze/library/js/jquery-3.6.3.min.js',
    // canvas-confetti
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/LICENSE',
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/dist',
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/dist/confetti.module.mjs',
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/dist/confetti.browser.js',
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/README.md',
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/package.json',
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/src',
    'https://gotojo.github.io/Guts-Daze/library/canvas-confetti/src/confetti.js',
    // howler
    'https://gotojo.github.io/Guts-Daze/library/howler/plugins',
    'https://gotojo.github.io/Guts-Daze/library/howler/plugins/howler.spatial.js',
    'https://gotojo.github.io/Guts-Daze/library/howler/howler.core.js',
    // Media
    'https://gotojo.github.io/Guts-Daze/Media/BridgeBPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/BridgeBPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/EndingBPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/EndingBPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/Guts1BPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/Guts1BPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/Guts2BPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/Guts2BPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/IntroBPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/IntroBPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloBesoBPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloBesoBPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloEndingBPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloEndingBPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloGuts1BPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloGuts1BPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloGuts2BPM105.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/MeloGuts2BPM123_5.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/bubu.m4a',
    'https://gotojo.github.io/Guts-Daze/Media/favicon.ico',
    'https://gotojo.github.io/Guts-Daze/Media/guts.png',
    'https://gotojo.github.io/Guts-Daze/Media/icons',
    'https://gotojo.github.io/Guts-Daze/Media/title.png',
    // Manual
    'https://gotojo.github.io/Guts-Daze/Manual/manual.html',


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
