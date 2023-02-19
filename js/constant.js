// init.js
// Copyright (c) 2023 Yoshida, gotojo All Right Reserved.

const LEVEL = Object.freeze({
    EASY: 'easy',
    PRO: 'pro'
});

const STATUS = Object.freeze({
    STOP: 0,
    INTRO: 1,
    GUTS: 2,
    BESO: 3,
    BLIDGE: 4,
    ENDING: 5,
});

const CLIP = Object.freeze({
    INTRO: 'intro',
    GUTS1: 'guts1',
    GUTS2: 'guts2',
    BESO:   'beso',
    BRIDGE: 'bridge',
    ENDING: 'ending',
    MELO_GUTS1: 'melo_guts1',
    MELO_GUTS2: 'melo_guts2',
    MELO_BESO: 'melo_beso',
    MELO_ENDING: 'melo_ending',
    BUBU: 'bubu',
});

const CLIP_FILENAME = Object.freeze({
    'intro': ['IntroBPM105.m4a','IntroBPM123_5.m4a'],
    'guts1': ['Guts1BPM105.m4a','Guts1BPM123_5.m4a'],
    'guts2': ['Guts2BPM105.m4a','Guts2BPM123_5.m4a'],
    'beso': ['Guts2BPM105.m4a','Guts2BPM123_5.m4a'],
    'bridge': ['BridgeBPM105.m4a', 'BridgeBPM123_5.m4a'],
    'ending': ['EndingBPM105.m4a','EndingBPM123_5.m4a'],
    'melo_beso': ['MeloBesoBPM105.m4a','MeloBesoBPM123_5.m4a'],
    'melo_ending': ['MeloEndingBPM105.m4a','MeloEndingBPM123_5.m4a'],
    'melo_guts1': ['MeloGuts1BPM105.m4a','MeloGuts1BPM123_5.m4a'],
    'melo_guts2': ['MeloGuts2BPM105.m4a','MeloGuts2BPM123_5.m4a'],
    'bubu': ['bubu.m4a'],    
});

const MAX_GUTS = 3;
const MELODY_GAIN = 0.3;