import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, ActivityIndicator, Alert } from 'react-native';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  // State for user details
  const [name, setName] = useState('John Doe');
  const [mobile, setMobile] = useState('7620171779');
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(false);

  // Mock API call to save user data
  const saveProfile = async () => {
    setLoading(true);

    // Simulate a network request delay
    setTimeout(() => {
      setLoading(false);
      setIsEditing(false);
      Alert.alert('Success', 'Your profile has been updated!');
    }, 1500);
  };

  const handleSave = async () => {
    // Validate inputs
    if (!name.trim() || !mobile.trim()) {
      Alert.alert('Error', 'Name and Mobile Number cannot be empty!');
      return;
    }

    // Simulate API call to save profile
    try {
      await saveProfile();
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://via.placeholder.com/100' }} // Replace with dynamic user image URL
          style={styles.profileImage}
        />
      </View>

      {/* Personal Details Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Personal Details</Text>

        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Enter your name"
            />
            <TextInput
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              placeholder="Enter your mobile number"
              keyboardType="phone-pad"
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleSave} disabled={loading}>
              {loading ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.saveButtonText}>Save</Text>
              )}
            </TouchableOpacity>
          </>
        ) : (
          <>
            <Text style={styles.detailText}>Name: {name}</Text>
            <Text style={styles.detailText}>Mobile: +91 {mobile}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Other Sections */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push('/financial-details')}
      >
        <Text style={styles.sectionTitle}>Financial Details</Text>
        <Text style={styles.detailText}>Income, employment details, and more</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push('/additional-details')}
      >
        <Text style={styles.sectionTitle}>Additional Details</Text>
        <Text style={styles.detailText}>Age, gender, and more</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push('/add-address')}
      >
        <Text style={styles.sectionTitle}>Saved Addresses</Text>
        <View style={styles.addAddressBox}>
          <Text style={styles.addAddressText}>+ Add New</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#6200ee',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4a4a4a',
    marginBottom: 8,
  },
  detailText: {
    fontSize: 14,
    color: '#7a7a7a',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    fontSize: 14,
  },
  editButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#6200ee',
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  saveButton: {
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    backgroundColor: '#28a745',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addAddressBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  addAddressText: {
    color: '#6200ee',
    fontWeight: 'bold',
  },
});

export default Profile;
