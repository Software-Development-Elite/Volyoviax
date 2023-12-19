var screenState;

// the setup() and draw() functions create the global sketch of the game, which manipulates all the local sketches and which ones are loaded and not.
function setup() {
    let state = sessionStorage.getItem("gameState");
    if(state === null) {
        screenState = "game";
    }else {
        screenState = state;
    }

    if(screenState === "menu") {
        sessionStorage.setItem("gameState", "menu");
        new p5(menu);
    }else if(screenState === "game") {
        sessionStorage.setItem("gameState", "game");
        new p5(scene1);
        new p5(ui);
    }
}

function draw() {
    if(screenState === "menu") {
        menuSystem();
    }else if(screenState === "game") {
        playerMovement();
    }
}