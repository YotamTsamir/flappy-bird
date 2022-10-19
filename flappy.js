
kaboom()

loadSprite("bird", "./imgs/bird.png")
loadSprite("bg", "./imgs/sky.jpg")
loadSprite("pipe", "./imgs/pipe-green.png")

let highscore = 0

scene("game", () => {

    const PIPE_GAP = 200
    let score = 0

    add([
        sprite("bg", { width: width(), height: height() })
    ])


    function makePipes() {
        const offset = rand(-50, 50)
        add([
            sprite("pipe"),
            scale(1.2),
            pos(width(), height() / 2 + offset + PIPE_GAP / 2),
            "pipe",
            area(),
            { passed: false }
        ])
        add([
            sprite("pipe", { flipY: true }),
            scale(1.2),
            pos(width(), height() / 2 + offset - PIPE_GAP / 2),
            origin("botleft"),
            "pipe",
            area()
        ])
    }
    loop(1.5, () => {
        makePipes()
    })



    action("pipe", (pipe) => {
        pipe.move(-160, 0)
        if (!pipe.passed && pipe.pos.x < player.pos.x) {
            pipe.passed = true
            score += 0.5
            scoreText.text = score
        }
    })

    const player = add([
        sprite("bird"),
        scale(1.5),
        pos(80, 40),
        area(),
        body()
    ])
    const scoreText = add([
        text(score)
    ])
    player.action(() => {
        if (player.pos.y > height() || player.pos.y < 0) go("gameOver", score)
    })

    player.collides("pipe", () => {
        go("gameOver", score)
    })

    keyPress("space", () => {
        player.jump(400)
    }
    )
})

scene("gameOver", (score) => {
    if(score > highscore){
        highscore = score
    }
    add([
        text("game over!\n" + "score:" + score+
        "\nhigh score is:" + highscore)
    ])

    keyPress("space", () => {
        go("game")
    }
    )
})

go("game")