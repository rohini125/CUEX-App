import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation


export default function LogoutScreen() {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [password, setPassword] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [sentCode, setSentCode] = useState<string | null>(null);
  const router = useRouter(); // UseRouter hook for navigation

  const handleVerify = () => {
    console.log("Verifying..."); // Log to see if this function is triggered
    if (!emailOrNumber || !password) {
      Alert.alert('Error', 'Please enter your email/phone number and password first.');
      return;
    }

    // Simulate account existence and code generation
    const generatedCode = '123456'; // Example verification code
    setSentCode(generatedCode); // Set the generated code
    setIsVerified(true);
    Alert.alert('Verification Code Sent', 'A verification code has been sent to your email/phone.');
  };

  const handleLogout = () => {
    console.log("Logging out..."); // Log to see if the logout function is triggered

    if (!isVerified) {
      console.log("Error: Account not verified"); // Log for error
      Alert.alert('Error', 'Please verify your account first.');
      return;
    }
    if (!verificationCode) {
      console.log("Error: No verification code entered"); // Log for error
      Alert.alert('Error', 'Please enter the verification code.');
      return;
    }
    if (verificationCode !== sentCode) {
      console.log("Error: Invalid verification code"); // Log for error
      Alert.alert('Error', 'Invalid verification code. Please try again.');
      return;
    }

    // Perform logout logic
    console.log("Logout successful"); // Log for successful logout
    Alert.alert('Logged Out', 'You have been logged out successfully.', [
      {
        text: 'OK',
        onPress: () => {
          // Clear form fields after logout
          setEmailOrNumber('');
          setPassword('');
          setVerificationCode('');
          setIsVerified(false);
          setSentCode(null);

          // Redirect to the login page
          router.push('/login'); // Navigate to the login screen
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LOGOUT</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Number/Email"
        value={emailOrNumber}
        onChangeText={setEmailOrNumber}
        placeholderTextColor="#888"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
        secureTextEntry
      />

      <TouchableOpacity
        style={[styles.button, styles.verifyButton]}
        onPress={handleVerify}
        disabled={isVerified}
      >
        <Text style={styles.buttonText}>
          {isVerified ? 'Code Sent' : 'Verify'}
        </Text>
      </TouchableOpacity>

      {isVerified && (
        <TextInput
          style={styles.input}
          placeholder="Enter Verification Code"
          value={verificationCode}
          onChangeText={setVerificationCode}
          placeholderTextColor="#888"
        />
      )}

      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>LOGOUT</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#ADD8E6',
    borderRadius: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#000',
    fontSize: 16,
  },
  button: {
    height: 50,
    width: '100%',
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginVertical: 10,
  },
  verifyButton: {
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
