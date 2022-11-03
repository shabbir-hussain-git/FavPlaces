import COLORS from "../Util/Colors";
import { Text,View,ScrollView,StyleSheet, TextInput, Pressable } from "react-native";
import DIMEN from "../Util/Dimen";
import ImageBtn from './ImageBtn'
const AddScreen = ()=>{

    console.log(COLORS.primary_200)

    return (
      <>
        <ScrollView style={styles.container}>
          <View>
            <View>
              <Text style={[styles.textLook, styles.textSize]}>Title</Text>
            </View>
            <View style={[styles.inputTitle, styles.boxStyle]}>
              <TextInput></TextInput>
            </View>
            <View style={[styles.imageView, styles.boxStyle]}></View>
            <ImageBtn iconName="camera" text={'Take Image'}></ImageBtn>
            <View style={[styles.imageView, styles.boxStyle]}></View>
            <View style={styles.btnGrp}>
              <ImageBtn
                style={[styles.flex1]}
                iconName="location-arrow"
                text={'Locate User'}></ImageBtn>
              <ImageBtn
                style={[styles.flex1]}
                iconName="map"
                text={`Pick on Map`}></ImageBtn>
            </View>
            <View>
              <Pressable>
                <View style={styles.btn}>
                  <Text style={styles.btnText}>Add Place</Text>
                </View>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:24,
        backgroundColor:COLORS.primary_300
    },
    flex1:{
        flex:1,
        paddingHorizontal:5
    },
    btn:{
        borderRadius:5,
        backgroundColor:COLORS.primary_200
    },
    btnText:{
        flex:1,
        color:COLORS.primary_400,
        textAlign:'center',
        paddingVertical:10,
        fontSize:DIMEN.font_size_16
    },
    btnGrp:{
        flexDirection:'row',
        // justifyContent:'space-between'
    },
    boxStyle:{
        backgroundColor:COLORS.primary_400,
        borderRadius:10,
        marginVertical:5
    },
    imageView:{
        height:200,
       
    },
    inputTitle:{
    
    },
    textSize:{
        fontSize:DIMEN.font_size_24
    },
    textLook:{
        color:COLORS.primary_200,
        
    }
})

export default AddScreen;