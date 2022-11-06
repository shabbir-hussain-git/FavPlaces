import { Button } from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import { useDispatch } from 'react-redux';
import {setCurrentLocation} from '../store/FavPlaceSlice'
const TakeLocation = ({navigation})=>{
    const dispatch = useDispatch();

    const takeLocation= ()=>{
        Geolocation.getCurrentPosition(info => {
            onLocationRec(info)
        });
       
    }

    const onLocationRec = (info)=>{
        let latLong = {
            latitude:info.coords.latitude,
            longitude:info.coords.longitude,
        }
        dispatch(setCurrentLocation(JSON.stringify(latLong)));
        navigation.goBack();
    }

    return (
        <>
            <Button title="Take Location" onPress={takeLocation}/>
        </>
    )
}

export default TakeLocation;