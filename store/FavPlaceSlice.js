import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    favPlaces:[],
    imageUri:'',
    latLong:{
        latitude:0,
        longitude:0
    }
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
        },
        setCurrentLocation:(state,action)=>{
            state.latLong = JSON.parse(action.payload)
        }
    }
})

export default favPlaceSlice.reducer;
export const { addPlace,setCurrentImage,setCurrentLocation } = favPlaceSlice.actions;