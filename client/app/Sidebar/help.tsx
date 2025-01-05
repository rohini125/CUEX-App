import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import router for navigation


const HelpSupport = () => {
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null);
  const router = useRouter(); // Use router for navigation

  const toggleAnswer = (index: number) => {
    setVisibleAnswer(visibleAnswer === index ? null : index);
  };

  const faqs = [
    {
      question: 'How to transfer funds from banking app to CUEX wallet?',
      answer:
        'You can transfer funds by linking your bank account to the CUEX wallet in the app settings. Go to "Add Funds" and follow the instructions.',
    },
    {
      question: 'How can I complete my KYC?',
      answer:
        'Complete your KYC by uploading your government-issued ID and address proof under the "Profile" section of the app.',
    },
    {
      question: 'How do I reset my password?',
      answer:
        'To reset your password, go to the login page and click on "Forgot Password." Follow the steps to reset it.',
    },
    {
      question: 'How to transfer funds to another person?',
      answer:
        'You can transfer funds by selecting "Send Money" in the app and entering the recipient’s wallet ID or email.',
    },
    {
      question: 'How to convert one currency to another?',
      answer:
        'Use the "Currency Converter" feature in the app. Select the currencies, enter the amount, and confirm the exchange.',
    },
    {
      question: 'How to withdraw my funds to a bank account?',
      answer:
        'To withdraw funds, go to the "Withdraw Funds" section in the app, enter your bank details, and follow the steps.',
    },
    {
      question: 'How much amount can I transfer or withdraw in a day?',
      answer:
        'The daily limit depends on your account tier. Please check the "Limits & Fees" section in the app for details.',
    },
    {
      question: 'What should I do if I lose my device?',
      answer:
        'Immediately log in to your account from another device and change your password. Contact support to secure your account.',
    },
    {
      question: 'How do I update my account details?',
      answer:
        'Go to the "Profile" section in the app to update your personal details like email, phone number, and address.',
    },
    {
      question: 'How can I check my transaction history?',
      answer:
        'Navigate to the "Transaction History" section in the app to view all past transactions.',
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <View>
      <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
      <Text style={styles.title}>Help & Support</Text>
      </View>
      {/* FAQs Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}># TOP QUESTIONS</Text>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            {/* Question */}
            <TouchableOpacity onPress={() => toggleAnswer(index)}>
              <Text style={styles.question}>{index + 1}) {faq.question}</Text>
            </TouchableOpacity>
            {/* Answer */}
            {visibleAnswer === index && (
              <Text style={styles.answer}>{faq.answer}</Text>
            )}
          </View>
        ))}
      </View>

      {/* About Us Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Us</Text>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Company Overview</Text>
          <Text style={styles.cardText}>
            "At CUEX, we are redefining how people exchange and manage their money globally. 
            Founded with the vision to create a seamless and secure currency exchange experience, 
            we empower our users to transact across borders effortlessly."
          </Text>
        </View>

        {/* Developer Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Meet Our Developers</Text>

          {/* Developer Cards */}
          <View style={styles.card}>
            <View style={styles.developerCard}>
              <Image source={require('../../assets/images/signup.jpg')}  style={styles.profilePic} />
              <Text style={styles.cardTitle}>Parkale Sakshi</Text>
              <Text style={styles.cardText}>
                Role: Lead Developer{'\n'}
                Expertise in React Native and backend services. John has led the architecture of CUEX to ensure a seamless experience.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.developerCard}>
              <Image source={require('../../assets/images/signup.jpg')}  style={styles.profilePic} />
              <Text style={styles.cardTitle}>Salunke Yash</Text>
              <Text style={styles.cardText}>
                Role: UI/UX Designer{'\n'}
                Responsible for the sleek and user-friendly interface of CUEX, Jane ensures that the design is intuitive and engaging.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.developerCard}>
              <Image source={require('../../assets/images/signup.jpg')}  style={styles.profilePic} />
              <Text style={styles.cardTitle}>Navale Komal</Text>
              <Text style={styles.cardText}>
                Role: Security Specialist{'\n'}
                Alice is focused on making CUEX a secure platform with top-notch encryption and fraud prevention mechanisms.
              </Text>
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.developerCard}>
              <Image source={require('../../assets/images/signup.jpg')}  style={styles.profilePic} />
              <Text style={styles.cardTitle}>Kandekar Rohini</Text>
              <Text style={styles.cardText}>
                Role: QA Engineer{'\n'}
                Michael ensures that the app is free from bugs and runs smoothly by rigorously testing all features.
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Contact Us Section */}
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
  faqItem: {
    marginBottom: 16,
  },
  question: {
    fontSize: 16,
    color: '#007BFF',
    marginBottom: 8,
  },
  answer: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
    paddingLeft: 10,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    alignItems: 'center', // Center the content within the card
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  cardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    textAlign: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 4,
  },
  developerCard: {
    alignItems: 'center', // Center content in the developer card
    justifyContent: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40, // Make the image circular
    marginBottom: 16,
  },
});

export default HelpSupport;
