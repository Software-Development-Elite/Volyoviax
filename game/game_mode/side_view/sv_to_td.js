var sv;

function sv_transistion_draw() {
        //dev control (delete in game)
        if(kb.pressing("1")){
            gameSwitch("td")}
    if(sv_player.overlaps(sv_transistion)) {
        gameSwitch("td");
    }
}