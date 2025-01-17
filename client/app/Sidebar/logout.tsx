import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useRouter } from 'expo-router'; // Import useRouter for navigation

export default function LogoutScreen() {
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // UseRouter hook for navigation

  const confirmLogout = () => {
    Alert.alert(
      'Confirm Logout', // Title
      'Are you sure you want to logout?', // Message
      [
        {
          text: 'Cancel',
          style: 'cancel', // iOS-specific: Makes it a cancel-style button
        },
        {
          text: 'Confirm',
          onPress: handleLogout, // Call the logout function
        },
      ]
    );
  };

  const handleLogout = () => {
    // Perform logout logic
    Alert.alert('Logged Out', 'You have been logged out successfully.', [
      {
        text: 'OK',
        onPress: () => {
          // Clear fields after logout
          setEmailOrNumber('');
          setPassword('');

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
        placeholder="Enter Email or Phone Number"
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

      <TouchableOpacity style={styles.button} onPress={confirmLogout}>
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
  buttonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});
