var td_transistion;

function td_transistion_draw() {
    if(td_player.overlapping(td_transistion)) {
        gameSwitch("sv");
    }
}