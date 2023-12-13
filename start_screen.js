var mainMenu;

var new_game;
var load_game;

function setup() {
    mainMenu = createCanvas(800, 450);
    mainMenu.position(0,0);

    new_game = new Sprite(300, 225, 100, 50);
    new_game.text = "New Game";
    
    load_game = new Sprite(500, 225, 100, 50);
    load_game.text = "Continue Game";
}

function draw() {
    background("black");

    if(new_game.mouse.hovering()){
        new_game.color = "blue";
    }else {
        new_game.color = "red";
    }

    if(load_game.mouse.hovering()){
        load_game.color = "blue";
    }else {
        load_game.color = "green";
    }

    if(new_game.mouse.presses()) {
        window.location.replace("top_down_game/debug_map/index.html");
    }

    if(load_game.mouse.presses()) {
        window.location.replace("select_save/index.html");
    }
}