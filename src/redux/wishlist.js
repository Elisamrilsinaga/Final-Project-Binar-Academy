import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apisecondhand from "./apis/apisecondhand";

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async () => {
    const response = await apisecondhand.get("/wishlist", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

const initialState = {
  wishlist: [],
  loading: false,
  error: null,
};

const WishlistSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchWishlist.pending]: (state, action) => {
      console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchWishlist.fulfilled]: (state, action) => {
      console.log("fulfilled");
      return {
        ...state,
        loading: false,
        wishlist: action.payload,
      };
    },
    [fetchWishlist.rejected]: (state, action) => {
      console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
  },
});

export const { setLoading } = WishlistSlice.actions;

export default WishlistSlice.reducer;
