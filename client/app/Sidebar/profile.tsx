import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ActivityIndicator,
  Alert,
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

const Profile = () => {
  const router = useRouter();

  // State for user details
  const [profileImage, setProfileImage] = useState('https://via.placeholder.com/100'); // Default profile picture
  const [username, setUsername] = useState('komal 123');
  const [email, setEmail] = useState('komal123e@example.com');
  const [mobile, setMobile] = useState('1234567890');
  const [idNumber, setIdNumber] = useState('A12345678');
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
    if (!username.trim() || !email.trim() || !mobile.trim() || !idNumber.trim()) {
      Alert.alert('Error', 'All fields must be filled out!');
      return;
    }

    // Simulate API call to save profile
    try {
      await saveProfile();
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    }
  };

  // Function to pick image from the device
  const pickImage = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permissionResult.granted) {
      Alert.alert('Permission Denied', 'You need to allow access to your photo library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri); // Update profile picture
    }
  };

  return (
    <View style={styles.container}>
      {/* Profile Picture */}
      <View style={styles.header}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <Text style={styles.changePictureText}>Change Picture</Text>
        </TouchableOpacity>
      </View>

      {/* Basic Information Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Basic Information</Text>

        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter username"
            />
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email ID"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={mobile}
              onChangeText={setMobile}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              value={idNumber}
              onChangeText={setIdNumber}
              placeholder="Enter ID number"
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
            <Text style={styles.detailText}>Username: {username}</Text>
            <Text style={styles.detailText}>Email: {email}</Text>
            <Text style={styles.detailText}>Mobile: +91 {mobile}</Text>
            <Text style={styles.detailText}>ID Number: {idNumber}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <Text style={styles.editButtonText}>Edit</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {/* Other Sections */}
      <TouchableOpacity
        style={styles.section}
        onPress={() => router.push('/Sidebar/additionaldetails')}
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
  changePictureText: {
    marginTop: 8,
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 14,
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
    marginTop: 10,
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