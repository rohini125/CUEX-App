

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
// import { Link, useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the eye icon

// const SignUp = () => {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//   const onPhone = () => {
//     router.navigate('/login');
//   };

//   const onSignUp = () => {
//     router.navigate('/UpiPin');
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={{ padding: 20, gap: 20 }}>
//         <Image source={require("@/assets/images/signup.jpg")} style={styles.image} resizeMode="cover" />
//         <TextInput placeholder="Enter Your Name" style={styles.input} />
//         <TextInput
//             placeholder="Enter Your Email / Mobile No"
//             style={styles.input}
//           />

//         {/* Password Field with Eye Icon Inside Input */}
//         <View style={styles.inputWrapper}>
//           <TextInput
//             placeholder="Enter Your Password"
//             style={styles.inputWithIcon}
//             secureTextEntry={!showPassword}
//           />
//           <TouchableOpacity
//             style={styles.iconWrapper}
//             onPress={() => setShowPassword(!showPassword)}
//           >
//             <Ionicons
//               name={showPassword ? 'eye' : 'eye-off'}
//               size={24}
//               color="gray"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Confirm Password Field with Eye Icon Inside Input */}
//         <View style={styles.inputWrapper}>
//           <TextInput
//             placeholder="Confirm Your Password"
//             style={styles.inputWithIcon}
//             secureTextEntry={!showConfirmPassword}
//           />
//           <TouchableOpacity
//             style={styles.iconWrapper}
//             onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//           >
//             <Ionicons
//               name={showConfirmPassword ? 'eye' : 'eye-off'}
//               size={24}
//               color="gray"
//             />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity activeOpacity={0.7} style={styles.signUpButton} onPress={onSignUp}>
//             <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//         <Text style={{ textAlign: 'center' }}>
//           Already a member?{' '}
//             <Text style={styles.link} onPress={onPhone}>
//               Sign In
//             </Text>
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#ADD8E6',
//   },
//   image: {
//     width: "100%",
//     height: 250,
//   },
//   input: {
//     // borderWidth: 1,
//     backgroundColor:'#fff',
//     height: 50,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   inputWrapper: {
//     position: 'relative',
//     backgroundColor:'#ADD8E6',
//   },
//   inputWithIcon: {
//     // borderWidth: 1,
//     height: 50,
//     backgroundColor:'#fff',
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     paddingRight: 50, // To leave space for the eye icon
//   },
//   iconWrapper: {
//     position: 'absolute',
//     right: 15,
//     top: 12,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   verifyText: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//     fontSize: 16,
//     paddingHorizontal: 5,
//     alignSelf: 'center',
//   },
//   signUpButton: {
//     backgroundColor: 'black',
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   link: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });


// import React, { useState } from 'react';
// import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
// import { Link, useRouter } from 'expo-router';
// import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the eye icon
// import axios from 'axios'; // Importing axios for API requests

// const SignUp = () => {
//   const router = useRouter();
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [name, setName] = useState('');
//   const [emailOrPhone, setEmailOrPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const onPhone = () => {
//     router.navigate('/login');
//   };

//   const onSignUp = async () => {
//     if (!name || !emailOrPhone || !password || !confirmPassword) {
//       Alert.alert('Error', 'Please fill out all fields.');
//       return;
//     }
//     if (password !== confirmPassword) {
//       Alert.alert('Error', 'Passwords do not match.');
//       return;
//     }

//     try {
//       const response = await axios.post('https://your-backend-url.com/api/signup', {
//         name,
//         emailOrPhone,
//         password,
//       });
//       Alert.alert('Success', response.data.message);
//       router.navigate('/UpiPin');
//     } catch (error) {
//       console.error(error);
//       Alert.alert('Error', 'Failed to sign up. Please try again.');
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={{ padding: 20, gap: 20 }}>
//         <Image source={require("@/assets/images/signup.jpg")} style={styles.image} resizeMode="cover" />
//         <TextInput
//           placeholder="Enter Your Name"
//           style={styles.input}
//           value={name}
//           onChangeText={setName}
//         />
//         <TextInput
//           placeholder="Enter Your Email / Mobile No"
//           style={styles.input}
//           value={emailOrPhone}
//           onChangeText={setEmailOrPhone}
//         />

//         {/* Password Field with Eye Icon Inside Input */}
//         <View style={styles.inputWrapper}>
//           <TextInput
//             placeholder="Enter Your Password"
//             style={styles.inputWithIcon}
//             secureTextEntry={!showPassword}
//             value={password}
//             onChangeText={setPassword}
//           />
//           <TouchableOpacity
//             style={styles.iconWrapper}
//             onPress={() => setShowPassword(!showPassword)}
//           >
//             <Ionicons
//               name={showPassword ? 'eye' : 'eye-off'}
//               size={24}
//               color="gray"
//             />
//           </TouchableOpacity>
//         </View>

