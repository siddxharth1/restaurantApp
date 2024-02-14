import { configureStore } from "@reduxjs/toolkit"
import cartSlice from './cartSlice'
import locationSlice from "./locationSlice"

const store = configureStore({
    reducer:{
        cart: cartSlice, // name of the slice : slice
        location: locationSlice
    }
})

export default store