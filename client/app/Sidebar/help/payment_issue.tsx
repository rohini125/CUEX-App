import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const PaymentIssues = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Payment Issues</Text>
        <TouchableOpacity>
          <Text style={styles.headerButton}>HELP CENTER</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Issue Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Common Payment Problems</Text>
          <Text style={styles.sectionText}>
            Here are some common payment issues you might encounter and steps to resolve them:
          </Text>
        </View>

        {/* Common Issues List */}
        <View style={styles.issuesList}>
          <View style={styles.issueItem}>
            <Image source={require('../../../assets/images/failed_transaction.png')} style={styles.issueIcon} />
            <Text style={styles.issueText}>Failed Transactions</Text>
          </View>
          <View style={styles.issueItem}>
            <Image source={require('../../../assets/images/delayed_refund.png')} style={styles.issueIcon} />
            <Text style={styles.issueText}>Delayed Refunds</Text>
          </View>
          <View style={styles.issueItem}>
            <Image source={require('../../../assets/images/card_declined.png')} style={styles.issueIcon} />
            <Text style={styles.issueText}>Card Declined</Text>
          </View>
        </View>

        {/* Troubleshooting Steps */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Steps to Troubleshoot</Text>
          <Text style={styles.sectionText}>1. Check your internet connection and try again.</Text>
          <Text style={styles.sectionText}>2. Ensure you have sufficient balance in your account.</Text>
          <Text style={styles.sectionText}>3. Verify your payment method details are accurate.</Text>
          <Text style={styles.sectionText}>4. If the issue persists, contact your bank or card provider.</Text>
        </View>

        {/* Contact Support */}
        <View style={styles.supportSection}>
          <Text style={styles.supportTitle}>Still Need Help?</Text>
          <Text style={styles.supportText}>
            If you're unable to resolve the issue, reach out to our support team for assistance.
          </Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  headerButton: {
    color: '#ffdd33',
    fontSize: 14,
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  sectionText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  issuesList: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  issueItem: {
    alignItems: 'center',
    width: '30%',
  },
  issueIcon: {
    width: 60,
    height: 60,
    marginBottom: 8,
  },
  issueText: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  supportSection: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    alignItems: 'center',
  },
  supportTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  supportText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  contactButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  contactButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default PaymentIssues;
