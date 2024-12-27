import { View, Text, TouchableOpacity, StyleSheet, FlatList, ScrollView } from "react-native";
import React from "react";

const Wallet = () => {
  const currencies = [
    { id: "1", currency: "INR", amount: "₹20,000" },
    { id: "2", currency: "USD", amount: "₹25,000" },
    { id: "3", currency: "AMD", amount: "₹16,650" },
    { id: "4", currency: "AUD", amount: "₹28,350" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Wallet</Text>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceValue}>1000 USD ≈ ₹90,000</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>Transfer</Text>
        </TouchableOpacity> 
      </View>

      <View style={styles.currencies}>
        <Text style={styles.sectionTitle}>Currency</Text>
        <FlatList
          data={currencies}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.currencyRow}>
              <Text style={styles.currencyName}>{item.currency}</Text>
              <Text style={styles.currencyValue}>{item.amount}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2C3E50",
  },
  balanceLabel: {
    fontSize: 16,
    color: "#7F8C8D",
  },
  balanceValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#27AE60",
    marginTop: 5,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#3498DB",
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 5,
    alignItems: "center",
  },
  actionText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  currencies: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: 10,
  },
  currencyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#D5D8DC",
  },
  currencyName: {
    fontSize: 16,
    color: "#34495E",
  },
  currencyValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2E86C1",
  },
});

export default Wallet;
