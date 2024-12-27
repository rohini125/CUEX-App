import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const History = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Filters */}
      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Last 7 days</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Received</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Sent</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Converted</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Currency</Text>
        </TouchableOpacity>
      </View>

      {/* Table Headers */}
      <View style={styles.tableHeader}>
        <Text style={styles.headerText}>Type</Text>
        <Text style={styles.headerText}>Amount</Text>
        <Text style={styles.headerText}>Payment Method</Text>
        <Text style={styles.headerText}>Status</Text>
        <Text style={styles.headerText}>Activity</Text>
      </View>

      {/* Table Rows */}
      <View style={styles.tableRow}>
        <Text style={styles.rowText}>Deposit ↓</Text>
        <Text style={styles.rowText}>10,000</Text>
        <Text style={styles.rowText}>Ppay</Text>
        <Text style={styles.rowText}>Success</Text>
        <Text style={styles.rowText}>Add funds</Text>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.rowText}>Converted ⇄</Text>
        <Text style={styles.rowText}>10,000</Text>
        <Text style={styles.rowText}>-</Text>
        <Text style={styles.rowText}>Success</Text>
        <Text style={styles.rowText}>Converted</Text>
      </View>

      <View style={styles.tableRow}>
        <Text style={styles.rowText}>Send ↑</Text>
        <Text style={styles.rowText}>100$</Text>
        <Text style={styles.rowText}>Scanner</Text>
        <Text style={styles.rowText}>Success</Text>
        <Text style={styles.rowText}>Sends</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    padding: 10,
  },
  filters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#ddd',
    padding: 8,
    margin: 5,
    borderRadius: 5,
  },
  filterText: {
    fontSize: 14,
    color: '#333',
  },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 5,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowText: {
    fontSize: 14,
    flex: 1,
    textAlign: 'center',
  },
});

export default History;
