import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import CurrencyConverter from '../Home/currencyconverter';


const Home = () => {
  const router = useRouter();

  // Navigation functions
  const navigateToMobile = () => router.push('/ToMobile');
  const navigateToBank = () => router.push('/ToBank');
  const navigateToSelfAccount = () => router.push('/ToSelfAccount');
  const navigateToCheckBalance = () => router.push('/CheckBalance');

  return (
    <ScrollView style={styles.container}>
      <CurrencyConverter/>
      <Text style={styles.title}>Transfer Money</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7} onPress={navigateToMobile}>
          <View style={styles.iconBackground}>
            <FontAwesome5 name="mobile-alt" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            To Mobile Number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7} onPress={navigateToBank}>
          <View style={styles.iconBackground}>
            <MaterialIcons name="account-balance" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            To Bank/UPI ID
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7} onPress={navigateToSelfAccount}>
          <View style={styles.iconBackground}>
            <FontAwesome5 name="wallet" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            To Self Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBox} activeOpacity={0.7} onPress={navigateToCheckBalance}>
          <View style={styles.iconBackground}>
            <FontAwesome5 name="hand-holding-usd" size={18} color="white" />
          </View>
          <Text style={styles.iconText} numberOfLines={2}>
            Check Balance
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    textAlign:'center',
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginTop: 16,
  },
  iconBox: {
    width: '22%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  iconBackground: {
    width: 40,
    height: 40,
    backgroundColor: '#333333',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    marginTop: 8,
    fontSize: 12,
    color: '#333',
    textAlign: 'center',
    flexWrap: 'wrap',
  },
});

export default Home;

