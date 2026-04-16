import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // each item: { id, name, price, thumbnail, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart, or increase quantity if already exists
    addItem: (state, action) => {
      const { id, name, price, thumbnail } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, thumbnail, quantity: 1 });
      }
    },

    // Remove item completely from cart
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(item => item.id !== id);
    },

    // Update quantity of a specific item (positive integer)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) {
        if (quantity <= 0) {
          // Remove item if quantity becomes zero or negative
          state.items = state.items.filter(i => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
  },
});

// Export actions
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectTotalItems = (state) =>
  state.cart.items.reduce((total, item) => total + item.quantity, 0);
export const selectTotalPrice = (state) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export default cartSlice.reducer;
