import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function AccountDelete() {
  const router = useRouter();

  // Function to handle delete account action
  const handleDeleteAccount = () => {
    Alert.alert(
      "Delete Account",
      "Are you sure you want to delete your account? This action is irreversible.",
      [
        {
          text: "Cancel",
          style: "cancel",
          onPress: () => console.log("Cancel pressed"), // Debug log
        },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => {
            console.log("Account deleted"); // Debug log
            router.push("/"); // Navigate to home
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.header}>Delete Account</Text>
        <Text style={styles.warning}>
          Deleting your account will remove all your data permanently.
        </Text>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={handleDeleteAccount}
        >
          <Text style={styles.deleteButtonText}>Delete My Account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => router.push("/Sidebar/AccountSetting")}
          style={styles.cancelButton}
        >
          <Text style={styles.cancelButtonText}>Cancel and Go Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ADD8E6",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "90%",
    backgroundColor: "#E6F2FA",
    borderRadius: 12,
    padding: 24,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 5,
    alignItems: "center",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#DC2626",
    marginBottom: 16,
  },
  warning: {
    fontSize: 14,
    color: "#6B7280",
    textAlign: "center",
    marginBottom: 24,
    lineHeight: 20,
  },
  deleteButton: {
    backgroundColor: "#DC2626",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    shadowColor: "#DC2626",
    shadowOpacity: 0.3,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    marginBottom: 16,
    width: "100%",
    alignItems: "center",
  },
  deleteButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  cancelButton: {
    marginTop: 8,
    alignItems: "center",
    width: "100%",
  },
  cancelButtonText: {
    color: "#2563EB",
    fontSize: 14,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
});
