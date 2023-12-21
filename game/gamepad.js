function gamepad() {
    if(sceneState === "td") {
        td_player.x = td_player.x + contro.leftStick.x * 5;
        td_player.y = td_player.y + contro.leftStick.y * 5;
    }else if(sceneState === "sv") {
        sv_player.x = sv_player.x + contro.leftStick.x * 5;

        if(contro.pressing('a')) {
            playerJump = true;
            console.log(playerJump);
        }else {
            playerJump = false;
        }
    }
}