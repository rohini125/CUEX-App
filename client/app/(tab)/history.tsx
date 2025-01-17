// import React from 'react';
// import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

// const History = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Filters */}
//       <View style={styles.filters}>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Last 7 days</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>All</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Received</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Sent</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Converted</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.filterButton}>
//           <Text style={styles.filterText}>Currency</Text>
//         </TouchableOpacity>
//       </View>

//       {/* Table Headers */}
//       <View style={styles.tableHeader}>
//         <Text style={styles.headerText}>Type</Text>
//         <Text style={styles.headerText}>Amount</Text>
//         <Text style={styles.headerText}>Payment Method</Text>
//         <Text style={styles.headerText}>Status</Text>
//         <Text style={styles.headerText}>Activity</Text>
//       </View>

//       {/* Table Rows */}
//       <View style={styles.tableRow}>
//         <Text style={styles.rowText}>Deposit ↓</Text>
//         <Text style={styles.rowText}>10,000</Text>
//         <Text style={styles.rowText}>Ppay</Text>
//         <Text style={styles.rowText}>Success</Text>
//         <Text style={styles.rowText}>Add funds</Text>
//       </View>

//       <View style={styles.tableRow}>
//         <Text style={styles.rowText}>Converted ⇄</Text>
//         <Text style={styles.rowText}>10,000</Text>
//         <Text style={styles.rowText}>-</Text>
//         <Text style={styles.rowText}>Success</Text>
//         <Text style={styles.rowText}>Converted</Text>
//       </View>

//       <View style={styles.tableRow}>
//         <Text style={styles.rowText}>Send ↑</Text>
//         <Text style={styles.rowText}>100$</Text>
//         <Text style={styles.rowText}>Scanner</Text>
//         <Text style={styles.rowText}>Success</Text>
//         <Text style={styles.rowText}>Sends</Text>
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//     padding: 10,
//   },
//   filters: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     marginBottom: 10,
//   },
//   filterButton: {
//     backgroundColor: '#ddd',
//     padding: 8,
//     margin: 5,
//     borderRadius: 5,
//   },
//   filterText: {
//     fontSize: 14,
//     color: '#333',
//   },
//   tableHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#ddd',
//     padding: 10,
//     borderRadius: 5,
//   },
//   headerText: {
//     fontWeight: 'bold',
//     fontSize: 14,
//     flex: 1,
//     textAlign: 'center',
//   },
//   tableRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   rowText: {
//     fontSize: 14,
//     flex: 1,
//     textAlign: 'center',
//   },
// });

// export default History;





// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
// import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

// const History = () => {
//   return (
//     <View style={styles.container}>
//       {/* Search Box */}
//       <View style={styles.searchBox}>
//         <Image source={require('./assets/images/bank_SBI.jpg')} style={styles.search} />
//         <Text style={styles.searchText}>Search by name, number or UPI ID</Text>
//       </View>

//       {/* Card View */}
//       <View style={styles.card}>
//         {/* Filters View */}
//         <View style={styles.filtersView}>
//           <TouchableOpacity style={styles.dropdownView}>
//             <Text>Month</Text>
//             <Image source={require('../assets/images/bank_SBI.jpg')} style={styles.icon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.dropdownView}>
//             <Text>Categories</Text>
//             <Image source={require('../assets/images/bank_SBI.jpg')} style={styles.icon} />
//           </TouchableOpacity>
//         </View>

//         {/* Transaction List */}
//         <FlatList
//           contentContainerStyle={styles.flatListContainer}
//           data={[1, 1, 1, 1, 1]}
//           renderItem={({ item, index }) => (
//             <View style={styles.transactionItem}>
//               {/* Left Section */}
//               <View>
//                 <View style={styles.topLeftView}>
//                   <View style={styles.iconView}>
//                     <Image
//                       // source={index % 2 === 0 ? require('../images/down-right.png') : require('../images/credited.png')}
//                       source={index % 2 === 0 ? require('./assets/images/bank_SBI.jpg') : require('./assets/images/bank_SBI.jpg')}
//                       style={styles.icon2}
//                     />
//                   </View>
//                   <View style={styles.textContainer}>
//                     <Text style={styles.paidTo}>Paid to</Text>
//                     <Text style={styles.name}>Sakshi</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.time}>Yesterday</Text>
//               </View>

