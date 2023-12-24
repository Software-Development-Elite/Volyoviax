var moveForward = false;
var moveLeft = false;
var moveDown = false;
var moveRight = false;
var playerJump = false;

function gameMovement() {
    if(sceneState === "td") {
        if(moveForward === true) {
            td_player.y -= playerSpeed;
        }

        if(moveLeft === true) {
            td_player.x -= playerSpeed;
        }

        if(moveDown === true) {
            td_player.y += playerSpeed;
        }

        if(moveRight === true) {
            td_player.x += playerSpeed;
        }
    }
    if(sceneState === "sv") {
        if(moveLeft === true) {
            sv_player.x -= playerSpeed;
        }

        if(moveRight === true) {
            sv_player.x += playerSpeed;
        }

        if(playerJump === true) {
            sv_player.velocity.y = -playerJump;
        }

        playerJumping();
    }

    gamepad();
}

function playerJumping() {
    if((kb.pressing("space")||contro.pressing('a')) && sv_player.colliding(tile1)) {
        playerJump = true;
    }else {
        playerJump = false;
    }
}