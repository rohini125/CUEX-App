import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

// Define the type for the issues object
type IssueKey = 'Recharge Failed' | 'Bill Payment Delayed' | 'Incorrect Bill Details';

const issues: Record<IssueKey, { description: string; steps: string[] }> = {
  'Recharge Failed': {
    description: 'Recharges might fail due to network issues, incorrect details, or insufficient balance.',
    steps: [
      'Check your internet connection.',
      'Ensure the mobile number or account details are correct.',
      'Verify your balance or payment method.',
      'Retry the recharge after some time.',
      'Contact support if the issue persists.',
    ],
  },
  'Bill Payment Delayed': {
    description: 'Bill payments can be delayed due to processing time or system issues.',
    steps: [
      'Verify the due date and payment confirmation.',
      'Ensure the biller details are accurate.',
      'Check with the biller for processing updates.',
      'Allow the maximum processing time before reaching out.',
      'Contact support if the payment is not reflected.',
    ],
  },
  'Incorrect Bill Details': {
    description: 'Payments may fail if incorrect details are provided.',
    steps: [
      'Double-check the biller ID and account number.',
      'Verify the amount before confirming the payment.',
      'Ensure the biller name matches the account details.',
      'If funds are deducted, contact support immediately.',
    ],
  },
};

const RechargeAndBillHelp = () => {
  const [selectedIssue, setSelectedIssue] = useState<IssueKey | null>(null);
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/Sidebar/help/help')} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Recharge and Bill Payment Issues</Text>
      </View>

      {/* Issues List */}
      <View style={styles.issuesList}>
        {Object.keys(issues).map((key) => {
          const issueKey = key as IssueKey;
          return (
            <View key={issueKey} style={styles.issueContainer}>
              <TouchableOpacity
                style={styles.issueItem}
                onPress={() =>
                  setSelectedIssue((prev) => (prev === issueKey ? null : issueKey))
                }
              >
                <Image
                  source={
                    issueKey === 'Recharge Failed'
                      ? require('../../../assets/images/recharge_failed.png')
                      : issueKey === 'Bill Payment Delayed'
                      ? require('../../../assets/images/bill_payment_delayed.png')
                      : require('../../../assets/images/incorrect_bill_details.png')
                  }
                  style={styles.issueIcon}
                />
                <Text style={styles.issueText}>{issueKey}</Text>
              </TouchableOpacity>

              {/* Details for Selected Issue */}
              {selectedIssue === issueKey && (
                <View style={styles.card}>
                  <Text style={styles.cardDescription}>
                    {issues[issueKey].description}
                  </Text>
                  <Text style={styles.cardStepsTitle}>Troubleshooting Steps:</Text>
                  {issues[issueKey].steps.map((step, index) => (
                    <Text key={index} style={styles.cardStep}>
                      {index + 1}. {step}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
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
  backButton: {
    marginRight: 10,
    padding: 10,
  },
  issuesList: {
    padding: 16,
  },
  issueContainer: {
    marginBottom: 16,
  },
  issueItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  issueIcon: {
    width: 50,
    height: 50,
    marginRight: 12,
    tintColor: '#6200ee',
  },
  issueText: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  card: {
    marginTop: 8,
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
  cardStepsTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  cardStep: {
    fontSize: 14,
    color: '#666',
    marginBottom: 6,
    lineHeight: 20,
  },
});

export default RechargeAndBillHelp;
