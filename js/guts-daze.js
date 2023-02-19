// guts-daze.js
// Copyright (c) 2023 Yoshida, gotojo All Right Reserved.

class GutsDaze {
    constructor() {
        console.log('GutsDaze');
        this.level = 'easy';
        this.melody = false;
        this.guts_count = 0;
    }
    
    setup() {
        this.player = new Player;
        this.player.setup();
        this.player.set_cb_guts_end(this.guts_end);
        this.player.set_melody(this.melody);
        this.bubu = new Clip(CLIP.BUBU);
    }

    set_level(level) {
        if (level !== LEVEL.EASY && level !== LEVEL.PRO) return;
        this.level = level;
        this.player.set_level(level);
        Window.Panel.update();
    }
    
    is_easy_level() {
        return this.level === LEVEL.EASY;
    }

    toggle_melody() {
        this.melody = !this.melody;
        this.player.set_melody(this.melody);
        Window.Panel.update();
    }
    intro_start() {
        this.player.intro_start();
    }
    ending() {
        this.player.ending();
    }
    stop() {
        this.player.stop();
    }
    guts() {
        if (!this.player.playing) return;
        if (this.guts_count < MAX_GUTS) {
            this.guts_count++;
            if (this.guts_count >= MAX_GUTS) {
                this.player.guts();
                Window.Panel.guts_anim();
            } 
            Window.Panel.update();
        }
    }
    guts_reset() {
        this.guts_count = 0;
        Window.Panel.update();
    }
    guts_end() {
        Window.App.guts_reset();
    }
    play_bubu() {
        this.bubu.start();
        this.player.stop();
    }
};