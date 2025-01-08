import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, FlatList, Image, StyleSheet , TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router'; // Import router for navigation

const promotions = [
  { id: '1', title: 'Exchange Rates Special!', description: 'Get the best rates for USD to INR today.', image: 'https://via.placeholder.com/150' },
  { id: '2', title: 'Wallet Cashback Offer', description: 'Earn 10% cashback on wallet top-ups.', image: 'https://via.placeholder.com/150' },
  { id: '3', title: 'Zero Fee Transfers', description: 'No fees on international transfers.', image: 'https://via.placeholder.com/150' },
  { id: '4', title: 'Zero Fee Transfers', description: 'No fees on international transfers.', image: 'https://via.placeholder.com/150' },
];
 const router = useRouter(); // For navigation
const PromotionsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPromotions = promotions.filter(promotion =>
    promotion.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    promotion.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <TouchableOpacity onPress={() => router.push('/front')} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      <Text style={styles.title}>Promotions</Text>
        <TextInput
          style={styles.searchBar}
          placeholder="Search Promotions..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Carousel Section */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carouselContainer}>
        {promotions.map(promotion => (
          <View key={promotion.id} style={styles.carouselItem}>
            <Image source={{ uri: promotion.image }} style={styles.carouselImage} />
            <Text style={styles.carouselText}>{promotion.title}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Promotions Grid */}
      <FlatList
        data={filteredPromotions}
        keyExtractor={item => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.promotionCard}>
            <Image source={{ uri: item.image }} style={styles.promotionImage} />
            <Text style={styles.promotionTitle}>{item.title}</Text>
            <Text style={styles.promotionDescription}>{item.description}</Text>
          </View>
        )}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    padding: 10 
  },
  header:  {     
  flexDirection: 'row',
  marginBottom: 20 ,
  alignItems: 'center', // Vertically centers the arrow and text
},
  backButton: {
    marginRight: 10,
  },
  title: {
     fontSize: 24,
      fontWeight: 'bold',
       marginBottom: 10,
       flex: 1, // Ensures the title takes up the remaining space
    textAlign: 'center', // Centers the text between the arrow and search bar
       },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: '#f9f9f9',
  },
  carouselContainer: { 
    marginBottom: 20 
  },
  carouselItem: { 
    marginRight: 10, 
    alignItems: 'center'
   },
  carouselImage: { 
    width: 150, 
    height: 100,
     borderRadius: 8 
    },
  carouselText: {
     marginTop: 5,
      fontSize: 14, 
      fontWeight: 'bold' 
    },
  promotionCard: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  promotionImage: { width: '100%', height: 100, borderRadius: 8 },
  promotionTitle: { fontSize: 16, fontWeight: 'bold', marginTop: 10 },
  promotionDescription: { fontSize: 12, color: '#555', marginTop: 5 },
});

export default PromotionsPage;
