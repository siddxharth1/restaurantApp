import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name: "location",
    initialState: {
        coordinates: {}
    },
    reducers: {
        updateLocation: (state, action)=>{
            console.log(action.payload)
            state.coordinates = action.payload
        }
    }
})
export const {updateLocation} = locationSlice.actions;
export default locationSlice.reducer;