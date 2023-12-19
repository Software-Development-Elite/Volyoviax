
//local sketch for a single scene in the top-down section of the game
var scene1 = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800,450);
        screen.position(0,0);

        tp_player = new this.Sprite(400,225,50,50);
    }

    sketch.draw = function() {
        this.background("black");
    }
}