var player;

function setup() {
    new p5(demo);
}

function draw() {
    playerMovement();
}

var demo = function(sketch) {
    sketch.setup = function() {
       let screen = this.createCanvas(400,400);
       screen.position(0,0);

        player  = new this.Sprite(200,200,50,50);
    }

    sketch.draw = function() {
        this.background("green");
    }
}

function playerMovement() {
    if(kb.pressing("w")) {
        player.y -= 5;
    }

    if(kb.pressing("a")) {
        player.x -= 5;
    }

    if(kb.pressing("s")) {
        player.y += 5;
    }

    if(kb.pressing("d")) {
        player.x += 5;
    }
}