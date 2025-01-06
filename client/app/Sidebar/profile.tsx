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
  const [profileImage, setProfileImage] = useState<string>('https://via.placeholder.com/100');
  const [username, setUsername] = useState<string>('komal 123');
  const [email, setEmail] = useState<string>('komal123e@example.com');
  const [mobile, setMobile] = useState<string>('1234567890');
  const [idNumber, setIdNumber] = useState<string>('A12345678');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<string>('');
  const [savedAddresses, setSavedAddresses] = useState<string[]>([]);
  const [showAddressInput, setShowAddressInput] = useState<boolean>(false);
  const router = useRouter();

  const handleFinalSave = async (): Promise<void> => {
    if (loading) return;
  
    setLoading(true);
    try {
      // Perform API call or save logic here
      await new Promise((resolve) => setTimeout(resolve, 1500));
      Alert.alert('Success', 'Profile updated successfully!');
      router.push('/front'); // Redirect to the front page
    } catch (error) {
      Alert.alert('Error', 'Failed to update profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  const saveAddress = (): void => {
    if (!newAddress.trim()) {
      Alert.alert('Error', 'Address cannot be empty!');
      return;
    }
    setSavedAddresses((prev) => [...prev, newAddress.trim()]);
    setNewAddress('');
    setShowAddressInput(false);
    Alert.alert('Success', 'Address saved successfully!');
  };
  const deleteAddress = (index: number): void => {
    setSavedAddresses((prev) => prev.filter((_, idx) => idx !== index));
    Alert.alert('Success', 'Address deleted successfully!');
  };
  

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
      const newProfileImage = result.assets[0].uri;
      setProfileImage(newProfileImage);
    }
  };

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="#6200ee" />
        </View>
      )}

      <View style={styles.header}>
  <View style={styles.profileContainer}>
        <TouchableOpacity onPress={pickImage}>
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
          <Text style={styles.changePictureText}>Change Picture</Text>
        </TouchableOpacity>
        </View> 
        <TouchableOpacity onPress={handleFinalSave} style={styles.finalSaveButton}>
          <Text style={styles.finalSaveButtonText}>Save</Text>
        </TouchableOpacity>
      </View>

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
            <TouchableOpacity style={styles.saveButton} onPress={() => setIsEditing(false)}>
              <Text style={styles.saveButtonText}>Done</Text>
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

      <View style={styles.section}>
  <Text style={styles.sectionTitle}>Saved Addresses</Text>
  {savedAddresses.map((address, index) => (
    <View key={index} style={styles.addressItem}>
      <Text style={styles.detailText}>
        {index + 1}. {address}
      </Text>
      <TouchableOpacity 
        style={styles.deleteButton} 
        onPress={() => deleteAddress(index)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  ))}
  {showAddressInput ? (
    <View style={styles.addressInputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Enter new address"
        value={newAddress}
        onChangeText={setNewAddress}
      />
      <TouchableOpacity style={styles.saveButton} onPress={saveAddress}>
        <Text style={styles.saveButtonText}>Save Address</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.cancelButton}
        onPress={() => setShowAddressInput(false)}
      >
        <Text style={styles.cancelButtonText}>Cancel</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <TouchableOpacity
      style={styles.addAddressBox}
      onPress={() => setShowAddressInput(true)}
    >
      <Text style={styles.addAddressText}>+ Add New</Text>
    </TouchableOpacity>
  )}
</View>

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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },

  profileContainer: {
    alignItems: 'center', // Centers the content horizontally
    justifyContent: 'center', // Centers the content vertically if needed
    marginBottom: 16, // Adds spacing below the profile section
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#6200ee',
    marginBottom: 8, // Adds spacing between the image and the text
  },
  changePictureText: {
    color: '#6200ee',
    fontWeight: 'bold',
    fontSize: 14,
    textAlign: 'center', // Ensures the text is aligned with the image
  },
  
  finalSaveButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#28a745',
    position: 'absolute',
    right: 10, // Align save button to the right
    top: '50%',
    
  },
  finalSaveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
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
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 8,
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  cancelButton: {
    backgroundColor: '#dc3545',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  cancelButtonText: {
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
  addressInputContainer: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  addressItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Red color for delete
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
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
