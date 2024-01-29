var moveForward = false;
var moveLeft = false;
var moveDown = false;
var moveRight = false;
var playerJump = false;
var playerWallJump = false;
var isTouchingWall = false;
var poundable = true;
var playerGroundPound = false;
var isTouchingGround = false;
var playerDash = true;
var sv_cooldownDuration = 1500;
var isTouchingLeftWall = false;
var playerWallJumpLeft = false;

var playerPPosition = "left";

function gameMovement() {
    if(sceneState === "td") {
      //  playerPPosition = "down"
        if(moveForward === true) {
            td_player.y -= playerSpeed;
            playerPPosition = "up";
        }

        if(moveLeft === true) {
            td_player.x -= playerSpeed;
            playerPPosition = "left";
        }

        if(moveDown === true) {
            td_player.y += playerSpeed;
            playerPPosition = "down";
        }

        if(moveRight === true) {
            td_player.x += playerSpeed;
            playerPPosition = "right";
        }
    }
    if(sceneState === "sv") {
      //  playerPPosition = "right";
        if(moveLeft === true) {
            sv_player.x -= playerSpeed;
            playerPPosition = "left";
        }

        if(moveRight === true) {
            sv_player.x += playerSpeed;
            playerPPosition = "right";
        }

        if(playerJump === true) {
            sv_player.velocity.y = -8;
        }
        if (playerWallJumpLeft===true){
            sv_player.velocity.y = -8;
            // if(sv_player.x<tile4.x){
                sv_player.velocity.x=8;
            // }else{
            //     sv_player.velocity.x = -8;
            // }
        }
        if (playerWallJump===true){
            sv_player.velocity.y = -8;
            // if(sv_player.x<tile3.x){
                sv_player.velocity.x=-8;
            // }else{
            //     sv_player.velocity.x = -8;
            // }
        }

        if(isTouchingGround === false && playerGroundPound === true && !kb.pressing("space")) {
            sv_player.velocity.y = 20;
            sv_player.bounciness = 0;
            tile1.bounciness = 0;
            // console.log("GAY")
        }
        if(sv_player.velocity.y === 20){
            sv_player.color='purple';
        }else{
            sv_player.color='red';
        }


        playerdashing();
        playerJumping();
    }

    gamepad();
}
function playerdashing() {
    if(kb.pressing("shift") && isTouchingWall===true){
        sv_player.drag=100
        sv_player.color= "pink"
    }else if(kb.pressing("shift") && isTouchingLeftWall===true){
        sv_player.drag=100
        sv_player.color= "pink"
    }else{
        sv_player.drag=0
    }
    if(kb.pressing("shift") && playerDash===true){
        playerDash = false;
        setTimeout(function() {playerDash = true;
    }, sv_cooldownDuration); 
    if(kb.pressing("left") && isTouchingWall === false){
        sv_player.velocity.x=sv_player.velocity.x-10;
    }else if (isTouchingLeftWall === false){
        sv_player.velocity.x=sv_player.velocity.x+10;
    }

        }
    }
    

function playerJumping() {
    if((kb.pressing("space")||contro.pressing('a')) && sv_player.colliding(tile1)) {
        playerJump = true;
    }else {
        playerJump = false;
    }
    if(kb.pressing("space") && isTouchingWall===true){
        playerWallJump = true;
    }
    else{
        playerWallJump = false;
    }
    if(kb.pressing("space") && isTouchingLeftWall===true){
        playerWallJumpLeft = true;
    }
    else{
        playerWallJumpLeft = false;
    }
}