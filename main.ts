input.onButtonPressed(Button.A, function () {
    playerx += -1
})
input.onButtonPressed(Button.B, function () {
    playerx += 1
})
let playerx = 0
let playery = 4
playery = 3
basic.forever(function () {
    led.plot(playerx, playery)
    basic.pause(100)
    basic.clearScreen()
})
basic.forever(function () {
    if (!(led.point(playerx, playery + 1))) {
    	
    } else {
    	
    }
})
