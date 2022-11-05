import { Text } from "react-native"

const FavItem = ({item})=>{
    return (
        <>
            <Text>
                {item.title}
            </Text>
        </>
    )
}

export default FavItem;