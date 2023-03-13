import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './cartSlice'
import popupSlice from './popupSlice';
import productReducer from './productSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productReducer,
    popup: popupSlice,
  },
});
