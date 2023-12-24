function openplayerMenu() {
    if(kb.presses('o') || contro.released('start')) {
        sessionStorage.setItem("current game_mode", sceneState);
        gameSwitch("pm");
    }
}

function closeplayerMenu() {
    if(kb.presses('p') || contro.released('select')) {
        sceneState = sessionStorage.getItem("current game_mode");
        gameSwitch(sceneState);
    }
}