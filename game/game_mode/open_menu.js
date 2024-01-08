var menu_opened = false;
var callPlayerP = false;

function openplayerMenu() {
    if(kb.presses('o') || contro.released('start')) {
        menu_opened = true;
        sessionStorage.setItem("current game_mode", sceneState);
        gameSwitch("pm");
    }
}

function closeplayerMenu() {
    if(kb.presses('p') || contro.released('select')) {
        menu_opened = false;
        callPlayerP = true;
        sceneState = sessionStorage.getItem("current game_mode");
        gameSwitch(sceneState);
    }
}