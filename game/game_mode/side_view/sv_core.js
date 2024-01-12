function sv_setup() {
    if(sceneState === "sv") {
        new p5(side_view);

        //TBD
    }
}

function sv_draw() {
    if(sceneState === "sv") {
        //gameplay functions go here
        sv_player_draw();
        sv_combat();
        openplayerMenu();
        sv_transistion_draw();
    }
}

var side_view = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);
        this.world.gravity.y = 20;

        //game's objects are called here
        sv_player = new this.Sprite(501,225,50,50);
        sv_player.rotationLock = true;
        sv_player.bounciness = 0;

        sv_swing = new this.Group();
        sv_swing.collider = 'static';

        sv_transistion = new this.Sprite(300, 200, 25, 25);
        sv_transistion.color = 'purple';

        sv_tiles = new this.Group();
        sv_tiles.collider = 'static';

        tile1 = new sv_tiles.Group();
        tile1.tile = 'g';
        tile1.color = 'green';

        tile2 = new sv_tiles.Group();
        tile2.tile = 'h';
        tile2.color = 'brown';

        tile3 = new sv_tiles.Group();
        tile3.tile = 'f';
        tile3.color = 'blue';


        sv_bob = new this.Sprite(200, -1000, 75, 75);
        sv_bob.color = 'red';
        section_debug(sketch);
    }

    sketch.draw = function() {
        this.background("black");

        this.camera.x = sv_player.x;
        this.camera.y = sv_player.y;

        sv_player.overlaps(sv_transistion);

        //for scene switching
        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }

        if(did_player_swing_sv === true) {
            if(playerPPosition === "left") {
                sv_player_swing = new this.Sprite(sv_player.x-50, sv_player.y, 100, 25);
            }else if(playerPPosition === "right") {
                sv_player_swing = new this.Sprite(sv_player.x+50, sv_player.y, 100, 25);
            }

            sv_player_swing.collider = 'static';
    
            sv_player_swing.visible = false;
    
            allSprites.overlaps(sv_swing);
    
            sv_swing.add(sv_player_swing);
            did_player_swing_sv = false;
        }else if(did_player_swing_sv === false) {
            if(this.frameCount % 1 === 0) {
                sv_swing.removeAll();
            }
        }
    }
}