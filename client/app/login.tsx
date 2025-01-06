
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Mybutton from "@/components/Mybutton";
import { Link, useRouter } from 'expo-router';

const Login = () => {
  const router = useRouter();

  const onLogin = () => {
    router.navigate('/verification');
  };

  const onSignUp = () => {
    router.navigate('/signup');
  };

  return (
    <ScrollView style={styles.container}>
      <Image source={require("@/assets/images/login.jpg")} style={styles.image} resizeMode="cover" />
      <View style={{ padding: 20, gap: 20 }}>
        <TextInput placeholder="Enter Your Email / Mobile no" style={styles.input} />
        <TextInput placeholder="Enter Your Password" style={styles.input} secureTextEntry />
          <Mybutton title={"Login"} onPress={onLogin} />
          <Text style={{ textAlign: 'center' }}>
          Don't have an account?{' '}
            <Text style={styles.link} onPress={onSignUp}>
              Signup
            </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 400,
  },
  input: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
