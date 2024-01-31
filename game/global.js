var screenState;

// the setup() and draw() functions create the global sketch of the game, which manipulates all the local sketches and which ones are loaded and not.
function setup() {
    let state = sessionStorage.getItem("gameState");
    if(state === null) {
        screenState = "menu";
    }else {
        screenState = state;
    }
    sv_setup();
    td_setup();
    mm_setup();
    pm_setup();
    ui_setup();
}

function draw() {
    gameMovement();
    sv_draw();
    td_draw();
    mm_draw();
    pm_draw();
    ui_draw();
}

function game_clear(sketch) {
    //ONLY USE WHEN CHANGING SCENES
    sketch.remove();
}

function gameSwitch(newScene){
    sessionStorage.setItem("gameState", newScene);
    clear = true;
    setup();
    redraw();
}