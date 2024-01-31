var npc;
var npcState = "idle";
var collisionOccurred = false;
var npc_df;
var npcL = [];
var npcCount;
var npcHP = 100;

function npc_Spawn() {
    npcCount = 5;
    for(let i=0; i<npcCount; i++){
        var npc_randomx = random(0, 800);
        var npc_randomy = random(0, 445);
        new npc.Sprite(npc_randomx,npc_randomy,50,50);
    }
    console.log(npcL, npc);
}
function npc_Collision() {
for(let i=0; i<npc.length;i++) {
    if (td_swing.collides(npc[i])){
        print("Hit");
        npcHP -= 20;
        print(npcHP)
        if (playerPPosition == 'right') {
            npc[i].x += 30;
        } else if (playerPPosition == 'left') {
            npc[i].x -= 30;
        } else if (playerPPosition == 'up') {
            npc[i].y -= 30;
        } else if (playerPPosition == 'down') {
            npc[i].y += 30;
        } 
        npcState = "follow";
    }
    if(npcState === "follow") {
        td_player.speed = 0;
            npc[i].collider = 'k';
            npc[i].collides(npc[i]);
       /* if (td_player.collides(npc[i]) || npc[i].collides(td_player) ) {
            npc[i].collider = 'k';
            collisionOccurred = true;
        } else {
            if (collisionOccurred) {
                setTimeout(() => {
                    npc[i].collider = 'k';
                }, 500);
                collisionOccurred = false;
            }
         } */
            npc[i].moveTowards(td_player, 0.01);
        }
    }
}
