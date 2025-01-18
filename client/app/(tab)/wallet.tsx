
// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   FlatList,
//   ScrollView,
//   TextInput,
//   Alert,
// } from "react-native";
// import React, { useState } from "react";

// const Wallet = () => {
//   const [currencies, setCurrencies] = useState([
//     { id: "1", currency: "INR", amount: 0 },
//   ]);
//   const [totalBalance, setTotalBalance] = useState(0);
//   const [inputAmount, setInputAmount] = useState("");

//   const handleDeposit = () => {
//     const amount = parseFloat(inputAmount);
//     if (!amount || isNaN(amount)) {
//       Alert.alert("Invalid Input", "Please enter a valid amount.");
//       return;
//     }

//     const updatedCurrencies = currencies.map((currency) =>
//       currency.currency === "INR"
//         ? { ...currency, amount: currency.amount + amount }
//         : currency
//     );

//     setCurrencies(updatedCurrencies);
//     setTotalBalance(totalBalance + amount);
//     setInputAmount("");
//     Alert.alert("Success", `₹${amount} deposited successfully.`);
//   };


//   const handleWithdraw = () => {
//     const amount = parseFloat(inputAmount);
//     if (!amount || isNaN(amount) || amount > totalBalance) {
//       Alert.alert(
//         "Invalid Input",
//         "Please enter a valid amount or ensure sufficient balance."
//       );
//       return;
//     }

//     const updatedCurrencies = currencies.map((currency) =>
//       currency.currency === "INR"
//         ? { ...currency, amount: currency.amount - amount }
//         : currency
//     );

//     setCurrencies(updatedCurrencies);
//     setTotalBalance(totalBalance - amount);
//     setInputAmount("");
//     Alert.alert("Success", `₹${amount} withdrawn successfully.`);
//   };

//   const handleBuy = () => {
//     Alert.alert("Buy Action", "Buy functionality is under development.");
//   };

//   const handleTransfer = () => {
//     Alert.alert("Transfer Action", "Transfer functionality is under development.");
//   };

//   return (
//     <ScrollView style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.title}>My Wallet</Text>
//         <Text style={styles.balanceLabel}>Total Balance</Text>
//         <Text style={styles.balanceValue}>₹{totalBalance.toFixed(2)}</Text>
//       </View>

//       <TextInput
//         style={styles.input}
//         placeholder="Enter amount"
//         keyboardType="numeric"
//         value={inputAmount}
//         onChangeText={(text) => setInputAmount(text)}
//       />

//       <View style={styles.actions}>
//         <TouchableOpacity style={styles.actionButton} onPress={handleDeposit} activeOpacity={0.7}>
//           <Text style={styles.actionText}>Deposit</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={handleWithdraw} activeOpacity={0.7}>
//           <Text style={styles.actionText}>Withdraw</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={handleBuy} activeOpacity={0.7}>
//           <Text style={styles.actionText}>Buy</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.actionButton} onPress={handleTransfer} activeOpacity={0.7}>
//           <Text style={styles.actionText}>Transfer</Text>
//         </TouchableOpacity>
//       </View>

//       <View style={styles.currencies}>
//         <Text style={styles.sectionTitle}>Currency</Text>
//         <FlatList
//           data={currencies}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.currencyRow}>
//               <Text style={styles.currencyName}>{item.currency}</Text>
//               <Text style={styles.currencyValue}>₹{item.amount.toFixed(2)}</Text>
//             </View>
//           )}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#F5F5F5",
//     padding: 20,
//   },
//   header: {
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//   },
//   balanceLabel: {
//     fontSize: 16,
//     color: "#555",
//     marginTop: 5,
//   },
//   balanceValue: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#28a745",
//     marginTop: 10,
//   },
//   input: {
//     height: 40,
//     borderColor: "#ccc",
//     borderWidth: 1,
//     borderRadius: 5,
//     backgroundColor: "#fff",
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   actions: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20,
//   },
//   actionButton: {
//     backgroundColor: "#007bff",
//     padding: 10,
//     borderRadius: 5,
//     flex: 1,
//     marginRight: 10,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   actionText: {
//     color: "#fff",
//     fontSize: 16,
//   },
//   currencies: {
//     marginTop: 20,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: "bold",
//     marginBottom: 10,
//   },
//   currencyRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingVertical: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: "#ddd",
//   },
//   currencyName: {
//     fontSize: 16,
//   },
//   currencyValue: {
//     fontSize: 16,
//     fontWeight: "bold",
//   },
// });

