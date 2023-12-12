var screen;

var save_game;
var quit_game;
var save_and_quit_game;

function setup(){
    screen = createCanvas(800, 450);
    screen.position(0,0);

    save_game = new Sprite(400, 200, 200, 25);
    save_game.text = "Save Game";

    quit_game = new Sprite(400, 250, 250, 25);
    quit_game.text = "Quit Game";

    save_and_quit_game = new Sprite(400, 300, 300, 25);
    save_and_quit_game.text = "Save and Quit Game";
}

function draw() {
    background("black");

    if(kb.presses("o")) {
        sessionStorage.setItem("resume_game", 1);
        window.location.replace("../top_down_game/debug_map/index.html");
    }

    if(save_game.mouse.hovering()) {
        save_game.color = "red";
    }else {
        save_game.color = "green";
    }

    if(quit_game.mouse.hovering()) {
        quit_game.color = "red";
    }else {
        quit_game.color = "green";
    }

    if(save_and_quit_game.mouse.hovering()) {
        save_and_quit_game.color = "red";
    }else {
        save_and_quit_game.color = "green";
    }

    if(save_game.mouse.presses()){
        saveGame();
    }

    if(quit_game.mouse.presses()) {
        quitGame();
    }

    if(save_and_quit_game.mouse.presses()) {
        saveGame();
        quitGame();
    }
}

function saveGame() {
    let saveCount = Number(localStorage.getItem("save count"));

    if(saveCount !== null) {
        saveCount += 1;
    }else {
        saveCount = 1;
    }

    let exchange = sessionStorage.getItem("data");
    let save = {
        id: 1,
        playerData: JSON.parse(exchange)
    }
    localStorage.setItem("save_file"+saveCount, JSON.stringify(save));
    localStorage.setItem("save count", saveCount);
}

function quitGame() {
    sessionStorage.clear();
    window.location.replace("../index.html");
}