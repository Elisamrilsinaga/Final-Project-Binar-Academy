import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apisecondhand from './apis/apisecondhand';

export const AuthLogin = createAsyncThunk(
    'auth/AuthLogin',
    async (data) => {
        const res = await apisecondhand.post('/login', data, {
            H: {
                'accept': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem('token')
            }
        });

        if (res.data.status) {
            localStorage.setItem('token', res.data.data.token);
            localStorage.setItem('uid', res.data.data.user_id);
            return res.data;
        } else {
            throw new Error(res.data.message);
        }
    }
);

export const AuthRegister = createAsyncThunk(
    'auth/AuthRegister',
    async (data) => {
        const res = await apisecondhand.post('/register', data);
        if (res.data.status) {
            return res.data;
        } else {
            throw new Error(res.data.message);
        }
    }
);

const initialState = {
    status: false,
    loading: false,
    error: null
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    },
    extraReducers: {
        [AuthLogin.pending]: (state) => {
            return { ...state, loading: true }
        },
        [AuthLogin.fulfilled]: (state, action) => {

            return { ...state, loading: false, status: true }
        },
        [AuthLogin.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message, status: false }
        },
        [AuthRegister.pending]: (state) => {
            return { ...state, loading: true }
        },
        [AuthRegister.fulfilled]: (state, action) => {
            return { ...state, loading: false, status: true }
        },
        [AuthRegister.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message, status: false }
        },
    }
});

export const { setAuthenticated, setError } = authSlice.actions;

export const isLoading = state => state.auth.loading;

export default authSlice.reducer;








