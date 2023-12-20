function ui_setup() {
    if(sceneState === "td" || sceneState === "sv") {
        new p5(user_interface);

        //TBD
    }
}

function ui_draw() {
    if(sceneState === "td" || sceneState === "ui") {
        //game functions are called here
    }
}

var user_interface = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here
    }

    sketch.draw = function() {
        //this.background("black");

        //for scene switching
        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }
    }
}