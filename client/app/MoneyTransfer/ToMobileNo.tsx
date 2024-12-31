import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Import icons from react-icons

const ToMobilePay = () => {
  const router = useRouter();
  const [mobileNumber, setMobileNumber] = useState('');
  const [amount, setAmount] = useState('');

  // Handle payment confirmation
  const handleConfirm = () => {
    if (!/^[0-9]{10}$/.test(mobileNumber)) {
      Alert.alert('Error', 'Enter a valid 10-digit mobile number');
      return;
    }

    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert('Error', 'Enter a valid amount');
      return;
    }

    const currentDateTime = new Date().toLocaleString();

    // Navigate to the PaymentResult page with data
    router.push(
      `/MoneyTransfer/successful?success=true&mobileNumber=${mobileNumber}&amount=${amount}&dateTime=${encodeURIComponent(
        currentDateTime
      )}`
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with Back Arrow */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Send Money to Mobile Number</Text>
      </View>

      {/* Mobile Number Input */}
      <TextInput
        placeholder="Enter Mobile Number"
        keyboardType="numeric"
        maxLength={10}
        style={styles.input}
        value={mobileNumber}
        onChangeText={setMobileNumber}
      />

      {/* Amount Input */}
      <TextInput
        placeholder="Enter Amount"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />

      {/* Confirm Button */}
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ToMobilePay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    height: 50,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#007BFF',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});




// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Import icons from react-icons

// const ToMobilePay = () => {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [amount, setAmount] = useState('');

//   // Handle payment confirmation
//   const handleConfirm = () => {
//     if (!/^[0-9]{10}$/.test(mobileNumber)) {
//       Alert.alert('Error', 'Enter a valid 10-digit mobile number');
//       return;
//     }

//     const numericAmount = parseFloat(amount);
//     if (isNaN(numericAmount) || numericAmount <= 0) {
//       Alert.alert('Error', 'Enter a valid amount');
//       return;
//     }

//     const currentDateTime = new Date().toLocaleString();

//     // Navigate to the PaymentResult page with data
//     router.push({
//       pathname: '/MoneyTransfer/successful',
//       params: {
//         success: 'true', // Pass as string
//         mobileNumber,
//         amount,
//         dateTime: currentDateTime,
//       },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Arrow */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Send Money to Mobile Number</Text>
//       </View>

//       {/* Mobile Number Input */}
//       <TextInput
//         placeholder="Enter Mobile Number"
//         keyboardType="numeric"
//         maxLength={10}
//         style={styles.input}
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//       />

//       {/* Amount Input */}
//       <TextInput
//         placeholder="Enter Amount"
//         keyboardType="numeric"
//         style={styles.input}
//         value={amount}
//         onChangeText={setAmount}
//       />

//       {/* Confirm Button */}
//       <TouchableOpacity style={styles.button} onPress={handleConfirm}>
//         <Text style={styles.buttonText}>Confirm</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ToMobilePay;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     height: 50,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });


// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Import icons from react-icons

// const ToMobilePay = () => {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [amount, setAmount] = useState('');

//   // Handle payment confirmation
//   const handleConfirm = () => {
//     if (!/^[0-9]{10}$/.test(mobileNumber)) {
//       Alert.alert('Error', 'Enter a valid 10-digit mobile number');
//       return;
//     }

//     const numericAmount = parseFloat(amount);
//     if (isNaN(numericAmount) || numericAmount <= 0) {
//       Alert.alert('Error', 'Enter a valid amount');
//       return;
//     }

//     Alert.alert('Payment Successful', `₹${numericAmount} sent to ${mobileNumber}`);
//     router.push('/history'); // Navigate to transaction history page
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Arrow */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Send Money to Mobile Number</Text>
//       </View>

//       {/* Mobile Number Input */}
//       <TextInput
//         placeholder="Enter Mobile Number"
//         keyboardType="numeric"
//         maxLength={10}
//         style={styles.input}
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//       />

//       {/* Amount Input */}
//       <TextInput
//         placeholder="Enter Amount"
//         keyboardType="numeric"
//         style={styles.input}
//         value={amount}
//         onChangeText={setAmount}
//       />

//       {/* Confirm Button */}
//       <TouchableOpacity style={styles.button} onPress={handleConfirm}>
//         <Text style={styles.buttonText}>Confirm</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ToMobilePay;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     height: 50,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });





// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, FlatList, Platform } from 'react-native'; // Import Platform here
// import { useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Import icons from react-icons
// import Contacts from 'react-native-contacts'; // Import the library directly
// import { PermissionsAndroid } from 'react-native'; // For Android permissions

// const ToMobilePay = () => {
//   const router = useRouter();
//   const [mobileNumber, setMobileNumber] = useState('');
//   const [amount, setAmount] = useState('');
//   const [contacts, setContacts] = useState<any[]>([]);

//   // Function to request permission for Android
//   const requestContactsPermission = async () => {
//     if (Platform.OS === 'android') {
//       try {
//         const granted = await PermissionsAndroid.request(
//           PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
//           {
//             title: 'Contacts Permission',
//             message: 'This app needs access to your contacts to send money to mobile numbers.',
//             buttonNeutral: 'Ask Me Later',
//             buttonNegative: 'Cancel',
//             buttonPositive: 'OK',
//           }
//         );
//         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//           console.log('Contacts permission granted');
//           fetchContacts(); // Fetch contacts after permission is granted
//         } else {
//           Alert.alert('Permission Denied', 'You need to grant contacts permission to proceed');
//         }
//       } catch (err) {
//         console.warn(err);
//       }
//     } else {
//       // If it's iOS, permission is automatically handled
//       fetchContacts();
//     }
//   };

//   // Function to fetch contacts after permission is granted
//   const fetchContacts = () => {
//     Contacts.getAll()
//       .then((contactsList) => setContacts(contactsList))
//       .catch((e) => console.error('Failed to fetch contacts', e));
//   };

//   // Fetch contacts on component mount
//   useEffect(() => {
//     requestContactsPermission(); // Request permission on mount
//   }, []);

//   const handleConfirm = () => {
//     if (!/^[0-9]{10}$/.test(mobileNumber)) {
//       Alert.alert('Error', 'Enter a valid 10-digit mobile number');
//       return;
//     }

//     const numericAmount = parseFloat(amount);
//     if (isNaN(numericAmount) || numericAmount <= 0) {
//       Alert.alert('Error', 'Enter a valid amount');
//       return;
//     }

//     Alert.alert('Success', `₹${numericAmount} sent to ${mobileNumber}`);
//     router.push('/transaction-history'); // Navigate to transaction history page
//   };

//   const renderContactItem = ({ item }: { item: any }) => (
//     <TouchableOpacity
//       style={styles.contactItem}
//       onPress={() => setMobileNumber(item.phoneNumbers[0]?.number)}
//     >
//       <Text style={styles.contactText}>{item.displayName}</Text>
//       <Text style={styles.contactText}>{item.phoneNumbers[0]?.number}</Text>
//     </TouchableOpacity>
//   );

//   return (
//     <View style={styles.container}>
//       {/* Header with Back Arrow */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Send Money to Mobile</Text>
//       </View>

//       {/* Mobile Number Input with Contact Suggestions */}
//       <TextInput
//         placeholder="Enter Mobile Number"
//         keyboardType="numeric"
//         maxLength={10}
//         style={styles.input}
//         value={mobileNumber}
//         onChangeText={setMobileNumber}
//       />

//       {/* Display contacts if mobileNumber is empty */}
//       {mobileNumber === '' && (
//         <FlatList
//           data={contacts}
//           renderItem={renderContactItem}
//           keyExtractor={(item) => item.recordID.toString()}
//           style={styles.contactList}
//         />
//       )}

//       <TextInput
//         placeholder="Enter Amount"
//         keyboardType="numeric"
//         style={styles.input}
//         value={amount}
//         onChangeText={setAmount}
//       />

//       <TouchableOpacity style={styles.button} onPress={handleConfirm}>
//         <Text style={styles.buttonText}>Confirm</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default ToMobilePay;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   backButton: {
//     marginRight: 10,
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 10,
//     height: 50,
//     paddingHorizontal: 15,
//     marginBottom: 20,
//     fontSize: 16,
//   },
//   button: {
//     backgroundColor: '#007BFF',
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   contactList: {
//     maxHeight: 200,
//     marginBottom: 20,
//   },
//   contactItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   contactText: {
//     fontSize: 16,
//   },
// });


