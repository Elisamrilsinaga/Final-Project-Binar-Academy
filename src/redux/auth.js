import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apisecondhand from './apis/apisecondhand';

export const AuthLogin = createAsyncThunk(
    'auth/AuthLogin',
    async (data) => {
        try{
            const res = await apisecondhand.post('/login', data);
            console.log(res.data)
            if (res.data.status_login == 'Berhasil') {
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('uid', res.data.user_id);
                return res.data;
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








