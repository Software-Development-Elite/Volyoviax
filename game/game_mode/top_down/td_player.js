var td_player;

function td_player_draw() {
    td_playerMovement();
}

function td_playerMovement() {
    if(kb.pressing('w')) {
        td_player.y -=5;
    }

    if(kb.pressing('a')) {
        td_player.x -=5;
    }

    if(kb.pressing('s')) {
        td_player.y +=5;
    }

    if(kb.pressing('d')) {
        td_player.x +=5;
    }
}