//         {/* Confirm Password Field with Eye Icon Inside Input */}
//         <View style={styles.inputWrapper}>
//           <TextInput
//             placeholder="Confirm Your Password"
//             style={styles.inputWithIcon}
//             secureTextEntry={!showConfirmPassword}
//             value={confirmPassword}
//             onChangeText={setConfirmPassword}
//           />
//           <TouchableOpacity
//             style={styles.iconWrapper}
//             onPress={() => setShowConfirmPassword(!showConfirmPassword)}
//           >
//             <Ionicons
//               name={showConfirmPassword ? 'eye' : 'eye-off'}
//               size={24}
//               color="gray"
//             />
//           </TouchableOpacity>
//         </View>

//         <TouchableOpacity activeOpacity={0.7} style={styles.signUpButton} onPress={onSignUp}>
//           <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//         <Text style={{ textAlign: 'center' }}>
//           Already a member?{' '}
//           <Text style={styles.link} onPress={onPhone}>
//             Login
//           </Text>
//         </Text>
//       </View>
//     </ScrollView>
//   );
// };

// export default SignUp;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:'#ADD8E6',
//   },
//   image: {
//     width: "100%",
//     height: 250,
//   },
//   input: {
//     backgroundColor:'#fff',
//     // borderWidth: 1,
//     height: 50,
//     paddingHorizontal: 20,
//     borderRadius: 10,
//   },
//   inputWrapper: {
//     position: 'relative',
//   },
//   inputWithIcon: {
//     // borderWidth: 1,
//     height: 50,
//     backgroundColor:'#fff',
//     paddingHorizontal: 20,
//     borderRadius: 10,
//     paddingRight: 50, // To leave space for the eye icon
//   },
//   iconWrapper: {
//     position: 'absolute',
//     right: 15,
//     top: 12,
//   },
//   signUpButton: {
//     // backgroundColor: 'blue',
//     backgroundColor:'black',
//     borderRadius: 10,
//     alignItems: 'center',
//     paddingVertical: 15,
//   },
//   signUpButtonText: {
//     color: 'white',
//     fontSize: 16,
//   },
//   link: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//   },
// });

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Alert ,StatusBar} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the eye icon
import axios from 'axios'; // Importing axios for API requests

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const API_URL = 'http://172.27.16.1:7000/api/auth/signup';

  const onPhone = () => {
    router.navigate('/login');
  };

  const onSignUp = async () => {
    // Validation
    if (!name || !emailOrPhone || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match.');
      return;
    }

    try {
      // API Request
      const response = await axios.post(API_URL, {
        name,
        emailOrPhone,
        password,
      });

      if (response.status === 201 || response.data.success) {
        Alert.alert('Success', response.data.message || 'Signup successful!');
        // router.navigate('/UpiPin');
        router.navigate('/login');
      } else {
        Alert.alert('Error', response.data.message || 'Something went wrong.');
      }
    } catch (error) {
      // console.error('Signup Error:', error.response || message);
      // const errorMessage = error.response?.data?.message || 'Failed to sign up. Please try again.';
      Alert.alert('Error');
    }
  };

  return (
    <ScrollView style={styles.container}>
         {/* <StatusBar backgroundColor={'#ADD8E6'} barStyle={'dark-content'}/> */}
      <View style={{ padding: 20, gap: 20 }}>
        <Image source={require("@/assets/images/signup.jpg")} style={styles.image} resizeMode="cover" />
        <TextInput
          placeholder="Enter Your Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Enter Your Email / Mobile No"
          style={styles.input}
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
        />
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter Your Password"
            style={styles.inputWithIcon}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons name={showPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Confirm Your Password"
            style={styles.inputWithIcon}
            secureTextEntry={!showConfirmPassword}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons name={showConfirmPassword ? 'eye' : 'eye-off'} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.signUpButton} onPress={onSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{ textAlign: 'center' }}>
          Already a member?{' '}
          <Text style={styles.link} onPress={onPhone}>
            Sign In
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1 , backgroundColor: "#ADD8E6",},
  image: { width: '100%', height: 250 },
  input: { 
    // borderWidth: 1,
    backgroundColor:'#fff',
    height: 50, 
    paddingHorizontal: 20, 
    borderRadius: 10 
    },
  inputWrapper: { position: 'relative' },
  inputWithIcon: {
    // borderWidth: 1,
    backgroundColor:'#fff',
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingRight: 50, // Space for eye icon
  },
  iconWrapper: { position: 'absolute', right: 15, top: 12 },
  signUpButton: { backgroundColor: 'black', borderRadius: 10, alignItems: 'center', paddingVertical: 15 },
  signUpButtonText: { color: 'white', fontSize: 16 },
  link: { color: 'blue', textDecorationLine: 'underline' },
});
