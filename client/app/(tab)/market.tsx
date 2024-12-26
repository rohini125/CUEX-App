

// // import React, { useState, useEffect } from 'react';
// // import { View, Text, StyleSheet, FlatList, RefreshControl, TextInput } from 'react-native';
// // import axios from 'axios';
// // import { Picker } from '@react-native-picker/picker';

// // const Market = () => {
// //   const [currencyRates, setCurrencyRates] = useState<{ currency: string, rate: number }[]>([]);
// //   const [filteredRates, setFilteredRates] = useState<{ currency: string, rate: number }[]>([]);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [refreshing, setRefreshing] = useState(false);
// //   const [searchQuery, setSearchQuery] = useState('');
// //   const [selectedCurrency, setSelectedCurrency] = useState<string>('INR'); // Default base currency is INR
// //   const [allCurrencies, setAllCurrencies] = useState<string[]>([]); // To store all available currencies

// //   const API_URL = 'https://api.exchangerate-api.com/v4/latest/INR'; // Replace with your chosen API

// //   // Fetch the live currency rates and all currencies
// //   const fetchCurrencyRates = async (baseCurrency: string) => {
// //     setIsLoading(true);
// //     try {
// //       const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
// //       const rates = response.data.rates;
// //       const formattedRates = Object.entries(rates).map(([currency, rate]) => ({
// //         currency,
// //         rate: parseFloat(rate as string), // Ensure rate is a number
// //       }));

// //       // Set all currencies, not just top 10
// //       setCurrencyRates(formattedRates);
// //       setFilteredRates(formattedRates); // Initially set both to show all

// //       // Get list of all currencies from the API response and set it
// //       const currenciesList = Object.keys(rates);
// //       setAllCurrencies(currenciesList);
// //     } catch (error) {
// //       console.error('Error fetching currency rates:', error);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Trigger API call on page load and refresh
// //   useEffect(() => {
// //     fetchCurrencyRates(selectedCurrency); // Pass selected base currency to API
// //   }, [selectedCurrency]);

// //   // Handle pull-to-refresh
// //   const onRefresh = () => {
// //     setRefreshing(true);
// //     fetchCurrencyRates(selectedCurrency).then(() => setRefreshing(false));
// //   };

// //   // Handle search input change and filter the currencies
// //   const handleSearch = (query: string) => {
// //     setSearchQuery(query);
// //     if (query === '') {
// //       setFilteredRates(currencyRates); // If search is cleared, show all
// //     } else {
// //       const filteredData = currencyRates.filter(item =>
// //         item.currency.toLowerCase().includes(query.toLowerCase())
// //       );
// //       setFilteredRates(filteredData);
// //     }
// //   };

// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Live Currency Market</Text>

// //       {/* Base Currency Dropdown */}
// //       <Picker
// //         selectedValue={selectedCurrency}
// //         style={styles.picker}
// //         onValueChange={(itemValue: string) => setSelectedCurrency(itemValue)} // Ensure correct type here
// //       >
// //         {/* Render all currencies dynamically */}
// //         {allCurrencies.map((currency) => (
// //           <Picker.Item key={currency} label={currency} value={currency} />
// //         ))}
// //       </Picker>

// //       {/* Search Bar */}
// //       <TextInput
// //         style={styles.searchBar}
// //         placeholder="Search Currency"
// //         value={searchQuery}
// //         onChangeText={handleSearch}
// //       />

// //       {isLoading ? (
// //         <Text>Loading...</Text>
// //       ) : (
// //         <FlatList
// //           data={filteredRates}
// //           keyExtractor={(item) => item.currency}
// //           renderItem={({ item }) => (
// //             <View style={styles.rateItem}>
// //               <Text style={styles.currency}>{item.currency}</Text>
// //               {/* Display the rate correctly for each base currency */}
// //               {selectedCurrency === item.currency ? (
// //                 // If the selected currency is the same as the listed currency
// //                 <Text style={styles.rate}>1 {item.currency} = 1 {selectedCurrency}</Text>
// //               ) : (
// //                 // Show rate conversion
// //                 <Text style={styles.rate}>{`1 ${selectedCurrency} = ${item.rate} ${item.currency}`}</Text>
// //               )}
// //             </View>
// //           )}
// //           refreshControl={
// //             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
// //           }
// //         />
// //       )}
// //     </View>
// //   );
// // };

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#F8F9FA',
// //     padding: 16,
// //   },
// //   title: {
// //     fontSize: 24,
// //     fontWeight: 'bold',
// //     textAlign: 'center',
// //     marginBottom: 16,
// //   },
// //   picker: {
// //     height: 50,
// //     width: '100%',
// //     marginBottom: 16,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     backgroundColor: '#fff',
// //   },
// //   searchBar: {
// //     height: 40,
// //     borderColor: '#ccc',
// //     borderWidth: 1,
// //     borderRadius: 8,
// //     paddingHorizontal: 8,
// //     marginBottom: 16,
// //     fontSize: 16,
// //   },
// //   rateItem: {
// //     flexDirection: 'row',
// //     justifyContent: 'space-between',
// //     paddingVertical: 8,
// //     borderBottomWidth: 1,
// //     borderBottomColor: '#ddd',
// //   },
// //   currency: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// //   rate: {
// //     fontSize: 16,
// //     color: '#333',
// //   },
// // });

