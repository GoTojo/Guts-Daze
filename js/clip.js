// clip.js
// Copyright (c) 2023 Yoshida, gotojo All Right Reserved.

class Clip {
    constructor(clip) {
        // console.log(`Clip: ${clip}`);
        this.clip = clip;
        const files = CLIP_FILENAME[clip];
        this.has_level = (files.length == 2);
        this.level = 0;
        this.sounds = [];
        this.cb = undefined
        this.setup(files);
    }

    set_level(level) {
        if (!this.has_level) this.level = 0;
        if (level === LEVEL.EASY) {
            this.level = 0;
        } else {
            this.level = 1;
        }
        this.sound = this.sounds[this.level];
    }

    setup(files) {
        const path = '../Media/';
        for (let i = 0; i < files.length; i++) {
            const filename = path + files[i];
            const sound = new Howl({
                src: filename,
                onplay: (id) => {
                    this.onplay();
                },
                onend: (id) => {
                    this.onend();
                },
                onstop: (id) => {
                    this.clip.onstop
                },
            });
            this.sounds.push(sound);
        }
        this.sound = this.sounds[this.level];
    }

    onplay() {
        // console.log(`${this.clip}: onplay`);
    }
    
    onend() {
        // console.log(`${this.clip}: onend`);
        if (this.cb) this.cb(this);
    }
    
    onstop() {
        // console.log(`${this.clip}: onstop`);
        if (this.cb) this.cb(this);
    }

    set_gain(value) {
        if (value < 0.0 || 1.0 < value) return;
        this.sounds.forEach(sound => {
            sound.volume(value);
        });
    }

    set_loop(f) {
        this.sounds.forEach(sound => {
            sound.loop(f);
        });
    }

    set_cb(cb) {
        this.cb = cb;
    }

    start(cb) {
        if (cb) this.set_cb(cb);
        this.sound.play();
        this.isPlaying = true;
    }

    stop() {
        this.sound.stop();
        this.isPlaying = false;
    }
};