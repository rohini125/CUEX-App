import React from 'react';
import 'react-native-gesture-handler';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type HeaderProps = {
  onProfilePress: () => void;
};

const router = useRouter();

const Header: React.FC<HeaderProps> = ({ onProfilePress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onProfilePress} style={styles.iconContainer}>
        {/* Profile image (no placeholder) */}
        <Image
          source={{ uri: 'https://www.example.com/profile-image.jpg' }}  // Replace with actual dynamic image URL
          style={styles.profileImage}
        />
      </TouchableOpacity>
      <Text style={styles.appName}>CUEX</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconContainer}>
          <Feather name="bell" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => router.push('/Sidebar/kyc-verification')}
        >
          <Feather name="help-circle" size={24} color="#4A4A4A" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  profileImage: {
    width: 50,  // Make the image larger
    height: 50, // Ensure proper aspect ratio
    borderRadius: 25, // Make it a circle
    borderWidth: 1, // Add a border for visibility
    borderColor: '#4A4A4A', // Border color
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  rightIcons: {
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: 16,
  },
});

export default Header;
