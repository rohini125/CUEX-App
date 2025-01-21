import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Linking } from 'react-native';

const ReferAndEarnHelp = () => {
  const handleContactSupport = () => {
    Linking.openURL('mailto:support@cuex.com');
  };

  const handleCallSupport = () => {
    Linking.openURL('tel:+18005551234');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Refer and Earn - Help</Text>

      <Text style={styles.sectionTitle}>Frequently Asked Questions</Text>

      <View style={styles.faqItem}>
        <Text style={styles.question}>How Does the Refer and Earn Program Work?</Text>
        <Text style={styles.answer}>
          Share your unique referral code or link with friends. When your friend signs up using your referral code and
          completes their first transaction, both of you receive rewards.
        </Text>
      </View>

      <View style={styles.faqItem}>
        <Text style={styles.question}>Where Can I Find My Referral Code?</Text>
        <Text style={styles.answer}>
          Go to the <Text style={styles.bold}>Refer and Earn</Text> section in the app. Your unique referral code will be
          displayed. Tap <Text style={styles.bold}>Share</Text> to send it via social media, email, or messaging apps.
        </Text>
      </View>

      <View style={styles.faqItem}>
        <Text style={styles.question}>What Rewards Can I Earn?</Text>
        <Text style={styles.answer}>
          Rewards may include cash bonuses, discounts, or other benefits. Check the terms and conditions in the{' '}
          <Text style={styles.bold}>Refer and Earn</Text> section for detailed reward information.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Troubleshooting Issues</Text>

      <View style={styles.faqItem}>
        <Text style={styles.question}>Unable to Share Referral Code/Link</Text>
        <Text style={styles.answer}>
          Check your internet connection and ensure you have the latest version of the app installed. If the issue
          persists, contact support.
        </Text>
      </View>

      <View style={styles.faqItem}>
        <Text style={styles.question}>Reward Not Credited After Friend’s Transaction</Text>
        <Text style={styles.answer}>
          Verify that your friend’s transaction meets the program’s eligibility criteria. Contact support if the reward
          is not credited after 48 hours.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>Need Further Assistance?</Text>
      <TouchableOpacity onPress={handleContactSupport} style={styles.contactButton}>
        <Text style={styles.contactText}>Email Support</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCallSupport} style={styles.contactButton}>
        <Text style={styles.contactText}>Call Support</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ADD8E6',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 24,
    marginBottom: 8,
  },
  faqItem: {
    marginBottom: 16,
  },
  question: {
    fontSize: 16,
    fontWeight: '600',
  },
  answer: {
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  contactText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ReferAndEarnHelp;
