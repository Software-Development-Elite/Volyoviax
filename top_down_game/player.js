var player;

function player_setup() {
    player = new Sprite(400, 225, 50, 50);
}

function player_draw() {
    player_movement();
}

function player_movement() {
    if(kb.pressing('w')) {
        player.y -= 5;
    }

    if(kb.pressing('a')) {
        player.x -= 5;
    }

    if(kb.pressing('s')) {
        player.y += 5;
    }

    if(kb.pressing('d')) {
        player.x += 5;
    }
}