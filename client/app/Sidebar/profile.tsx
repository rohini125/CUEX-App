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
import { Ionicons } from '@expo/vector-icons';



const Profile = () => {
 

  // State for user details
  const [profileImage, setProfileImage] = useState<string>('https://via.placeholder.com/100'); // Default profile picture
  const [username, setUsername] = useState<string>('komal 123');
  const [email, setEmail] = useState<string>('komal123e@example.com');
  const [mobile, setMobile] = useState<string>('1234567890');
  const [idNumber, setIdNumber] = useState<string>('A12345678');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
const router = useRouter(); // Use router for navigation
  // Mock API call to save user data
  const saveProfile = async (): Promise<void> => {
    setLoading(true);

    // Simulate a network request delay
    setTimeout(() => {
      setLoading(false);
      setIsEditing(false);
      Alert.alert('Success', 'Your profile has been updated!');
    }, 1500);
  };

  // Mock API call to save profile image
  const saveProfileImage = async (): Promise<void> => {
    return new Promise<void>((resolve, reject) => {
      setTimeout(() => {
        const success = true; // Simulate API success
        success ? resolve() : reject(new Error('Failed to save profile image'));
      }, 1500);
    });
  };

  const handleSave = async (): Promise<void> => {
    // Validate inputs
    if (!username.trim() || !email.trim() || !mobile.trim() || !idNumber.trim()) {
      Alert.alert('Error', 'All fields must be filled out!');
      return;
    }
    try {
      await saveProfile();
    } catch (error) {
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    }
  };

  // Function to pick image from the device
  const pickImage = async (): Promise<void> => {
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
      const newProfileImage = result.assets[0].uri; // Extract the selected image URI
      setProfileImage(newProfileImage); // Update the profile image in the UI
      setLoading(true); // Show loading spinner while saving

      try {
        await saveProfileImage(); // Simulate API call to save the profile image
        Alert.alert('Success', 'Profile picture updated and saved successfully!');
      } catch (error) {
        Alert.alert('Error', 'Failed to save the profile picture. Please try again.');
      } finally {
        setLoading(false); // Hide loading spinner
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Loading Overlay */}
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#6200ee" />
        </View>
      )}

      {/* Profile Picture */}
      <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
                  <Ionicons name="arrow-back" size={24} color="#333" />
                </TouchableOpacity>
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
  backButton: {
    marginRight: 10,
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
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 10,
  },
});

export default Profile;