// // export default Market;

// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, RefreshControl, TextInput } from 'react-native';
// import axios from 'axios';
// import { Picker } from '@react-native-picker/picker';

// const Market = () => {
//   const [currencyRates, setCurrencyRates] = useState<{ currency: string, rate: number }[]>([]);
//   const [filteredRates, setFilteredRates] = useState<{ currency: string, rate: number }[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCurrency, setSelectedCurrency] = useState<string>('INR'); // Default base currency is INR
//   const [allCurrencies, setAllCurrencies] = useState<string[]>([]); // To store all available currencies

//   const API_URL = 'https://api.exchangerate-api.com/v4/latest/INR'; // Replace with your chosen API

//   // Fetch the live currency rates and all currencies
//   const fetchCurrencyRates = async (baseCurrency: string) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
//       const rates = response.data.rates;
//       const formattedRates = Object.entries(rates).map(([currency, rate]) => ({
//         currency,
//         rate: parseFloat(rate as string), // Ensure rate is a number
//       }));

//       // Set all currencies, not just top 10
//       setCurrencyRates(formattedRates);
//       setFilteredRates(formattedRates); // Initially set both to show all

//       // Get list of all currencies from the API response and set it
//       const currenciesList = Object.keys(rates);
//       setAllCurrencies(currenciesList);
//     } catch (error) {
//       console.error('Error fetching currency rates:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Trigger API call on page load and refresh
//   useEffect(() => {
//     fetchCurrencyRates(selectedCurrency); // Pass selected base currency to API
//   }, [selectedCurrency]);

//   // Handle pull-to-refresh
//   const onRefresh = () => {
//     setRefreshing(true);
//     fetchCurrencyRates(selectedCurrency).then(() => setRefreshing(false));
//   };

//   // Handle search input change and filter the currencies
//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     if (query === '') {
//       setFilteredRates(currencyRates); // If search is cleared, show all
//     } else {
//       const filteredData = currencyRates.filter(item =>
//         item.currency.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredRates(filteredData);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Live Currency Market</Text>

//       {/* Base Currency Dropdown */}
//       <Picker
//         selectedValue={selectedCurrency}
//         style={styles.picker}
//         onValueChange={(itemValue: string) => setSelectedCurrency(itemValue)} // Ensure correct type here
//       >
//         {/* Render all currencies dynamically */}
//         {allCurrencies.map((currency) => (
//           <Picker.Item key={currency} label={currency} value={currency} />
//         ))}
//       </Picker>

//       {/* Search Bar */}
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search Currency"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />

//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={filteredRates}
//           keyExtractor={(item) => item.currency}
//           renderItem={({ item }) => (
//             <View style={styles.rateItem}>
//               <Text style={styles.currency}>{item.currency}</Text>
//               {/* Display rate without "1 INR =" part */}
//               <Text style={styles.rate}>{item.rate} {item.currency}</Text>
//             </View>
//           )}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginBottom: 16,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   rateItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   currency: {
//     fontSize: 16,
//     color: '#333',
//   },
//   rate: {
//     fontSize: 16,
//     color: '#333',
//   },
// });

// export default Market;


// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, FlatList, RefreshControl, TextInput } from 'react-native';
// import axios from 'axios';
// import { Picker } from '@react-native-picker/picker';

// // Define a map for currency codes to their symbols
// const currencySymbols: { [key: string]: string } = {
//   USD: '$',
//   EUR: '€',
//   INR: '₹',
//   GBP: '£',
//   AUD: 'A$',
//   JPY: '¥',
//   CAD: 'C$',
//   CHF: 'CHF',
//   NZD: 'NZ$',
//   CNY: '¥',
//   // Add more as needed
// };

// const Market = () => {
//   const [currencyRates, setCurrencyRates] = useState<{ currency: string, rate: number }[]>([]);
//   const [filteredRates, setFilteredRates] = useState<{ currency: string, rate: number }[]>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [refreshing, setRefreshing] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedCurrency, setSelectedCurrency] = useState<string>('INR'); // Default base currency is INR
//   const [allCurrencies, setAllCurrencies] = useState<string[]>([]); // To store all available currencies

//   const API_URL = 'https://api.exchangerate-api.com/v4/latest/INR'; // Replace with your chosen API

//   // Fetch the live currency rates and all currencies
//   const fetchCurrencyRates = async (baseCurrency: string) => {
//     setIsLoading(true);
//     try {
//       const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${baseCurrency}`);
//       const rates = response.data.rates;
//       const formattedRates = Object.entries(rates).map(([currency, rate]) => ({
//         currency,
//         rate: parseFloat(rate as string), // Ensure rate is a number
//       }));