//               {/* Right Section */}
//               <View style={styles.rightView}>
//                 <Text style={styles.amount}>₹ 10000</Text>
//                 <View style={styles.bankView}>
//                   <Text style={styles.time}>Debited from</Text>
//                   <Image source={require('./assets/images/bank_SBI.jpg')} style={styles.logo} />
//                   {/* <Image source={require('../images/bank_logo.png')} style={styles.logo} /> */}
//                 </View>
//               </View>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   searchBox: {
//     width: '94%',
//     height: verticalScale(40),
//     backgroundColor: 'white',
//     alignSelf: 'center',
//     marginTop: moderateVerticalScale(10),
//     borderRadius: moderateScale(10),
//     borderWidth: 0.5,
//     borderColor: '#929292',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingLeft: moderateScale(15),
//   },
//   search: {
//     width: scale(15),
//     height: scale(15),
//   },
//   searchText: {
//     marginLeft: moderateScale(20),
//     color: '#929292',
//     fontSize: moderateScale(16),
//   },
//   card: {
//     width: '94%',
//     backgroundColor: 'white',
//     marginTop: moderateVerticalScale(15),
//     alignSelf: 'center',
//     borderRadius: moderateScale(10),
//     shadowOpacity: 0.1,
//     shadowColor: 'rgba(0,0,0,0.5)',
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//     elevation: 3, // For Android shadow
//   },
//   filtersView: {
//     width: '90%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: moderateVerticalScale(15),
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   dropdownView: {
//     borderWidth: 1,
//     borderRadius: moderateScale(10),
//     paddingHorizontal: moderateScale(10),
//     paddingVertical: moderateVerticalScale(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginLeft: moderateScale(10),
//     width: scale(8),
//     height: scale(8),
//   },
//   flatListContainer: {
//     paddingVertical: moderateVerticalScale(10), // Adjust padding as needed
//   },
//   transactionItem: {
//     width: '94%',
//     alignSelf: 'center',
//     paddingVertical: moderateVerticalScale(10),
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   topLeftView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconView: {
//     width: scale(36),
//     height: scale(36),
//     backgroundColor: 'purple',
//     borderRadius: moderateScale(10),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon2: {
//     width: scale(16),
//     height: scale(16),
//     tintColor: 'white',
//   },
//   textContainer: {
//     marginLeft: moderateScale(10),
//   },
//   paidTo: {
//     color: '#4f4f4f',
//     fontSize: moderateScale(14),
//   },
//   name: {
//     color: '#000',
//     fontSize: moderateScale(16),
//     fontWeight: '600',
//   },
//   time: {
//     color: '#929292',
//     fontSize: moderateScale(12),
//   },
//   rightView: {
//     alignItems: 'flex-end',
//   },
//   amount: {
//     fontWeight: '700',
//     fontSize: moderateScale(16),
//     color: '#000',
//   },
//   bankView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: moderateVerticalScale(5),
//   },
//   logo: {
//     width: scale(16),
//     height: scale(16),
//     marginLeft: moderateScale(5),
//   },
// });

// export default History;




import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';
// import SBIImage from '../../assets/images/SBI.jpg';

const History = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Search Box */}
      <View style={styles.searchBox}>
        <Image source={require('../../assets/images/SBI.jpg')} style={styles.search} />
        <Text style={styles.searchText}>Search by name, number or UPI ID</Text>
      </View>

      {/* Card View */}
      <View style={styles.card}>
        {/* Filters View */}
        <View style={styles.filtersView}>
          <TouchableOpacity style={styles.dropdownView}>
            <Text>Month</Text>
            <Image source={require('../../assets/images/SBI.jpg')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.dropdownView}>
            <Text>Categories</Text>
            <Image source={require('../../assets/images/SBI.jpg')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        {/* Transaction List */}
        <FlatList
          contentContainerStyle={styles.flatListContainer}
          data={[1, 1, 1, 1, 1]}
          renderItem={({ item, index }) => (
            <View style={styles.transactionItem}>
              {/* Left Section */}
              <View>
                <View style={styles.topLeftView}>
                  <View style={styles.iconView}>
                    <Image
                      source={index % 2 === 0 ? require('../../assets/images/SBI.jpg') : require('../../assets/images/SBI.jpg')}
                      style={styles.icon2}
                    />
                  </View>
                  <View style={styles.textContainer}>
                    <Text style={styles.paidTo}>Paid to</Text>
                    <Text style={styles.name}>Sakshi</Text>
                  </View>
                </View>
                <Text style={styles.time}>Yesterday</Text>
              </View>

              {/* Right Section */}
              <View style={styles.rightView}>
                <Text style={styles.amount}>₹ 10000</Text>
                <View style={styles.bankView}>
                  <Text style={styles.time}>Debited from</Text>
                  <Image source={require('../../assets/images/SBI.jpg')} style={styles.logo} />
                </View>
              </View>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  searchBox: {
    width: '94%',
    height: verticalScale(40),
    backgroundColor: 'white',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: 0.5,
    borderColor: '#929292',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: moderateScale(15),
  },
  search: {
    width: scale(15),
    height: scale(15),
  },
  searchText: {
    marginLeft: moderateScale(20),
    color: '#929292',
    fontSize: moderateScale(16),
  },
  card: {
    width: '94%',
    backgroundColor: 'white',
    marginTop: moderateVerticalScale(15),
    alignSelf: 'center',
    borderRadius: moderateScale(10),
    shadowOpacity: 0.1,
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    elevation: 3, // For Android shadow
  },
  filtersView: {
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateVerticalScale(15),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dropdownView: {
    borderWidth: 1,
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateVerticalScale(5),
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: moderateScale(10),
    width: scale(8),
    height: scale(8),
  },
  flatListContainer: {
    paddingVertical: moderateVerticalScale(10), // Adjust padding as needed
  },
  transactionItem: {
    width: '94%',
    alignSelf: 'center',
    paddingVertical: moderateVerticalScale(10),
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  topLeftView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconView: {
    width: scale(36),
    height: scale(36),
    backgroundColor: 'purple',
    borderRadius: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    width: scale(16),
    height: scale(16),
    tintColor: 'white',
  },
  textContainer: {
    marginLeft: moderateScale(10),
  },
  paidTo: {
    color: '#4f4f4f',
    fontSize: moderateScale(14),
  },
  name: {
    color: '#000',
    fontSize: moderateScale(16),
    fontWeight: '600',
  },
  time: {
    color: '#929292',
    fontSize: moderateScale(12),
  },
  rightView: {
    alignItems: 'flex-end',
  },
  amount: {
    fontWeight: '700',
    fontSize: moderateScale(16),
    color: '#000',
  },
  bankView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(5),
  },
  logo: {
    width: scale(16),
    height: scale(16),
    marginLeft: moderateScale(5),
  },
});

export default History;


// import React from 'react';
// import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
// import { ScrollView } from 'react-native-gesture-handler';
// import { moderateScale, moderateVerticalScale, scale, verticalScale } from 'react-native-size-matters';

// const History = () => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Search Box */}
//       <View style={styles.searchBox}>
//         <Image source={require('../assets/images/SBI.jpg')} style={styles.search} />
//         <Text style={styles.searchText}>Search by name, number or UPI ID</Text>
//       </View>

//       {/* Card View */}
//       <View style={styles.card}>
//         {/* Filters View */}
//         <View style={styles.filtersView}>
//           <TouchableOpacity style={styles.dropdownView}>
//             <Text>Month</Text>
//             <Image source={require('../assets/images/SBI.jpg')} style={styles.icon} />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.dropdownView}>
//             <Text>Categories</Text>
//             <Image source={require('../assets/images/SBI.jpg')} style={styles.icon} />
//           </TouchableOpacity>
//         </View>

//         {/* Transaction List */}
//         <FlatList
//           contentContainerStyle={styles.flatListContainer}
//           data={[1, 1, 1, 1, 1]}
//           renderItem={({ item, index }) => (
//             <View style={styles.transactionItem}>
//               {/* Left Section */}
//               <View>
//                 <View style={styles.topLeftView}>
//                   <View style={styles.iconView}>
//                     <Image
//                       source={index % 2 === 0 ? require('../assets/images/SBI.jpg') : require('../assets/images/SBI.jpg')}
//                       style={styles.icon2}
//                     />
//                   </View>
//                   <View style={styles.textContainer}>
//                     <Text style={styles.paidTo}>Paid to</Text>
//                     <Text style={styles.name}>Sakshi</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.time}>Yesterday</Text>
//               </View>

//               {/* Right Section */}
//               <View style={styles.rightView}>
//                 <Text style={styles.amount}>₹ 10000</Text>
//                 <View style={styles.bankView}>
//                   <Text style={styles.time}>Debited from</Text>
//                   <Image source={require('../assets/images/SBI.jpg')} style={styles.logo} />
//                 </View>
//               </View>
//             </View>
//           )}
//           keyExtractor={(item, index) => index.toString()}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//   },
//   searchBox: {
//     width: '94%',
//     height: verticalScale(40),
//     backgroundColor: 'white',
//     alignSelf: 'center',
//     marginTop: moderateVerticalScale(10),
//     borderRadius: moderateScale(10),
//     borderWidth: 0.5,
//     borderColor: '#929292',
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingLeft: moderateScale(15),
//   },
//   search: {
//     width: scale(15),
//     height: scale(15),
//   },
//   searchText: {
//     marginLeft: moderateScale(20),
//     color: '#929292',
//     fontSize: moderateScale(16),
//   },
//   card: {
//     width: '94%',
//     backgroundColor: 'white',
//     marginTop: moderateVerticalScale(15),
//     alignSelf: 'center',
//     borderRadius: moderateScale(10),
//     shadowOpacity: 0.1,
//     shadowColor: 'rgba(0,0,0,0.5)',
//     shadowOffset: {
//       width: 1,
//       height: 1,
//     },
//     elevation: 3, // For Android shadow
//   },
//   filtersView: {
//     width: '90%',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: moderateVerticalScale(15),
//     flexDirection: 'row',
//     alignSelf: 'center',
//   },
//   dropdownView: {
//     borderWidth: 1,
//     borderRadius: moderateScale(10),
//     paddingHorizontal: moderateScale(10),
//     paddingVertical: moderateVerticalScale(5),
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   icon: {
//     marginLeft: moderateScale(10),
//     width: scale(8),
//     height: scale(8),
//   },
//   flatListContainer: {
//     paddingVertical: moderateVerticalScale(10), // Adjust padding as needed
//   },
//   transactionItem: {
//     width: '94%',
//     alignSelf: 'center',
//     paddingVertical: moderateVerticalScale(10),
//     borderBottomWidth: 1,
//     borderBottomColor: '#e0e0e0',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   topLeftView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconView: {
//     width: scale(36),
//     height: scale(36),
//     backgroundColor: 'purple',
//     borderRadius: moderateScale(10),
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   icon2: {
//     width: scale(16),
//     height: scale(16),
//     tintColor: 'white',
//   },
//   textContainer: {
//     marginLeft: moderateScale(10),
//   },
//   paidTo: {
//     color: '#4f4f4f',
//     fontSize: moderateScale(14),
//   },
//   name: {
//     color: '#000',
//     fontSize: moderateScale(16),
//     fontWeight: '600',
//   },
//   time: {
//     color: '#929292',
//     fontSize: moderateScale(12),
//   },
//   rightView: {
//     alignItems: 'flex-end',
//   },
//   amount: {
//     fontWeight: '700',
//     fontSize: moderateScale(16),
//     color: '#000',
//   },
//   bankView: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginTop: moderateVerticalScale(5),
//   },
//   logo: {
//     width: scale(16),
//     height: scale(16),
//     marginLeft: moderateScale(5),
//   },
// });

// export default History;

