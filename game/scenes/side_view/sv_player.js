var sv_player;

function sv_playerMovement() {
    if(kb.pressing("a")) {
        sv_player.x -= 5;
    }

    if(kb.pressing("d")) {
        sv_player.x += 5;
    }

    if(kb.pressing("space") && sv_player.colliding(tilex)) {
        sv_player.velocity.y = -8;
    }

    sv_player.rotationSpeed = 0;
}