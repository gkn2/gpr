controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -13
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 9 9 f f 9 9 . . . . 
        . . . . . 9 f f f f f f 9 . . . 
        . . . . f f f f f f f f f f . . 
        . . . 9 f f 2 f f f f f f f 9 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 5 2 2 f f f f f 8 . 
        . . . f f f 2 c c c c 2 f f f . 
        . . . f f f c d d d d c f f f . 
        . . . 1 1 f d d d d d d f 1 1 . 
        . . . 1 1 f f f f f f f f 1 1 . 
        . . . 1 1 d f f f f f f d 1 1 . 
        . . . 1 1 2 d f f f f d 2 1 1 . 
        . . . 1 1 f f f f f f f f 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . 9 9 f f 9 9 . . . . 
        . . . . . 9 f f f f f f 9 . . . 
        . . . . f f f f f f f f f f . . 
        . . . 9 f f 2 f f f f f f f 9 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 5 2 2 f f f f f 8 . 
        . . . f f f 2 c c c c 2 f f f . 
        . . . f f f c d d d d c f f f . 
        . . . 1 1 f d d d d d d f 1 1 . 
        . . . 1 1 f f f f f f f f 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . 9 9 f f 9 9 . . . . 
        . . . . . 9 f f f f f f 9 . . . 
        . . . . f f f f f f f f f f . . 
        . . . 9 f f 2 f f f f f f f 9 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 5 2 2 f f f f f 8 . 
        . . . f f f 2 c c c c 2 f f f . 
        . . . 1 1 1 c d d d d c 1 1 1 . 
        . . . 1 1 1 d d d d d d 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 1 1 1 1 1 1 1 1 . . 
        `,img`
        . . . . . . 9 9 f f 9 9 . . . . 
        . . . . . 9 f f f f f f 9 . . . 
        . . . . f f f f f f f f f f . . 
        . . . 9 f f 2 f f f f f f f 9 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 5 2 2 f f f f f 8 . 
        . . . f f f 2 c c c c 2 f f f . 
        . . . 1 1 1 c d d d d c 1 1 1 . 
        . . . 1 1 1 d d d d d d 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
        . . . 1 2 2 2 2 1 1 2 2 2 2 1 . 
        . . . 1 2 4 4 2 1 1 2 4 4 2 1 . 
        . . . . 2 1 1 2 1 1 2 1 1 2 . . 
        `,img`
        . . . . . . 9 9 f f 9 9 . . . . 
        . . . . . 9 f f f f f f 9 . . . 
        . . . . f f f f f f f f f f . . 
        . . . 9 f f 2 f f f f f f f 9 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 5 2 2 f f f f f 8 . 
        . . . f f f 2 c c c c 2 f f f . 
        . . . 1 1 1 c d d d d c 1 1 1 . 
        . . . 1 1 1 d d d d d d 1 1 1 . 
        . . . 1 1 2 2 1 1 1 1 2 2 1 1 . 
        . . . 1 2 2 2 2 1 1 2 2 2 2 1 . 
        . . . 2 4 4 4 4 2 2 4 4 4 4 2 . 
        . . . 2 4 4 4 4 2 2 4 4 4 4 2 . 
        . . . . 4 1 1 4 1 1 4 1 1 4 . . 
        `,img`
        . . . . . . 9 9 f f 9 9 . . . . 
        . . . . . 9 f f f f f f 9 . . . 
        . . . . f f f f f f f f f f . . 
        . . . 9 f f 2 f f f f f f f 9 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 5 2 2 f f f f f 8 . 
        . . . f f f 2 c c c c 2 f f f . 
        . . . 4 4 4 c d d d d c 5 5 5 . 
        . . . 4 5 5 5 d d d d d 5 5 4 . 
        . . . 4 5 2 5 5 5 5 4 2 5 5 5 . 
        . . . 4 2 2 2 2 5 5 2 2 2 2 5 . 
        . . . 2 5 5 4 5 2 2 5 4 5 5 2 . 
        . . . 2 4 5 5 5 2 2 5 5 4 5 2 . 
        . . . 2 5 5 5 4 2 2 5 5 5 5 2 . 
        `,img`
        . . . . . . 9 9 f f 9 9 . . . . 
        . . . . . 9 f f f f f f 9 . . . 
        . . . . f f f f f f f f f f . . 
        . . . 9 f f 2 f f f f f f f 9 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 2 f f f f f f f 8 . 
        . . . 8 f f 5 2 2 f f f f f 8 . 
        . . . f f f 2 c c c c 2 f f f . 
        . . . f f f c d d d d c f f f . 
        . . . f f f d d d d d d f f f . 
        . . . f f f f f f f f f f f f . 
        . . . 8 f d f f f f f f d f 8 . 
        . . . 8 f 2 d f f f f d 2 f 8 . 
        . . . 8 8 f f f f f f f f 8 8 . 
        . . . . 8 8 . . . . . . 8 8 . . 
        `],
    67,
    false
    )
    if (difficulty == 0) {
        mySprite.vy += -20
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(car)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
function setDifficulty () {
    if (difficulty == 0) {
        spawninterval = 1800
        info.startCountdown(20)
    } else if (difficulty == 1) {
        spawninterval = 1400
        info.startCountdown(30)
    } else if (difficulty == 2) {
        spawninterval = 1000
        info.startCountdown(40)
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += 13
    if (difficulty == 0) {
        mySprite.vy += 20
    }
})
function SpawnRoadCars () {
    car = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    car.setImage(RoadCars._pickRandom())
    car.setPosition(randint(28, 125), -1)
    car.setVelocity(0, 20)
    car.setFlag(SpriteFlag.AutoDestroy, true)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
    pause(100)
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 70, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
let spawninterval = 0
let car: Sprite = null
let difficulty = 0
let mySprite: Sprite = null
let RoadCars: Image[] = []
RoadCars = [img`
    . . . . . . e e a a e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 a 2 2 2 2 2 2 a 2 . . 
    . . . e 2 a 3 2 2 2 2 2 a 2 e . 
    . . . f 2 2 3 2 2 2 2 2 a 2 f . 
    . . . f 2 2 3 2 2 2 2 2 2 2 f . 
    . . . f 2 2 3 2 2 2 2 2 2 2 f . 
    . . . f 2 a 2 3 3 2 2 2 a 2 f . 
    . . . e 2 a e a a a a e a 2 e . 
    . . . e 2 e a 1 1 1 1 a e 2 e . 
    . . . e 2 e 1 1 1 1 1 1 e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `, img`
    . . . . . . e e 1 1 e e . . . . 
    . . . . . e d d d d d d e . . . 
    . . . . d 1 d d d d d d 1 d . . 
    . . . e d 1 1 d d d d d 1 d e . 
    . . . f d d 1 d d d d d 1 d f . 
    . . . f d d 1 d d d d d d d f . 
    . . . f d d 1 d d d d d d d f . 
    . . . f d 1 1 1 1 d d d 1 d f . 
    . . . 1 d 1 1 1 1 1 1 1 1 d 1 . 
    . . . 1 d 1 1 b b b b 1 1 d 1 . 
    . . . 1 d 1 b b b b b b 1 d 1 . 
    . . . 1 1 1 1 1 1 1 1 1 1 1 1 . 
    . . . f 1 d 1 1 1 1 1 1 d 1 f . 
    . . . f 1 1 2 1 1 1 1 2 1 1 f . 
    . . . f f 1 1 1 1 1 1 1 1 f f . 
    . . . . f f . . . . . . f f . . 
    `, img`
    . . . . . . 8 8 7 7 8 8 . . . . 
    . . . . . 8 6 6 6 6 6 6 8 . . . 
    . . . . 6 7 6 6 6 6 6 6 7 6 . . 
    . . . 8 6 7 9 6 6 6 6 6 7 6 8 . 
    . . . f 6 6 9 6 6 6 6 6 7 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 6 9 6 6 6 6 6 6 6 f . 
    . . . f 6 7 6 9 9 6 6 6 7 6 f . 
    . . . 8 6 7 8 7 7 7 7 8 7 6 8 . 
    . . . 8 6 8 7 b b b b 7 8 6 8 . 
    . . . 8 6 8 b b b b b b 8 6 8 . 
    . . . 8 8 8 8 8 8 8 8 8 8 8 8 . 
    . . . f 8 c 8 8 8 8 8 8 c 8 f . 
    . . . f 8 5 c 8 8 8 8 c 5 8 f . 
    . . . f f 8 8 8 8 8 8 8 8 f f . 
    . . . . f f . . . . . . f f . . 
    `]
mySprite = sprites.create(img`
    . . . . . . 9 9 f f 9 9 . . . . 
    . . . . . 9 f f f f f f 9 . . . 
    . . . . f f f f f f f f f f . . 
    . . . 9 f f 2 f f f f f f f 9 . 
    . . . 8 f f 2 f f f f f f f 8 . 
    . . . 8 f f 2 f f f f f f f 8 . 
    . . . 8 f f 2 f f f f f f f 8 . 
    . . . 8 f f 5 2 2 f f f f f 8 . 
    . . . f f f 2 c c c c 2 f f f . 
    . . . f f f c d d d d c f f f . 
    . . . f f f d d d d d d f f f . 
    . . . f f f f f f f f f f f f . 
    . . . 8 f d f f f f f f d f 8 . 
    . . . 8 f 2 d f f f f d 2 f 8 . 
    . . . 8 8 f f f f f f f f 8 8 . 
    . . . . 8 8 . . . . . . 8 8 . . 
    `, SpriteKind.Player)
mySprite.setPosition(80, 100)
controller.moveSprite(mySprite, 100, 0)
scene.setBackgroundImage(img`
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb1bbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    7777777777777777777711111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb11111bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb111117777777777777777777
    `)
scroller.scrollBackgroundWithCamera(scroller.CameraScrollMode.OnlyVertical)
scroller.scrollBackgroundWithSpeed(0, 80)
difficulty = 3
while (difficulty > 2) {
    difficulty = game.askForNumber("Choose difficulty: 0 to 2. Other numbers invalid.", 1)
}
setDifficulty()
game.onUpdateInterval(spawninterval, function () {
    SpawnRoadCars()
})
