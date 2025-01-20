import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

// Define the type of each help option
interface HelpOption {
  id: string;
  title: string;
  icon: any; // You can replace `any` with ImageSourcePropType for stricter type checking
}

const help = () => {
  const helpOptions: HelpOption[] = [
    { id: '1', title: 'Payment Issues', icon: require('../../../assets/images/payment_issues.png') },
    { id: '2', title: 'Profile & Payments', icon: require('../../../assets/images/profile_payments.png') },
    { id: '3', title: 'Money Transfer', icon: require('../../../assets/images/money_transfer.png') },
    { id: '4', title: 'Recharge & Bill Payments', icon: require('../../../assets/images/recharge_bills.png') },
    { id: '5', title: 'Rewards & Refer and Earn', icon: require('../../../assets/images/rewards.png') },
    { id: '6', title: 'Others', icon: require('../../../assets/images/others.png') },
  ];
  const router = useRouter();

  // Specify the type of item in renderItem
  const renderHelpOption = ({ item }: { item: HelpOption }) => (
    <TouchableOpacity
      style={styles.optionContainer}
      onPress={() => {
        if (item.id === '1') {
          router.push('./payment_issue');
        }
      }}
    >
      <Image source={item.icon} style={styles.icon} />
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
        <View style={styles.header}>
           <TouchableOpacity onPress={() => router.push('/Sidebar/menu')} style={styles.backButton}>
             <Ionicons name="arrow-back" size={24} color="#fff" />
           </TouchableOpacity>
           {/* Help Section */}
            <Text style={styles.headerTitle}>Help</Text>
         </View>

      {/* Help Options */}
      <Text style={styles.subTitle}>Need Help?</Text>
      <FlatList
        data={helpOptions}
        renderItem={renderHelpOption}
        keyExtractor={(item) => item.id}
        numColumns={2} // Display 3 columns
        contentContainerStyle={styles.optionsGrid}
      />

      {/* Call Us Section */}
      <View style={styles.assistanceContainer}>
        <Text style={styles.assistanceText}>Need further assistance?</Text>
        <Text style={styles.subText}>We are here to help you!</Text>
        <TouchableOpacity style={styles.callButton}>
          <Text style={styles.callButtonText}>Call Us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: '#6200ee',
    paddingHorizontal: 16,
    marginBottom:10
  },
  headerTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  backButton: {
    marginRight: 10,
    padding: 10,
  },
  imageSection: {
    marginVertical: 16, // Adds spacing below the header
    alignItems: 'center', // Center the image horizontally
  },
  headerImage: {
    width: '100%', // Makes the image span the width of the screen
    height: 200, // Adjust height as needed
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
    marginRight:10,
    color: '#333',
  },
  optionsGrid: {
    alignItems: 'center',
    flexWrap: 'wrap', // Ensure that items wrap when there are more columns
  },
  optionContainer: {
    width: width / 2 - 20, // Set width of each option to fit 3 columns with margin
    alignItems: 'center',
    margin: 5,
    marginBottom:40

  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
    textAlign: 'center', // Ensure text is centered
    flexWrap: 'wrap', // Allow the text to wrap if it's too long
    marginTop: 8, // Add some spacing between the image and the text
    width: '100%', // Ensure text occupies the full width of the container
  },
  assistanceContainer: {
    marginTop: 20,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  assistanceText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  callButton: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  callButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default help;
