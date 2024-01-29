var sceneState;
var clear = false;

function setup() {
    let state = sessionStorage.getItem("gameState");

    if(state === null) {
        sceneState = "mm";
        sessionStorage.setItem("gameState", "mm")
    }else {
        sceneState = state;
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