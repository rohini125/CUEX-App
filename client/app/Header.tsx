import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

type HeaderProps = {
  onProfilePress: () => void;  // Define the prop type for the function
};

const Header: React.FC<HeaderProps> = ({ onProfilePress }) => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onProfilePress} style={styles.iconContainer}>
        <Image
          source={{
            uri: 'https://via.placeholder.com/40', // Replace with user's profile image
          }}
          style={styles.profileImage}
        />
        
      </TouchableOpacity>
      <Text style={styles.appName}>CUEX</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconContainer}>
          <Feather name="bell" size={24} color="#4A4A4A" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconContainer}>
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
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: '#4A4A4A',
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
