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
        sv_player = new this.Sprite(400,225,50,50);
        sv_player.rotationLock = true;

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
    }
}