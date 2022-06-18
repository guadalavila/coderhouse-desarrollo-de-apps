import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: {
        address: []
    }
}

export const addressSlice = createSlice({
    name: "address",
    initialState: initialState,
    reducers: {
        addAddress: (state, action) => {
            console.log(action.payload)
            state.value.address.push(action.payload);
        }
    }
})

export const {addAddress} = addressSlice.actions;

export default addressSlice.reducer;