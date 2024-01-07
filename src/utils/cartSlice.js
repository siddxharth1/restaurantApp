import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    //counter: 0 //we can have multiple state like this
  },
  reducers: {
    //action: reducer function
    addItem: (state, action) => {
      console.log(action.payload);
      state.items.push(action.payload); //never return anything from reducer
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action)=>{
      state.items = state.items.filter((item)=>{
        return (item.id !== action.payload)
      })
    }
  },
});
export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
