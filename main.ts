input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . . . #
            . . . . .
            . . . . .
            `)
    } else if (number == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # . # . #
            . . . . .
            . . . . .
            `)
    } else if (number == 4) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
    } else if (number == 5) {
        basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            # . # . #
            . . . . .
            . . . . .
            . . . . .
            # . # . #
            `)
    }
})
let number = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.showString("Dice game! Shake Me!")
