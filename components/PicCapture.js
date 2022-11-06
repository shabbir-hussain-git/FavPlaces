
import {useIsFocused, useNavigation} from '@react-navigation/native'
import { useDispatch } from 'react-redux';
import {setCurrentImage} from '../store/FavPlaceSlice';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {Alert, Button, StyleSheet,View} from 'react-native'

const PicCapture = ()=>{
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const takingPic = async () => {
      launchCamera({}, onPicCaptured);
    };

    const onPicCaptured = result => {
      console.log(result);
      dispatch(setCurrentImage(result.assets[0].uri));
      moveToAdd();
    };

    const moveToAdd = () => {
      navigation.goBack();
    };

    const launchLibrary = ()=>{
        launchImageLibrary({}, onPicCaptured)

    }
    return (
        <>
              <Button title='Take Pic' onPress={takingPic}/>
              <Button title='Launch Library' onPress={launchLibrary}/>

        </>
    )
}

export default PicCapture;