import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
  ActivityIndicator,
} from 'react-native';

const KYCVerification = () => {
  const [kycStatus, setKycStatus] = useState('Not Verified'); // Initial KYC Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [idNumber, setIdNumber] = useState(''); // For user to input their ID Number

  const handleKYCSubmit = async () => {
    if (!idNumber.trim()) {
      Alert.alert('Error', 'Please enter your ID number!');
      return;
    }

    setIsSubmitting(true);

    // Simulate KYC API call
    setTimeout(() => {
      setIsSubmitting(false);
      setKycStatus('Verified');
      Alert.alert('Success', 'Your KYC has been verified successfully!');
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>KYC Verification</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Current KYC Status:</Text>
        <Text style={[styles.status, kycStatus === 'Verified' ? styles.verified : styles.notVerified]}>
          {kycStatus}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Enter your ID Number for KYC Verification:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter ID Number"
          value={idNumber}
          onChangeText={setIdNumber}
        />
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleKYCSubmit}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.submitButtonText}>Submit for Verification</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 8,
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  verified: {
    color: '#28a745', // Green color for verified
  },
  notVerified: {
    color: '#dc3545', // Red color for not verified
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 14,
  },
  submitButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default KYCVerification;
