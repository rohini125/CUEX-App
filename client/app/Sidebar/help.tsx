import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

const HelpSupport = () => {
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null);

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
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Help & Support</Text>

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
    <Text style={styles.aboutCardTitle}>CUEX</Text>
    <Text style={styles.aboutCardText}>
      CUEX is a next-generation currency exchange platform designed to make
      transactions seamless, secure, and fast. Our mission is to empower
      users with cutting-edge tools for managing their finances across
      multiple currencies. With real-time updates and robust security
      measures, we aim to revolutionize the currency exchange experience.
    </Text>
  </View>
</View>


      {/* Contact Us Section */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contactText}>
          📧 Email: support@cuexapp.com
        </Text>
        <Text style={styles.contactText}>
          📞 Phone: +1 234 567 890
        </Text>
        <Text style={styles.contactText}>
          🌐 Website: www.cuexapp.com
        </Text>
        <Text style={styles.contactText}>
          📍 Address: 123 FinTech Avenue, Currency City, USA
        </Text>
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
  aboutText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
  },
  contactText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginBottom: 4,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    
  },
  aboutCardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  aboutCardText: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    textAlign: 'center',
  },
  
});

export default HelpSupport;
