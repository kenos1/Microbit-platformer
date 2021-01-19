input.onButtonPressed(Button.A, function () {
    led.unplot(playerx, playery)
    if (led.point(playerx - 1, playery)) {
        playerx += 1
    }
    playerx += -1
    led.plotBrightness(playerx, playery, 100)
})
input.onButtonPressed(Button.AB, function () {
    playery = playery - 2
})
input.onButtonPressed(Button.B, function () {
    led.unplot(playerx, playery)
    if (led.point(playerx + 1, playery)) {
        playerx += -1
    }
    playerx += 1
    led.plotBrightness(playerx, playery, 100)
})
let gravity = 0
let playerx = 0
let playery = 0
playery = 3
playerx = 2
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . .
        # . . # #
        # # # # #
        `)
})
basic.forever(function () {
    led.unplot(playerx, playery)
    if (!(gravity == 0)) {
        basic.pause(100)
        playery += gravity
    }
    led.plotBrightness(playerx, playery, 100)
})
basic.forever(function () {
    if (!(led.point(playerx, playery + 1))) {
        gravity = 1
    } else {
        gravity = 0
    }
})
