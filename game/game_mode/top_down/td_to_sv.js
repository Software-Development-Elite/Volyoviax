var td_transistion;

function td_transistion_draw() {
            //dev control (delete in game)
            if(kb.pressing("2")){
                gameSwitch("sv")}
    if(td_player.overlaps(td_transistion)) {
        gameSwitch("sv");
    }
}