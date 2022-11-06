import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text,StyleSheet ,View,Button, Pressable, Alert} from 'react-native';
import Home from '../Screens/Home';
import AddFav from '../Screens/AddFav';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Util/Colors';
import Header from './Header'
import TakePic from '../components/TakePic';
const Stack = createNativeStackNavigator();

const Main = ()=> {


  const getHeaderBtn = (navigation)=>{

    const openFav = ()=>{
        navigation.navigate('Fav')
    }
    return (
        <View style={styles.iconCss}>
                <Pressable onPress={openFav}>
                    <Icon name="plus-circle" size={25} color={COLORS.black} />
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
      }} name="TakePic" component={TakePic} />
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