
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Mybutton = ({title, onPress}) => {
  return (
        <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.button } 
            onPress={onPress}
        >

            <Text style={styles.text}> {title} </Text>

        </TouchableOpacity>
  )
};

export default Mybutton;


const styles = StyleSheet.create({
    button:{
        backgroundColor:'blue', 
        paddingVertical:15 , 
        paddingHorizontal:15,
        borderRadius:10 ,
        alignItems:"center",
    },
    text:{
        fontSize:16 , color:'white' , fontWeight:'bold'
    }
});

