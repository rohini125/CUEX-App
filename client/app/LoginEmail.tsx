// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
// import { useRouter } from 'expo-router';

// const LoginEmail = () => {
//   const router = useRouter();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [email, setEmail] = useState('');

//   const onLogin = () => {
//     router.navigate('/UpiPin');
//   };

//   const onPhone = () => {
//     router.navigate('/LoginPhone');
//   };

//   const onForgotPassword = () => {
//     setModalVisible(true); // Show the modal when "Forgot Password?" is clicked
//   };

//   const onResetPassword = () => {
//     // Add logic for sending a reset link (you can implement this with your backend)
//     console.log("Password reset link sent to:", email);
//     setModalVisible(false); // Close the modal after sending the link
//   };

//   const onCloseModal = () => {
//     setModalVisible(false); // Close the modal when "X" is clicked
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Login to your account</Text>

//       <Text style={styles.label}>Email</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your Email"
//         keyboardType="email-address"
//       />

//       <Text style={styles.label}>Password</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter your Password"
//         secureTextEntry={true}
//       />

//       <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
//         <Text style={styles.loginButtonText}>LOG IN</Text>
//       </TouchableOpacity>

//       <TouchableOpacity onPress={onForgotPassword}>
//         <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
//       </TouchableOpacity>

//       <View style={styles.separatorContainer}>
//         <View style={styles.separator} />
//         <Text style={styles.orText}>OR</Text>
//         <View style={styles.separator} />
//       </View>

//       <TouchableOpacity style={styles.phoneLoginButton} onPress={onPhone}>
//         <Text style={styles.phoneLoginButtonText}>LOG IN WITH PHONE</Text>
//       </TouchableOpacity>

//       {/* Modal for Forgot Password */}
//       <Modal
//         animationType="slide"
//         transparent={true}
//         visible={modalVisible}
//         onRequestClose={onCloseModal}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
//               <Text style={styles.closeButtonText}>X</Text>
//             </TouchableOpacity>
//             <Text style={styles.modalHeader}>Forgot Password ?</Text>
//             <Text style={styles.modalDescription}>
//               Enter the email address associated with your account, and we'll email you a link to reset your password.
//             </Text>

