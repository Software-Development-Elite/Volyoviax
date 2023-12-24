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
}