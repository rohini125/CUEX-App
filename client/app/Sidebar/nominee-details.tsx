import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NomineeDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nominee Details</Text>
      <Text style={styles.description}>
        Add or update recipients of your funds in case of unforeseen events.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#6200ee',
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
  },
});

export default NomineeDetails;
