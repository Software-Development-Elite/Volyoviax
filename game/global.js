var screenState;

// the setup() and draw() functions create the global sketch of the game, which manipulates all the local sketches and which ones are loaded and not.
function setup() {
    let state = sessionStorage.getItem("gameState");
    if(state === null) {
        screenState = "sv_game";
    }else {
        screenState = state;
    }

    if(screenState === "menu") {
        sessionStorage.setItem("gameState", "menu");
        new p5(menu);
    }else if(screenState === "tp_game") {
        sessionStorage.setItem("gameState", "tp_game");
        new p5(scene1);
        new p5(ui);
    }else if(screenState === "sv_game") {
        sessionStorage.setItem("gameState", "sv_game")
        new p5(section1);
        new p5(ui);
    }
}

function draw() {
    if(screenState === "menu") {
        menuSystem();
    }else if(screenState === "tp_game") {
        tp_playerMovement();
    }else if(screenState === "sv_game") {
        sv_playerMovement();
    }
}