function gamepad() {
    if(sceneState === "td") {
        td_player.x = td_player.x + contro.leftStick.x * 5;
        td_player.y = td_player.y + contro.leftStick.y * 5;

        if(contro.leftStick.y > 0.5 && contro.leftStick.y > contro.leftStick.x) {
            console.log("hello");
            playerPPosition = "down";
        }else if(contro.leftStick.y < -0.5 && contro.leftStick.y < contro.leftStick.x) {
            playerPPosition = "up";
        }

        if(contro.leftStick.x > 0.5 && contro.leftStick.x > contro.leftStick.y) {
            playerPPosition = "right";
        }else if(contro.leftStick.x < -0.5 && contro.leftStick.x < contro.leftStick.y) {
            playerPPosition = "left";
        }

        console.log(contro.leftStick.x, contro.leftStick.y);
    }else if(sceneState === "sv") {
        sv_player.x = sv_player.x + contro.leftStick.x * 5;

        if(contro.leftStick.x > 0) {
            playerPPosition = "right";
        }else if(contro.leftStick.x < 0) {
            playerPPosition = "left";
        }
    }

    if(contro.presses('lt')) {
        if(sceneState === "td") {
            did_player_swing_td = true;
        }else if(sceneState === "sv") {
            did_player_swing_sv = true;
        }
    }
}