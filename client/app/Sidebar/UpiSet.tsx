import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import axios, { AxiosError } from "axios";
import { Ionicons } from '@expo/vector-icons';

const SetUPIPinPage = () => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const router = useRouter();

  const handleSetPin = async () => {
    if (pin === confirmPin && pin.length === 4) {
      try {
        // Call API to save the UPI PIN in the backend (example API call)
        const response = await axios.post('https://your-api-endpoint.com/set-upi-pin', {
          pin: pin,
        });
  
        if (response.status === 201) {
          console.log("PIN set successfully: ", response.data.message);
          await SecureStore.setItemAsync("upiPin", pin); // Securely store the PIN
          Alert.alert("Success", "UPI PIN has been set successfully!");
          router.push("/login"); // Navigate to the login page
        } else {
          console.log("Unexpected error: ", response.data.message || "Unknown error occurred.");
          Alert.alert("Error", response.data.message || "Something went wrong.");
        }
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          const axiosError = error as AxiosError<{ message?: string }>; // Proper type added
          const errorMessage = axiosError.response?.data?.message || axiosError.message;
          console.log("Axios Error: ", errorMessage);
          Alert.alert("Error", errorMessage || "Network error occurred.");
        } else if (error instanceof Error) {
          console.log("Generic Error: ", error.message);
          Alert.alert("Error", error.message || "An unknown error occurred.");
        } else {
          console.log("Unexpected error: ", error);
          Alert.alert("Error", "An unknown error occurred.");
        }
      }
    } else {
      Alert.alert("Error", "PIN does not match or it is not a 4-digit PIN!");
    }
  };
  

  const handlePinChange = (input: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (/^\d{0,4}$/.test(input)) {
      setter(input);
    }
  };

  return (
    <View style={{flex:1, backgroundColor:'#ADD8E6'}}>
        {/* Header with Back Arrow */}
        <View style={styles.header}>
            <TouchableOpacity onPress={() => router.push('/Sidebar/AccountSetting')} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="#333" />
            </TouchableOpacity>
            {/* <Text style={{fontSize:22 , fontWeight:'bold'}}>UPI Pin Set</Text> */}
        </View>
        <View style={styles.container}>
            <View style={styles.Content}>
                <Text style={styles.header}>Set Your UPI PIN</Text>
                <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Enter 4-digit PIN"
                maxLength={4}
                keyboardType="numeric"
                value={pin}
                onChangeText={(input) => handlePinChange(input, setPin)}
                />
                <TextInput
                style={styles.input}
                secureTextEntry
                placeholder="Confirm UPI PIN"
                maxLength={4}
                keyboardType="numeric"
                value={confirmPin}
                onChangeText={(input) => handlePinChange(input, setConfirmPin)}
                /> 
                <TouchableOpacity activeOpacity={0.7} style={styles.button} onPress={handleSetPin}>
                <Text style={styles.buttonText}>Set PIN</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ADD8E6",
  },
  backButton: {
    marginRight: 10,
  },
  Content: {
    backgroundColor: "#E6F2FA",
    padding: 28,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 1,
    borderColor: "#ddd",
    width: "100%",
  },
  header: {
    fontSize: 26,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 22,
    marginTop:10,
  },
  input: {
    padding: 12,
    borderRadius: 50,
    marginBottom: 15,
    textAlign: "center",
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SetUPIPinPage;

