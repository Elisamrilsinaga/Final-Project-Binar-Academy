import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apisecondhand from "./apis/apisecondhand";

export const fetchTransaction = createAsyncThunk(
  "transaction/fetchTransaction",
  async () => {
    const response = await apisecondhand.get("/transaction", {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const TransactionSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    [fetchTransaction.pending]: (state, action) => {
      console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchTransaction.fulfilled]: (state, action) => {
      console.log("fulfilled");
      return {
        ...state,
        loading: false,
        transactions: action.payload.data,
      };
    },
    [fetchTransaction.rejected]: (state, action) => {
      console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
  },
});

export const { setLoading } = TransactionSlice.actions;

export default TransactionSlice.reducer;
