// banksuccess.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const BankSuccessPage = () => {
  const router = useRouter();
  const { amount, paymentDetails, dateTime } = router.query;

  const handleDone = () => {
    // Redirect to the history or main page
    router.push('/history'); // Example path, change to your main screen if needed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Payment Successful</Text>
      <Text style={styles.detail}>Amount: ₹{amount}</Text>
      <Text style={styles.detail}>{paymentDetails}</Text>
      <Text style={styles.detail}>Date & Time: {dateTime}</Text>

      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default BankSuccessPage;
