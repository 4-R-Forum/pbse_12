// There can be several square edged event blocks
let cs = DigitalPin.P15
let so = DigitalPin.P14
let highByte = 0
let lowByte = 0
let temp = 1
loops.everyInterval(2000, function () {
    basic.showString("" + (temp))
})
basic.forever(function () {
    pins.setPull(so, PinPullMode.PullNone)
    // set CS low
    pins.digitalWritePin(cs, 0)
    basic.pause(1)
    highByte = pins.spiWrite(0)
    lowByte = pins.spiWrite(0)
    pins.digitalWritePin(so, 1)
    if (lowByte & (1 << 2)) {
        temp = -1000
    } else {
        let value = (highByte << 5 | lowByte >> 3);
temp = value >> 2;
    }
})
