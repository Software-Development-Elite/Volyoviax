var sv_player;

function sv_player_draw() {
    sv_player_movement();
    if(sv_jack.colliding(sv_tiles)){
        sv_jack.moveTowards(sv_player, 0.02);
    }
}

function sv_player_movement() {

    if(kb.pressing("left") && isTouchingWall===false) /*&& isTouchingWallLeft===false)*/ {
        moveLeft = true;
    }else {
        moveLeft = false;
    }
    if(kb.pressing("right")&& isTouchingWall===false) /*&& isTouchingWallLeft===false)*/ {
        moveRight = true;
    }else {
        moveRight = false;
    }

    if(kb.pressing("down")) {
        playerGroundPound = true;
        poundable = false;
    }else {
        playerGroundPound = false;
        poundable = true;
    }

    if(sv_player.colliding(sv_tiles)) {
        isTouchingGround = true;
    }else{
        isTouchingGround = false;
    }
    
    if(sv_player.colliding(tile3) ) {
        isTouchingWall = true;
    }else{
        isTouchingWall = false;
    }
    if(sv_player.colliding(tile4) ) {
        isTouchingLeftWall = true;
    }else{
        isTouchingLeftWall = false;
    }

    console.log(isTouchingGround);

}