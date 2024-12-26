import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // React Native icon library

// Define types for the profile state
interface Profile {
  image: string;
  name: string;
  phone: string;
  upiId: string;
}

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<Profile>({
    image: "https://via.placeholder.com/150",
    name: "jai shree ram",
    phone: "9876450045",
    upiId: "",
  });

  const [walletBalance] = useState(140.00);
  const [showBalance, setShowBalance] = useState(false);

  const handleEditToggle = () => setIsEditing(!isEditing);

  // Type the event parameter explicitly here
  const handleInputChange = (name: keyof Profile, value: string) => {
    setProfile((prevProfile) => ({ ...prevProfile, [name]: value }));
  };

  const handleImageChange = (e: any) => { // Assuming you will handle file selection with a library like Expo ImagePicker
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({ ...prevProfile, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    setIsEditing(false);
  };

  useEffect(() => {
    const phoneNumber = profile.phone.replace(/\D/g, '');
    if (phoneNumber) {
      const updatedUpiId = `${phoneNumber}@upi`;
      setProfile((prevProfile) => ({ ...prevProfile, upiId: updatedUpiId }));
    }
  }, [profile.phone]);

  const handleCheckBalance = () => {
    setShowBalance(true);
  };

  const handleScrollToTop = () => {
    // You can scroll manually using scroll view ref if needed
    console.log("Scrolling to top...");
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 }}>
      <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 8, width: '100%', maxWidth: 400 }}>
        {/* Profile Image */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          <TouchableOpacity onPress={handleEditToggle}>
            <Image
              source={{ uri: profile.image }}
              style={{ width: 120, height: 120, borderRadius: 60, borderWidth: 2, borderColor: '#d3d3d3' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ position: 'absolute', right: 10, top: 10 }}
            onPress={handleEditToggle}
          >
            <Ionicons name="create-outline" size={24} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Name and Details */}
        <View style={{ alignItems: 'center', marginBottom: 24 }}>
          {isEditing ? (
            <View style={{ width: '100%' }}>
              <TextInput
                style={{
                  textAlign: 'center', borderBottomWidth: 1, borderBottomColor: '#d3d3d3', marginBottom: 10, padding: 8
                }}
                value={profile.name}
                onChangeText={(text) => handleInputChange('name', text)} // Correctly typed
                placeholder="Enter your name"
              />
              <TextInput
                style={{
                  textAlign: 'center', borderBottomWidth: 1, borderBottomColor: '#d3d3d3', marginBottom: 10, padding: 8
                }}
                value={profile.phone}
                onChangeText={(text) => handleInputChange('phone', text)} // Correctly typed
                placeholder="Enter your phone number"
              />
              <Button title="Save Changes" onPress={handleSaveChanges} />
            </View>
          ) : (
            <>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{profile.name}</Text>
              <Text style={{ color: '#808080', marginTop: 5 }}>📞 {profile.phone}</Text>
              <Text style={{ color: '#808080' }}>UPI ID: {profile.upiId}</Text>
            </>
          )}
        </View>

        {/* Check Balance Section */}
        <View style={{ backgroundColor: '#f0f0f0', padding: 16, borderRadius: 8, marginBottom: 24 }}>
          {showBalance && (
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>${walletBalance.toFixed(2)}</Text>
          )}
          <TouchableOpacity onPress={handleCheckBalance}>
            <Text style={{ color: '#007BFF', fontWeight: 'bold', marginTop: 10 }}>
              Check Balance
            </Text>
          </TouchableOpacity>
        </View>

        {/* Action Buttons */}
        <View>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
            <Ionicons name="heart-outline" size={20} color="gray" style={{ marginRight: 12 }} />
            <Text>Your Favorites</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
            <Ionicons name="card-outline" size={20} color="gray" style={{ marginRight: 12 }} />
            <Text>Payment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
            <Ionicons name="people-outline" size={20} color="gray" style={{ marginRight: 12 }} />
            <Text>Tell Your Friend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
            <Ionicons name="gift-outline" size={20} color="gray" style={{ marginRight: 12 }} />
            <Text>Promotions</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleScrollToTop} style={{ flexDirection: 'row', alignItems: 'center', padding: 12 }}>
            <Ionicons name="settings-outline" size={20} color="gray" style={{ marginRight: 12 }} />
            <Text>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Log Out */}
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', padding: 12, marginTop: 24 }}>
          <Ionicons name="log-out-outline" size={20} color="red" style={{ marginRight: 12 }} />
          <Text style={{ color: 'red' }}>Log Out</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProfilePage;
