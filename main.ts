controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("you cant use a controller in this dvd screen!")
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("you cant use a controller in this dvd screen!")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("you cant use a controller in this dvd screen!")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    game.splash("you cant use a controller in this dvd screen!")
})
let mySprite2 = sprites.create(img`
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    fffff11111ffffffffffff11111fffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    ff11111fffffffffffffffffff11111f
    ff111111fffffffffffffffff111111f
    ff1111111fffffffffffffff1111111f
    ff11111111ffffffffffffff1111111f
    ff111111111ffffffffffff11111111f
    fff111111111ffffffffff111111111f
    fff111111111fffffffff111111111ff
    ffff111111111fffffff111111111fff
    fffff111111111111111111111111fff
    ffffff1111111111111111111111ffff
    fffffff11111111111111111111fffff
    fffffff1111111111111111111ffffff
    ffffffff11111111111111111fffffff
    fffffffffff11111111fffffffffffff
    ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff
    `, SpriteKind.Player)
mySprite2.vx = 40
mySprite2.vy = 60
mySprite2.setBounceOnWall(true)
