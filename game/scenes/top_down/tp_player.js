var tp_player;


//functions to control the player
function tp_playerMovement() {
    if(kb.pressing("w")) {
        tp_player.y -= 5;
    }

    if(kb.pressing("a")) {
        tp_player.x -= 5;
    }

    if(kb.pressing("s")) {
        tp_player.y += 5;
    }

    if(kb.pressing("d")) {
        tp_player.x += 5;
    }
}