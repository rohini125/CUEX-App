import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

export default function RequestAccountDeletion() {
  const [reason, setReason] = useState('');
  const [confirm, setConfirm] = useState(false);

  const handleRequestDeletion = () => {
    if (!confirm) {
      Alert.alert('Confirmation Required', 'Please check the confirmation box to proceed.');
      return;
    }

    if (!reason.trim()) {
      Alert.alert('Reason Required', 'Please provide a reason for deleting your account.');
      return;
    }

    Alert.alert(
      'Request Submitted',
      'Your account deletion request has been submitted successfully. We will process it shortly.'
    );

    setReason('');
    setConfirm(false);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.infoSection}>
        <Text style={styles.header}>Request Account Deletion</Text>
        <Text style={styles.infoText}>
          Deleting your account will remove all data, including:
        </Text>
        <Text style={styles.bulletText}>• Profile information</Text>
        <Text style={styles.bulletText}>• Wallet balance and transaction history</Text>
        <Text style={styles.warningText}>
          This action is irreversible. Please proceed with caution.
        </Text>
      </View>
      <View style={styles.formSection}>
        <Text style={styles.label}>Reason for Deletion:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your reason"
          value={reason}
          onChangeText={setReason}
          multiline
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={confirm}
            onValueChange={setConfirm}
            tintColors={{ true: '#4CAF50', false: '#ccc' }}
          />
          <Text style={styles.checkboxLabel}>
            I confirm I understand the consequences of account deletion.
          </Text>
        </View>
      </View>
      <TouchableOpacity
        style={[styles.button, confirm ? styles.buttonActive : styles.buttonDisabled]}
        onPress={handleRequestDeletion}
        disabled={!confirm}
      >
        <Text style={styles.buttonText}>Submit Request</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f8f8' },
  infoSection: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  infoText: { fontSize: 16, marginBottom: 10 },
  bulletText: { fontSize: 14, marginLeft: 10, marginBottom: 5 },
  warningText: { fontSize: 14, color: '#D32F2F', fontWeight: 'bold', marginTop: 10 },
  formSection: { backgroundColor: '#fff', padding: 15, borderRadius: 10 },
  label: { fontSize: 16, marginBottom: 5 },
  input: { height: 80, borderWidth: 1, borderColor: '#ccc', borderRadius: 10, marginBottom: 15 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 15 },
  checkboxLabel: { fontSize: 14, marginLeft: 10 },
  button: { paddingVertical: 15, borderRadius: 10, alignItems: 'center' },
  buttonActive: { backgroundColor: '#4CAF50' },
  buttonDisabled: { backgroundColor: '#ccc' },
  buttonText: { color: '#fff', fontSize: 16 },
});
