import { Text, View,StyleSheet } from 'react-native';
import Mybutton from "@/components/Mybutton";
import { useRouter} from 'expo-router';
import { Link } from 'expo-router'

const index = () => {

  const router = useRouter();
  const onContinue = () =>{
      router.navigate("/login");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>WelCome To CUEX App </Text>
      {/* <Mybutton title={"Continue"} onPress={onContinue}/> */}
      <Text>
        <Link href="/LoginPhone" asChild>
          <Mybutton title={"Login"} onPress={onContinue}/>
        </Link>
      </Text>
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

