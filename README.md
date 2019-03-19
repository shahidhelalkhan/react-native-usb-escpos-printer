# react-native-usb-escpos-printer

AndroidManifest.xml
```
  <application
    android:allowBackup="true"
  />
  </application>
```

A React Native Library to support USB printer for Android platform 

## Installation

```
npm install react-native-usb-escpos-printer --save
```

## Integrate module

To integrate `react-native-usb-escpos-printer` with the rest of your react app just execute:
```
react-native link react-native-usb-escpos-printer
```

## Usage

```javascript
import { RNUSBPrinter } from 'react-native-usb-escpos-printer';

RNUSBPrinter.printText('This is test print.')
RNUSBPrinter.printBillTextWithCut("<C>This is test print.</C>")
RNUSBPrinter.printBillTextWithCut("<M>This is test print.</M>")
RNUSBPrinter.printBillTextWithCut("<CM>This is test print.</CM>")

```

## Example

```javascript

  componentDidMount = async () => {
    var devices = await RNUSBPrinter.getUSBDeviceList();
    vendorID = 1155
    productId = 22304
    let printedSelected = await RNUSBPrinter.connectPrinter(vendorId, productId);
    this.setState(Object.assign({}, this.state, {
        printedSelected: printedSelected,
        devices: devices,
      }));
  }

  printTest = () => {
    if(this.state.printedSelected) {
      RNUSBPrinter.printText("<C>This is test print.</C>\n");
    }else{
      console.log("No printer connected")
    }
    
  }

  printRawDataTest = () => {
    if(this.state.printedSelected) {
      RNUSBPrinter.printBillTextWithCut("<C>This is test print.</C>");
    }else{
      console.log("No printer connected")
    }
  }

  ...

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.deviceList.map(device => (
            <Text key={device.device_id}>
              {`device_name: ${device.device_name}, device_id: ${device.device_id}, vendor_id: ${device.vendor_id}, product_id: ${device.product_id}`}
            </Text>
            ))
        }
        <TouchableOpacity onPress={() => this.printTest()}>
          <Text> Print Text </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.printRawDataTest()}>
          <Text> Print Bill Text </Text>
        </TouchableOpacity>
      </View>
    )
  }
  ...

```
