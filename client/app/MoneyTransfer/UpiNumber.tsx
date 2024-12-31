// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useRouter } from 'expo-router';

// const UpiNumberPaymentPage = () => {
//   const router = useRouter();
//   const [upiNumber, setUpiNumber] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleConfirm = () => {
//     const numericAmount = parseFloat(amount);

//     if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
//       Alert.alert('Error', 'Enter a valid amount');
//       return;
//     }

//     if (!/^[0-9]{10}$/.test(upiNumber)) {
//       Alert.alert('Error', 'Enter a valid 10-digit UPI Number');
//       return;
//     }

//     // Use params instead of query for navigation
//     router.push({
//       pathname: '/MoneyTransfer/banksuccess',
//       params: {
//         amount: numericAmount.toString(),
//         paymentDetails: `UPI Number: ${upiNumber}`,
//         dateTime: new Date().toLocaleString(),
//       },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         placeholder="Enter UPI Number"
//         keyboardType="numeric"
//         maxLength={10}
//         style={styles.input}
//         value={upiNumber}
//         onChangeText={setUpiNumber}
//       />
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

// export default UpiNumberPaymentPage;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f9f9f9',
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




import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const UpiNumberPaymentPage = () => {
  const router = useRouter();
  const [upiNumber, setUpiNumber] = useState('');
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    const numericAmount = parseFloat(amount);

    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert('Error', 'Enter a valid amount');
      return;
    }

    if (!/^[0-9]{10}$/.test(upiNumber)) {
      Alert.alert('Error', 'Enter a valid 10-digit UPI Number');
      return;
    }

    // Using params to pass data for the success page
    router.push({
      pathname: '/MoneyTransfer/banksuccess',
      params: {
        amount: numericAmount.toString(),
        paymentDetails: `UPI Number: ${upiNumber}`,
        dateTime: new Date().toLocaleString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter UPI Number"
        keyboardType="numeric"
        maxLength={10}
        style={styles.input}
        value={upiNumber}
        onChangeText={setUpiNumber}
      />
      <TextInput
        placeholder="Enter Amount"
        keyboardType="numeric"
        style={styles.input}
        value={amount}
        onChangeText={setAmount}
      />
      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
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

export default UpiNumberPaymentPage;
