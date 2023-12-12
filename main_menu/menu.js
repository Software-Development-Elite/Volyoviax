var screen;

var save_game;
var quit_game;
var save_and_quit_game;

var slot1, slot2, slot3;
var selected_slot = 0;

function setup(){
    screen = createCanvas(800, 450);
    screen.position(0,0);

    slot1 = new Sprite(350, 190, 50, 25);
    slot1.text = "Slot 1";
    slot1.textSize = 7;

    slot2 = new Sprite(400, 190, 50, 25);
    slot2.text = "Slot 2";
    slot2.textSize = 7;

    slot3 = new Sprite(450, 190, 50, 25);
    slot3.text = "Slot 3";
    slot3.textSize = 7;

    save_game = new Sprite(400, 220, 200, 25);
    save_game.text = "Save Game";

    quit_game = new Sprite(400, 250, 250, 25);
    quit_game.text = "Quit Game";

    save_and_quit_game = new Sprite(400, 280, 300, 25);
    save_and_quit_game.text = "Save and Quit Game";
}

function draw() {
    background("black");

    if(kb.presses("o")) {
        sessionStorage.setItem("resume_game", 1);
        window.location.replace("../top_down_game/debug_map/index.html");
    }

    if(slot1.mouse.hovering() || selected_slot === 1) {
        slot1.color = "red";
    }else {
        slot1.color = "green";
    }

    if(slot2.mouse.hovering() || selected_slot === 2) {
        slot2.color = "red";
    }else {
        slot2.color = "green";
    }


    if(slot3.mouse.hovering() || selected_slot === 3) {
        slot3.color = "red";
    }else {
        slot3.color = "green";
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

    if(slot1.mouse.presses()) {
        selected_slot = 1;
    }

    if(slot2.mouse.presses()) {
        selected_slot = 2;
    }

    if(slot3.mouse.presses()) {
        selected_slot = 3;
    }
}

function saveGame() {
    let exchange = sessionStorage.getItem("data");
    let save = {
        id: 1,
        playerData: JSON.parse(exchange)
    }
    localStorage.setItem("save_file"+selected_slot, JSON.stringify(save));
}

function quitGame() {
    sessionStorage.clear();
    window.location.replace("../index.html");
}