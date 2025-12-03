// const { createAsyncThunk } = require("@reduxjs/toolkit");
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  
export const fetchProducts = createAsyncThunk('products', async() => {
    const response = await fetch('https://dummyjson.com/products');
    const jsonResp = await response.json();
    return jsonResp.products;
})

const initialState = {
    items: [],
    status: undefined,
    error: null
}

const productsSlice= createSlice({
  name: 'productsSlice',
  initialState,
  extraReducers:(builder) => {
    builder.addCase(fetchProducts.fulfilled, (state,action) => {
        state.status = 'scucceeded';
        state.items = action.payload;
        console.log('22Nisha',state);
        
    });
  }
})

export default productsSlice.reducer;