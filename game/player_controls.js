var moveForward = false;
var moveLeft = false;
var moveDown = false;
var moveRight = false;
var playerJump = false;

function gameMovement() {
    if(sceneState === "td") {
        if(moveForward === true) {
            td_player.y -= 5;
        }

        if(moveLeft === true) {
            td_player.x -= 5;
        }

        if(moveDown === true) {
            td_player.y += 5;
        }

        if(moveRight === true) {
            td_player.x += 5;
        }
    }
    if(sceneState === "sv") {
        if(moveLeft === true) {
            sv_player.x -= 5;
        }

        if(moveRight === true) {
            sv_player.x += 5;
        }

        if(playerJump === true && sv_player.collides(tile1)) {
            sv_player.velocity.y = -8;
        }
    }

    gamepad();
}