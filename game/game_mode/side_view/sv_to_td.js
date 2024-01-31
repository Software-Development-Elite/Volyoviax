var sv;

function sv_transistion_draw() {
    if(sv_player.overlaps(sv_transistion)) {
        gameSwitch("td");
    }
}