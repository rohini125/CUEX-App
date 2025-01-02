import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import BankAccount from './BankAccount';
import UpiId from './UpiId';
import UpiNumber from './UpiNumber';

type PaymentType = 'bank' | 'upiId' | 'upiNumber';

const ToBankPay = () => {
  const [selectedPaymentType, setSelectedPaymentType] = useState<PaymentType>('bank'); // Default to 'bank'
  const router = useRouter();

  const handleSelection = (paymentType: PaymentType) => {
    setSelectedPaymentType(paymentType);
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
    textDecorationLine: 'underline',
  },
});


