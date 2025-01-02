// import React, { useState } from "react";
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
// import { Link, useRouter } from "expo-router";

// const SetUPIPinPage = () => {
//   const [pin, setPin] = useState("");
//   const [confirmPin, setConfirmPin] = useState("");
//   const router = useRouter();

//   const handleSetPin = () => {
//     if (pin === confirmPin && pin.length === 4) {
//       // Logic to set the PIN
//       alert("UPI PIN has been set!");
//       // After setting the PIN, navigate to the next page (e.g., Home page)
//       router.push("/login");  // Example: Home page
//     } else {
//       alert("PIN does not match or it is not a 4-digit PIN!");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Set Your UPI PIN</Text>
//       <TextInput
//         style={styles.input}
//         secureTextEntry
//         placeholder="Enter 4-digit PIN"
//         maxLength={4}
//         value={pin}
//         onChangeText={setPin}
//       />
//       <TextInput
//         style={styles.input}
//         secureTextEntry
//         placeholder="Confirm UPI PIN"
//         maxLength={4}
//         value={confirmPin}
//         onChangeText={setConfirmPin}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSetPin}>
//           <Text style={styles.buttonText}>Set PIN</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "#f0f8ff",
//     padding: 20,
//   },
//   header: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#4a90e2",
//     marginBottom: 20,
//   },
//   input: {
//     width: "80%",
//     padding: 10,
//     borderWidth: 1,
//     borderColor: "#ccc",
//     borderRadius: 10,
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "#4caf50",
//     paddingVertical: 15,
//     paddingHorizontal: 40,
//     borderRadius: 30,
//     alignItems: "center",
//   },
//   buttonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default SetUPIPinPage;


import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';

const SetUPIPinPage = () => {
  const [pin, setPin] = useState("");
  const [confirmPin, setConfirmPin] = useState("");
  const router = useRouter();

  const handleSetPin = async () => {
    if (pin === confirmPin && pin.length === 4) {
      // Save the PIN securely
      await SecureStore.setItemAsync('upiPin', pin);
      alert("UPI PIN has been set!");
      router.push("/login");  // Navigate to login or other relevant page
    } else {
      alert("PIN does not match or it is not a 4-digit PIN!");
    }
  };

  // Function to only allow numeric input for PIN
  const handlePinChange = (input: string, setter: React.Dispatch<React.SetStateAction<string>>) => {
    if (/^\d{0,4}$/.test(input)) {
      setter(input); // Update the state only if the input is a valid numeric value
    }
  };

  return (
    <View style={styles.container}>
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
      <TouchableOpacity style={styles.button} onPress={handleSetPin}>
        <Text style={styles.buttonText}>Set PIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#4a90e2",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 15,
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
