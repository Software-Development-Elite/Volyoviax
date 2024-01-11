function ui_setup() {
    if(sceneState === "td" || sceneState === "sv") {
        new p5(user_interface);
        console.log("hello");
        //TBD
    }
}

function ui_draw() {
    if(sceneState === "td" || sceneState === "ui") {
        //game functions are called here
    }
}

var g = 0;
var tim = 1
var user_interface = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here
        new this.Sprite(100,100,50,50);
    }

    sketch.draw = function() {
        //this.background("black");
        if(this.kb.pressing("j")) {
            for(g; g<1; g++) {
                tim = new this.Sprite(300,300,25,25);
            }
            console.log(g);
        }else {
            g = 0;
            if(tim !== 1) {
                tim.remove();
                this.clear();
            }
        }
        //for scene switching
        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }
    }
}