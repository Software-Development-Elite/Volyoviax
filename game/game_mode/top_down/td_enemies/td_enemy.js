var td_enemy;
var td_enemy_df;
var td_enemy_state = [];
var td_stunned_mode = [];

function td_enemyBehavior() {
    td_player.overlaps(td_enemy);
    for(let i = 0; i<td_enemy.length; i++) {
        td_enemy_df[i].x = td_enemy[i].x;
        td_enemy_df[i].y = td_enemy[i].y;

        if(td_enemy_state[i] === "idle") {
            let test = Math.floor(random(0,100));
            if(frameCount % test === 0) {
                td_randomSequence(i);
            }
        }else if(td_enemy_state[i] === "follow") {
            td_enemy[i].moveTo(td_player.x,td_player.y, 2);
        }

        if(td_player.overlapping(td_enemy_df[i])) {
            td_enemy_state[i] = "follow";
        }else {
            td_enemy_state[i] = "idle"
        }
    }
    console.log(td_enemy_state);
}

function td_randomSequence(a) {
    let x = random(0, 800);
    let y = random(0, 450);
    td_enemy[a].moveTo(x, y, 3);
  }