import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useNavigate } from 'react-router-dom';
import apisecondhand from './apis/apisecondhand';

export const AuthLogin = createAsyncThunk(
    'auth/AuthLogin',
    async (data) => {
        try{
            const res = await apisecondhand.post('/login', data);
            if (res.data.token) {
                localStorage.setItem('token', res.data.token);
                return res.data.token;
            } else {
                throw new Error(res.data.message);
            }
        }
        catch(err) {
            console.error(err)
        }
    }
);

export const AuthRegister = createAsyncThunk(
    'auth/AuthRegister',
    async (data) => {
        const res = await apisecondhand.post('/register', data,{
            headers: {
                "accept": "application/json"
            }
        });
        if (res.data.status) {
            
            return res.data;
        } else {
            console.log(res.data.message)
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
            if(!action.payload)
            return { ...state, loading: false, error: "Username atau Passsword Salah", status: false }
            else
            return { ...state, loading: false, status: true }
        },
        [AuthLogin.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.error.message, status: false }
        },
        [AuthRegister.pending]: (state) => {
            return { ...state, loading: true }
        },
        [AuthRegister.fulfilled]: (state, action) => {

            return { ...state, loading: false, status: false }
        },
        [AuthRegister.rejected]: (state, action) => {
            // console.log(action)
            return { ...state, loading: false, error: action.error.message, status: false }
        },
    }
});

export const { setAuthenticated, setError } = authSlice.actions;

export const isLoading = state => state.auth.loading;

export default authSlice.reducer;








