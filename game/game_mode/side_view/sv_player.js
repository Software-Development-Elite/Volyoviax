var sv_player;

function sv_player_draw() {
    sv_player_movement();
}

function sv_player_movement() {
    if(kb.pressing("a")) {
        moveLeft = true;
    }else {
        moveLeft = false;
    }

    if(kb.pressing("d")) {
        moveRight = true;
    }else {
        moveRight = false;
    }
}