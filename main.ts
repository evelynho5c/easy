basic.forever(function () {
    music.play(music.createSoundExpression(
    WaveShape.Sine,
    5000,
    5000,
    255,
    255,
    9999,
    SoundExpressionEffect.Tremolo,
    InterpolationCurve.Linear
    ), music.PlaybackMode.LoopingInBackground)
    if (input.lightLevel() > 120) {
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.SmallHeart)
        basic.showLeds(`
            # # # # #
            # # # # .
            # # # . .
            # # . . .
            # . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # # #
            . # # # #
            # # # # #
            `)
        basic.pause(100)
    }
})
