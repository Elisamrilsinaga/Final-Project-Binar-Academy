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

export const createTransaction = createAsyncThunk(
  "transaction/createTransaction",
  async (data) => {
    const response = await apisecondhand.post("/transaction",data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const deleteTransaction = createAsyncThunk(
  "transaction/deleteTransaction",
  async (id) => {
    const response = await apisecondhand.post(`/transaction/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const updateTransaction = createAsyncThunk(
  "transaction/updateTransaction",
  async (data) => {
    const response = await apisecondhand.post(`/confirm`,data, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const sellerTransaction = createAsyncThunk(
  "transaction/sellerTransaction",
  async ({id}) => {
    console.log(id)
    const response = await apisecondhand.get(`/transaction/seller/${id}`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

const initialState = {
  transaction: {},
  transactions: [],
  sellerTransactions: {},
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
      return { ...state, loading: true, error: null };
    },
    [fetchTransaction.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        transactions: action.payload.data,
      };
    },
    [fetchTransaction.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },

    [sellerTransaction.pending]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [sellerTransaction.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        sellerTransaction: action.payload,
      };
    },
    [sellerTransaction.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },

    [createTransaction.pending]: (state, action) => {
      console.log(action.payload)
      return { ...state, loading: true, error: null };
    },
    [createTransaction.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        transaction: action.payload
      };
    },
    [createTransaction.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    [updateTransaction.pending]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [updateTransaction.fulfilled]: (state, action) => {
      console.log(action.payload)
      return {
        ...state,
        loading: false
      };
    },
    [updateTransaction.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    [deleteTransaction.pending]: (state, action) => {
      return { ...state, loading: true, error: null };
    },
    [deleteTransaction.fulfilled]: (state, action) => {
      return {
        ...state,
        loading: false,
        transactions: action.payload.data,
      };
    },
    [deleteTransaction.rejected]: (state, action) => {
      return { ...state, loading: false, error: action.error };
    },
    
  },
});

export const { setLoading } = TransactionSlice.actions;

export default TransactionSlice.reducer;
