import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../constants/firebase";

const initialState = {
    value: {
        cart: [], //id, cant, precio
        total: 0,
        response: {},
        loading: false,
        error: false,
    }
}

export const confirmPurchase = createAsyncThunk(
    'cart/confirm',
    async (items, asyncThunk) => {
        try {
            const res = await fetch(`${DB_URL}orders.json`,
                {
                    method: 'POST',
                    body: JSON.stringify({
                        date: new Date().toLocaleDateString(),
                        items: items,
                    })
                }
            )
            const data = res.json();
            return data;
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

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
    },
    extraReducers: {
        [confirmPurchase.pending]: (state) => {
            state.value.loading = true
        },
        [confirmPurchase.fulfilled]: (state, {payload}) => {
            state.value.response = payload
            state.value.loading = false
        },
        [confirmPurchase.rejected]: (state) => {
            state.value.loading = false
            state.value.error = true
        }
    }
})

export const { addProduct, removeCart, removeProduct } = cartSlice.actions;

export default cartSlice.reducer;