var npc;

function collidess() {
    if (td_player.colliding(npc) && kb.pressing('i')) {
        console.log("Hello");
    }
    if (td_swing.collides(npc)){
        print("Hit")
    }

}