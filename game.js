
kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    background: [0, 0, 1]
})
// kaboom()
loadRoot('./imgs/')
loadSprite('coin', 'coin.png')
loadSprite('evil-shroom', 'angry-mashroom.png')
loadSprite('brick', 'brick.png')
loadSprite('mario', 'mario.png')
loadSprite('mashroom', 'mashroom.png')
loadSprite('surprise', 'surprise-block.png')
loadSprite('unboxed', 'unboxed.png')
loadSprite('block', 'block.png')
loadSprite('pipe-top-left', 'top-left.png')
loadSprite('pipe-top-right', 'top-right.png')
loadSprite('pipe-bottom-left', 'bot-left.png')
loadSprite('pipe-bottom-right', 'bot-right.png')

scene("game", () => {
    layers(['bg', 'obj', 'ui'], 'obj')
    const map = [
        "                              ",
        "                              ",
        "                              ",
        "                              ",
        "     @   =*=@=   $            ",
        "                              ",
        "                    -+        ",
        "              ^  ^  ()        ",
        "======================   ====="
    ]
    const levelCfg = {
        height: 20,
        width: 20,
        "=": () => [sprite("block"),area(),solid()],
        // "$": () => [sprite["coin"]],
        "@": () => [sprite["surprise"],area(),solid(),"coin-surprise"],
        // "*": () => [sprite["surprise"],area(),solid(),"mashroom-surprise"],
        "}": () => [sprite["unboxed"],area(),solid()],
        // "-": () => [sprite["pipe-top-left"],area(),solid()],
        // "+": () => [sprite["pipe-top-right"],area(),solid()],
        // "(": () => [sprite["pipe-top-bottom"],area(),solid()],
        // ")": () => [sprite["pipe-top-bottom"],area(),solid()]
    }

    const gameLevel = addLevel(map, levelCfg)
})
go("game")