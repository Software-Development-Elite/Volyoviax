var moveForward = false;
var moveLeft = false;
var moveDown = false;
var moveRight = false;
var playerJump = false;

var playerPPosition = "left";

function gameMovement() {
    if(sceneState === "td") {
      //  playerPPosition = "down"
        if(moveForward === true) {
            td_player.y -= 5;
            playerPPosition = "up";
        }

        if(moveLeft === true) {
            td_player.x -= 5;
            playerPPosition = "left";
        }

        if(moveDown === true) {
            td_player.y += 5;
            playerPPosition = "down";
        }

        if(moveRight === true) {
            td_player.x += 5;
            playerPPosition = "right";
        }
    }
    if(sceneState === "sv") {
      //  playerPPosition = "right";
        if(moveLeft === true) {
            sv_player.x -= 5;
            playerPPosition = "left";
        }

        if(moveRight === true) {
            sv_player.x += 5;
            playerPPosition = "right";
        }

        if(playerJump === true) {
            sv_player.velocity.y = -8;
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