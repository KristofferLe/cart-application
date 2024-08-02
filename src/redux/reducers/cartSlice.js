// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    orderConfirmed: false,
  },
  reducers: {
    addItem(state, action) {
      const product = action.payload;
      const price = Number(product.price);
      const existingItem = state.items.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.count += 1; // Increase count if item already exists
      } else {
        state.items.push({ ...product, count: 1 }); // Add new product with count
      }
      state.total += price;
    },
    removeItem(state, action) {
      const product = action.payload;
      const index = state.items.findIndex((item) => item.id === product.id);
      if (index !== -1) {
        const price = Number(state.items[index].price);
        if (state.items[index].count > 1) {
          state.items[index].count -= 1; // Decrease count if more than 1
        } else {
          state.items.splice(index, 1); // Remove item if count is 1
        }
        state.total -= price;
      }
    },
    orderConfirmed(state) {
      state.orderConfirmed = true;
    },
    newOrder(state) {
      state.orderConfirmed = false;
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, orderConfirmed, newOrder } =
  cartSlice.actions;
export default cartSlice.reducer;
