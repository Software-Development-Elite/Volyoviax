function sv_setup() {
    if(sceneState === "sv") {
        new p5(side_view);

        //TBD
    }
}

function sv_draw() {
    if(sceneState === "sv") {
        //gameplay functions go here
    }
}

var side_view = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game's objects are called here
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