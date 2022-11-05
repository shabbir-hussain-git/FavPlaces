import COLORS from "../Util/Colors";
import { Text,View,ScrollView,StyleSheet, TextInput, Pressable, Alert, Image } from "react-native";
import DIMEN from "../Util/Dimen";
import ImageBtn from './ImageBtn'
import { useDispatch,useSelector } from "react-redux";
import { addPlace } from "../store/FavPlaceSlice";
import Place from '../model/place';
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
const AddScreen = ()=>{
    const [title,onTitleChange] = useState('');
    const navigation  = useNavigation();
    const state = useSelector((state)=>state.fav);
    const dispatch = useDispatch();

    const addPlaces = ()=>{
      let place = new Place(title,state.imageUri,'','');
      dispatch(addPlace(JSON.stringify(place)))
      navigation.goBack()
    }
    const openCamera = ()=>{
      navigation.navigate('TakePic')
    }
    const titleChange = (data)=>{
      onTitleChange(data);
    }
    return (
      <>
        <ScrollView style={styles.container}>
          <View>
            <View>
              <Text style={[styles.textLook, styles.textSize]}>Title</Text>
            </View>
            <View style={[styles.inputTitle, styles.boxStyle]}>
              <TextInput
               onChangeText={titleChange}
               value={title}></TextInput>
            </View>
            <View style={[styles.imageView, styles.boxStyle]}>
            {state.imageUri &&  <Image
                style={styles.imageView}
                source={{
                  uri:state.imageUri
                }}
              
              />
            }
            </View>
            <ImageBtn 
              onPress={openCamera}
              iconName="camera" 
              text={'Take Image'}
            ></ImageBtn>
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
              <Pressable onPress={addPlaces}>
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