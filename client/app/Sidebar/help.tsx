import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

const Help = () => {
  const [visibleAnswer, setVisibleAnswer] = useState<number | null>(null);
  const router = useRouter();

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
      <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Help & Support</Text>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>TOP QUESTIONS</Text>
        {faqs.map((faq, index) => (
          <View key={index} style={styles.faqItem}>
            <TouchableOpacity onPress={() => toggleAnswer(index)}>
              <Text style={styles.question}>{index + 1}) {faq.question}</Text>
            </TouchableOpacity>
            {visibleAnswer === index && <Text style={styles.answer}>{faq.answer}</Text>}
          </View>
        ))}
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
});

export default Help;

