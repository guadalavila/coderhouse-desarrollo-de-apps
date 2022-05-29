import { configureStore } from '@reduxjs/toolkit'
import categoriesReducer from '../features/categories'
import productsReducer from '../features/products';
import cartReducer from '../features/cart';

const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer
    }
})

export default store;