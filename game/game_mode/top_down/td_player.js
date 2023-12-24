var td_player;

function td_player_draw() {
    td_playerMovement();
}

function td_playerMovement() {
    if(kb.pressing('up')) {
        moveForward = true;
    }else {
        moveForward = false;
    }

    if(kb.pressing('left')) {
        moveLeft = true;
    }else {
        moveLeft = false;
    }

    if(kb.pressing('down')) {
        moveDown = true;
    }else {
        moveDown = false;
    }

    if(kb.pressing('right')) {
        moveRight = true
    }else {
        moveRight = false;
    }
}