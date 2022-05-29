import { createSlice } from "@reduxjs/toolkit";
import { CART } from "../../mock/cart";

const initialState = {
    value: {
        cart: CART,
        total: 0
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
    }
})

// export const { selectCategory } = cartSlice.actions

export default cartSlice.reducer;