

import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';

import { useRouter } from 'expo-router';

const LoginPhone = () => {
  const router = useRouter();
  const [otpModalVisible, setOtpModalVisible] = useState(false);
  const [timer, setTimer] = useState(40); // Initialize timer with 40 seconds

    useEffect(() => {
      let interval: NodeJS.Timeout | undefined; // Explicitly define the type
      if (otpModalVisible && timer > 0) {
          interval = setInterval(() => {
              setTimer((prev) => prev - 1);
          }, 1000);
      } else {
          clearInterval(interval);
      }
      return () => {
          if (interval) clearInterval(interval);
      };
    }, [otpModalVisible, timer]);


  const handleOtpModalClose = () => {
    setOtpModalVisible(false);
    setTimer(40); // Reset timer when modal closes
  };

  const onLogin = () => {
        router.navigate('/LoginEmail');
      };
  
  const onConfirm = () =>{
        router.navigate('/UpiPin');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login to your account</Text>

      {/* Phone Login */}
      <Text style={styles.label}>Phone no.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Phone no."
        keyboardType="phone-pad"
      />
      <TouchableOpacity
        style={styles.getOtpButton}
        onPress={() => setOtpModalVisible(true)}
      >
        <Text style={styles.buttonText}>GET OTP</Text>
      </TouchableOpacity>

      {/* OR Divider */}
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>

      {/* Email Login Button */}
      <TouchableOpacity
        style={styles.emailButton}
        onPress={onLogin}
      >
        <Text style={styles.emailButtonText}>LOG IN WITH EMAIL</Text>
      </TouchableOpacity>

      {/* OTP Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={otpModalVisible}
        onRequestClose={handleOtpModalClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>Verify OTP sent to</Text>
            <Text style={styles.phoneNumber}></Text>
            <TextInput
              style={styles.input}
              placeholder="       Enter OTP      "
              keyboardType="number-pad"
            />
            <TouchableOpacity
              style={styles.confirmButton}
              onPress={handleOtpModalClose}
            >
              <Text style={styles.buttonText} onPress={onConfirm}>CONFIRM</Text>
            </TouchableOpacity>
            <Text style={styles.retryText}>
              {timer > 0
                ? `Didn't receive OTP? Retry in (00:${timer
                    .toString()
                    .padStart(2, '0')})`
                : "Didn't receive OTP?"}
            </Text>
            {timer === 0 && (
              <TouchableOpacity
                style={styles.resendButton}
                onPress={() => setTimer(40)} // Resets the timer
              >
                <Text style={styles.resendButtonText}>Resend OTP</Text>
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={handleOtpModalClose}
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginPhone;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  getOtpButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#aaa',
  },
  orText: {
    marginHorizontal: 10,
    color: '#aaa',
    fontSize: 14,
  },
  emailButton: {
    borderColor: '#007bff',
    borderWidth: 1,
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  emailButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    padding: 20,
    alignItems: 'center',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  retryText: {
    color: '#666',
    marginTop: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 15,
    padding: 5,
  },
  closeButtonText: {
    fontSize: 16,
  },
  resendButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 6,
    marginTop: 10,
  },
  resendButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
});




