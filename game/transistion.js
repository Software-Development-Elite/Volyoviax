var clear;

function sv_switch() {
    if(tp_player.overlaps(sv_transistion)) {
        sessionStorage.setItem("gameState", "sv_game");
        clear = true;
        setup();
        redraw();
    }
}

function td_switch() {
    if(sv_player.overlaps(td_transistion)) {
        sessionStorage.setItem("gameState", "tp_game");
        clear = true;
        setup();
        redraw();
    }
}

function game_clear(sketch) {
   sketch.remove();
}