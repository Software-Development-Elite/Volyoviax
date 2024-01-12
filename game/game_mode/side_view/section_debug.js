var sv_sectionState = "debug";
var sv_tiles;
var tile1, tile2;
var debug_map;

function section_debug(sketch) {
    if(sv_sectionState === "debug") {
        debug_map = new sketch.Tiles(
            [
                'g..........',
                'hg.........',
                'hhh........',
                'gggh......h',
                '..........f',
                'g.........f',
                'hgg........',
                'hhhhhh....h',
                '..........f',
                '..........f',
                '..........f',
                'gggggg.....',
                'ggggggggggg',
                '.hhhhhhhhh.',
                '..hhhhhhh..',
                '...hhhhh...',
                '....hhh....',
                '.....h.....'
            ],
            200, 800,
            50, 50
        )
    }
}