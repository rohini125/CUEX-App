// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, TextInput, Alert } from 'react-native';
// import { Text, Button } from 'react-native-paper';
// import { useRouter } from 'expo-router';

// export default function VerificationPage() {
//   const [otp, setOtp] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [timer, setTimer] = useState(120); // Countdown timer in seconds
//   const router = useRouter();

//   // Countdown logic
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prevTimer) => prevTimer - 1);
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [timer]);

//   const handleVerify = () => {
//     if (otp.trim() === '') {
//       Alert.alert('Error', 'Please enter the OTP.');
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate OTP verification API call
//     setTimeout(() => {
//       setIsSubmitting(false);
//       if (otp === '1234') {
//         Alert.alert('Success', 'Your OTP has been verified!', [
//           {
//             text: 'OK',
//             onPress: () => router.replace('/profile'),
//           },
//         ]);
//       } else {
//         Alert.alert('Error', 'Invalid OTP. Please try again.');
//       }
//     }, 2000);
//   };

//   const handleResendOtp = () => {
//     if (timer > 0) return; // Prevent resending if timer is still active
//     setTimer(120); // Reset timer to 2 minutes
//     Alert.alert('OTP Resent', 'A new OTP has been sent to your registered phone number.');
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>OTP Verification</Text>
//       <Text style={styles.description}>
//         Enter the OTP sent to your registered phone number or email.
//       </Text>
//       <TextInput
//         style={styles.input}
//         keyboardType="numeric"
//         maxLength={6}
//         placeholder="Enter OTP"
//         value={otp}
//         onChangeText={setOtp}
//       />
//       <Text
//         style={{
//           fontSize: 14,
//           color: timer > 0 ? 'green' : 'red', // Dynamically color based on timer value
//           textAlign: 'center',
//           marginBottom: 16,
//         }}
//       >
//         {timer > 0
//           ? `Time remaining: ${Math.floor(timer / 60)}:${timer % 60 < 10 ? '0' : ''}${timer % 60}`
//           : 'OTP expired. Please resend OTP.'}
//       </Text>
//       <Button
//         mode="contained"
//         style={styles.verifyButton}
//         onPress={handleVerify}
//         loading={isSubmitting}
//         disabled={isSubmitting || otp.trim() === '' || timer === 0}
//       >
//         Verify OTP
//       </Button>
//       <Button
//         mode="text"
//         onPress={handleResendOtp}
//         disabled={timer > 0}
//       >
//         Resend OTP
//       </Button>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: '#f9f9f9',
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 16,
//     textAlign: 'center',
//   },
//   description: {
//     fontSize: 16,
//     color: 'gray',
//     textAlign: 'center',
//     marginBottom: 32,
//   },
//   input: {
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//     fontSize: 18,
//     textAlign: 'center',
//     paddingVertical: 8,
//     marginBottom: 16,
//   },
//   verifyButton: {
//     backgroundColor: '#6200ee',
//     paddingVertical: 8,
//     marginBottom: 8,
//   },
// });



import { router } from 'expo-router';
import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function VerificationPage() {
  const [otp, setOtp] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [timer, setTimer] = useState(20); // Countdown timer in seconds
  const [timer, setTimer] = useState(120); // 2 minutes = 120 seconds
  const [serverOtp, setServerOtp] = useState(''); // Simulate OTP received from server

  const otpRefs = useRef<(TextInput | null)[]>([]); // Explicitly define type as array of TextInput or null

  useEffect(() => {
    // Simulate API call to get OTP (mock OTP)
    setTimeout(() => setServerOtp('123456'), 2000); // Mock server OTP
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null; // Explicitly define the type of interval
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval); // Clear the interval when the component unmounts
    };
  }, [timer]);

  const handleResendOtp = async () => {
    setTimer(120); // Reset the timer
    setServerOtp('123456'); // Simulate new OTP from server (mocked for now)
    // alert('OTP sent successfully!');
  };

  const handleVerify =()=>{
    router.navigate('/front')
  }

  const handleChangeOtp = (value: string, index: number) => {
    const newOtp = otp.split('');
    newOtp[index] = value;
    setOtp(newOtp.join(''));

    // Move focus to next input when value is entered
    if (value && otpRefs.current[index + 1]) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleDeleteOtp = (index: number) => {
    const newOtp = otp.split('');
    newOtp[index] = '';
    setOtp(newOtp.join(''));

    // Move focus to previous input when a value is deleted
    if (!otp[index] && otpRefs.current[index - 1]) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>OTP</Text>
      <Text style={styles.description}>
       Please wait for an SMS confirmation code and enter it.
      </Text>
      <View style={styles.otpContainer}>
        {[...Array(6)].map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (otpRefs.current[index] = ref)} // Setting the reference to otpRefs
            style={styles.otpBox}
            keyboardType="numeric"
            maxLength={1}
            value={otp[index] || ''}
            onChangeText={(value) => handleChangeOtp(value, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace') {
                handleDeleteOtp(index);
              }
            }}
          />
        ))}
      </View>
      <TouchableOpacity
          activeOpacity={0.7} 
          style={styles.verifyButton}
          onPress={handleVerify}

      >
        <Text style={styles.verifyButtonText}>Verify OTP</Text>
        </TouchableOpacity>
        {/* in second timer logic */}
          {/* <Text style={styles.retryText}>
            {timer > 0
              ? `Didn't receive OTP? Retry in (00:${timer.toString().padStart(2, '0')})`
              : "Didn't receive OTP?"}
          </Text> */}

          {/* in min timer logic */}
        <Text style={styles.retryText}>
            {timer > 0
              ? `Didn't receive OTP? Retry in (${Math.floor(timer / 60)
                  .toString()
                  .padStart(2, '0')}:${(timer % 60)
                  .toString()
                  .padStart(2, '0')})`
              : "Didn't receive OTP?"}
        </Text>

        {timer === 0 && (
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.resendButton} 
          onPress={handleResendOtp}
        >
          <Text style={styles.resendButtonText}>Resend OTP</Text>
        </TouchableOpacity>
      )}
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 32,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  otpBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: 40,
    height: 50,
    marginHorizontal: 6,
    fontSize: 18,
    textAlign: 'center',
    borderRadius: 5,
  },
  verifyButton: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    marginBottom: 12,
    borderRadius:50,
  },
  verifyButtonText:{
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  retryText: {
    fontSize: 14,
    // color: 'red',
    textAlign: 'center',
    marginTop: 8,
  },
  resendButton: {
    alignSelf: 'center',
    marginTop: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
  },
  resendButtonText: {
    color: 'blue',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
