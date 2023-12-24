var newGame, loadGame;

function mm_buttons() {
    if(newGame.mouse.hovering()) {
        newGame.color = "red";
    }else {
        newGame.color = "blue";
    }

    if(loadGame.mouse.hovering()) {
        loadGame.color = "red";
    }else {
        loadGame.color = "blue";
    }

    if(newGame.mouse.pressing()) {
        gameSwitch("td");
    }
}