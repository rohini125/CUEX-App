// pages/promotions.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Pressable } from "react-native";
import { useRouter } from "expo-router";

const promotions = [
  {
    id: 1,
    title: "Get 20% Cashback",
    description: "Earn 20% cashback on your first international transfer.",
    image: "https://via.placeholder.com/150",
    validUntil: "Valid until: Dec 31, 2024",
  },
  {
    id: 2,
    title: "No Transaction Fees",
    description: "Enjoy zero transaction fees for transfers above $500.",
    image: "https://via.placeholder.com/150",
    validUntil: "Valid until: Jan 15, 2025",
  },
  {
    id: 3,
    title: "Exclusive Deals for Students",
    description: "Special currency exchange rates for students.",
    image: "https://via.placeholder.com/150",
    validUntil: "Valid until: Feb 28, 2025",
  },
];

export default function PromotionsPage() {
  const router = useRouter();

  const handlePromotionClick = (id: number) => {
    router.push(`/promotions/${id}`); // Navigate to promotion details
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Promotions</Text>
      {promotions.map((promo) => (
        <Pressable
          key={promo.id}
          onPress={() => handlePromotionClick(promo.id)}
          style={styles.card}
        >
          <Image source={{ uri: promo.image }} style={styles.image} />
          <View style={styles.details}>
            <Text style={styles.title}>{promo.title}</Text>
            <Text style={styles.description}>{promo.description}</Text>
            <Text style={styles.validUntil}>{promo.validUntil}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 16,
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 16,
    borderRadius: 8,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 100,
    height: 100,
  },
  details: {
    flex: 1,
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  validUntil: {
    fontSize: 12,
    color: "#007BFF",
  },
});
