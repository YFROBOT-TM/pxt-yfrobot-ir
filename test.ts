YFIR.connectIrReceiver(DigitalPin.P1, YFIR.IrProtocol.NEC)
YFIR.onIrButton(YFIR.IrButton.Mini_B, YFIR.IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Yes)
})
YFIR.onIrButton(YFIR.IrButton.Mini_A, YFIR.IrButtonAction.Pressed, function () {
    basic.showIcon(IconNames.Heart)
})