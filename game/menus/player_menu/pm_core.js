function pm_setup() {
    if(sceneState === "pm") {
        new p5(player_menu);

        //TBD
    }
}

function pm_draw() {
    if(sceneState === "pm") {
        //game functions are called here
        closeplayerMenu();
    }
}

var player_menu = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        //game objects are called here
        pm_player = new this.Sprite(400,225,64,64);
        pm_player.spriteSheet = 'img/demo_assets/WithoutWalk.png';
        //pm_player.anis.offset.x = 2;
	    pm_player.anis.frameDelay = 5;

        pm_player.addAnis({
            walk: {frames: 10}
        })
        pm_player.changeAni('walk');

        playerStatBlock = new this.Sprite(700, 200, 150, 300);

        p_equipLSlot = new this.Sprite(350, 275, 25, 25);
        p_equipRSlot = new this.Sprite(450, 275, 25, 25);
    }

    sketch.draw = function() {
        this.background("black");

        //for scene switching
        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }
    }
}