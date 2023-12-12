var screen;
var saveCount = Number(localStorage.getItem("save count"));
var saveFiles;
var file;

function setup() {
    screen = createCanvas(800, 450);
    screen.position(0,0);

    saveFiles = new Group();
    saveFiles.width = 100;
    saveFiles.height = 50;

    if(saveCount !== null) {
        for(let i  = 1; i <= 3; i++) {
            file = new saveFiles.Sprite();
            file.x = 400;
            file.y = (50*i);
            file.text = ("Save"+i);
        }
    }
}

function draw() {
    background("black");
    

    for(let i = 1; i <= 3; i++){
        if(saveFiles[i-1].mouse.hovering()) {
            saveFiles[i-1].color = "red";
        }else {
            saveFiles[i-1].color = "purple";
        }

        if(saveFiles[i-1].mouse.presses()) {
            let c = localStorage.getItem("save_file"+i)
            let d = JSON.parse(c);
            console.log(d);
            sessionStorage.setItem("data", JSON.stringify(d.playerData));
            sessionStorage.setItem("resume_game", 2);
            window.location.replace("../top_down_game/debug_map/index.html");
        }
    }
}