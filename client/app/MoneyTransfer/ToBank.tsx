// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
// import { useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons';

// const ToBankPay = () => {
//   const router = useRouter();
//   const [accountNumber, setAccountNumber] = useState('');
//   const [ifscCode, setIfscCode] = useState('');
//   const [upiId, setUpiId] = useState('');
//   const [upiNumber, setUpiNumber] = useState('');
//   const [amount, setAmount] = useState('');

//   // Handle payment confirmation
//   const handleConfirm = () => {
//     const numericAmount = parseFloat(amount);

//     if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
//       Alert.alert('Error', 'Enter a valid amount');
//       return;
//     }

//     if (accountNumber && ifscCode) {
//       if (!/^[0-9]{9,18}$/.test(accountNumber)) {
//         Alert.alert('Error', 'Enter a valid Bank Account Number');
//         return;
//       }

//       if (!/^[A-Z]{4}0[A-Z0-9]{6}$/.test(ifscCode)) {
//         Alert.alert('Error', 'Enter a valid IFSC Code');
//         return;
//       }

//       Alert.alert('Payment Successful', `₹${numericAmount} sent to Account Number ${accountNumber}`);
//     } else if (upiId) {
//       if (!/^[\w.-]+@[\w.-]+$/.test(upiId)) {
//         Alert.alert('Error', 'Enter a valid UPI ID');
//         return;
//       }

//       Alert.alert('Payment Successful', `₹${numericAmount} sent to UPI ID ${upiId}`);
//     } else if (upiNumber) {
//       if (!/^[0-9]{10}$/.test(upiNumber)) {
//         Alert.alert('Error', 'Enter a valid 10-digit UPI Number');
//         return;
//       }

//       Alert.alert('Payment Successful', `₹${numericAmount} sent to UPI Number ${upiNumber}`);
//     } else {
//       Alert.alert('Error', 'Please provide valid payment details');
//       return;
//     }

//     // Navigate to Payment Result
//     router.push({
//       pathname: '/MoneyTransfer/successful',
//       params: {
//         success: 'true',
//         amount: numericAmount,
//         dateTime: new Date().toLocaleString(),
//       },
//     });
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Send Money to Bank</Text>
//       </View>

//       {/* Account Number and IFSC */}
//       <TextInput
//         placeholder="Enter Account Number"
//         keyboardType="numeric"
//         maxLength={18}
//         style={styles.input}
//         value={accountNumber}
//         onChangeText={setAccountNumber}
//       />

//       <TextInput
//         placeholder="Enter IFSC Code"
//         autoCapitalize="characters"
//         style={styles.input}
//         value={ifscCode}
//         onChangeText={setIfscCode}
//       />

//       <Text style={styles.orText}>OR</Text>

//       {/* UPI ID */}
//       <TextInput
//         placeholder="Enter UPI ID"
//         style={styles.input}
//         value={upiId}
//         onChangeText={setUpiId}
//       />

//       <Text style={styles.orText}>OR</Text>

//       {/* UPI Number */}
//       <TextInput
//         placeholder="Enter UPI Number"
//         keyboardType="numeric"
//         maxLength={10}
//         style={styles.input}
//         value={upiNumber}
//         onChangeText={setUpiNumber}
//       />

//       {/* Amount */}
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

// export default ToBankPay;

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
//   orText: {
//     textAlign: 'center',
//     fontSize: 16,
//     color: '#666',
//     marginVertical: 10,
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
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';

// type PaymentType = 'bank' | 'upiId' | 'upiNumber'; // Define types for the options

// const ToBankPay = () => {
//   const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType | null>(null); // Store selected payment type

//   // Handle payment method selection
//   const handleSelection = (paymentType: PaymentType) => {
//     setSelectedPaymentType(paymentType); // Update selected payment type
//   };

//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => {}} style={styles.backButton}>
//           <Ionicons name="arrow-back" size={24} color="#333" />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Send Money</Text>
//       </View>

//       {/* Payment Options */}
//       <View style={styles.optionsContainer}>
//         <TouchableOpacity
//           style={[styles.optionButton, selectedPaymentType === 'bank' && styles.selectedOption]} 
//           onPress={() => handleSelection('bank')}
//         >
//           <Text style={styles.optionText}>Bank Account (IFSC)</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.optionButton, selectedPaymentType === 'upiId' && styles.selectedOption]} 
//           onPress={() => handleSelection('upiId')}
//         >
//           <Text style={styles.optionText}>UPI ID</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           style={[styles.optionButton, selectedPaymentType === 'upiNumber' && styles.selectedOption]} 
//           onPress={() => handleSelection('upiNumber')}
//         >
//           <Text style={styles.optionText}>UPI Number</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Display content based on selection */}
//       <View style={styles.content}>
//         {selectedPaymentType === 'bank' && (
//           <Text style={styles.optionContent}>Enter your Bank Account details with IFSC code</Text>
//         )}
//         {selectedPaymentType === 'upiId' && (
//           <Text style={styles.optionContent}>Enter your UPI ID</Text>
//         )}
//         {selectedPaymentType === 'upiNumber' && (
//           <Text style={styles.optionContent}>Enter your UPI Number</Text>
//         )}
//       </View>
//     </View>
//   );
// };

// export default ToBankPay;

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
//   optionsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   optionButton: {
//     backgroundColor: '#007BFF',
//     borderRadius: 10,
//     paddingVertical: 15,
//     paddingHorizontal: 20,
//     flex: 1,
//     marginHorizontal: 5,
//     alignItems: 'center',
//   },
//   optionText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   selectedOption: {
//     borderBottomWidth: 3,
//     borderBottomColor: '#FF6347', // Add a line to indicate selection
//   },
//   content: {
//     marginTop: 20,
//   },
//   optionContent: {
//     fontSize: 16,
//     color: '#333',
//   },
// });


import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import router for navigation

import BankAccount from "./BankAccount";
import UpiId from "./UpiId";
import UpiNumber from "./UpiNumber";

type PaymentType = 'bank' | 'upiId' | 'upiNumber'; // Define types for the options

const ToBankPay = () => {
  const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType | null>(null); // Store selected payment type
  const router = useRouter(); // Use router for navigation

  // Handle payment method selection
  const handleSelection = (paymentType: PaymentType) => {
    setSelectedPaymentType(paymentType); // Update selected payment type
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Send Money</Text>
      </View>

      {/* Payment Options */}
      <View style={styles.optionsContainer}>
        <TouchableOpacity onPress={() => handleSelection('bank')}>
          <Text style={[styles.optionText, selectedPaymentType === 'bank' && styles.selectedOption]}>
            Bank Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelection('upiId')}>
          <Text style={[styles.optionText, selectedPaymentType === 'upiId' && styles.selectedOption]}>
            UPI ID
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleSelection('upiNumber')}>
          <Text style={[styles.optionText, selectedPaymentType === 'upiNumber' && styles.selectedOption]}>
            UPI Number
          </Text>
        </TouchableOpacity>
      </View>

      {/* Display content based on selection */}
      {selectedPaymentType === 'bank' && <BankAccount />}
      {selectedPaymentType === 'upiId' && <UpiId />}
      {selectedPaymentType === 'upiNumber' && <UpiNumber />}
    </View>
  );
};

export default ToBankPay;

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
  optionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  optionText: {
    fontSize: 18,
    color: '#007BFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  selectedOption: {
    textDecorationLine: 'underline', // Underline when option is selected
  },
});
