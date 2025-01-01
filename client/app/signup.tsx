

import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons'; // Importing Ionicons for the eye icon

const SignUp = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20, gap: 20 }}>
        <Image source={require("@/assets/images/signup.jpg")} style={styles.image} resizeMode="cover" />
        <TextInput placeholder="Enter Your First Name" style={styles.input} />
        <TextInput placeholder="Enter Your Last Name" style={styles.input} />

        {/* Email Verification */}
        <View style={styles.row}>
          <TextInput
            placeholder="Enter Your Email"
            style={[styles.input, styles.flexInput]}
          />
          <TouchableOpacity>
            <Link href="/verification">
              <Text style={styles.verifyText}>Verify</Text>
            </Link>
          </TouchableOpacity>
        </View>

        {/* Mobile Number Verification */}
        <View style={styles.row}>
          <TextInput
            placeholder="Enter Your Mobile No."
            style={[styles.input, styles.flexInput]}
          />
          <TouchableOpacity>
            <Link href="/verification">
              <Text style={styles.verifyText}>Verify</Text>
            </Link>
          </TouchableOpacity>
        </View>

        {/* Password Field with Eye Icon Inside Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Enter Your Password"
            style={styles.inputWithIcon}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        {/* Confirm Password Field with Eye Icon Inside Input */}
        <View style={styles.inputWrapper}>
          <TextInput
            placeholder="Confirm Your Password"
            style={styles.inputWithIcon}
            secureTextEntry={!showConfirmPassword}
          />
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            <Ionicons
              name={showConfirmPassword ? 'eye' : 'eye-off'}
              size={24}
              color="gray"
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.signUpButton}>
          <Link href="/login">
            <Text style={styles.signUpButtonText}>Sign Up</Text>
          </Link>
        </TouchableOpacity>

        <Text style={{ textAlign: 'center' }}>
          Already a member?{' '}
          <Link href="/login">
            <Text style={styles.link}>
              Login
            </Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  inputWrapper: {
    position: 'relative',
  },
  inputWithIcon: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    paddingRight: 50, // To leave space for the eye icon
  },
  iconWrapper: {
    position: 'absolute',
    right: 15,
    top: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexInput: {
    flex: 1,
    marginRight: 10,
  },
  verifyText: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 16,
    paddingHorizontal: 5,
    alignSelf: 'center',
  },
  signUpButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 15,
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
