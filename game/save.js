var playerData;
var playerX;
var playerY;

function dataSetup() {
    if(sceneState === "sv") {
        playerX = sv_player.x;
        playerY = sv_player.y;
    }else if(sceneState === "td") {
        playerX = td_player.x;
        playerY = td_player.y;
    }
}

function data_menu() {
    if(menu_opened === true) {
        sessionStorage.setItem("x", playerX);
        sessionStorage.setItem("y", playerY);
    }
}