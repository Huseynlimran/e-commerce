import { createSlice } from "@reduxjs/toolkit";

export const FETCH = Object.freeze({
  START: "start",
  ERROR: "erorr",
  LOADING: "loading",
});

const initialState = {
  data: [],
  status: FETCH.START,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.data = action.payload;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
  },
});

export const { setProducts, setStatus } = productSlice.actions;

export default productSlice.reducer;

//THUNKS

export function fetchProducts() {
  return async function fetchProductsThunk(dispatch, getState) {

    dispatch(setStatus(FETCH.LOADING));

    try {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => dispatch(setProducts(data)));
        dispatch(setStatus(FETCH.START));
    } catch (error) {
        dispatch(setStatus(FETCH.ERROR));
    }
  };
}
