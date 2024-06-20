import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name: "cart",
    initialState: {
        items: ["Burger", "Pizza"],
    },
    reducers: {
        addToCart: (state, action) => {
            state.items.push(action.payload);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        },
        clearCart: (state) => {
            state.items.length = 0;
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartslice.actions;

export default cartslice.reducer;
