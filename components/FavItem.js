import { Text, View,StyleSheet, Image } from "react-native"
import COLORS from "../Util/Colors";
import DIMEN from "../Util/Dimen";

const FavItem = ({item})=>{
    return (
      <>
        <View style={styles.container}>
          <View style={styles.imageView}>
            <Image
                style={styles.imageStyle}
              source={{
                uri: item.imageUrl,
              }}></Image>
          </View>
          <View style={styles.contentView}>
            <View>
                <Text style={styles.title}>{item.title}</Text>
            </View>
            <View>
                <Text>{item.location}</Text>
            </View>
            <View>
                <Text>{item.address}</Text>
            </View>
            
          </View>
        </View>
      </>
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        height:120,
        marginHorizontal:32,
        backgroundColor:COLORS.primary_200,
        borderRadius:10,
        marginTop:10
    },
    imageStyle:{
        width:'100%',
        height:120,
        borderRadius:10
    },
    imageView:{
        flex:1.5,
       
    },
    contentView:{
        flex:3,
        padding:8
    },
    title:{
        fontSize:DIMEN.font_size_16,
        color:COLORS.black,
        fontWeight:'bold'
    }

})

export default FavItem;