/**
 * There can be several square edged event blocks
 */
let y = 0
let x = 0
loops.everyInterval(2000, function () {
    basic.showString("" + (y))
})
basic.forever(function () {
    y = input.max6675Temperature(DigitalPin.P15)
})
