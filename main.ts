let Distance = 0
basic.forever(function () {
    Distance = grove.measureInCentimeters(DigitalPin.P2)
    if (Distance == 60) {
        for (let index = 0; index < 4; index++) {
            pins.digitalWritePin(DigitalPin.P0, 1)
            music.playTone(262, music.beat(BeatFraction.Whole))
            basic.pause(100)
            pins.digitalWritePin(DigitalPin.P0, 1)
            basic.pause(100)
        }
    }
    basic.pause(100)
})
