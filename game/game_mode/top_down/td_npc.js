var npc;
var npcState = "idle";
var collisionOccurred = false;
var npc_df;

var text_ar = ["Hello", "BYE"];
var text_l = text_ar.length;
var box;
var b = 1;

function npc_Collision() {
    if (td_player.overlapping(npc_df) && kb.pressing('i')) {
        console.log("Hello");
        dialogue(0);
        dialogue(1);
        // text_b.visible = true;

    } else {
        // text_b.visible = false;
    }

    function dialogue(a) {
        if(frameCount % 16 === 0) {
            box[a].text = text_ar[a].slice(0, b);
            b += 1;
          }
      }


     
    if (td_swing.collides(npc)){
        print("Hit");

        if (playerPPosition == 'right') {
            npc.x += 30;
        } else if (playerPPosition == 'left') {
            npc.x -= 30;
        } else if (playerPPosition == 'up') {
            npc.y -= 30;
        } else if (playerPPosition == 'down') {
            npc.y += 30;
        } 
        npcState = "follow";
    }

    if(npcState === "follow") {
        td_player.speed = 0;
        if (td_player.collides(npc) || npc.collides(td_player) ) {
            npc.collider = 'k';
            npc.layer = 4;
            collisionOccurred = true;
        } else {
            if (collisionOccurred) {
                setTimeout(() => {
                    npc.collider = 'k';
                }, 500);
                collisionOccurred = false;
            }
        }
        npc.moveTowards(td_player, 0.01);
        if ((playerPPosition === 'right' && td_player.collides(npc)) || (npc.collides(td_player))) {
            td_player.x -= 20; 
        } else if ((playerPPosition === 'left' && td_player.collides(npc)) || (npc.collides(td_player))) {
            td_player.x += 40; 
        } else if ((playerPPosition === 'up' && td_player.collides(npc)) || (npc.collides(td_player))) {
            td_player.y -= 20; 
        } else if ((playerPPosition === 'down' && td_player.collides(npc)) || (npc.collides(td_player))) {
            td_player.y -= 20; 
        }

        }
    }

