import React from 'react';
import { View, Text, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Profile: undefined;
  Logout: undefined;
};

type LogoutPageProps = NativeStackScreenProps<RootStackParamList, 'Logout'>;

const LogoutPage: React.FC<LogoutPageProps> = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 }}>
      <Text>You have logged out successfully.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
};

export default LogoutPage;
