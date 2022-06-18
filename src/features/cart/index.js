import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        cart: [], //id, cant, precio
        total: 0
    }
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addProduct: (state, action) =>{
            const productExist = state.value.cart.find(product => product.id === action.payload.id)
            if (productExist) {
                state.value.cart.map(item => {
                    if (item.id === action.payload.id) item.quantity++
                    return item
                })
            }
            else {
                state.value.cart.push({...action.payload, quantity:1});
            }
        },
        removeCart: (state, _ )=>{
            state.value = initialState.value;
        },
        removeProduct: (state, action) => {
            const product_ = state.value.cart.find(product => product.id === action.payload);
            if(product_.quantity > 1){
                state.value.cart.map(item => {
                    if (item.id === action.payload) item.quantity--
                    return item
                })
            }else{
                state.value.cart = state.value.cart.filter(item => {
                    return item.id !== action.payload
                })
            }
        }
    }
})

export const { addProduct, removeCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;