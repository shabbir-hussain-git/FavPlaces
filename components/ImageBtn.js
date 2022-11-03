import { Text,View,ScrollView,StyleSheet, TextInput, Pressable } from "react-native";
import DIMEN from "../Util/Dimen";
import COLORS from "../Util/Colors";
import ShIconFa from "./Icon/ShIconFa";


const ImageBtn = (props) => {

    let stylesArr = [];
    if(props.style){
        stylesArr = props.style;
    }
    return (
      <View style={stylesArr}>
        <Pressable>
          <View style={styles.imageCapture}>
            <View style={styles.iconStye}>
              <ShIconFa
                name={props.iconName}
                size={25}
                color={COLORS.primary_100}></ShIconFa>
            </View>
            <Text style={[styles.textLook, styles.textSize]}>
                
            {/* <ShIconFa
                style={styles.iconStye}
                name={props.iconName}
                size={25}
                color={COLORS.primary_100}></ShIconFa> */}
                 {props.text}
            </Text>
          </View>
        </Pressable>
      </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:COLORS.primary_300,

    },
    imageCapture:{
        borderRadius:5,
        borderWidth:2,
        borderColor:COLORS.primary_100,
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        paddingHorizontal:2,
    },
   
    textSize:{
        fontSize:DIMEN.font_size_12
    },
    iconStye:{
        // flex:1
        paddingStart:10
    },
    textLook:{
        color:COLORS.primary_200,
        flex:1,
        textAlign:'center',
        justifyContent:'center',
        alignItems:'center',
        
    }
})
export default ImageBtn;