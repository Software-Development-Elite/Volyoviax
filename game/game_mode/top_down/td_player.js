var td_player;
const cooldownDuration = 1000; 
let lastSpacePressTime = 0;
var currentTime = Date.now();
let elapsedTime = 0;
let timerInterval;
var stopTimerr = "none";

function td_player_draw() {
    td_playerMovement();
}

function td_playerMovement() {
    if(kb.pressing('up')) {
        moveForward = true;
    }else {
        moveForward = false;
    }

    if(kb.pressing('left')) {
        moveLeft = true;
    }else {
        moveLeft = false;
    }

    if(kb.pressing('down')) {
        moveDown = true;
    }else {
        moveDown = false;
    }

    if(kb.pressing('right')) {
        moveRight = true
    }else {
        moveRight = false;
    }

    function startTimer() {
        stopTimerr = false;
        if ( stopTimerr === false) {
            timerInterval = setInterval(upTimer, 1000);
        }
    }
    
    function upTimer() {
        elapsedTime++;
    }
    
    function stopTimer() {
        if (stopTimerr = true) {
            clearInterval(timerInterval); 
        }
        stopTimerr = 'none';
    }
    
    if (kb.pressing("shift")) {
        if (stopTimerr === 'none') {
            if (playerPPosition === "right" || playerPPosition === "left" || playerPPosition === "down" || playerPPosition === "up") {
                stopTimerr = false;
                if (playerPPosition === "right") {
                    td_player.x += 75;
                } else if (playerPPosition === "left") {
                    td_player.x -= 75;
                } else if (playerPPosition === "down") {
                    td_player.y += 75;
                } else if (playerPPosition === "up") {
                    td_player.y -= 75;
                }
    
                startTimer();
                lastSpacePressTime = currentTime;
    
                setTimeout(function () {
                    stopTimerr = true;
                    stopTimer();
                }, 1000);
            }
        }
    }
} 
