input.onGesture(Gesture.Shake, function () {
    number = randint(0, 1)
    if (number == 1) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
let number = 0
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
basic.showString("Dice game! Shake Me!")
