import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import apisecondhand from "./apis/apisecondhand";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try{
      const response = await apisecondhand.get("/home",{
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem("token"),
        }
      });
      return response.data;
    }
    catch(err){
      console.log(err)
      return {}
    }
  }
);

export const fetchProductItem = createAsyncThunk(
  "product/fetchProductItem",
  async (id) => {
    const response = await apisecondhand.get(`/product/${id}`, {
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const fetchProductsUser = createAsyncThunk(
  "products/fetchProductsUser",
  async () => {
    const response = await apisecondhand.get(`/product`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

export const fetchCreateProduct = createAsyncThunk(
  "products/fetchCreateProduct",
  async () => {
    const response = await apisecondhand.post(`/product`, {
      headers: {
        accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return response.data;
  }
);

const initialState = {
  products: [],
  productsDetail: [],
  productsUser: [],
  user: {},
  img: [],
  loading: false,
  error: null,
  post: [],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    createProduct: (state, action) => {
      state.value.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
  extraReducers: {
    // =================== GET PRODUCTS ============================
    [fetchProducts.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchProducts.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      return { ...state, loading: false, products: action.payload };
    },
    [fetchProducts.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
    // ===================== GET BY ID ===============================
    [fetchProductItem.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchProductItem.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      return {
        ...state,
        loading: false,
        productsDetail: action.payload,
        img: action.payload.data.product_pictures,
        user: action.payload.data.user,
      };
    },
    [fetchProductItem.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
    // ==================== GET BY USER ==============================
    [fetchProductsUser.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchProductsUser.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      return { ...state, loading: false, productsUser: action.payload };
    },
    [fetchProductsUser.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
    // ==================== CREATE ==============================
    [fetchCreateProduct.pending]: (state, action) => {
      // console.log("pending");
      return { ...state, loading: true, error: null };
    },
    [fetchCreateProduct.fulfilled]: (state, action) => {
      // console.log("fulfilled");
      return { ...state, loading: false, post: [action.payload] };
    },
    [fetchCreateProduct.rejected]: (state, action) => {
      // console.log("rejected");
      return { ...state, loading: false, error: action.error };
    },
  },
});

export const { createProduct } = productsSlice.actions;
export const { setLoading } = productsSlice.actions;

export default productsSlice.reducer;
