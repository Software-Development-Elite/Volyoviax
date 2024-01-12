var sv_player;

function sv_player_draw() {
    sv_player_movement();
}

function sv_player_movement() {
    if(kb.pressing("left")) {
        moveLeft = true;
    }else {
        moveLeft = false;
    }

    if(kb.pressing("right")) {
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
    
    if(sv_player.colliding(tile3) > 1 ) {
        isTouchingWall = true;
    }else{
        isTouchingWall = false;
    }


    console.log(isTouchingGround);

}