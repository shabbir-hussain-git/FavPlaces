import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favPlaces:[],
    imageUri:''
}

const favPlaceSlice = createSlice({
    name:'favPlaceSlice',
    initialState,
    reducers:{
        addPlace:(state,action)=>{
            let place = JSON.parse(action.payload);
            state.favPlaces.push(place);
        },
        setCurrentImage:(state,action)=>{
            state.imageUri = action.payload;
        }
    }
})

export default favPlaceSlice.reducer;
export const { addPlace,setCurrentImage } = favPlaceSlice.actions;