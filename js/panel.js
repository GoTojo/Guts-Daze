// panel.js
// Copyright (c) 2023 Yoshida, gotojo All Right Reserved.

class Panel {
    constructor() {
        this.btn_easy = $('#easy');
        this.btn_pro = $('#pro');
        this.btn_melody = $('#melody');
        this.btn_start = $('#start');
        this.btn_stop = $('#stop');
        this.btn_ending = $('#ending');
        this.btn_guts = $('#guts');
        this.btn_guts_reset = $('#guts-reset');
        this.btn_bubu = $('#bubu');

        this.btn_easy.on('click', this.on_btn_easy);
        this.btn_pro.on('click', this.on_btn_pro);
        this.btn_melody.on('click', this.on_btn_melody);
        this.btn_start.on('click', this.on_btn_start);
        this.btn_stop.on('click', this.on_btn_stop);
        this.btn_ending.on('click', this.on_btn_ending);
        this.btn_guts.on('click', this.on_btn_guts);
        this.btn_guts_reset.on('click', this.on_btn_guts_reset);
        this.btn_bubu.on('click', this.on_btn_bubu);
    }
    setup() {
        const level = localStorage.getItem('level');
        if (level === LEVEL.EASY) this.on_btn_easy();
        else this.on_btn_pro();
        const melody = localStorage.getItem('melody') === 'true';
        if (melody != Window.App.melody) this.on_btn_melody();
    }
    on_btn_easy() {
        console.log(LEVEL.EASY);
        Window.App.set_level(LEVEL.EASY);
        localStorage.setItem('level', LEVEL.EASY);
    }
    on_btn_pro() {
        console.log(LEVEL.PRO);
        Window.App.set_level(LEVEL.PRO);
        localStorage.setItem('level', LEVEL.PRO);
    }
    on_btn_melody() {
        console.log('melody');
        Window.App.toggle_melody();
        localStorage.setItem('melody', Window.App.melody);
    }
    on_btn_start() {
        Window.App.intro_start();
    }
    on_btn_stop() {
        Window.App.stop();
    }
    on_btn_ending() {
        Window.App.ending();
    }
    on_btn_guts() {
        Window.App.guts();
    }
    on_btn_guts_reset() {
        Window.App.guts_reset();
    }
    on_btn_bubu() {
        Window.App.play_bubu();
    }

    guts_anim() {
        // クラッカー
        const count = 1000;
        const defaults = {
            // TODO: 適切な高さに設定
            origin: { y: 0.4 },
        };
        function fire(particleRatio, opts) {
            confetti(
                Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio),
                ticks: 80, // クラッカーがフェードアウトするまでの時間
                })
            );
        }
        fire(0.25, {
            spread: 150,
            startVelocity: 55,
        });
        fire(0.1, {
            spread: 120,
            startVelocity: 30,
        });
        fire(0.25, {
            spread: 150,
            startVelocity: 55,
        });
        // particlesJS("mainarea", {
        //     particles: {
        //         number: {
        //             value: 125, //この数値を変更すると紙吹雪の数が増減できる
        //             density: {
        //                 enable: false,
        //                 value_area: 400,
        //             },
        //         },
        //         color: {
        //             value: [
        //                 "#EA5532",
        //                 "#F6AD3C",
        //                 "#FFF33F",
        //                 "#00A95F",
        //                 "#00ADA9",
        //                 "#00AFEC",
        //                 "#4D4398",
        //                 "#E85298",
        //             ], //紙吹雪の色の数を増やすことが出来る
        //         },
        //         shape: {
        //             type: "polygon", //形状はpolygonを指定
        //             stroke: {
        //                 width: 0,
        //             },
        //             polygon: {
        //                 nb_sides: 4, //多角形の角の数
        //             },
        //         },
        //         opacity: {
        //             value: 1,
        //             random: false,
        //             anim: {
        //                 enable: true,
        //                 speed: 20,
        //                 opacity_min: 0,
        //                 sync: false,
        //             },
        //         },
        //         size: {
        //             value: 5.305992965476349,
        //             random: true, //サイズをランダムに
        //             anim: {
        //                 enable: true,
        //                 speed: 1.345709068776642,
        //                 size_min: 0.8,
        //                 sync: false,
        //             },
        //         },
        //         line_linked: {
        //             enable: false,
        //         },
        //         move: {
        //             enable: true,
        //             speed: 7, //この数値を小さくするとゆっくりな動きになる
        //             direction: "bottom", //下に向かって落ちる
        //             random: false, //動きはランダムにならないように
        //             straight: false, //動きをとどめない
        //             out_mode: "out", //画面の外に出るように描写
        //             bounce: false, //跳ね返りなし
        //             attract: {
        //                 enable: false,
        //                 rotateX: 600,
        //                 rotateY: 1200,
        //             },
        //         },
        //     },
        //     interactivity: {
        //         detect_on: "canvas",
        //         events: {
        //             onhover: {
        //                 enable: false,
        //             },
        //             onclick: {
        //                 enable: false,
        //             },
        //             resize: true,
        //         },
        //     },
        //     retina_detect: true,
        // });
    }
    
    update() {
        const app = Window.App;
        const btn_sts = (btn, f) => {
            if (f) {
                btn.addClass('btn-light');
                btn.removeClass('btn-dark');
            } else {
                btn.addClass('btn-dark');
                btn.removeClass('btn-light');
            }
        }; 
        
        const isEasy = app.is_easy_level();
        btn_sts(this.btn_easy, isEasy);
        btn_sts(this.btn_pro, !isEasy);

        btn_sts(this.btn_melody, app.melody);

        $('#guts-count').text(Window.App.guts_count);
    }
}