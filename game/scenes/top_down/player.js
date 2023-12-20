var player;

function playerMovement() {
    if(kb.pressing("w")) {
        player.y -= 5;
    }

    if(kb.pressing("a")) {
        player.x -= 5;
    }

    if(kb.pressing("s")) {
        player.y += 5;
    }

    if(kb.pressing("d")) {
        player.x += 5;
    }
}