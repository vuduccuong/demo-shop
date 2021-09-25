import { configureStore } from "@reduxjs/toolkit";
import shopCartReducer from '../features/cart/cartSlice'

const rootReducers = {
    shopCart: shopCartReducer
}

const store = configureStore({
    reducer: rootReducers
});

export default store;