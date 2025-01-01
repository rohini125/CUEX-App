// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Alert } from 'react-native';
// import { RNCamera, BarCodeReadEvent } from 'react-native-camera';
// // Add this import to explicitly type the Icon
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// const Scanner: React.FC = () => {
//   const [scanned, setScanned] = useState(false);

//   const handleBarCodeScanned = (event: BarCodeReadEvent) => {
//     if (!scanned) {
//       setScanned(true);
//       Alert.alert('QR Code Scanned!', `Data: ${event.data}`);
//       setTimeout(() => setScanned(false), 2000); // Reset scanning state after 2 seconds
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.iconContainer}>
//         <MaterialCommunityIcons name="camera" size={30} color="#fff" />
//         <Text style={styles.iconText}>QR Scanner</Text>
//       </View>
//       <RNCamera
//         style={styles.camera}
//         onBarCodeRead={handleBarCodeScanned}
//         captureAudio={false}
//         flashMode={RNCamera.Constants.FlashMode.auto}
//       >
//         <View style={styles.overlay}>
//           <Text style={styles.instruction}>Align QR code within the frame</Text>
//         </View>
//       </RNCamera>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#000',
//   },
//   iconContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: '#1e1e1e',
//   },
//   iconText: {
//     color: '#fff',
//     fontSize: 18,
//     marginLeft: 10,
//   },
//   camera: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//   },
//   overlay: {
//     position: 'absolute',
//     top: 0,
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   instruction: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
// });

// export default Scanner;

import { View, Text } from 'react-native'
import React from 'react'

const scanner = () => {
  return (
    <View>
      <Text>scanner</Text>
    </View>
  )
}

export default scanner
