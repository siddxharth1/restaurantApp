import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    counter: 0, //we can have multiple state like this
  },
  reducers: {
    //action: reducer function
    addItem: (state, action) => {
      console.log(action.payload);
      const existItem = state.items.find((item) => item.id == action.payload);
      if (existItem) {
        existItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); //never return anything from reducer
      }
      state.counter += 1;
    },

    decreaseItem: (state, action) => {
      const existItem = state.items.find((item) => item.id == action.payload);
      if (existItem.quantity > 1) {
        existItem.quantity -= 1;
      }
      state.counter -= 1;
    },
    clearCart: (state) => {
      state.items = [];
      state.counter = 0;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload;
      });
      state.counter -= 1;
    },
  },
});
export const { addItem, clearCart, removeItem, decreaseItem } =
  cartSlice.actions;
export default cartSlice.reducer;
