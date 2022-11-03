import {View,Text,StyleSheet,Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../Util/Colors';
import { getHeaderTitle } from '@react-navigation/elements';

//
const Header = ({ navigation, route, options, back }) => {

    const title = getHeaderTitle(options, route.name);
  
    const openFav = ()=>{
        navigation.navigate('Fav')
    }
    return (
      <View style={styles.iconCss}>
        <View style={styles.headerStyle}>
          <Text style={{fontSize:18}}>{title}</Text>
        </View>
        <View style={styles.iconStyle}>
          <Pressable onPress={openFav}>
            <Icon name="plus-circle" size={20} color={COLORS.black} />
          </Pressable>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    headerStyle: {
        flex:1,
        alignItems:'center'
    },
    iconStyle:{
        alignItems:'flex-end'
    },
    iconCss: {
      flexDirection: 'row',
      backgroundColor:COLORS.primary_100,
      height:40,
      alignItems:'center',
      paddingHorizontal:10
    },
  });
  export default Header