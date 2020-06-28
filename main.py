def on_gesture_shake():
    global number
    number = randint(0, 1)
    if number == 1:
        basic.show_icon(IconNames.HAPPY)
    else:
        basic.show_icon(IconNames.SAD)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

number = 0
music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
    MelodyOptions.ONCE)
basic.show_string("Dice game! Shake Me!")

