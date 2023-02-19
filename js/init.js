// init.js
// Copyright (c) 2023 Yoshida, gotojo All Right Reserved.

$(() => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    const panel = new Panel();
    Window.Panel = panel;
    const app = new GutsDaze();
    app.setup();
    Window.App = app;
    panel.setup();
    panel.update();
});
