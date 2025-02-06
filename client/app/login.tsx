

// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Modal, StatusBar} from 'react-native';
// // import Mybutton from "@/components/Mybutton";
// // import {useRouter } from 'expo-router';

// // const Login = () => {
// //   const router = useRouter();
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [email, setEmail] = useState('');
// //   const [resetSuccess, setResetSuccess] = useState(false); // To track reset success

// //   const onLogin = () => {
// //     router.navigate('/verification');
// //   };

// //   const onSignUp = () => {
// //     router.navigate('/signup');
// //   };

// //   const onForgotPassword = () => {
// //     setModalVisible(true); // Show the modal when "Forgot Password?" is clicked
// //     };
    
// //     const onResetPassword = () => {
// //     // Logic for sending the reset link (use your backend for this)
// //     console.log("Password reset link sent to:", email);
// //     setResetSuccess(true); // Mark as success
// //     };

// //     const onCloseModal = () => {
// //       setModalVisible(false); // Close the modal when "X" is clicked
// //       setResetSuccess(false); // Reset the success state when modal is closed
// //     };

// //   return (
// //     <ScrollView style={styles.container}>

// //       <StatusBar backgroundColor={'#ADD8e6'} barStyle={'dark-content'}/>
// //       <View style={{ padding: 20, gap: 20 }}>
// //         <Image source={require("@/assets/images/login.jpg")} style={styles.image} resizeMode="cover" />
// //         <TextInput placeholder="Enter Your Email / Mobile no" style={styles.input} />
// //         <TextInput placeholder="Enter Your Password" style={styles.input} secureTextEntry />

// //             <Text style={styles.forgotPassword} onPress={onForgotPassword}>Forgot Password?</Text>
          
// //           <TouchableOpacity activeOpacity={0.7} style={styles.signInButton} onPress={onLogin}>
// //             <Text style={styles.signInButtonText}>Sign In</Text>
// //           </TouchableOpacity>
// //           <Text style={{ textAlign: 'center' }}>
// //           Don't have an account?{' '}
// //             <Text style={styles.link} onPress={onSignUp}>
// //               Signup
// //             </Text>
// //         </Text> 
// //       </View>
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={onCloseModal}
// //       >
// //         <View style={styles.modalBackground}>
// //           <View style={styles.modalContainer}>
// //             <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
// //               <Text style={styles.closeButtonText}>X</Text>
// //             </TouchableOpacity>

// //             {!resetSuccess ? (
// //               <>
// //                 <Text style={styles.modalHeader}>Forgot Password ?</Text>
// //                 <Text style={styles.modalDescription}>
// //                   Enter the email address associated with your account, and we'll email you a link to reset your password.
// //                 </Text>

// //                 <Text style={styles.label}>Email</Text>
// //                 <TextInput
// //                   style={styles.modalInput}
// //                   placeholder="Enter your email"
// //                   keyboardType="email-address"
// //                   value={email}
// //                   onChangeText={setEmail}
// //                 />
// //                 <TouchableOpacity style={styles.modalButton} onPress={onResetPassword}>
// //                   <Text style={styles.modalButtonText}>SEND RESET LINK</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.modalButtonCancel} onPress={onCloseModal}>
// //                   <Text style={styles.modalButtonTextCancel}>CANCEL</Text>
// //                 </TouchableOpacity>
// //               </>
// //             ) : (
// //               <>
// //                 <View style={styles.successContainer}>
// //                   <View style={styles.checkCircle}>
// //                     <Text style={styles.checkCircleText}>✓</Text>
// //                   </View>
// //                   <Text style={styles.successMessage}>Email sent successfully!</Text>
// //                   <Text style={styles.emailConfirmation}>
// //                     A link to reset your password has been sent to {email}
// //                   </Text>
// //                 </View>

// //                 <TouchableOpacity style={styles.modalButtonCancel} onPress={onCloseModal}>
// //                   <Text style={styles.modalButtonTextCancel}>CLOSE</Text>
// //                 </TouchableOpacity>
// //               </>
// //             )}
// //           </View>
// //         </View>
// //       </Modal>
// //     </ScrollView>
// //   );
// // };

