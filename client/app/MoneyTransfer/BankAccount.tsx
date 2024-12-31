import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const BankPaymentPage = () => {
  const router = useRouter();
  const [bankAccount, setBankAccount] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [amount, setAmount] = useState('');

  const handleConfirm = () => {
    const numericAmount = parseFloat(amount);

    if (!amount || isNaN(numericAmount) || numericAmount <= 0) {
      Alert.alert('Error', 'Enter a valid amount');
      return;
    }

    if (!bankAccount || !ifscCode) {
      Alert.alert('Error', 'Please provide valid Bank Account and IFSC Code');
      return;
    }

    // Use params instead of query for navigation
    router.push({
      pathname: '/MoneyTransfer/banksuccess',
      params: {
        amount: numericAmount.toString(),
        paymentDetails: `Bank Account: ${bankAccount}, IFSC: ${ifscCode}`,
        dateTime: new Date().toLocaleString(),
      },
    });
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Bank Account"
        style={styles.input}
        value={bankAccount}
        onChangeText={setBankAccount}
      />
      <TextInput
        placeholder="Enter IFSC Code"
        style={styles.input}
        value={ifscCode}
        onChangeText={setIfscCode}
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

export default BankPaymentPage;

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

