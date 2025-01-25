import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TextInput, StatusBar } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';
import Header from '../Header';

// Define a map for currency codes to their symbols
const currencySymbols: { [key: string]: string } = {
  INR: '₹', USD: '$', EUR: '€', GBP: '£', JPY: '¥', AUD: 'A$', CAD: 'C$', CHF: 'Fr.', CNY: '¥', SEK: 'kr', NZD: 'NZ$', SGD: 'S$', ZAR: 'R', MXN: '$', BRL: 'R$', RUB: '₽', KRW: '₩', AED: 'د.إ', HKD: 'HK$', MYR: 'RM', THB: '฿', IDR: 'Rp', PHP: '₱', VND: '₫', COP: '$', ARS: '$', CLP: '$', PEN: 'S/', TRY: '₺', NOK: 'kr', DKK: 'kr',  PLN: 'zł', HUF: 'Ft', CZK: 'Kč', ILS: '₪', KES: 'KSh', EGP: '£', PKR: '₨', LKR: 'Rs', BDT: '৳', QAR: 'ر.ق', 
  OMR: 'ر.ع.', KWD: 'د.ك', BHD: 'د.ب', SAR: 'ر.س', KZT: '₸', UAH: '₴', LBP: 'ل.ل', JOD: 'د.ا', IQD: 'ع.د', TND: 'د.ت', MAD: 'د.م.', DZD: 'د.ج', TWD: 'NT$', MNT: '₮', RON: 'lei', BGN: 'лв', RSD: 'дин.', HRK: 'kn', MKD: 'ден', AZN: '₼', GEL: 'ლ', AMD: 'դր.', BYN: 'Br', TMT: 'T', UZS: 'лв', TJS: 'SM', KGS: 'сом', MZN: 'MT', ANG: 'ƒ', PYG: '₲', GHS: '₵', NGN: '₦', KHR: '៛', LAK: '₭', MMK: 'Ks', BOB: 'Bs.', CUP: '₱', MDL: 'lei', RWF: 'Fr', UGX: 'USh', AFN: '؋', AOA: 'Kz', 
  AWG: 'Afl.', BAM: 'KM', BBD: '$', BIF: 'Fr', BND: '$', BSD: '$', BTN: 'Nu.', BWP: 'P', BZD: 'BZ$', CDF: 'Fr', CRC: '₡',  CVE: '$', DJF: 'Fdj', DOP: '$', ERN: 'Nakfa', ETB: 'ታብ', FJD: '$', FKP: '£', FOK: 'kr', GGP: '£', GIP: '£', GNF: 'Fr', GTQ: 'Q', GYD: '$', HNL: 'L', HTG: 'G', IMP: '£', IRR: '﷼', ISK: 'kr', JMD: '$', KID: '$', KMF: 'Fr', KYD: '$', LRD: '$', LSL: 'M', LYD: 'ل.د', MGA: 'Ar', MOP: 'MOP', MRU: 'MRU', MUR: '₨', MVR: 'Rf', MWK: 'MK',
};

const Market = () => {
  const [currencyRates, setCurrencyRates] = useState<{ currency: string, rate: number }[]>([]);
  const [filteredRates, setFilteredRates] = useState<{ currency: string, rate: number }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState<string>('INR'); // Default base currency is INR
  const [allCurrencies, setAllCurrencies] = useState<string[]>([]); // To store all available currencies

  const API_URL = 'https://api.exchangerate-api.com/v4/latest/INR'; // Replace with your chosen API

  // Fetch the live currency rates and all currencies
  const fetchCurrencyRates = async (baseCurrency: string) => {
    setIsLoading(true);
    try {
      const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
      const rates = response.data.rates;
      const formattedRates = Object.entries(rates).map(([currency, rate]) => ({
        currency,
        rate: parseFloat(rate as string), // Ensure rate is a number
      }));

      // Set all currencies, not just top 10
      setCurrencyRates(formattedRates);
      setFilteredRates(formattedRates); // Initially set both to show all

      // Get list of all currencies from the API response and set it
      const currenciesList = Object.keys(rates);
      setAllCurrencies(currenciesList);
    } catch (error) {
      console.error('Error fetching currency rates:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Trigger API call on page load and refresh
  useEffect(() => {
    fetchCurrencyRates(selectedCurrency); // Pass selected base currency to API
  }, [selectedCurrency]);

  // Handle pull-to-refresh
  const onRefresh = () => {
    setRefreshing(true);
    fetchCurrencyRates(selectedCurrency).then(() => setRefreshing(false));
  };

  // Handle search input change and filter the currencies
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query === '') {
      setFilteredRates(currencyRates); // If search is cleared, show all
    } else {
      const filteredData = currencyRates.filter(item =>
        item.currency.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRates(filteredData);
    }
  };

  // Function to get the currency symbol or fallback to empty string
  const getCurrencySymbol = (currencyCode: string): string => {
    return currencySymbols[currencyCode] || currencyCode; // If symbol is not found, return the currency code as fallback
  };

  return (

    <View style={{ flex: 1 }}>
    {/* Full-Width Header */}
    <View>
      <Header/>
    </View>
    <View style={styles.container}>
      
      <Text style={styles.title}>Live Currency Market</Text>

      {/* Base Currency Dropdown */}
      
      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCurrency}
          style={styles.picker}
          onValueChange={(itemValue: string) => setSelectedCurrency(itemValue)} 
        >
          {allCurrencies.map((currency) => (
            <Picker.Item key={currency} label={currency} value={currency} />
          ))}
        </Picker>
      </View>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search Currency"
        value={searchQuery}
        onChangeText={handleSearch}
      />

      {isLoading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={filteredRates}
          keyExtractor={(item) => item.currency}
          renderItem={({ item }) => {
            const symbol = getCurrencySymbol(item.currency); // Get the symbol using the function
            return (
              <View style={styles.rateItem}>
                <Text style={styles.currency}>{item.currency}</Text>
                {/* Display rate with symbol */}
                <Text style={styles.rate}>{`${symbol} ${item.rate.toFixed(4)}`}</Text>
              </View>
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      )}
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#F8F9FA',
    backgroundColor:'#ADD8E6',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop:15,
    marginBottom: 16,
  },
  pickerWrapper: {
    // borderColor: '#777777',
    // borderWidth: 1,
    borderRadius: 14,
    overflow: 'hidden', // Ensure borderRadius works properly
    backgroundColor: '#fff',
    marginBottom: 14,
  },
  picker: {
    height: 50,
    width: '100%',
  },
  // picker: {
  //   height: 50,
  //   width: '100%',
  //   marginBottom: 14,
  //   borderColor: '#777777',
  //   borderWidth: 1,
  //   borderRadius: 8,
  //   backgroundColor: '#fff',
  // },
  searchBar: {
    height: 40,
    backgroundColor:'#fff',
    // borderColor: '#777777',
    // borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  rateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#777777',
  },
  currency: {
    fontSize: 14,
    color: '#333',
  },
  rate: {
    fontSize: 14,
    color: '#333',
  },
});

export default Market;




