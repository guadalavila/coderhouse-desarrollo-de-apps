import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { DB_URL } from "../../constants/firebase";

const initialState = {
    value: {
        orders: [],
        loading: false,
        error: false,
    }
}

export const getOrders = createAsyncThunk(
    'orders/getOrders',
    async (email, asyncThunk) => {
        try {
           const res = await fetch (`${DB_URL}orders.json`);
           const data = Object.values( await res.json()).filter(item => item?.items.email === email);
           return data;
        } catch (error) {
            return rejectWithValue('Opps there seems to be an error')
        }
    }
)

export const ordersSlice = createSlice({
    name: "orders",
    initialState: initialState,
    reducers: {
    },
    extraReducers: {
        [getOrders.pending]: (state) => {
            state.value.loading = true;
        },
        [getOrders.fulfilled]: (state, {payload}) => {
            state.value.loading = false;
            state.value.orders = payload;
        },
        [getOrders.rejected]: (state) => {
            state.value.loading = false;
            state.value.error = true;
        }
    }
})


export default ordersSlice.reducer;