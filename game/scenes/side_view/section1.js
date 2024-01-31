var tilex;
var map;

var section1 = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800, 450);
        screen.position(0,0);

        this.world.gravity.y=20;
        this.world.gravity.x=0;

        sv_player = new this.Sprite(400, 200, 50, 50);

        tilex = new this.Group();
        tilex.collider='static';
        tilex.tile='g'
        tilex.color = "red";

        map = new this.Tiles(
            [
                'ggggggggggg',
                '.ggggggggg.',
                '..ggggggg..',
                '...ggggg...',
                '....ggg....',
                '.....g.....'
            ],
            400, 300,
            50,50
        );

        td_transistion = new this.Sprite(800, 100, 25,25);
        td_transistion.color = 'purple';
    }

    sketch.draw = function() {
        this.background("black");

        this.camera.x = sv_player.x;
        this.camera.y = sv_player.y;

        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }

        sv_player.overlaps(td_transistion);
    }
}