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

// import { View, Text } from 'react-native'
// import React from 'react'

// const scanner = () => {
//   return (
//     <View>
//       <Text>scanner</Text>
//     </View>
//   )
// }

// export default scanner




import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import { Feather,Ionicons ,MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';

const QrCodeScanner = () => {
  const router = useRouter();

  const onclick = () => {
    router.push('/front');
  };

  const onHelp = () => {
    router.push('/Sidebar/help');
  };

  return (
    <View style={styles.container}>
      {/* <StatusBar backgroundColor="pink" barStyle="dark-content" /> */}
      <View style={styles.header}>
        <View style={styles.subHeader}>
          <TouchableOpacity onPress={onclick} style={styles.backBtn}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
          <Text style={styles.title}>Scan & Pay</Text>
          <TouchableOpacity style={styles.backBtn} onPress={onHelp}>
            <Feather name="help-circle" size={24} color="#4A4A4A" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
          <Ionicons name="camera" size={30} color="#333" style={{marginBottom:15}}/>
        <Text style={styles.title}>Allow Camera Permission</Text>
        <Text style={styles.description}>CuexPe needs permission to access camera to scan QR code.</Text>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.button}
        >
          <Text style={styles.Btntext}>Go to settings</Text>
        </TouchableOpacity>
        <View style={styles.options} >
        <TouchableOpacity style={styles.backBtn}  activeOpacity={0.7}>
          <Ionicons name="images" size={24} color="#333" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.backBtn}  activeOpacity={0.7} >
          <MaterialCommunityIcons name="flash-off" size={24} color="#333" />
        </TouchableOpacity>
      </View>
     </View>
    </View>
  );
};

export default QrCodeScanner;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgba(0,0,0,.5)',
    backgroundColor: '#fff',
  },
  header: {
    width: '100%',
    height: verticalScale(85),
    backgroundColor: '#ADD8E6',
    justifyContent: 'flex-end',
  },
  subHeader: {
    width: '100%',
    height: verticalScale(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(15),
    marginBottom:20,
  },
  backBtn: {
    width: scale(50),
    height: scale(50),
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: scale(24),
    height: scale(24),
    tintColor: 'white',
  },
  content: {
    flex: 1,
    justifyContent: 'center',  // Centers the content vertically
    alignItems: 'center',      // Centers the content horizontally
    padding: 10,
    backgroundColor: '#ADD8E6',   // Optional: Set a background color for the container
  },
  title: {
    // color: 'white',
    fontWeight:500,
    fontSize: moderateScale(20),
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',             // Lighter color for the description
  },
  button :{
    backgroundColor:'#000000',
    padding:8,
    marginTop:10,
    borderRadius:15,
  },
  Btntext:{
    color:'white',
    fontSize:12,
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(30),
  },
});
