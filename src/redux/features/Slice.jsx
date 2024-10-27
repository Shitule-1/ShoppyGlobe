import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    checkoutItem: null, // To hold the selected item for checkout
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            // Check if item already exists in the cart
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1; // Increase quantity if item exists
            } else {
                state.items.push({ ...action.payload, quantity: 1 }); // Add item with quantity of 1
            }
        },
        removeItem: (state, action) => {
            state.items.splice(action.payload, 1); // Remove item by index
        },
        increaseQuantity: (state, action) => {
            const item = state.items[action.payload];
            if (item) {
                item.quantity += 1; // Increment quantity
            }
        },
        decreaseQuantity: (state, action) => {
            const item = state.items[action.payload];
            if (item && item.quantity > 1) {
                item.quantity -= 1; // Decrement quantity if greater than 1
            }
        },
        setCheckoutItem: (state, action) => {
            state.checkoutItem = action.payload; // Save the selected item for checkout
        },
    },
});

// Export the actions
export const { addItem, removeItem, increaseQuantity, decreaseQuantity, setCheckoutItem } = cartSlice.actions;

// Export the reducer
export default cartSlice.reducer;
