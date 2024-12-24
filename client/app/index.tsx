// import { Link } from 'expo-router';
import { Text, View,StyleSheet } from 'react-native';
import Mybutton from "@/components/Mybutton";
import { useRouter } from 'expo-router';

const index = () => {

  const router = useRouter();
  const onContinue = () =>{
      router.navigate("/login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WelCome To CUEX App </Text>
      <Mybutton title={"Continue"} onPress={onContinue}/>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginBottom:20
  }
});
