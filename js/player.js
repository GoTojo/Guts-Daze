// player.js
// Copyright (c) 2023 Yoshida, gotojo All Right Reserved.

class Player {
    static instance = undefined;
    constructor() {
        this.clips = {};
        this.cur_clip = undefined;
        this.next_clip = undefined;
        this.cur_melody = undefined;
        this.reserve_guts = false;
        this.is_melody = false;
        this.cb_guts_end = undefined;
        this.playing = false;
        Player.instance = this;
    }
    setup() {
        this.clips[CLIP.INTRO] = new Clip(CLIP.INTRO);
        this.clips[CLIP.GUTS1] = new Clip(CLIP.GUTS1);
        this.clips[CLIP.GUTS2] = new Clip(CLIP.GUTS2);
        this.clips[CLIP.BESO] = new Clip(CLIP.BESO);
        this.clips[CLIP.BRIDGE] = new Clip(CLIP.BRIDGE);
        this.clips[CLIP.ENDING] = new Clip(CLIP.ENDING);
        this.clips[CLIP.MELO_GUTS1] = new Clip(CLIP.MELO_GUTS1);
        this.clips[CLIP.MELO_GUTS2] = new Clip(CLIP.MELO_GUTS2);
        this.clips[CLIP.MELO_BESO] = new Clip(CLIP.MELO_BESO);
        this.clips[CLIP.MELO_ENDING] = new Clip(CLIP.MELO_ENDING);
        this.clips[CLIP.MELO_GUTS1].set_gain(MELODY_GAIN);
        this.clips[CLIP.MELO_GUTS2].set_gain(MELODY_GAIN);
        this.clips[CLIP.MELO_BESO].set_gain(MELODY_GAIN);
        this.clips[CLIP.MELO_ENDING].set_gain(MELODY_GAIN);
    }
    set_level(level) {
        for (let key in this.clips) {
            this.clips[key].set_level(level);
        };
    }
    set_melody(melody) {
        this.is_melody = melody;
    }
    start_melody(clip) {
        const player = Player.instance;
        if (player.cur_melody) player.cur_melody.stop();
        player.cur_melody = undefined;
        if (!player.is_melody) return;
        switch (clip.clip) {
        case CLIP.GUTS1:
            player.cur_melody = player.clips[CLIP.MELO_GUTS1];
            player.cur_melody.start();
            break;
        case CLIP.GUTS2:
            player.cur_melody = player.clips[CLIP.MELO_GUTS2];
            player.cur_melody.start();
            break;
        case CLIP.BESO:
            player.cur_melody = player.clips[CLIP.MELO_BESO];
            player.cur_melody.start();
            break;
        default:
            break;
        }
    }

    onended() {
        const player = Player.instance;
        console.log(`clip ended`);
        if (!player.next_clip) {
            console.log(`next_clip is undefined`);
            player.stop();
            return;
        }
        player.cur_clip.stop();
        console.log(`next clip is ${player.next_clip.clip}`);
        let cur_clip = player.next_clip;
        if (!cur_clip) {
            player.stop();
            return;
        }
        let next_clip = undefined;
        switch (cur_clip.clip) {
        case CLIP.GUTS1:
            if (player.reserve_guts) cur_clip = player.clips[CLIP.BESO];
            else next_clip = player.clips[CLIP.GUTS2];
            break;
        case CLIP.GUTS2:
            if (player.reserve_guts) cur_clip = player.clips[CLIP.BESO];
            else next_clip = player.clips[CLIP.GUTS1];
            break;
        case CLIP.BESO:
            next_clip = player.clips[CLIP.BRIDGE];
            break;
        case CLIP.BRIDGE:
            if (player.cb_guts_end) player.cb_guts_end();
            next_clip = player.clips[CLIP.GUTS1];
            break;
        }
        player.cur_clip = cur_clip;
        player.reserve_guts = false;
        player.next_clip = next_clip;
        cur_clip.start(player.onended);
        player.start_melody(cur_clip);
    }

    guts() {
        this.reserve_guts = true;
    }

    set_cb_guts_end(cb) {
        this.cb_guts_end = cb;
    }

    intro_start() {
        this.stop();
        this.reserve_guts = false;
        this.cur_clip = this.clips[CLIP.INTRO];
        this.next_clip = this.clips[CLIP.GUTS1];
        this.cur_clip.start(this.onended);
        this.cur_melody = undefined;
        console.log(`next clip is ${this.next_clip.clip}`);
        this.playing = true;
    }
    stop() {
        if (this.cb_guts_end) this.cb_guts_end();
        for (const key in this.clips) {
            this.clips[key].stop();
        };
        this.cur_clip = undefined;
        this.next_clip = undefined;
        this.cur_melody = undefined;
        this.reserve_guts = false;
        this.playing = false;
    }
    ending() {
        if (this.cb_guts_end) this.cb_guts_end();
        if (!this.cur_clip) {
            this.cur_clip = this.clips[CLIP.ENDING];
            this.next_clip = undefined;
            this.cur_melody = undefined;
            this.reserve_guts = false;
            this.cur_clip.start(this.onended);
        } else {
            this.next_clip = this.clips[CLIP.ENDING];
        }
        this.playing = false;
    }
};