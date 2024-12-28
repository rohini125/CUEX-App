import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { Text, List, Divider, RadioButton } from 'react-native-paper';

export default function AdditionalDetailsScreen() {
  const [gender, setGender] = useState("Female"); // Default gender
  const [age, setAge] = useState("19"); // Default age
  const [maritalStatus, setMaritalStatus] = useState("Single"); // Default marital status
  const [education, setEducation] = useState(""); // Default education qualification
  const [showGenderOptions, setShowGenderOptions] = useState(false);
  const [showMaritalStatusOptions, setShowMaritalStatusOptions] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Manage Data</Text>
      <Text style={styles.subheader}>
        This information will be used for personalizing your experience & services across CUEX.
      </Text>

      <List.Section>
        <List.Subheader style={styles.subheaderTitle}>Personal Information</List.Subheader>
        <Divider />
        
        {/* Gender Selection */}
        <List.Item
          title="Gender"
          description={gender}
          right={() => (
            <Pressable onPress={() => setShowGenderOptions(!showGenderOptions)}>
              <List.Icon icon={showGenderOptions ? "chevron-up" : "chevron-down"} />
            </Pressable>
          )}
        />
        {showGenderOptions && (
          <RadioButton.Group
            onValueChange={(value: string) => setGender(value)}
            value={gender}
          >
            <View style={styles.radioItem}>
              <RadioButton value="Male" />
              <Text>Male</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="Female" />
              <Text>Female</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="Other" />
              <Text>Other</Text>
            </View>
          </RadioButton.Group>
        )}
        <Divider />

        {/* Age Input */}
        <List.Item
          title="Age"
          description="Enter your age"
          right={() => (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={age}
              onChangeText={(text) => setAge(text)}
              placeholder="Age"
            />
          )}
        />
        <Divider />

        {/* Marital Status Selection */}
        <List.Item
          title="Marital Status"
          description={maritalStatus}
          right={() => (
            <Pressable onPress={() => setShowMaritalStatusOptions(!showMaritalStatusOptions)}>
              <List.Icon icon={showMaritalStatusOptions ? "chevron-up" : "chevron-down"} />
            </Pressable>
          )}
        />
        {showMaritalStatusOptions && (
          <RadioButton.Group
            onValueChange={(value: string) => setMaritalStatus(value)}
            value={maritalStatus}
          >
            <View style={styles.radioItem}>
              <RadioButton value="Single" />
              <Text>Single</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="Married" />
              <Text>Married</Text>
            </View>
            <View style={styles.radioItem}>
              <RadioButton value="Other" />
              <Text>Other</Text>
            </View>
          </RadioButton.Group>
        )}
        <Divider />

        {/* Education Qualification Input */}
        <List.Item
          title="Education Qualification"
          description="Enter your education qualification"
          right={() => (
            <TextInput
              style={styles.input}
              value={education}
              onChangeText={(text) => setEducation(text)}
              placeholder="Education Qualification"
            />
          )}
        />
        <Divider />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  subheader: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 16,
  },
  subheaderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingLeft: 16,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 100,
    textAlign: 'center',
    fontSize: 16,
    marginRight: 16,
  },
});
