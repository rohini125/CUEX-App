import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, FlatList, TextInput } from 'react-native';

// Define the AlertData interface
interface AlertData {
  type: 'price' | 'percentage';
  value: string | number;
  description: string;
}

export default function PriceAlerts() {
  // List of currencies with their symbols
  const currencies = [
    { code: 'USD', name: 'US Dollar', symbol: '$' },
    { code: 'EUR', name: 'Euro', symbol: '€' },
    { code: 'GBP', name: 'British Pound', symbol: '£' },
    { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
    { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
    // Add more currencies as needed
  ];

  // State variables
  const [currentPrice, setCurrentPrice] = useState(1.0); // Example current price
  const [alertPrice, setAlertPrice] = useState(1.2); // Default alert price
  const [percentageChange, setPercentageChange] = useState(5); // Default percentage change
  const [selectedMode, setSelectedMode] = useState<'price' | 'percentage'>('price'); // Default mode
  const [alerts, setAlerts] = useState<AlertData[]>([]); // Array to store created alerts
  const [searchQuery, setSearchQuery] = useState(''); // For searching currencies
  const [selectedCurrency, setSelectedCurrency] = useState<{ code: string; name: string; symbol: string }>({
    code: 'USD', name: 'US Dollar', symbol: '$'
  }); // Default selected currency

  // Handle "By Price" Selection
  const handleByPrice = () => {
    setSelectedMode('price');
    setAlertPrice(currentPrice + 0.2);
  };

  // Handle "By % Change" Selection
  const handleByPercentageChange = () => {
    setSelectedMode('percentage');
    setPercentageChange(5);
  };

  // Adjust Price for "By Price" Mode
  const adjustAlertPrice = (amount: number) => {
    setAlertPrice((prev) => Math.max(0, prev + amount));
  };

  // Adjust Percentage for "By % Change" Mode
  const adjustPercentageChange = (amount: number) => {
    setPercentageChange((prev) => Math.max(0, prev + amount));
  };

  // Handle Create Alert
  const handleCreateAlert = () => {
    let alertData: AlertData = {
      type: 'price', // Placeholder value
      value: 0,
      description: '',
    };

    if (selectedMode === 'price') {
      alertData = {
        type: 'price',
        value: alertPrice.toFixed(2),
        description: `Alert when price reaches ${selectedCurrency.symbol}${alertPrice.toFixed(2)}`,
      };
    } else if (selectedMode === 'percentage') {
      const targetPrice = currentPrice * (1 + percentageChange / 100);
      alertData = {
        type: 'percentage',
        value: percentageChange,
        description: `Alert when price changes by ${percentageChange}% to ${selectedCurrency.symbol}${targetPrice.toFixed(2)}`,
      };
    }

    // Add the alert to the list
    setAlerts((prev) => [...prev, alertData]);

    // Show confirmation
    Alert.alert('Alert Created', alertData.description);
  };

  // Search currencies based on query
  const filteredCurrencies = currencies.filter((currency) =>
    currency.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    currency.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle currency selection
  const handleCurrencySelect = (currency: { code: string; name: string; symbol: string }) => {
    setSelectedCurrency(currency);
    setSearchQuery(''); // Clear the search bar after selecting a currency
    setCurrentPrice(1.0); // Reset price for now or set a real price here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Price Alerts</Text>

      {/* Currency Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Currency"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      {/* Currency List */}
      {searchQuery.length > 0 && (
        <FlatList
          data={filteredCurrencies}
          keyExtractor={(item) => item.code}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.currencyItem} onPress={() => handleCurrencySelect(item)}>
              <Text style={styles.currencyCode}>{item.code}</Text>
              <Text style={styles.currencyName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      )}

      {/* Current Currency and Value */}
      <View style={styles.currencyRow}>
        <Text style={styles.currencyText}>{selectedCurrency.code}</Text>
        <Text style={styles.currencyValue}>{selectedCurrency.symbol}{currentPrice.toFixed(2)}</Text>
      </View>

      {/* Mode Selection */}
      <View style={styles.alertOptions}>
        <TouchableOpacity
          style={[styles.alertButton, selectedMode === 'price' && styles.selectedButton]}
          onPress={handleByPrice}
        >
          <Text style={styles.alertButtonText}>BY PRICE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.alertButton, selectedMode === 'percentage' && styles.selectedButton]}
          onPress={handleByPercentageChange}
        >
          <Text style={styles.alertButtonText}>BY % CHANGE</Text>
        </TouchableOpacity>
      </View>

      {/* Alert Input Section */}
      {selectedMode === 'price' ? (
        <View>
          <Text style={styles.alertLabel}>ALERT PRICE:</Text>
          <View style={styles.priceAdjuster}>
            <TouchableOpacity style={styles.adjustButton} onPress={() => adjustAlertPrice(-0.1)}>
              <Text style={styles.adjustButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.alertPrice}>{selectedCurrency.symbol}{alertPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.adjustButton} onPress={() => adjustAlertPrice(0.1)}>
              <Text style={styles.adjustButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text style={styles.alertLabel}>ALERT % CHANGE:</Text>
          <View style={styles.priceAdjuster}>
            <TouchableOpacity
              style={styles.adjustButton}
              onPress={() => adjustPercentageChange(-1)}
            >
              <Text style={styles.adjustButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.alertPrice}>{percentageChange}%</Text>
            <TouchableOpacity
              style={styles.adjustButton}
              onPress={() => adjustPercentageChange(1)}
            >
              <Text style={styles.adjustButtonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Create Alert Button */}
      <TouchableOpacity style={styles.createButton} onPress={handleCreateAlert}>
        <Text style={styles.createButtonText}>CREATE ALERT</Text>
      </TouchableOpacity>

      {/* Display Created Alerts */}
      <View style={styles.alertsContainer}>
        <Text style={styles.alertsHeader}>Created Alerts:</Text>
        <FlatList
          data={alerts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.alertItem}>
              <Text style={styles.alertDescription}>{item.description}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007BFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  currencyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    alignItems: 'center',
  },
  currencyText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  currencyValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  currencyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  currencyCode: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  currencyName: {
    fontSize: 14,
    color: '#555',
  },
  alertOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  alertButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  selectedButton: {
    backgroundColor: '#0056b3',
  },
  alertButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  alertLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  priceAdjuster: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  adjustButton: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
  },
  adjustButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  alertPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  createButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alertsContainer: {
    marginTop: 30,
  },
  alertsHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  alertItem: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
    marginBottom: 10,
  },
  alertDescription: {
    fontSize: 16,
  },
});
