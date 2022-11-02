import { Text } from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


const Home = ()=>{

    const myIcon = <Icon name="rocket" size={30} color="#900" />;

    return (
        <>
            <Text>Home</Text>
            {myIcon}
        </>
    )   
}
export default Home;