

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transfer Money</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7}>
          <View style={styles.iconBackground}>
            <FontAwesome5 name="mobile-alt" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            To Mobile Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7}>
          <View style={styles.iconBackground}>
            <MaterialIcons name="account-balance" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            To Bank/UPI ID
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7}>
          <View style={styles.iconBackground}>
            <FontAwesome5 name="wallet" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            To Self Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7}>
          <View style={styles.iconBackground}>
            <FontAwesome5 name="hand-holding-usd" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            Check Balance
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // Ensure icons wrap properly if needed
    marginTop: 16,
  },
  iconBox: {
    width: '22%', // Adjust width so icons are spaced evenly
    height: 80, // Adjust the height if necessary
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16, // Spacing between icons
  },
  iconBackground: {
    width: 40,  // Icon background size
    height: 40, // Icon background height
    backgroundColor: '#333333',
    borderRadius: 15, // Circular shape
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{ scale: 1 }], // Default size for the icon background
  },
  iconText: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    flexWrap: 'wrap', // Ensures text wraps to the next line
  },
});

export default Home;
