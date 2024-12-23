import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import Mybutton from "@/components/Mybutton";
import { useRouter } from 'expo-router';

const SignUp = () => {
  const router = useRouter();

  const onSignUp = () => {
    router.navigate('/login');
  };

  const onLogin = () => {
    router.navigate('/login');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 20, gap: 20 }}>
        <Image source={require("@/assets/images/signup.jpg")} style={styles.image} resizeMode="cover" />
        <TextInput placeholder="Enter Your Full Name" style={styles.input} />
        <TextInput placeholder="Enter Your Email" style={styles.input} />
        <TextInput placeholder="Enter Your Mobile No." style={styles.input} />
        <TextInput placeholder="Enter Your Password" style={styles.input} secureTextEntry />
        <TextInput placeholder="Confirm Your Password" style={styles.input} secureTextEntry />
        <Mybutton title={"SignUp"} onPress={onSignUp} />
        <Text style={{ textAlign: 'center' }}>
          Already a member?{' '}
          <Text style={styles.link} onPress={onLogin}>
            Login
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
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

