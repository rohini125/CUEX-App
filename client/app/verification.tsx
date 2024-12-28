import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Alert } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

export default function VerificationPage() {
  const [otp, setOtp] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [timer, setTimer] = useState(120); // Countdown timer in seconds
  const router = useRouter();

  // Countdown logic
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleVerify = () => {
    if (otp.trim() === '') {
      Alert.alert('Error', 'Please enter the OTP.');
      return;
    }

    setIsSubmitting(true);

    // Simulate OTP verification API call
    setTimeout(() => {
      setIsSubmitting(false);
      if (otp === '1234') {
        Alert.alert('Success', 'Your OTP has been verified!', [
          {
            text: 'OK',
            onPress: () => router.replace('/profile'),
          },
        ]);
      } else {
        Alert.alert('Error', 'Invalid OTP. Please try again.');
      }
    }, 2000);
  };

  const handleResendOtp = () => {
    if (timer > 0) return; // Prevent resending if timer is still active
    setTimer(120); // Reset timer to 2 minutes
    Alert.alert('OTP Resent', 'A new OTP has been sent to your registered phone number.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OTP Verification</Text>
      <Text style={styles.description}>
        Enter the OTP sent to your registered phone number or email.
      </Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        maxLength={6}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
      />
      <Text
        style={{
          fontSize: 14,
          color: timer > 0 ? 'green' : 'red', // Dynamically color based on timer value
          textAlign: 'center',
          marginBottom: 16,
        }}
      >
        {timer > 0
          ? `Time remaining: ${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`
          : 'OTP expired. Please resend OTP.'}
      </Text>
      <Button
        mode="contained"
        style={styles.verifyButton}
        onPress={handleVerify}
        loading={isSubmitting}
        disabled={isSubmitting || otp.trim() === '' || timer === 0}
      >
        Verify OTP
      </Button>
      <Button
        mode="text"
        onPress={handleResendOtp}
        disabled={timer > 0}
      >
        Resend OTP
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 32,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    fontSize: 18,
    textAlign: 'center',
    paddingVertical: 8,
    marginBottom: 16,
  },
  verifyButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 8,
    marginBottom: 8,
  },
});