//       // Set all currencies, not just top 10
//       setCurrencyRates(formattedRates);
//       setFilteredRates(formattedRates); // Initially set both to show all

//       // Get list of all currencies from the API response and set it
//       const currenciesList = Object.keys(rates);
//       setAllCurrencies(currenciesList);
//     } catch (error) {
//       console.error('Error fetching currency rates:', error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Trigger API call on page load and refresh
//   useEffect(() => {
//     fetchCurrencyRates(selectedCurrency); // Pass selected base currency to API
//   }, [selectedCurrency]);

//   // Handle pull-to-refresh
//   const onRefresh = () => {
//     setRefreshing(true);
//     fetchCurrencyRates(selectedCurrency).then(() => setRefreshing(false));
//   };

//   // Handle search input change and filter the currencies
//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//     if (query === '') {
//       setFilteredRates(currencyRates); // If search is cleared, show all
//     } else {
//       const filteredData = currencyRates.filter(item =>
//         item.currency.toLowerCase().includes(query.toLowerCase())
//       );
//       setFilteredRates(filteredData);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Live Currency Market</Text>

//       {/* Base Currency Dropdown */}
//       <Picker
//         selectedValue={selectedCurrency}
//         style={styles.picker}
//         onValueChange={(itemValue: string) => setSelectedCurrency(itemValue)} // Ensure correct type here
//       >
//         {/* Render all currencies dynamically */}
//         {allCurrencies.map((currency) => (
//           <Picker.Item key={currency} label={currency} value={currency} />
//         ))}
//       </Picker>

//       {/* Search Bar */}
//       <TextInput
//         style={styles.searchBar}
//         placeholder="Search Currency"
//         value={searchQuery}
//         onChangeText={handleSearch}
//       />

//       {isLoading ? (
//         <Text>Loading...</Text>
//       ) : (
//         <FlatList
//           data={filteredRates}
//           keyExtractor={(item) => item.currency}
//           renderItem={({ item }) => {
//             const symbol = currencySymbols[item.currency] || ''; // Get symbol for currency, or default to empty string
//             return (
//               <View style={styles.rateItem}>
//                 <Text style={styles.currency}>{item.currency}</Text>
//                 {/* Display rate with symbol */}
//                 <Text style={styles.rate}>{`${symbol} ${item.rate.toFixed(4)}`}</Text>
//               </View>
//             );
//           }}
//           refreshControl={
//             <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
//           }
//         />
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#F8F9FA',
//     padding: 16,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 16,
//   },
//   picker: {
//     height: 50,
//     width: '100%',
//     marginBottom: 16,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     backgroundColor: '#fff',
//   },
//   searchBar: {
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 8,
//     marginBottom: 16,
//     fontSize: 16,
//   },
//   rateItem: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 8,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ddd',
//   },
//   currency: {
//     fontSize: 16,
//     color: '#333',
//   },
//   rate: {
//     fontSize: 16,
//     color: '#333',
//   },
// });

// export default Market;


import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, RefreshControl, TextInput } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

// Define a map for currency codes to their symbols
const currencySymbols: { [key: string]: string } = {
  USD: '$',
  EUR: '€',
  INR: '₹',
  GBP: '£',
  AUD: 'A$',
  JPY: '¥',
  CAD: 'C$',
  CHF: 'CHF',
  NZD: 'NZ$',
  CNY: '¥',
  AED: 'د.إ',
  ARS: 'AR$',
  BDT: '৳',
  BRL: 'R$',
  CLP: '$',
  COP: '$',
  CZK: 'Kč',
  DKK: 'kr',
  HUF: 'Ft',
  IDR: 'Rp',
  ILS: '₪',
  KRW: '₩',
  MXN: '$',
  MYR: 'RM',
  NOK: 'kr',
  PHP: '₱',
  PLN: 'zł',
  RON: 'lei',
  RUB: '₽',
  SAR: 'ر.س',
  SEK: 'kr',
  SGD: 'S$',
  THB: '฿',
  TRY: '₺',
  TWD: 'NT$',
  ZAR: 'R',
  // Add more as needed
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
    <View style={styles.container}>
      <Text style={styles.title}>Live Currency Market</Text>

      {/* Base Currency Dropdown */}
      <Picker
        selectedValue={selectedCurrency}
        style={styles.picker}
        onValueChange={(itemValue: string) => setSelectedCurrency(itemValue)} // Ensure correct type here
      >
        {/* Render all currencies dynamically */}
        {allCurrencies.map((currency) => (
          <Picker.Item key={currency} label={currency} value={currency} />
        ))}
      </Picker>

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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 16,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    fontSize: 16,
  },
  rateItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  currency: {
    fontSize: 16,
    color: '#333',
  },
  rate: {
    fontSize: 16,
    color: '#333',
  },
});

export default Market;
