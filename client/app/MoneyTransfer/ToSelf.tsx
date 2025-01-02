// import React, { useState } from "react";
// import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
// import { useRouter } from "expo-router";

// const SelfTransaction = () => {
//   const router = useRouter();
//   const [amount, setAmount] = useState(""); // amount is a string initially
//   const [description, setDescription] = useState("");

//   const handleTransaction = () => {
//     const numericAmount = Number(amount); // Convert the string to a number

//     if (!numericAmount || isNaN(numericAmount) || numericAmount <= 0) {
//       Alert.alert("Invalid Input", "Please enter a valid amount.");
//       return;
//     }

//     // Simulate a transaction (you can replace this with your API logic)
//     Alert.alert(
//       "Transaction Successful",
//       `You transferred ₹${numericAmount} to your account.\n\nDescription: ${
//         description || "No description provided"
//       }`,
//       [
//         {
//           text: "OK",
//           onPress: () => router.push("/"), // Redirect to homepage
//         },
//       ]
//     );
    
//     // Reset the input fields
//     setAmount("");
//     setDescription("");
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Self Account Transaction</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter Amount"
//         keyboardType="numeric" // Ensures numeric keyboard on mobile
//         value={amount}
//         onChangeText={setAmount} // Update state with text input
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Add Description (Optional)"
//         value={description}
//         onChangeText={setDescription} // Update description state
//       />
//       <Button title="Transfer" onPress={handleTransaction} color="#4CAF50" />
//     </View>
//   );
// };

// export default SelfTransaction;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     padding: 16,
//     backgroundColor: "#f9f9f9",
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     marginBottom: 20,
//   },
//   input: {
//     width: "90%",
//     height: 50,
//     borderWidth: 1,
//     borderColor: "#ddd",
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 15,
//     backgroundColor: "#fff",
//   },
// });




import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, FlatList, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { AntDesign } from '@expo/vector-icons'; // Icon library for React Native

// Define the type for bank accounts
type BankAccount = {
  bankName: string;
  accountNumber: string;
};

const SelfAccountPage = () => {
  const router = useRouter(); // Hook for Expo Router navigation

  // State to manage the list of added bank accounts
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([]);
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [amount, setAmount] = useState('');
  const [selectedAccount, setSelectedAccount] = useState<BankAccount | null>(null);

  // Function to add a new bank account
  const handleAddBankAccount = () => {
    if (bankName && accountNumber) {
      setBankAccounts([...bankAccounts, { bankName, accountNumber }]);
      setBankName('');
      setAccountNumber('');
      Alert.alert('Success', 'Bank account added successfully!');
    } else {
      Alert.alert('Error', 'Please enter both bank name and account number.');
    }
  };

  // Function to transfer money
  const handleTransferMoney = () => {
    if (selectedAccount && amount) {
      Alert.alert(
        'Success',
        `Transferred ₹${amount} to ${selectedAccount.bankName} (Account: ${selectedAccount.accountNumber})`
      );
      setAmount('');
      setSelectedAccount(null);
    } else {
      Alert.alert('Error', 'Please select a bank account and enter the amount.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Back Arrow */}
      <TouchableOpacity style={styles.backButton} onPress={() => router.push('/front')}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>

      <Text style={styles.pageTitle}>Self Account</Text>

      {/* Add Bank Account Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Add Bank Account</Text>
        <TextInput
          placeholder="Bank Name"
          value={bankName}
          onChangeText={setBankName}
          style={styles.input}
        />
        <TextInput
          placeholder="Account Number"
          value={accountNumber}
          onChangeText={setAccountNumber}
          style={styles.input}
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.button} onPress={handleAddBankAccount}>
          <Text style={styles.buttonText}>Add Bank</Text>
        </TouchableOpacity>
      </View>

      {/* Bank Account List */}
      {bankAccounts.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Bank Accounts</Text>
          <FlatList
            data={bankAccounts}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={[
                  styles.bankAccount,
                  selectedAccount === item && { borderColor: '#007BFF' },
                ]}
                onPress={() => setSelectedAccount(item)}
              >
                <Text style={styles.bankText}>{item.bankName}</Text>
                <Text style={styles.bankText}>A/C: {item.accountNumber}</Text>
              </TouchableOpacity>
            )}
            ListEmptyComponent={<Text style={styles.noAccount}>No accounts added yet.</Text>}
          />
        </View>
      )}

      {/* Transfer Money Section */}
      {bankAccounts.length > 0 && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Transfer Money</Text>
          <TextInput
            placeholder="Amount (₹)"
            value={amount}
            onChangeText={setAmount}
            style={styles.input}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.button} onPress={handleTransferMoney}>
            <Text style={styles.buttonText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 10,
    padding: 10,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  section: {
    marginVertical: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  bankAccount: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
  },
  bankText: {
    fontSize: 16,
  },
  noAccount: {
    color: '#999',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default SelfAccountPage;
