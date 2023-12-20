function td_setup() {
    if(sceneState === "td") {
        new p5(top_down);

        //TBD
    }
}

function td_draw() {
    if(sceneState === "td") {
        //game functions are called here
        td_player_draw();
    }
}

var top_down = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here
        td_player = new this.Sprite(400, 225, 50, 50);
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