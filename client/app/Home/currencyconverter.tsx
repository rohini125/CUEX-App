
import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('0');
  const [walletBalance, setWalletBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCurrencies, setFilteredCurrencies] = useState<string[]>([]);
  const [showFromModal, setShowFromModal] = useState(false);
  const [showToModal, setShowToModal] = useState(false);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        const data = await response.json();
        const currencyList = Object.keys(data.rates);
        setCurrencies(currencyList);
        setFilteredCurrencies(currencyList);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching currency data:', error);
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  useEffect(() => {
    const autoConvert = async () => {
      if (!amount) {
        setConvertedAmount('0');
        return;
      }

      try {
        setLoading(true);
        const response = await fetch(
          `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
        );
        const data = await response.json();
        const rate = data.rates[toCurrency];
        const result = (parseFloat(amount) * rate).toFixed(2);
        setConvertedAmount(result);
        setLoading(false);
      } catch (error) {
        console.error('Error converting currency:', error);
        setLoading(false);
      }
    };

    autoConvert();
  }, [amount, fromCurrency, toCurrency]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setFilteredCurrencies(
      currencies.filter((currency) =>
        currency.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currency Converter</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#5e5af6" />
      ) : (
        <>
          {/* From Currency Selector */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.pickerContainer}
              onPress={() => setShowFromModal(true)}
            >
              <Text>From: {fromCurrency}</Text>
            </TouchableOpacity>
          </View>

          {/* To Currency Selector */}
          <View style={styles.row}>
            <TouchableOpacity
              style={styles.pickerContainer}
              onPress={() => setShowToModal(true)}
            >
              <Text>To: {toCurrency}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.row}>
            <Text>Amount: </Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </View>

          <View style={styles.row}>
            <Text>Converted Amount: </Text>
            <TextInput
              style={styles.input}
              value={convertedAmount}
              editable={false}
            />
          </View>

          <View style={styles.rowButtons}>
            <TouchableOpacity style={[styles.button, styles.shadow]}>
              <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.buttonAddFunds, styles.shadow]}>
              <Text style={styles.buttonText}>Add Funds</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {/* Modal for From Currency */}
      <Modal visible={showFromModal} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={() => setShowFromModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search currency"
            value={searchTerm}
            onChangeText={handleSearch}
          />
          <FlatList
            data={filteredCurrencies}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.currencyItem}
                onPress={() => {
                  setFromCurrency(item);
                  setShowFromModal(false);
                  setSearchTerm('');
                  setFilteredCurrencies(currencies);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>

      {/* Modal for To Currency */}
      <Modal visible={showToModal} animationType="slide" transparent>
        <TouchableWithoutFeedback onPress={() => setShowToModal(false)}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search currency"
            value={searchTerm}
            onChangeText={handleSearch}
          />
          <FlatList
            data={filteredCurrencies}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.currencyItem}
                onPress={() => {
                  setToCurrency(item);
                  setShowToModal(false);
                  setSearchTerm('');
                  setFilteredCurrencies(currencies);
                }}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  rowButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginRight: 10,
  },
  buttonAddFunds: {
    flex: 1,
    backgroundColor: '#28a745',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  pickerContainer: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    maxHeight: '50%',
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  currencyItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default CurrencyConverter;
