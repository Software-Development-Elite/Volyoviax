var sv_player;

function sv_player_draw() {
    sv_player_movement();
}

function sv_player_movement() {
    if(kb.pressing("a")) {
        sv_player.x -= 5;
    }

    if(kb.pressing("d")) {
        sv_player.x += 5;
    }

    if(kb.pressing("space") && sv_player.colliding(tile1)) {
        sv_player.velocity.y = -8;
    }
}