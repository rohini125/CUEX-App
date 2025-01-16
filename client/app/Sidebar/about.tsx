import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const About = () => {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>About Us</Text>
      <View style={styles.section}>
        <Text style={styles.cardTitle}>Company Overview</Text>
        <Text style={styles.cardText}>
          "At CUEX, we are redefining how people exchange and manage their money globally..."
        </Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Meet Our Developers</Text>
        {/* Developer Cards */}
        {['Parkale Sakshi', 'Salunke Yash', 'Navale Komal', 'Kandekar Rohini'].map((name, index) => (
          <View key={index} style={styles.card}>
            <Image source={require('../../assets/images/signup.jpg')} style={styles.profilePic} />
            <Text style={styles.cardTitle}>{name}</Text>
            <Text style={styles.cardText}>Role: Developer Role Here</Text>
          </View>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contactText}>📧 Email: support@cuexapp.com</Text>
        <Text style={styles.contactText}>📞 Phone: +91 8234 567 890</Text>
        <Text style={styles.contactText}>🌐 Website: www.cuexapp.com</Text>
        <Text style={styles.contactText}>📍 Address: 123 CUEX Center Maharastra India</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 10,
    color: '#007BFF',
    textAlign: 'center',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 16,
  },
});

export default About;
