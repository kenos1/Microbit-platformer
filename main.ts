input.onButtonPressed(Button.A, function () {
    playerx += -1
})
input.onButtonPressed(Button.AB, function () {
    playery = playery - 3
})
input.onButtonPressed(Button.B, function () {
    playerx += 1
})
let gravity = 0
let playerx = 0
let playery = 0
playery = 4
playery = 3
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
basic.forever(function () {
    led.unplot(playerx, playery)
    if (!(led.point(playerx, playery + 1))) {
        gravity = 1
    } else {
        gravity = 0
    }
    playery += gravity
    led.plot(playerx, playery)
})
