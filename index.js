import { NativeModules } from 'react-native'


const { RNUsbPrinter } = NativeModules

BluetoothEscposPrinter.ERROR_CORRECTION = {
    L:1,
    M:0,
    Q:3,
    H:2
}
RNUsbPrinter.BARCODETYPE={
    UPC_A:65,//11<=n<=12
    UPC_E:66,//11<=n<=12
    JAN13:67,//12<=n<=12
    JAN8:68,//7<=n<=8
    CODE39:69,//1<=n<=255
    ITF:70,//1<=n<=255(even numbers)
    CODABAR:71,//1<=n<=255
    CODE93:72,//1<=n<=255
    CODE128:73//2<=n<=255
}
RNUsbPrinter.ROTATION={
    OFF:0,
    ON:1
}
RNUsbPrinter.ALIGN={
    LEFT:0,
    CENTER:1,
    RIGHT:2
}

module.exports = { RNUsbPrinter }