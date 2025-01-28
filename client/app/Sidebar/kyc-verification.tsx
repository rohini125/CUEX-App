import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import RNPickerSelect from 'react-native-picker-select';

const KYCVerification = () => {
  const [documentType, setDocumentType] = useState('');
  const [documentNumber, setDocumentNumber] = useState('');
  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [documentImage, setDocumentImage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [kycStatus, setKycStatus] = useState('Not Verified');
  const [otp, setOtp] = useState('');
  const [isMobileVerified, setIsMobileVerified] = useState(false); // For mobile verification state
  const [verificationCode, setVerificationCode] = useState(''); // Store generated verification code
  const router = useRouter();

  const validateDocumentNumber = () => {
    switch (documentType) {
      case 'Aadhar':
        return /^[0-9]{12}$/.test(documentNumber); // Aadhar number validation
      case 'Passport':
        return /^[a-zA-Z0-9]{8,10}$/.test(documentNumber); // Passport number
      case 'PANCard':
        return /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/.test(documentNumber); // PAN Card number
      default:
        return false;
    }
  };

  const handleDocumentUpload = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.canceled) {
      console.log('Image picking was canceled');
    } else if (result.assets && result.assets.length > 0) {
      const { uri, width, height, fileSize } = result.assets[0];
      const fileSizeInMB = (fileSize !== undefined ? fileSize : 0) / (1024 * 1024); // Convert bytes to MB

      if (fileSizeInMB <= 5) {
        setDocumentImage(uri);
        console.log('Image selected:', uri);
      } else {
        Alert.alert('Error', 'The selected image exceeds the 5MB size limit!');
      }
    }
  };

  const handleKYCSubmit = async () => {
    if (!documentType) {
      Alert.alert('Error', 'Please select a document type!');
      return;
    }
    if (!documentNumber.trim() || !validateDocumentNumber()) {
      Alert.alert('Error', `Invalid ${documentType} number!`);
      return;
    }
    if (!fullName.trim()) {
      Alert.alert('Error', 'Full Name is required!');
      return;
    }
    if (!dob.trim()) {
      Alert.alert('Error', 'Date of Birth is required!');
      return;
    }
    if (!mobileNumber.trim()) {
      Alert.alert('Error', 'Mobile Number is required!');
      return;
    }
    if (!documentImage) {
      Alert.alert('Error', 'Please upload the document image!');
      return;
    }
    if (!otp.trim()) {
      Alert.alert('Error', 'OTP verification is required!');
      return;
    }
  
    setIsSubmitting(true);
  
    // Simulate API call or form submission process here
    setTimeout(() => {
      setIsSubmitting(false);
      setKycStatus('Verified'); // Update KYC status to 'Verified'
      Alert.alert('Success', 'Your KYC verification has been completed!');
    }, 2000);
  };
  

  const handleMobileVerification = () => {
    if (!mobileNumber || mobileNumber.length !== 10) {
      Alert.alert('Error', 'Please enter a valid mobile number');
      return;
    }

    // Simulate OTP generation
    const generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
    setVerificationCode(generatedCode);
    setIsMobileVerified(true);
    Alert.alert('OTP Sent', `Your OTP code is: ${generatedCode}`);
  };

  const handleVerifyOtp = () => {
    if (otp === verificationCode) {
      Alert.alert('Success', 'Mobile number verified successfully');
      setIsMobileVerified(false); // Reset after verification
    } else {
      Alert.alert('Error', 'Invalid OTP. Please try again.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.push('/Sidebar/AccountSetting')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>KYC Verification</Text>
      </View>
      <View style={styles.card}>
        <Text style={styles.label}>Document Type:</Text>
        <RNPickerSelect
          onValueChange={(value) => {
            setDocumentType(value);
            setDocumentNumber('');
          }}
          items={[
            { label: 'Aadhar', value: 'Aadhar' },
            { label: 'Passport', value: 'Passport' },
            { label: 'PAN Card', value: 'PANCard' },
          ]}
          placeholder={{ label: 'Select a document type', value: null }}
          value={documentType}
          style={pickerSelectStyles} // Applying the styles here
        />

        <Text style={styles.label}>Document Number:</Text>
        <TextInput
          style={styles.input}
          placeholder={`Enter ${documentType} Number`}
          value={documentNumber}
          onChangeText={setDocumentNumber}
          keyboardType="numeric"
          maxLength={documentType === 'Aadhar' ? 12 : 10}
        />

        <Text style={styles.label}>Full Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your full name"
          value={fullName}
          onChangeText={setFullName}
        />

        <Text style={styles.label}>Date of Birth:</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          value={dob}
          onChangeText={setDob}
        />

        <Text style={styles.label}>Mobile Number:</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.mobileInput]}
            placeholder="Enter your mobile number"
            value={mobileNumber}
            onChangeText={setMobileNumber}
            keyboardType="numeric"
            maxLength={10}
          />
          <TouchableOpacity
            style={styles.verifyButton}
            onPress={handleMobileVerification}
          >
            <Text style={styles.verifyButtonText}>Verify</Text>
          </TouchableOpacity>
        </View>

        {isMobileVerified && (
          <>
            <Text style={styles.label}>Enter OTP:</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              value={otp}
              onChangeText={setOtp}
              keyboardType="numeric"
            />
            <TouchableOpacity onPress={handleVerifyOtp} style={styles.verifyOtpButton}>
              <Text style={styles.verifyOtpButtonText}>Verify OTP</Text>
            </TouchableOpacity>
          </>
        )}

        <TouchableOpacity onPress={handleDocumentUpload} style={styles.uploadButton}>
          <Text style={styles.uploadButtonText}>Upload Document Image</Text>
        </TouchableOpacity>

        {documentImage && (
          <Image source={{ uri: documentImage }} style={styles.uploadedImage} />
        )}

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

      <View style={styles.card}>
        <Text style={styles.label}>KYC Status: {kycStatus}</Text>
      </View>
    </ScrollView>
  );
};

// Picker select styles
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the icon is positioned correctly
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the icon is positioned correctly
  },
});

// Styles for mobile number verification
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#ADD8E6',
  },
  backButton: {
    marginRight: 10,
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 16,
    marginBottom:10
  },
  headerTitle: {
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#E6F2FA',
    padding: 20,
    margin:20,
    borderRadius: 8,
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
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 16,
    fontSize: 14,
  },
  mobileInput: {
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  verifyButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginLeft: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  verifyOtpButton: {
    backgroundColor: 'black',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 10,
  },
  verifyOtpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  uploadButton: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadedImage: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: 'black',
    paddingVertical: 12,
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
