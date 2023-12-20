function mm_setup() {
    if(sceneState === "mm") {
        new p5(main_menu);

        //TBD
    }
}

function mm_draw() {
    if(sceneState === "mm") {
        //game functions are called here
        mm_buttons();
    }
}

var made_p5;

var main_menu = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here

        newGame = new this.Sprite(400, 200, 100,50);
        newGame.text = "New Game"

        loadGame = new this.Sprite(400, 300, 100,50);
        loadGame.text = "Continue Game"

        made_p5 = new this.Sprite(700, 400, 200, 50);
        made_p5.image = 'img/p5/made_with_p5play.png';
        made_p5.scale = 0.25
    }

    sketch.draw = function() {
        this.background("black");

        //for scene switching
        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }
    }
}