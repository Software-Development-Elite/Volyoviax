var screen;

var floor;

function setup() {
    screen = createCanvas(800, 450);
    screen.position(0,0);

    world.gravity.y = 20;

    player_setup();
    transferSetup(300, 50);

    floor = new Sprite(400, 300, 500, 10);
    floor.collider = "static";
}

function draw() {
    background("black");

    player_draw();
    transferDraw();
}