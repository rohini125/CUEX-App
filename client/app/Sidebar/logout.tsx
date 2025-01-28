import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Define RootParamList with route names and params
export type RootParamList = {
    Login: undefined;
    Home: undefined;
    Profile: undefined;
};

type LogoutScreenNavigationProp = NativeStackNavigationProp<RootParamList, 'Login'>;

const LogoutPage = () => {
    const navigation = useNavigation<LogoutScreenNavigationProp>();
    const [isLoggingOut, setIsLoggingOut] = useState(false);

    const handleLogout = () => {
        Alert.alert(
            'Confirm Logout',
            'Are you sure you want to log out?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'Logout',
                    onPress: () => {
                        setIsLoggingOut(true);

                        // Simulate API call or AsyncStorage clearance
                        setTimeout(() => {
                            setIsLoggingOut(false);
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }], // Redirect to Login screen
                            });
                        }, 1000);
                    },
                },
            ]
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Logout</Text>
            <Text style={styles.subText}>Are you sure you want to log out of your account?</Text>
            <TouchableOpacity
                style={styles.logoutButton}
                onPress={handleLogout}
                disabled={isLoggingOut}
            >
                <Text style={styles.logoutButtonText}>
                    {isLoggingOut ? 'Logging Out...' : 'Log Out'}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f9fa',
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    subText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#555',
        marginBottom: 40,
    },
    logoutButton: {
        backgroundColor: '#d9534f',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
    },
    logoutButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default LogoutPage;
