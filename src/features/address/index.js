import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteAddress, fetchAddress, insertAddress } from '../../db';

const initialState = {
    value: {
        address: [],
        rowId: '',
        loading: false,
        error: null,
        responseDB: '',
    },
};

export const addAddressDB = createAsyncThunk('address/addToDB', async (data, asyncThunk) => {
    try {
        const result = await insertAddress(data.id, data.address, data.image);
        console.log(result.insertId);
        return `Record succesfully row with id: ${result.insertId}`;
    } catch (error) {
        console.log(error.message);
        return asyncThunk.rejectWithValue('Error at writing address on db');
    }
});

export const getAllAddress = createAsyncThunk('address/getAddress', async (_, asyncThunk) => {
    try {
        const result = await fetchAddress();
        const data = result.rows._array;
        return data;
    } catch (error) {
        return asyncThunk.rejectWithValue('Error at fetching addresses on db');
    }
});

export const removeAddressDB = createAsyncThunk('address/removeToDB', async (id, asyncThunk) => {
    try {
        const result = await deleteAddress(id);
        console.log('Remove address db result:');
        console.log(result);
        return `Item with id: ${id} removed successfully`;
    } catch (error) {
        console.log(error.message);
        return asyncThunk.rejectWithValue(`Error at remove item with id: ${id}`);
    }
});

export const addressSlice = createSlice({
    name: 'address',
    initialState: initialState,
    reducers: {
        addAddress: (state, action) => {
            state.value.address.push(action.payload);
        },
    },
    extraReducers: {
        [addAddressDB.pending]: (state) => {
            state.value.loading = true;
        },
        [addAddressDB.fulfilled]: (state, { payload }) => {
            state.value.loading = false;
            state.value.error = null;
            // state.value.rowId = payload
        },
        [addAddressDB.rejected]: (state, { payload }) => {
            state.value.loading = false;
            state.value.error = payload;
        },
        [getAllAddress.pending]: (state) => {
            state.value.loading = true;
        },
        [getAllAddress.fulfilled]: (state, { payload }) => {
            state.value.loading = false;
            state.value.error = null;
            state.value.address = payload;
        },
        [getAllAddress.rejected]: (state, { payload }) => {
            state.value.loading = false;
            state.value.error = payload;
        },
        [removeAddressDB.pending]: (state) => {
            state.value.loading = true;
        },
        [removeAddressDB.fulfilled]: (state, { payload }) => {
            state.value.loading = false;
            state.value.error = null;
            state.value.responseDB = payload;
        },
        [removeAddressDB.rejected]: (state, { payload }) => {
            state.value.loading = false;
            state.value.error = payload;
        },
    },
});

export const { addAddress } = addressSlice.actions;

export default addressSlice.reducer;
