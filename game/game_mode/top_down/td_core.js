function td_setup() {
    if(sceneState === "td") {
        new p5(top_down);

        //TBD
    }
}

function td_draw() {
    if(sceneState === "td") {
        //game functions are called here
        td_player_draw();
        td_combat();
        td_transistion_draw();
    }
}

var top_down = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here
        td_player = new this.Sprite(400, 225, 50, 50);
        td_player.rotationLock = true;

        td_transistion = new this.Sprite(100, 400, 25, 25);
        td_transistion.color = 'purple';

        td_swing = new this.Group();

    }

    sketch.draw = function() {
        this.background("black");

        td_player.overlaps(td_transistion);

        //for scene switching
        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }

        if(did_player_swing_td === true) {
            if(playerPPosition === "down") {
                td_player_swing = new this.Sprite(td_player.x, td_player.y+50, 25, 100);
            }else if(playerPPosition === "left") {
                td_player_swing = new this.Sprite(td_player.x-50, td_player.y, 100, 25);
            }else if(playerPPosition === "up") {
                td_player_swing = new this.Sprite(td_player.x, td_player.y-50, 25, 100);
            }else if(playerPPosition === "right") {
                td_player_swing = new this.Sprite(td_player.x+50, td_player.y, 100, 25);
            }
    
            td_player_swing.visible = false;
    
            td_player.overlaps(td_swing);
    
            td_swing.add(td_player_swing);
            did_player_swing_td = false;
        }else if(did_player_swing_td === false) {
            if(this.frameCount % 1 === 0) {
                td_swing.removeAll();
            }
        }
    }
}