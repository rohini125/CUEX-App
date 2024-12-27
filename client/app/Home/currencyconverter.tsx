
// import React, { useState, useEffect } from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// const CurrencyConverter = () => {
//   const [currencies, setCurrencies] = useState<string[]>([]);
//   const [fromCurrency, setFromCurrency] = useState('USD');
//   const [toCurrency, setToCurrency] = useState('INR');
//   const [amount, setAmount] = useState('');
//   const [convertedAmount, setConvertedAmount] = useState<string | null>(null);
//   const [loading, setLoading] = useState(false);

//   // Fetch currency list from API
//   useEffect(() => {
//     const fetchCurrencies = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           'https://api.exchangerate-api.com/v4/latest/USD'
//         );
//         const data = await response.json();
//         setCurrencies(Object.keys(data.rates));
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching currency data:', error);
//         setLoading(false);
//       }
//     };

//     fetchCurrencies();
//   }, []);

//   const handleConvert = async () => {
//     try {
//       if (!amount) return; // Don't proceed if amount is empty
//       setLoading(true);
//       const response = await fetch(
//         `https://api.exchangerate-api.com/v4/latest/${fromCurrency}`
//       );
//       const data = await response.json();
//       const rate = data.rates[toCurrency];
//       const result = (parseFloat(amount) * rate).toFixed(2);
//       setConvertedAmount(result);
//       setLoading(false);
//     } catch (error) {
//       console.error('Error converting currency:', error);
//       setLoading(false);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Currency Converter</Text>

//       {loading ? (
//         <ActivityIndicator size="large" color="#5e5af6" />
//       ) : (
//         <>
//           <View style={styles.row}>
//             <View style={styles.column}>
//               <Text>From: {fromCurrency}</Text>
//               <Picker
//                 selectedValue={fromCurrency}
//                 style={styles.picker}
//                 onValueChange={(itemValue) => setFromCurrency(itemValue)}
//               >
//                 {currencies.map((currency) => (
//                   <Picker.Item
//                     label={currency}
//                     value={currency}
//                     key={currency}
//                   />
//                 ))}
//               </Picker>
//             </View>

//             <Text style={styles.icon}>↔</Text>

//             <View style={styles.column}>
//               <Text>To: {toCurrency}</Text>
//               <Picker
//                 selectedValue={toCurrency}
//                 style={styles.picker}
//                 onValueChange={(itemValue) => setToCurrency(itemValue)}
//               >
//                 {currencies.map((currency) => (
//                   <Picker.Item
//                     label={currency}
//                     value={currency}
//                     key={currency}
//                   />
//                 ))}
//               </Picker>
//             </View>
//           </View>

//           <View style={styles.row}>
//             <Text>Amount:</Text>
//             <TextInput
//               style={styles.input}
//               keyboardType="numeric"
//               value={amount}
//               onChangeText={(text) => setAmount(text)}
//               placeholder="Enter amount"
//             />
//           </View>

//           <View style={styles.row}>
//             <Text>Converted Amount:</Text>
//             <TextInput
//               style={styles.input}
//               value={convertedAmount || ''}
//               editable={false}
//               placeholder="Converted amount will appear here"
//             />
//           </View>

//           <View style={styles.buttonRow}>
//             <TouchableOpacity style={styles.button} onPress={handleConvert}>
//               <Text style={styles.buttonText}>Convert</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.buttonAddFunds}>
//               <Text style={styles.buttonText}>Add Funds</Text>
//             </TouchableOpacity>
//           </View>
//         </>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: 15,
//   },
//   column: {
//     flex: 1,
//   },
//   picker: {
//     height: 40,
//     backgroundColor: '#fff',
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: '#fff',
//     paddingHorizontal: 10,
//   },
//   buttonRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginTop: 20,
//   },
//   button: {
//     flex: 1,
//     backgroundColor: '#007bff',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     marginRight: 10,
//   },
//   buttonAddFunds: {
//     flex: 1,
//     backgroundColor: '#28a745',
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   icon: {
//     fontSize: 24,
//     paddingHorizontal: 10,
//     textAlign: 'center',
//   },
// });

// export default CurrencyConverter;


import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CurrencyConverter = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('INR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('0');
  const [walletBalance, setWalletBalance] = useState(0);
  const [loading, setLoading] = useState(false);

  // Fetch currency list from API
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          'https://api.exchangerate-api.com/v4/latest/USD'
        );
        const data = await response.json();
        setCurrencies(Object.keys(data.rates));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching currency data:', error);
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  const handleConvert = async () => {
    try {
      if (!amount) return;
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

  const handleAddFunds = () => {
    const amountToAdd = parseFloat(convertedAmount);
    if (!isNaN(amountToAdd)) {
      setWalletBalance(walletBalance + amountToAdd);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Currency Converter</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#5e5af6" />
      ) : (
        <>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text>From:</Text>
              <Picker
                selectedValue={fromCurrency}
                style={styles.picker}
                onValueChange={(itemValue) => setFromCurrency(itemValue)}
              >
                {currencies.map((currency) => (
                  <Picker.Item
                    label={currency}
                    value={currency}
                    key={currency}
                  />
                ))}
              </Picker>
            </View>

            <Text style={styles.icon}>↔</Text>

            <View style={styles.column}>
              <Text>To:</Text>
              <Picker
                selectedValue={toCurrency}
                style={styles.picker}
                onValueChange={(itemValue) => setToCurrency(itemValue)}
              >
                {currencies.map((currency) => (
                  <Picker.Item
                    label={currency}
                    value={currency}
                    key={currency}
                  />
                ))}
              </Picker>
            </View>
          </View>

          <View style={styles.row}>
            <Text>Amount:</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={amount}
              onChangeText={(text) => setAmount(text)}
            />
          </View>

          <View style={styles.row}>
            <Text>Converted Amount:</Text>
            <TextInput
              style={styles.input}
              value={convertedAmount}
              editable={false}
            />
          </View>

          <View style={styles.rowButtons}>
            <TouchableOpacity style={styles.button} onPress={handleConvert}>
              <Text style={styles.buttonText}>Convert</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonAddFunds} onPress={handleAddFunds}>
              <Text style={styles.buttonText}>Add Funds</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.walletRow}>
            <Text style={styles.walletText}>Wallet Balance: ₹{walletBalance.toFixed(2)}</Text>
          </View>
        </>
      )}
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
  column: {
    flex: 1,
  },
  picker: {
    height: 40,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
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
  icon: {
    fontSize: 24,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  walletRow: {
    marginTop: 20,
    alignItems: 'center',
  },
  walletText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CurrencyConverter;
