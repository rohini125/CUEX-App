import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import router for navigation
import axios from 'axios';

export default function NomineeDetails() {
  const router = useRouter();

  const [nomineeName, setNomineeName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // const handleSave = () => {
  //   if (!nomineeName || !relationship || !contactNumber) {
  //     alert("Please fill in all fields.");
  //     return;
  //   }
  //   alert("Nominee details saved successfully!");
  //   router.push("/Sidebar/AccountSetting"); // Navigate to another page
  // };

  const handleSave = async () => {
    if (!nomineeName || !relationship || !contactNumber) {
      alert("Please fill in all fields.");
      return;
    }
  
    try {
      const response = await axios.post('http://192.168.1.9/api/nominees', {
        nomineeName,
        relationship,
        contactNumber,
      });
  
      if (response.status === 201) {
        alert("Nominee details saved successfully!");
        router.push("/Sidebar/AccountSetting");
      } else {
        alert("Failed to save nominee details.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while saving nominee details.");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity onPress={() => router.push('/Sidebar/AccountSetting')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      {/* Header */}
      <Text style={styles.header}>Nominee Details</Text>

      {/* Card Container */}
      <View style={styles.card}>
        {/* Nominee Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nominee Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter nominee's name"
            value={nomineeName}
            onChangeText={setNomineeName}
          />
        </View>

        {/* Relationship */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Relationship</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter relationship (e.g., spouse, child)"
            value={relationship}
            onChangeText={setRelationship}
          />
        </View>

        {/* Contact Number */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Contact Number</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter contact number"
            value={contactNumber}
            onChangeText={setContactNumber}
            keyboardType="phone-pad"
          />
        </View>
      </View>

      {/* Save Button */}
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Nominee</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F9FAFB", // Light gray background
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4F46E5", // Indigo color
    textAlign: "center",
    marginBottom: 16,
  },
  backButton: {
    marginRight: 10,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: "#6B7280", // Gray text
    marginBottom: 8,
  },
  input: {
    backgroundColor: "#F3F4F6", // Light gray input background
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    color: "#111827", // Dark text
    borderWidth: 1,
    borderColor: "#D1D5DB", // Light border
  },
  button: {
    backgroundColor: "#4F46E5", // Indigo color
    borderRadius: 24,
    paddingVertical: 14,
    shadowColor: "#4F46E5",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  buttonText: {
    color: "#FFFFFF",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
