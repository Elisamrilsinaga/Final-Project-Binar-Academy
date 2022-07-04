import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apisecondhand from "./apis/apisecondhand";

export const fetchCategorys = createAsyncThunk(
  "category/fetchCategorys",
  async () => {
    const response = await apisecondhand.get("/category/public");
    return response.data;
  }
);

const initialState = {
  categorys: [],
  loading: false,
  error: null,
};

const CategorySlice = createSlice({
  name: "categorys",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchCategorys.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchCategorys.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      return { ...state, loading: false, categorys: action.payload };
    },
    [fetchCategorys.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
  },
});

export const { setLoading } = CategorySlice.actions;

export default CategorySlice.reducer;
