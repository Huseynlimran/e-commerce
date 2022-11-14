import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: {},
  loading:false,
  error:"",
};

export const dogApi = createAsyncThunk("dogApi", async () => {
  const response = await axios.get("https://fakestoreapi.com/products/5");
  return response.data;
});

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(dogApi.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(dogApi.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(dogApi.rejected, (state, action) => {
      state.loading = false;
      state.error = "error fetch";
    });
  },
});

// export const {} = storeSlice.actions;

export default storeSlice.reducer;
