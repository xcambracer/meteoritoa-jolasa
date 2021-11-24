input.onButtonPressed(Button.A, function () {
    JOKALARIA.move(-1)
})
input.onButtonPressed(Button.B, function () {
    JOKALARIA.move(1)
})
let METEORITOA: game.LedSprite = null
let JOKALARIA: game.LedSprite = null
JOKALARIA = game.createSprite(2, 4)
basic.forever(function () {
    basic.pause(1000)
    METEORITOA = game.createSprite(randint(0, 4), 0)
    for (let index = 0; index < 4; index++) {
        basic.pause(200)
        METEORITOA.change(LedSpriteProperty.Y, 1)
    }
    if (METEORITOA.isTouching(JOKALARIA)) {
        game.gameOver()
    }
    if (METEORITOA.isTouchingEdge()) {
        game.setScore(1)
        METEORITOA.delete()
    }
})
