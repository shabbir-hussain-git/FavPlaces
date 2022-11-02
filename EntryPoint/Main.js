import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text,StyleSheet ,View,Button, Pressable, Alert} from 'react-native';
import Home from '../Screens/Home';
import AddFav from '../Screens/AddFav';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Util/Colors';
import Header from './Header'
const Stack = createNativeStackNavigator();

const Main = ()=> {


  const getHeaderBtn = ({navigation})=>{

    const openFav = ()=>{
        navigation.navigate('Fav')
    }
    return (
        <View style={styles.iconCss}>
                <Pressable onPress={openFav}>
                    <Icon name="plus-circle" size={20} color={COLORS.black} />
                </Pressable>
         </View>
    )
  }
 
  const openFav = ()=>{

  }
  return (
    <Stack.Navigator screenOptions={{
        headerStyle:styles.headerCss,
    }}>
      <Stack.Screen options={{
        headerTitle:"Your Favorite Places",
        header:Header
      }} name="Home" component={Home} />
       <Stack.Screen options={{
        headerTitle:"Add Favorite Places",
      }} name="Fav" component={AddFav} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
    iconCss:{
        alignContent:'center',
        justifyContent:'center'
    },
    headerCss:{
        flex:1,
        backgroundColor:COLORS.primary_100
    }
})
export default Main;