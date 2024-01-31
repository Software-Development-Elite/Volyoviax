var sv_player_swing, sv_swing;
var did_player_swing_sv = false;

function sv_combat() {
    if(kb.presses('enter')) {
        did_player_swing_sv = true;
    }

    console.log(playerPPosition);
}