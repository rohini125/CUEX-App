import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, TextInput, Pressable, Alert } from 'react-native';
import { Text, List, Divider, RadioButton, Button } from 'react-native-paper';
import { useRouter } from 'expo-router'; // For navigation

export default function AdditionalDetailsScreen() {
  const router = useRouter();

  // States for personal information
  const [gender, setGender] = useState('Female');
  const [age, setAge] = useState('19');
  const [maritalStatus, setMaritalStatus] = useState('Single');
  const [education, setEducation] = useState('');

  // States for family members
  const [familyMembers, setFamilyMembers] = useState('Parents / In-laws');

  // States for preferences
  const [domesticTravel, setDomesticTravel] = useState('I do not travel');
  const [internationalTravel, setInternationalTravel] = useState('I do not travel internationally');
  const [personalInterests, setPersonalInterests] = useState('Others');
  const [movies, setMovies] = useState('I do not watch movies in theatres');

  const [hasChanges, setHasChanges] = useState(false);

  // Track changes
  useEffect(() => {
    setHasChanges(true);
  }, [gender, age, maritalStatus, education, familyMembers, domesticTravel, internationalTravel, personalInterests, movies]);

  const handleSaveChanges = () => {
    const parsedAge = parseInt(age, 10);

    if (isNaN(parsedAge) || parsedAge < 1 || parsedAge > 120) {
      Alert.alert('Error', 'Please enter a valid age.');
      return;
    }

    if (!education.trim()) {
      Alert.alert('Error', 'Please enter your education qualification.');
      return;
    }

    console.log('Saved Data:', {
      gender,
      age: parsedAge,
      maritalStatus,
      education,
      familyMembers,
      preferences: {
        domesticTravel,
        internationalTravel,
        personalInterests,
        movies,
      },
    });

    Alert.alert('Success', 'Your changes have been saved!', [
      {
        text: 'OK',
        onPress: () => router.push('/profile'),
      },
    ]);

    setHasChanges(false);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>
      <Text style={styles.header}>Manage Data</Text>
      <Text style={styles.subheader}>
        This information will be used for personalizing your experience & services across CUEX.
      </Text>

      {/* Personal Information Section */}
      <List.Section>
        <List.Subheader style={styles.subheaderTitle}>Personal Information</List.Subheader>
        <Divider />

        <List.Item
          title="Gender"
          description={gender}
          right={() => (
            <Pressable onPress={() => setGender(gender === 'Male' ? 'Female' : 'Male')}>
              <List.Icon icon="chevron-right" />
            </Pressable>
          )}
        />
        <Divider />
        <List.Item
          title="Age"
          description={age}
          right={() => (
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={age}
              onChangeText={setAge}
              placeholder="Age"
            />
          )}
        />
        <Divider />
        <List.Item
          title="Marital Status"
          description={maritalStatus}
          right={() => (
            <Pressable onPress={() => setMaritalStatus(maritalStatus === 'Single' ? 'Married' : 'Single')}>
              <List.Icon icon="chevron-right" />
            </Pressable>
          )}
        />
        <Divider />
        <List.Item
          title="Education Qualification"
          description={education || 'Please tell us your education qualification'}
          right={() => (
            <TextInput
              style={styles.input}
              value={education}
              onChangeText={setEducation}
              placeholder="Education Qualification"
            />
          )}
        />
        <Divider />
        <List.Item
          title="Family Members"
          description={familyMembers}
          right={() => (
            <Pressable onPress={() => setFamilyMembers(familyMembers === 'Parents / In-laws' ? 'Friends' : 'Parents / In-laws')}>
              <List.Icon icon="chevron-right" />
            </Pressable>
          )}
        />
        <Divider />
      </List.Section>

      {/* Preferences Section */}
      <List.Section>
        <List.Subheader style={styles.subheaderTitle}>Preferences</List.Subheader>
        <Divider />

        <List.Item
          title="Domestic Travel"
          description={domesticTravel}
          right={() => (
            <Pressable onPress={() => setDomesticTravel(domesticTravel === 'I do not travel' ? 'Travel often' : 'I do not travel')}>
              <List.Icon icon="chevron-right" />
            </Pressable>
          )}
        />
        <Divider />
        <List.Item
          title="International Travel"
          description={internationalTravel}
          right={() => (
            <Pressable
              onPress={() =>
                setInternationalTravel(
                  internationalTravel === 'I do not travel internationally'
                    ? 'Travel frequently internationally'
                    : 'I do not travel internationally'
                )
              }
            >
              <List.Icon icon="chevron-right" />
            </Pressable>
          )}
        />
        <Divider />
        <List.Item
          title="Personal Interests"
          description={personalInterests}
          right={() => (
            <TextInput
              style={styles.input}
              value={personalInterests}
              onChangeText={setPersonalInterests}
              placeholder="Enter interests"
            />
          )}
        />
        <Divider />
        <List.Item
          title="Movies"
          description={movies}
          right={() => (
            <Pressable onPress={() => setMovies(movies === 'I do not watch movies in theatres' ? 'Watch movies in theatres' : 'I do not watch movies in theatres')}>
              <List.Icon icon="chevron-right" />
            </Pressable>
          )}
        />
        <Divider />
      </List.Section>

      {/* Save Changes Button */}
      <Button
        mode="contained"
        style={styles.saveButton}
        onPress={handleSaveChanges}
        disabled={!hasChanges}
      >
        Save Changes
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 24,
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
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
    fontSize: 16,
    marginRight: 16,
  },
  saveButton: {
    marginVertical: 16,
    backgroundColor: '#6200ee',
  },
});

