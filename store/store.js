import { configureStore } from "@reduxjs/toolkit";
import FavPlaceReducers from './FavPlaceSlice';

const store  = configureStore({
    reducer:{
        fav:FavPlaceReducers
    }
})

export default store;