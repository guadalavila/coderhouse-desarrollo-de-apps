import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        cart: [],
        total: 0
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) =>{
            state.value.cart.push(action.payload);
        }
    }
})

export const { addProduct } = cartSlice.actions;

export default cartSlice.reducer;