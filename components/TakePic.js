import {useCameraDevices,Camera} from 'react-native-vision-camera';
import {Alert, Button, StyleSheet,View} from 'react-native'
import { useEffect,useRef } from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import {setCurrentImage} from '../store/FavPlaceSlice';

const TakePic = () => {
  const dispatch = useDispatch();  
  const navigation = useNavigation();
  const devices = useCameraDevices();
  const device = devices.back;
  const isFocused = useIsFocused();
  const camera = useRef(null)

  const takingPic = async () => {
   
    const photo = await camera.current.takePhoto({
      flash: 'on',
    });
    console.log(photo)
    dispatch(setCurrentImage('file://'+photo.path));
    moveToAdd();  
  };
  useEffect( ()=>{
    const  getCameraPermission = async ()=>{
        const cameraPermission = await Camera.getCameraPermissionStatus()
        if(cameraPermission != 'authorized'){
            const newCameraPermission = await Camera.requestCameraPermission()
    
        }
    }
   
    getCameraPermission();
   
    return ()=>{

    }
  },[])

  const moveToAdd = ()=>{
    navigation.goBack()
  }

  if (device == null) return <></>;

  
  return (
    <View style={styles.container}>
      <Camera
        ref={camera}
        style={styles.camerStyle}
        device={device}
        isActive={isFocused}
        photo={true}
      />
      <Button title='Take Pic' onPress={takingPic}/>
      <Button title='Take Pic' onPress={moveToAdd}/>

    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        flex:1
    }
    ,
    camerStyle:{
      width:200,
      height:200
    }
})

export default TakePic;