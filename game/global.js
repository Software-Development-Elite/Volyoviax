var player;
var direction = "unknown";
const cooldownDuration = 5000; 
let lastSpacePressTime = 0;
var currentTime = Date.now();

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
    currentTime = Date.now();  

    if (kb.pressing("w")) {
        player.y -= 5;
        direction = "up";
        console.log("up");
    }

    if (kb.pressing("a")) {
        player.x -= 5;
        direction = "left";
        console.log("left");
    }

    if (kb.pressing("s")) {
        player.y += 5;
        direction = "down";
        console.log("down");
    }

    if (kb.pressing("d")) {
        player.x += 5;
        direction = "right";
        console.log("right");
    }

    if (kb.pressing("space")) {
        if (currentTime - lastSpacePressTime >= cooldownDuration) {
            if (direction === "right") {
                player.x += 70;
            } else if (direction === "left") {
                player.x -= 70;
            } else if (direction === "down") {
                player.y += 70;
            } else if (direction === "up") {
                player.y -= 70;
            }

            lastSpacePressTime = currentTime;

            setTimeout(function () {
                console.log("Cooldown is over!");
            }, cooldownDuration);
        }
    }
}