// // export default Login;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor:'#ADD8E6',
// //   },
// //   image: {
// //     width: "100%",
// //     height: 300,
// //   },
// //   label: {
// //     fontSize: 16,
// //     marginBottom: 10,
// //   },
// //   input: {
// //     // borderWidth: 1,
// //     height: 50,
// //     paddingHorizontal: 20,
// //     borderRadius: 10,
// //     backgroundColor:'#fff',
// //   },
// //   signInButton: {
// //     backgroundColor: 'black',
// //     borderRadius: 10,
// //     alignItems: 'center',
// //     paddingVertical: 15,
// //   },
// //   signInButtonText: {
// //     color: 'white',
// //     fontSize: 16,
// //   },
// //   link: {
// //     color: 'blue',
// //     textDecorationLine: 'underline',
// //   },
// //   forgotPassword: {
// //     color: 'blue',
// //     fontSize: 14,
// //     textAlign: 'center',
// //     // fontWeight: 'bold',
// //   },
// //   modalBackground: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContainer: {
// //     width: '100%',
// //     backgroundColor: '#fff',
// //     padding: 20,
// //     borderTopLeftRadius: 20,
// //     borderTopRightRadius: 20,
// //   },
// //   closeButton: {
// //     position: 'absolute',
// //     top: 10,
// //     right: 10,
// //     padding: 10,
// //   },
// //   closeButtonText: {
// //     fontSize: 18,
// //     color: '#333',
// //   },
// //   modalHeader: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 15,
// //   },
// //   modalDescription: {
// //     fontSize: 14,
// //     marginBottom: 15,
// //     color: '#555',
// //   },
// //   modalInput: {
// //     height: 50,
// //     borderColor: '#ddd',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     paddingHorizontal: 10,
// //     marginBottom: 20,
// //   },
// //   modalButton: {
// //     backgroundColor: '#007bff',
// //     paddingVertical: 12,
// //     borderRadius: 50,
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   modalButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   modalButtonCancel: {
// //     backgroundColor: '#fff',
// //     paddingVertical: 12,
// //     borderRadius: 50,
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   modalButtonTextCancel: {
// //     color: '#007bff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   // Success message styles
// //   successContainer: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   checkCircle: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#28a745',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   checkCircleText: {
// //     fontSize: 24,
// //     color: '#fff',
// //   },
// //   successMessage: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#28a745',
// //   },
// //   emailConfirmation: {
// //     fontSize: 14,
// //     color: '#555',
// //     marginTop:20,
// //   },
// // });


// ///////////////////////////////////// With Backend ////////////////////////////////////////////////////////////////


// // import React, { useState } from 'react';
// // import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Modal,Alert } from 'react-native';
// // // import Mybutton from "@/components/Mybutton";
// // import {useRouter } from 'expo-router';
// // import axios from 'axios';

// // const Login = () => {
// //   const router = useRouter();
// //   const [modalVisible, setModalVisible] = useState(false);
// //   const [emailOrPhone, setEmailOrPhone] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [resetSuccess, setResetSuccess] = useState(false);
// //   const [error, setError] = useState<string | null>(null); // Ensure error type is defined

// //   const onLogin = async () => {
// //     try {
// //       const response = await axios.post('http://192.168.52.190:9000/api/auth/login', { emailOrPhone, password });
// //       if (response.status === 201 || response.data.success) {
// //               Alert.alert('Success', response.data.message || 'go to verification');
// //               router.navigate('/verification');
// //             } else {
// //               Alert.alert('Error', response.data.message || 'Something went wrong.');
// //             }
// //       // if (response.data.success) {
// //         // router.navigate('/verification');
// //       // } else {
// //       //   setError(response.data.message || 'Login failed');
// //       // }
// //     } catch (err: unknown) {
// //       if (err instanceof Error) {
// //         setError(err.message);
// //       } else {
// //         setError('An unknown error occurred');
// //       }
// //     }
// //   };

// //   const onSignUp = () => {
// //     router.navigate('/signup');
// //   };

// //   const onForgotPassword = () => {
// //     setModalVisible(true);
// //   };

// //   const onResetPassword = async () => {
// //     try {
// //       const response = await axios.post('http://192.168.52.190:9000/api/auth/login', { emailOrPhone });
// //       if (response.data.success) {
// //         setResetSuccess(true);

// //       } else {
// //         setError(response.data.message || 'Failed to send reset link');
// //       }
// //     } catch (err: unknown) {
// //       if (err instanceof Error) {
// //         setError(err.message);
// //       } else {
// //         setError('An unknown error occurred');
// //       }
// //     }
// //   };

// //   const onCloseModal = () => {
// //     setModalVisible(false);
// //     setResetSuccess(false);
// //     setError(null);
// //   };

// //   return (
// //     <ScrollView style={styles.container}>
// //       {/* <Image source={require("@/assets/images/login.jpg")} style={styles.image} resizeMode="cover" /> */}
// //       <View style={{ padding: 20, gap: 20 }}>
// //         <Image source={require("@/assets/images/login.jpg")} style={styles.image} resizeMode="cover" />
// //         <TextInput 
// //           placeholder="Enter Your Email / Mobile no" 
// //           style={styles.input} 
// //           value={emailOrPhone}
// //           onChangeText={setEmailOrPhone}
// //         />
// //         <TextInput 
// //           placeholder="Enter Your Password" 
// //           style={styles.input} 
// //           secureTextEntry 
// //           value={password}
// //           onChangeText={setPassword}
// //         />
// //         <Text style={styles.forgotPassword} onPress={onForgotPassword}>Forgot Password?</Text>

// //        <TouchableOpacity activeOpacity={0.7} style={styles.signInButton} onPress={onLogin}>
// //         <Text style={styles.signInButtonText}>Sign In</Text>
// //         </TouchableOpacity> 
// //         {/* <Mybutton title={"Login"} onPress={onLogin} /> */}
// //         {error && <Text style={styles.errorText}>{error}</Text>}  {/* Display error messages */}
// //         <Text style={{ textAlign: 'center' }}>
// //           Don't have an account?{' '}
// //           <Text style={styles.link} onPress={onSignUp}>
// //             Signup
// //           </Text>
// //         </Text>
// //       </View>
// //       <Modal
// //         animationType="slide"
// //         transparent={true}
// //         visible={modalVisible}
// //         onRequestClose={onCloseModal}
// //       >
// //         <View style={styles.modalBackground}>
// //           <View style={styles.modalContainer}>
// //             <TouchableOpacity style={styles.closeButton} onPress={onCloseModal}>
// //               <Text style={styles.closeButtonText}>X</Text>
// //             </TouchableOpacity>

// //             {!resetSuccess ? (
// //               <>
// //                 <Text style={styles.modalHeader}>Forgot Password ?</Text>
// //                 <Text style={styles.modalDescription}>
// //                   Enter the email address associated with your account, and we'll email you a link to reset your password.
// //                 </Text>
// //                 <Text style={styles.label}>Email</Text>
// //                 <TextInput
// //                   style={styles.modalInput}
// //                   placeholder="Enter your email"
// //                   keyboardType="email-address"
// //                   value={emailOrPhone}
// //                   onChangeText={setEmailOrPhone}
// //                 />
// //                 <TouchableOpacity style={styles.modalButton} onPress={onResetPassword}>
// //                   <Text style={styles.modalButtonText}>SEND RESET LINK</Text>
// //                 </TouchableOpacity>
// //                 <TouchableOpacity style={styles.modalButtonCancel} onPress={onCloseModal}>
// //                   <Text style={styles.modalButtonTextCancel}>CANCEL</Text>
// //                 </TouchableOpacity>
// //               </>
// //             ) : (
// //               <>
// //                 <View style={styles.successContainer}>
// //                   <View style={styles.checkCircle}>
// //                     <Text style={styles.checkCircleText}>✓</Text>
// //                   </View>
// //                   <Text style={styles.successMessage}>Email sent successfully!</Text>
// //                   <Text style={styles.emailConfirmation}>
// //                     A link to reset your password has been sent to {emailOrPhone}
// //                   </Text>
// //                 </View>
// //                 <TouchableOpacity style={styles.modalButtonCancel} onPress={onCloseModal}>
// //                   <Text style={styles.modalButtonTextCancel}>CLOSE</Text>
// //                 </TouchableOpacity>
// //               </>
// //             )}
// //           </View>
// //         </View>
// //       </Modal>
// //     </ScrollView>
// //   );
// // };

// // export default Login;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,

// //   },
// //   image: {
// //     width: "100%",
// //     height: 300,
// //   },
// //   label: {
// //     fontSize: 16,
// //     marginBottom: 10,
// //   },
// //   input: {
// //     borderWidth: 1,
// //     height: 50,
// //     paddingHorizontal: 20,
// //     borderRadius: 10,
// //   },
// // signInButton: {
// //   backgroundColor: 'blue',
// //   borderRadius: 10,
// //   alignItems: 'center',
// //   paddingVertical: 15,
// // },
// // signInButtonText: {
// //   color: 'white',
// //   fontSize: 16,
// // },
// //   link: {
// //     color: 'blue',
// //     textDecorationLine: 'underline',
// //   },
// //   forgotPassword: {
// //     color: 'blue',
// //     fontSize: 14,
// //     textAlign: 'center',
// //   },
// //   modalBackground: {
// //     flex: 1,
// //     justifyContent: 'flex-end',
// //     alignItems: 'center',
// //     backgroundColor: 'rgba(0, 0, 0, 0.5)',
// //   },
// //   modalContainer: {
// //     width: '100%',
// //     backgroundColor: '#fff',
// //     padding: 20,
// //     borderTopLeftRadius: 20,
// //     borderTopRightRadius: 20,
// //   },
// //   closeButton: {
// //     position: 'absolute',
// //     top: 10,
// //     right: 10,
// //     padding: 10,
// //   },
// //   closeButtonText: {
// //     fontSize: 18,
// //     color: '#333',
// //   },
// //   modalHeader: {
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //     marginBottom: 15,
// //   },
// //   modalDescription: {
// //     fontSize: 14,
// //     marginBottom: 15,
// //     color: '#555',
// //   },
// //   modalInput: {
// //     height: 50,
// //     borderColor: '#ddd',
// //     borderWidth: 1,
// //     borderRadius: 10,
// //     paddingHorizontal: 10,
// //     marginBottom: 20,
// //   },
// //   modalButton: {
// //     backgroundColor: '#007bff',
// //     paddingVertical: 12,
// //     borderRadius: 50,
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   modalButtonText: {
// //     color: '#fff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   modalButtonCancel: {
// //     backgroundColor: '#fff',
// //     paddingVertical: 12,
// //     borderRadius: 50,
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   modalButtonTextCancel: {
// //     color: '#007bff',
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //   },
// //   successContainer: {
// //     alignItems: 'center',
// //     marginBottom: 20,
// //   },
// //   checkCircle: {
// //     width: 50,
// //     height: 50,
// //     borderRadius: 25,
// //     backgroundColor: '#28a745',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 10,
// //   },
// //   checkCircleText: {
// //     fontSize: 24,
// //     color: '#fff',
// //   },
// //   successMessage: {
// //     fontSize: 16,
// //     fontWeight: 'bold',
// //     color: '#28a745',
// //   },
// //   emailConfirmation: {
// //     fontSize: 14,
// //     color: '#555',
// //     marginTop: 20,
// //   },
// //   errorText: {
// //     color: 'red',
// //     textAlign: 'center',
// //     marginTop: 10,
// //   },
// // });


// // import React, { useState } from "react";
// // import {
// //   View,
// //   Text,
// //   TextInput,
// //   TouchableOpacity,
// //   ActivityIndicator,
// //   Alert,
// //   StyleSheet,
// // } from "react-native";
// // import axios from "axios";
// // import AsyncStorage from "@react-native-async-storage/async-storage";

// // const Login = () => {
// //   const [emailOrPhone, setEmailOrPhone] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [otp, setOtp] = useState("");
// //   const [step, setStep] = useState(1); // Step 1: Login | Step 2: OTP Verification
// //   const [loading, setLoading] = useState(false);

// //   const API_BASE_URL = "http://192.168.1.16:7000/api/auth"; // Replace with your API URL

// //   // Handle Login and OTP request
// //   const handleLogin = async () => {
// //     if (!emailOrPhone || !password) {
// //       Alert.alert("Error", "Please enter all fields.");
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/login`, {
// //         emailOrPhone,
// //         password,
// //       });

// //       if (response.status === 200) {
// //         Alert.alert("Success", "OTP has been sent to your email or phone.");
// //         setStep(2); // Move to OTP Verification
// //       }
// //     } catch (err) {
// //       Alert.alert("Login Failed");
// //     }
// //     setLoading(false);
// //   };

// //   // Handle OTP Verification
// //   const handleVerifyOtp = async () => {
// //     if (!otp) {
// //       Alert.alert("Error", "Please enter the OTP.");
// //       return;
// //     }
// //     setLoading(true);
// //     try {
// //       const response = await axios.post(`${API_BASE_URL}/verify-otp`, {
// //         emailOrPhone,
// //         otp,
// //       });

// //       if (response.status === 200) {
// //         Alert.alert("Login Successful", "You have been logged in.");
// //         await AsyncStorage.setItem("token", response.data.token); // Store JWT
// //       }
// //     } catch (err) {
// //       Alert.alert("OTP Failed");
// //     }
// //     setLoading(false);
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>{step === 1 ? "Login" : "Verify OTP"}</Text>

// //       {step === 1 ? (
// //         <>
// //           <TextInput
// //             placeholder="Email or Phone"
// //             style={styles.input}
// //             value={emailOrPhone}
// //             onChangeText={setEmailOrPhone}
// //             keyboardType="email-address"
// //           />
// //           <TextInput
// //             placeholder="Password"
// //             style={styles.input}
// //             value={password}
// //             onChangeText={setPassword}
// //             secureTextEntry
// //           />
// //           <TouchableOpacity style={styles.button} onPress={handleLogin} disabled={loading}>
// //             {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Login & Get OTP</Text>}
// //           </TouchableOpacity>
// //         </>
// //       ) : (
// //         <>
// //           <TextInput
// //             placeholder="Enter OTP"
// //             style={styles.input}
// //             value={otp}
// //             onChangeText={setOtp}
// //             keyboardType="number-pad"
// //           />
// //           <TouchableOpacity style={styles.button} onPress={handleVerifyOtp} disabled={loading}>
// //             {loading ? <ActivityIndicator color="white" /> : <Text style={styles.buttonText}>Verify & Login</Text>}
// //           </TouchableOpacity>
// //         </>
// //       )}
// //     </View>
// //   );
// // };

// // export default Login;

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: "center",
// //     alignItems: "center",
// //     backgroundColor: "#f5f5f5",
// //     padding: 20,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: "bold",
// //     marginBottom: 20,
// //   },
// //   input: {
// //     width: "100%",
// //     padding: 12,
// //     marginBottom: 12,
// //     borderWidth: 1,
// //     borderColor: "#ccc",
// //     borderRadius: 5,
// //     backgroundColor: "#fff",
// //   },
// //   button: {
// //     width: "100%",
// //     backgroundColor: "#007bff",
// //     padding: 12,
// //     borderRadius: 5,
// //     alignItems: "center",
// //   },
// //   buttonText: {
// //     color: "white",
// //     fontSize: 16,
// //     fontWeight: "bold",
// //   },
// // });

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Modal, Alert, ActivityIndicator, StatusBar } from 'react-native';
// import { useRouter } from 'expo-router';
// import axios from 'axios';

// const Login = () => {
//   const router = useRouter();
//   const [modalVisible, setModalVisible] = useState(false);
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [resetSuccess, setResetSuccess] = useState(false);
//   const [error, setError] = useState<string | null>(null); // Ensure error type is defined

//   const onLogin = async () => {
//     if (!emailOrPhone || !password) {
//       Alert.alert('Error', 'Please enter email/phone and password.');
//       return;
//     }
//     setLoading(true);
//     try {
//       const response = await axios.post(`${API_URL}/login`, { emailOrPhone, password });
//       if (response.status === 200 ) {
//         Alert.alert('Success', response.data.message || 'Go to verification');
//         router.navigate('/verification');
//       } else {
//         Alert.alert('Error', response.data.message || 'Something went wrong.');
//       }
//     } catch (err) {
//       setError( 'Login failed');
//     }
//     setLoading(false);
//   };

//   const onSignUp = () => {
//     router.navigate('/signup');
//   };

//   const onForgotPassword = () => {
//     setModalVisible(true);
//   };

//   const onResetPassword = async () => {
//     try {
//       const response = await axios.post('http://192.168.52.190:9000/api/auth/login', { emailOrPhone });
//       if (response.data.success) {
//         setResetSuccess(true);

//       } else {
//         setError(response.data.message || 'Failed to send reset link');
//       }
//     } catch (err: unknown) {
//       if (err instanceof Error) {
//         setError(err.message);
//       } else {
//         setError('An unknown error occurred');
//       }
//     }
//   };

//   const onCloseModal = () => {
//     setModalVisible(false);
//     setResetSuccess(false);
//     setError(null);
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <StatusBar backgroundColor="#ADD8E6" barStyle="dark-content"  />
//       <View style={{ padding: 20, gap: 20 }}>
//         <Image source={require('@/assets/images/login.jpg')} style={styles.image} resizeMode="cover" />
//         <TextInput placeholder="Enter Your Email / Mobile no" style={styles.input} value={emailOrPhone} onChangeText={setEmailOrPhone} />
//         <TextInput placeholder="Enter Your Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
//         <Text style={styles.forgotPassword} onPress={onForgotPassword}>Forgot Password?</Text>
//         <TouchableOpacity activeOpacity={0.7} style={styles.signInButton} onPress={onLogin} disabled={loading}>
//           {loading ? <ActivityIndicator color="white" /> : <Text style={styles.signInButtonText}>Sign In</Text>}
//         </TouchableOpacity>
//         {error && <Text style={styles.errorText}>{error}</Text>}
//         <Text style={{ textAlign: 'center' }}>Don't have an account? <Text style={styles.link} onPress={onSignUp}>Signup</Text></Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,

//   },
//   image: {
//     width: "100%",
//     height: 300,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 10,
//   },
//   input: {
//     borderWidth: 1,
//     height: 50,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
// signInButton: {
//   backgroundColor: 'blue',
//   borderRadius: 10,
//   alignItems: 'center',
//   paddingVertical: 15,
// },
// signInButtonText: {
//   color: 'white',
//   fontSize: 16,
// },
//   link: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
//   forgotPassword: {
//     color: 'blue',
//     fontSize: 14,
//     textAlign: 'center',
//   },
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
//   modalButtonCancel: {
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
//   successContainer: {
//     alignItems: 'center',
//     marginBottom: 20,
//   },
//   checkCircle: {
//     width: 50,
//     height: 50,
//     borderRadius: 25,
//     backgroundColor: '#28a745',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   checkCircleText: {
//     fontSize: 24,
//     color: '#fff',
//   },
//   successMessage: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#28a745',
//   },
//   emailConfirmation: {
//     fontSize: 14,
//     color: '#555',
//     marginTop: 20,
//   },
//   errorText: {
//     color: 'red',
//     textAlign: 'center',
//     marginTop: 10,
//   },
// });


import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView, Modal, Alert, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';
import axios from 'axios';

const Login = () => {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState<string | null>(null);

  const API_URL = 'http://192.168.52.190:9000/api/auth/';

  const onLogin = async () => {
    if (!emailOrPhone || !password) {
      Alert.alert('Error', 'Please enter email/phone and password.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(`${API_URL}/login`, { emailOrPhone, password });
      if (response.status === 200 ) {
        Alert.alert('Success', response.data.message || 'Go to verification');
        router.navigate('/verification');
      } else {
        Alert.alert('Error', response.data.message || 'Something went wrong.');
      }
    } catch (err) {
      setError( 'Login failed');
    }
    setLoading(false);
  };

  const onSignUp = () => {
    router.navigate('/signup');
  };

  const onForgotPassword = () => {
    setModalVisible(true);
  };


  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20, gap: 20 }}>
        <Image source={require('@/assets/images/login.jpg')} style={styles.image} resizeMode="cover" />
        <TextInput placeholder="Enter Your Email / Mobile no" style={styles.input} value={emailOrPhone} onChangeText={setEmailOrPhone} />
        <TextInput placeholder="Enter Your Password" style={styles.input} secureTextEntry value={password} onChangeText={setPassword} />
        <Text style={styles.forgotPassword} onPress={onForgotPassword}>Forgot Password?</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.signInButton} onPress={onLogin} disabled={loading}>
          {loading ? <ActivityIndicator color="white" /> : <Text style={styles.signInButtonText}>Sign In</Text>}
        </TouchableOpacity>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <Text style={{ textAlign: 'center' }}>Don't have an account? <Text style={styles.link} onPress={onSignUp}>Signup</Text></Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { 
    flex: 1 ,
    backgroundColor: '#ADD8E6' 
  },
  image: { 
    width: "100%", 
    height: 300 
  },
  input: { 
    // borderWidth: 1, 
    height: 50, 
    paddingHorizontal: 20, 
    borderRadius: 10 ,
    backgroundColor: '#fff'
  },
  signInButton: { backgroundColor: 'black', borderRadius: 10, alignItems: 'center', paddingVertical: 15 },
  signInButtonText: { color: 'white', fontSize: 16 },
  forgotPassword: { color: 'blue', fontSize: 14, textAlign: 'center' },
  link: { color: 'blue', textDecorationLine: 'underline' },
  errorText: { color: 'red', textAlign: 'center', marginTop: 10 },
});