import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    totalCount: 0,
    productsCart: []
  },
  reducers: {
    addProductToCart : ( state, action ) => {
      state.totalCount = state.totalCount + 1;
      state.productsCart = [ ...state.productsCart, action.payload ]
    },
    removeProductFromCart : ( state, action ) => {
      const productID = action.payload
      state.totalCount = state.totalCount - 1;
      state.productsCart = state.productsCart.filter(pro => pro.id !== productID)
    }
  }
})

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;