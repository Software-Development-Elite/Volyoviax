function openplayerMenu() {
    if(kb.presses('o')) {
        sessionStorage.setItem("current game_mode", sceneState);
        gameSwitch("pm");
    }
}

function closeplayerMenu() {
    if(kb.presses('p')) {
        sceneState = sessionStorage.getItem("current game_mode");
        gameSwitch(sceneState);
    }
}