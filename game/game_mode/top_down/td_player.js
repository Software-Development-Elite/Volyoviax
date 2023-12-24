var td_player;

function td_player_draw() {
    td_playerMovement();
}

function td_playerMovement() {
    if(kb.pressing('w')) {
        moveForward = true;
    }else {
        moveForward = false;
    }

    if(kb.pressing('a')) {
        moveLeft = true;
    }else {
        moveLeft = false;
    }

    if(kb.pressing('s')) {
        moveDown = true;
    }else {
        moveDown = false;
    }

    if(kb.pressing('d')) {
        moveRight = true
    }else {
        moveRight = false;
    }
}