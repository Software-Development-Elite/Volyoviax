var sv_transistion;

//local sketch for a single scene in the top-down section of the game
var scene1 = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800,450);
        screen.position(0,0);

        tp_player = new this.Sprite(400,225,50,50);

        sv_transistion = new this.Sprite(200, 400, 25,25);
        sv_transistion.color = 'purple';
        sv_transistion.collider = 'static';
    }

    sketch.draw = function() {
        this.background("black");

        if(clear === true) {
            game_clear(sketch);
            clear = false;
        }

        tp_player.overlaps(sv_transistion);
    }
}