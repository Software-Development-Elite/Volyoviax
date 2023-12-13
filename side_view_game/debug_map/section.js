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

    let resume = sessionStorage.getItem("resume_game")

    if(resume !== null) {
        let data = JSON.parse(sessionStorage.getItem("data"));
        player.x = data.x;
        player.y = data.y;
        sessionStorage.clear();
    }
}

function draw() {
    background("black");

    player_draw();
    transferDraw();

    if(kb.presses("o")) {
        save_data();
        window.location.replace("../../main_menu/index.html");
    }
}

function save_data() {
    var map_data = {
        x: player.x,
        y: player.y
    }

    sessionStorage.setItem("which_map", 2);

    sessionStorage.setItem("data", JSON.stringify(map_data));
}