//             <Text style={styles.label}>Email</Text>
//             <TextInput
//               style={styles.modalInput}
//               placeholder="Enter your email"
//               keyboardType="email-address"
//               value={email}
//               onChangeText={setEmail}
//             />
//             <TouchableOpacity style={styles.modalButton} onPress={onResetPassword}>
//               <Text style={styles.modalButtonText}>SEND RESET LINK</Text>
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.modalButtonCancel} onPress={onCloseModal}>
//               <Text style={styles.modalButtonTextCancel}>CANCEL</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default LoginEmail;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     padding: 20,
//     justifyContent: 'center',
//   },
//   header: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 30,
//     textAlign: 'center',
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   input: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   loginButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 12,
//     borderRadius: 50,
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   loginButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   forgotPassword: {
//     color: '#007bff',
//     fontSize: 14,
//     textAlign: 'center',
//     fontWeight:'bold',
//   },
//   separatorContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginVertical: 25,
//   },
//   separator: {
//     flex: 1,
//     height: 1,
//     backgroundColor: '#ddd',
//   },
//   orText: {
//     marginHorizontal: 10,
//     color: '#888',
//     fontSize: 14,
//   },
//   phoneLoginButton: {
//     borderWidth: 1,
//     borderColor: '#007bff',
//     paddingVertical: 12,
//     borderRadius: 50,
//     alignItems: 'center',
//   },
//   phoneLoginButtonText: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   // Modal styles
//   modalBackground: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//   },
//   modalContainer: {
//     width: '100%',
//     backgroundColor: '#fff',
//     padding: 20,
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//   },
//   closeButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     padding: 10,
//   },
//   closeButtonText: {
//     fontSize: 18,
//     color: '#333',
//   },
//   modalHeader: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 15,
//   },
//   modalDescription: {
//     fontSize: 14,
//     marginBottom: 15,
//     color: '#555',
//   },
//   modalInput: {
//     height: 50,
//     borderColor: '#ddd',
//     borderWidth: 1,
//     borderRadius: 10,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   modalButton: {
//     backgroundColor: '#007bff',
//     paddingVertical: 12,
//     borderRadius: 50,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   modalButtonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   modalButtonCancel:{
//     backgroundColor: '#fff',
//     paddingVertical: 12,
//     borderRadius: 50,
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   modalButtonTextCancel: {
//     color: '#007bff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });





import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal } from 'react-native';
import { useRouter } from 'expo-router';

const LoginEmail = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [resetSuccess, setResetSuccess] = useState(false); // To track reset success

  const onLogin = () => {
    router.navigate('/UpiPin');
  };

  const onPhone = () => {
    router.navigate('/LoginPhone');
  };

  const onSign = () =>{
    router.navigate('/signup');
  }

  const onForgotPassword = () => {
    setModalVisible(true); // Show the modal when "Forgot Password?" is clicked
  };

  const onResetPassword = () => {
    // Logic for sending the reset link (use your backend for this)
    console.log("Password reset link sent to:", email);
    setResetSuccess(true); // Mark as success
  };

  const onCloseModal = () => {
    setModalVisible(false); // Close the modal when "X" is clicked
    setResetSuccess(false); // Reset the success state when modal is closed
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login to your account</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your Password"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onForgotPassword}>
        <Text style={styles.forgotPassword}>FORGOT PASSWORD?</Text>
      </TouchableOpacity>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.separator} />
      </View>

      <TouchableOpacity style={styles.phoneLoginButton} onPress={onPhone}>
        <Text style={styles.phoneLoginButtonText}>LOG IN WITH PHONE</Text>
      </TouchableOpacity>
      
      <Text style={{ textAlign: 'center', marginTop:15}}>
        Don't have an account?{' '}
          <Text style={styles.link} onPress={onSign}>
            Signup
          </Text>
      </Text>

      {/* Modal for Forgot Password */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={onCloseModal}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {!resetSuccess ? (
              <>
                <Text style={styles.modalHeader}>Forgot Password ?</Text>
                <Text style={styles.modalDescription}>
                  Enter the email address associated with your account, and we'll email you a link to reset your password.
                </Text>

                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.modalInput}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  value={email}
                  onChangeText={setEmail}
                />
                <TouchableOpacity style={styles.modalButton} onPress={onResetPassword}>
                  <Text style={styles.modalButtonText}>SEND RESET LINK</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.modalButtonCancel} onPress={onCloseModal}>
                  <Text style={styles.modalButtonTextCancel}>CANCEL</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <View style={styles.successContainer}>
                  <View style={styles.checkCircle}>
                    <Text style={styles.checkCircleText}>✓</Text>
                  </View>
                  <Text style={styles.successMessage}>Email sent successfully!</Text>
                  <Text style={styles.emailConfirmation}>
                    A link to reset your password has been sent to {email}
                  </Text>
                </View>

                <TouchableOpacity style={styles.modalButtonCancel} onPress={onCloseModal}>
                  <Text style={styles.modalButtonTextCancel}>CLOSE</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default LoginEmail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
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
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#007bff',
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  separatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 25,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  orText: {
    marginHorizontal: 10,
    color: '#888',
    fontSize: 14,
  },
  phoneLoginButton: {
    borderWidth: 1,
    borderColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
  },
  phoneLoginButtonText: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  // Modal styles
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeButtonText: {
    fontSize: 18,
    color: '#333',
  },
  modalHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 15,
    color: '#555',
  },
  modalInput: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalButtonCancel: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 50,
    alignItems: 'center',
    marginBottom: 10,
  },
  modalButtonTextCancel: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Success message styles
  successContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  checkCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#28a745',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkCircleText: {
    fontSize: 24,
    color: '#fff',
  },
  successMessage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#28a745',
  },
  emailConfirmation: {
    fontSize: 14,
    color: '#555',
    marginTop:20,
  },
});