// export default Wallet;




import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Header from '../Header';

// Define a type for currency object
interface Currency {
  id: string;
  currency: string;
  amount: number;
}

const Wallet = () => {
  // Set the initial state with types
  const [currencies, setCurrencies] = useState<Currency[]>([
    { id: "1", currency: "INR", amount: 0 },
    { id: "2", currency: "USD", amount: 0 },
  ]);
  const [totalBalance, setTotalBalance] = useState<number>(0);
  const [inputAmount, setInputAmount] = useState<string>("");
  const [conversionRate, setConversionRate] = useState<number>(0.013); // Example rate: 1 INR = 0.013 USD

  const handleDeposit = () => {
    const amount = parseFloat(inputAmount);
    if (!amount || isNaN(amount)) {
      Alert.alert("Invalid Input", "Please enter a valid amount.");
      return;
    }

    const updatedCurrencies = currencies.map((currency) =>
      currency.currency === "INR"
        ? { ...currency, amount: currency.amount + amount }
        : currency
    );

    setCurrencies(updatedCurrencies);
    setTotalBalance(totalBalance + amount);
    setInputAmount("");
    Alert.alert("Success", `₹${amount} deposited successfully.`);
  };

  const handleWithdraw = () => {
    const amount = parseFloat(inputAmount);
    if (!amount || isNaN(amount) || amount > totalBalance) {
      Alert.alert(
        "Invalid Input",
        "Please enter a valid amount or ensure sufficient balance."
      );
      return;
    }

    const updatedCurrencies = currencies.map((currency) =>
      currency.currency === "INR"
        ? { ...currency, amount: currency.amount - amount }
        : currency
    );

    setCurrencies(updatedCurrencies);
    setTotalBalance(totalBalance - amount);
    setInputAmount("");
    Alert.alert("Success", `₹${amount} withdrawn successfully.`);
  };

  const handleBuy = () => {
    Alert.alert("Buy Action", "Buy functionality is under development.");
  };

  const handleTransfer = () => {
    Alert.alert("Transfer Action", "Transfer functionality is under development.");
  };

  return (
    <View style={{ flex: 1 }}>
    {/* Full-Width Header */}
    <View >
      <Header/>
    </View>
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Wallet</Text>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceValue}>₹{totalBalance.toFixed(2)}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        keyboardType="numeric"
        value={inputAmount}
        onChangeText={(text) => setInputAmount(text)}
      />

      <View style={styles.actions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleDeposit} activeOpacity={0.7}>
          <Text style={styles.actionText}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleWithdraw} activeOpacity={0.7}>
          <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleBuy} activeOpacity={0.7}>
          <Text style={styles.actionText}>Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton} onPress={handleTransfer} activeOpacity={0.7}>
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
              <Text style={styles.currencyValue}>
                {item.currency === "USD" ? `$ ${item.amount.toFixed(2)}` : `₹ ${item.amount.toFixed(2)}`}
              </Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
    </View>
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
  },
  balanceLabel: {
    fontSize: 16,
    color: "#555",
    marginTop: 5,
  },
  balanceValue: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#28a745",
    marginTop: 10,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    flex: 1,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  actionText: {
    color: "#fff",
    fontSize: 16,
  },
  currencies: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  currencyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  currencyName: {
    fontSize: 16,
  },
  currencyValue: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Wallet;
