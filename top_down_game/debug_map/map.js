var screen;

function setup() {
    screen = createCanvas(800, 450);
    screen.position(0,0);

    player_setup();

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

    sessionStorage.setItem("data", JSON.stringify(map_data));
}