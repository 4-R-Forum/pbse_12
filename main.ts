/**
 * There can be several square edged event blocks
 */
let x = 0
let temp = 1;
loops.everyInterval(2000, function () {
    let y = 0
    basic.showString("" + (temp))
})
basic.forever(function () {
    pins.setPull(DigitalPin.P15, PinPullMode.PullNone);
    pins.digitalWritePin(DigitalPin.P14, 0); // set CS low
    basic.pause(1);
    let highByte = pins.spiWrite(0);
    let lowByte = pins.spiWrite(0);
    pins.digitalWritePin(DigitalPin.P15, 1);

    if (lowByte & (1 << 2)) {
        temp = -1000;
    } else {
        let value = (highByte << 5 | lowByte >> 3);
        temp = value >> 2;
    }
})
