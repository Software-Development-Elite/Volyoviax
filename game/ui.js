var box;

var ui = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800,450);
        screen.position(0,0);

        box = new this.Sprite(100,100,25,25);
    }

    sketch.draw = function() {
        
    }
}