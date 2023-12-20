function pm_setup() {
    if(sceneState === "pm") {
        new p5(player_menu);

        //TBD
    }
}

function pm_draw() {
    if(sceneState === "pm") {
        //game functions are called here
    }
}

var player_menu = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here
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