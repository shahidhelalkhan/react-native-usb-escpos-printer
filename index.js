import React, { NativeModules } from 'react-native';


import EPToolkit from 'escpos-printer-toolkit';

var RNUsbPrinter = NativeModules.RNUsbPrinter;

var getUSBDeviceList = () => RNUsbPrinter.getUSBDeviceList();

var connectPrinter = (vendorId, productId) => RNUsbPrinter.connectPrinter(vendorId, productId);

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
};
RNUsbPrinter.ROTATION={
    OFF:0,
    ON:1
};
RNUsbPrinter.ALIGN={
    LEFT:0,
    CENTER:1,
    RIGHT:2
};

var closeConn = () => RNUsbPrinter.closeConn();


export const RNUsbPrinter = {
  getUSBDeviceList,
  connectPrinter,
  printText,
  printBillTextWithCut,
  printRawData,
  closeConn
}