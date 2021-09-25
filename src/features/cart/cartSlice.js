import { createSlice } from "@reduxjs/toolkit";
import {
  updateCartToStore,
  getCartItemFromStore,
} from "../../utils/localStoreHelper";

const initState = {
  cartItems: getCartItemFromStore(),
};

const shopCart = createSlice({
  name: "cart",
  initialState: initState,
  reducers: {
    addCart: (state, action) => {
      const indexItem = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (indexItem < 0) {
        state.cartItems.push(action.payload);
        updateCartToStore(state.cartItems);
      } else {
      }
    },
    removeCart: (state, action) => {
      state.cartItems = state.cartItems.filter((cartItem) => cartItem.id !== action.payload);
      updateCartToStore(state.cartItems);
    },
    clearCart : state =>{
      state.cartItems = [];
      updateCartToStore(state.cartItems);
    }
  },
});

const { reducer, actions } = shopCart;

export const { addCart, removeCart, clearCart } = actions;

export default reducer;
