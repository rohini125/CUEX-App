import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity, Alert } from 'react-native';
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

  const API_URL = 'http://192.168.1.16:7000/api/auth/signup';

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
        router.navigate('/UpiPin');
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
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: { flex: 1 },
  image: { width: '100%', height: 250 },
  input: { borderWidth: 1, height: 50, paddingHorizontal: 20, borderRadius: 10 },
  inputWrapper: { position: 'relative' },
  inputWithIcon: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingRight: 50, // Space for eye icon
  },
  iconWrapper: { position: 'absolute', right: 15, top: 12 },
  signUpButton: { backgroundColor: 'blue', borderRadius: 10, alignItems: 'center', paddingVertical: 15 },
  signUpButtonText: { color: 'white', fontSize: 16 },
  link: { color: 'blue', textDecorationLine: 'underline' },
});
