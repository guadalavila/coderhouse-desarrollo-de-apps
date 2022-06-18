import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories'
import productsReducer from '../features/products';
import cartReducer from '../features/cart';
import authReducer from '../features/auth';
import addressReducer from '../features/address';


const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        auth: authReducer,
        address: addressReducer
    }
})

export default store;