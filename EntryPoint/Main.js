import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text,StyleSheet ,View,Button, Pressable, Alert} from 'react-native';
import Home from '../Screens/Home';
import AddFav from '../Screens/AddFav';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Util/Colors';
import Header from './Header'
import TakePic from '../components/TakePic';
import ShIconFa from '../components/Icon/ShIconFa';
import PicCapture from '../components/PicCapture'
import TakeLocation from '../components/TakeLocation'
const Stack = createNativeStackNavigator();

const Main = ()=> {


  const getHeaderBtn = (navigation)=>{

    const openFav = ()=>{
      // Alert.alert('hi')
        navigation.navigate('Fav')
    }
    return (
        <View style={styles.iconCss}>
                <Pressable onPress={openFav}>
                    <ShIconFa name="pencil-square-o" size={25} color={COLORS.black} />
                </Pressable>
         </View>
    )
  }
 
  const openFav = ()=>{

  }
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:styles.headerCss,
        headerTintColor:COLORS.gray_700,
        contentStyle:{backgroundColor:COLORS.gray_700}
    }}>
      <Stack.Screen options={({navigation})=>({
        headerTitle:"Your Favorite Places",
        headerRight:getHeaderBtn.bind(this,navigation)
      })} name="Home" component={Home} />
       <Stack.Screen options={{
        headerTitle:"Add Favorite Places",
      }} name="Fav" component={AddFav} />
      <Stack.Screen options={{
       headerShown:false
      }} name="TakePic" component={PicCapture} />
       <Stack.Screen options={{
       headerShown:false
      }} name="TakeLoc" component={TakeLocation} />
      
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    iconCss:{
        alignContent:'center',
        justifyContent:'center'
    },
    headerCss:{
        // flex:1,
        backgroundColor:COLORS.primary_100
    }
})
export default Main;