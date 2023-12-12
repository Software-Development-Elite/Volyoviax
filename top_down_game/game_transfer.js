var transfer;

function transferSetup(tx, ty) {
    transfer = new Sprite(tx, ty, 25, 25);
    transfer.color = "purple";
    transfer.overlaps(player);
}

function transferDraw() {
    if(player.overlaps(transfer)) {
        window.location.replace("../../side_view_game/debug_map/index.html");
    }
}