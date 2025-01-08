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
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select'; // Import the picker library

const KYCVerification = () => {
  const [kycStatus, setKycStatus] = useState('Not Verified');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const router = useRouter();

  const validateDocumentNumber = () => {
    switch (documentType) {
      case 'Passport':
        return /^[a-zA-Z0-9]{8,10}$/.test(documentNumber); // Alphanumeric, 8–10 characters
      case 'Aadhar':
        return /^[0-9]{12}$/.test(documentNumber); // Numeric, 12 digits
      case 'DriversLicense':
        return /^[a-zA-Z0-9]{6,16}$/.test(documentNumber); // Alphanumeric, 6–16 characters
      case 'PANCard':
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(documentNumber); // Alphanumeric, 10 characters (specific PAN format)
      default:
        return false;
    }
  };

  const handleKYCSubmit = async () => {
    if (!documentType) {
      Alert.alert('Error', 'Please select a document type!');
      return;
    }

    if (!documentNumber.trim()) {
      Alert.alert('Error', `Please enter your ${documentType} number!`);
      return;
    }

    if (!validateDocumentNumber()) {
      Alert.alert(
        'Error',
        `Invalid ${documentType} number! Please ensure it matches the correct format.`
      );
      return;
    }

    setIsSubmitting(true);

    // Simulate KYC API call
    setTimeout(() => {
      setIsSubmitting(false);
      setKycStatus('Verified');
      Alert.alert('Success', `Your ${documentType} has been verified successfully!`);
    }, 2000);
  };

  const getPlaceholder = () => {
    switch (documentType) {
      case 'Passport':
        return 'Enter Passport Number (8-10 characters)';
      case 'Aadhar':
        return 'Enter Aadhar Number (12 digits)';
      case 'DriversLicense':
        return 'Enter Driver’s License Number (6-16 characters)';
      case 'PANCard':
        return 'Enter PAN Card Number (e.g., ABCDE1234F)';
      default:
        return 'Enter Document Number';
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push('/Sidebar/AccountSetting')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.header}>KYC Verification</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Current KYC Status:</Text>
        <Text style={[styles.status, kycStatus === 'Verified' ? styles.verified : styles.notVerified]}>
          {kycStatus}
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>Select Document Type:</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            setDocumentType(value);
            setDocumentNumber(''); // Clear the document number when type changes
          }}
          items={[
            { label: 'Passport', value: 'Passport' },
            { label: 'Aadhar', value: 'Aadhar' },
            { label: 'Driver’s License', value: 'DriversLicense' },
            { label: 'PAN Card', value: 'PANCard' },
          ]}
          placeholder={{ label: 'Select a document type', value: null }}
          value={documentType}
          style={{
            inputIOS: styles.pickerInput,
            inputAndroid: styles.pickerInput,
            inputWeb:styles.pickerInput,
          }}
        />

        {documentType && (
          <>
            <Text style={styles.label}>Enter {documentType} Number:</Text>
            <TextInput
              style={styles.input}
              placeholder={getPlaceholder()}
              value={documentNumber}
              onChangeText={setDocumentNumber}
              keyboardType={documentType === 'Aadhar' ? 'numeric' : 'default'}
              maxLength={
                documentType === 'Aadhar' ? 12 : documentType === 'Passport' ? 10 : undefined
              }
            />
          </>
        )}

        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleKYCSubmit}
          disabled={isSubmitting || !documentType}
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
  backButton: {
    marginRight: 10,
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
  pickerInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    fontSize: 14,
    color: '#333',
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
