var newGame_button;
var loadGame_button;
var settings;

//local sketch for the main menu of the game
var menu = function(sketch) {
    sketch.setup = function() {
        let screen = this.createCanvas(800,450);
        screen.position(0,0);

        newGame_button = new this.Sprite(300, 150, 80, 50);
        newGame_button.text="New Game";
        newGame_button.textSize = 7.5;

        loadGame_button = new this.Sprite(300, 200, 80, 50);
        loadGame_button.text="Load Game";
        loadGame_button.textSize = 7.5;
    }

    sketch.draw = function() {
        this.background("black");
    }
}

function menuSystem() {
    if(newGame_button.mouse.hovering()) {
        newGame_button.color = 'green';
    }else {
        newGame_button.color = 'red';
    }

    if(loadGame_button.mouse.hovering()) {
        loadGame_button.color = 'green';
    }else {
        loadGame_button.color = 'red';
    }

    if(newGame_button.mouse.pressing()) {
        screenState = "game";
        setup();
        redraw();
    }
}