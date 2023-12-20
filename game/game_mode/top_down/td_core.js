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
        td_transistion_draw();
    }
}

var top_down = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here
        td_player = new this.Sprite(400, 225, 50, 50);
        td_player.rotationLock = true;

        td_transistion = new this.Sprite(100, 400, 25, 25);
        td_transistion.color = 'purple';
    }

    sketch.draw = function() {
        this.background("black");

        td_player.overlaps(td_transistion);

        //for scene switching
        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }
    }
}