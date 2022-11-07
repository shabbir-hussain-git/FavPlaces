import {View,StyleSheet } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
//
const MapViewScreen = ()=>{

    const onUserPressed = (data)=>{
      console.info((data));
    }
    return (
      <>
        <View style={styles.container}>
          <MapView
                onPress={onUserPressed}
                 provider={PROVIDER_GOOGLE} 
                style={styles.map}
            initialRegion={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}></MapView>
        </View>
      </>
    );
}
const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
      map: {
        ...StyleSheet.absoluteFillObject,
      },
    
})
export default MapViewScreen;