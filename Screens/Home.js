import { FlatList, Text ,StyleSheet,View} from "react-native"
import { useSelector } from "react-redux";
import FavItem from "../components/FavItem";
import COLORS from "../Util/Colors";

const Home = ()=>{

    const state = useSelector(store=>store.fav);
    console.log(state.favPlaces)
    const getFavPlace = ({item})=>{
        return <FavItem item={item}/>
    }
    return (
      <>
        <View style={styles.container}>
          <FlatList
            data={state.favPlaces}
            keyExtractor={item => item.id}
            renderItem={getFavPlace}
          />
        </View>
      </>
    );   
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:COLORS.primary_300,
       
    }
})
export default Home;