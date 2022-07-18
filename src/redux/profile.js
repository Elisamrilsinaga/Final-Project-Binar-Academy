import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apisecondhand from './apis/apisecondhand';

export const GetProfile = createAsyncThunk(
    'profile/GetProfile',
    async () => {
        const res = await apisecondhand.get('/profile', {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        
        return res.data;
    }
);

export const UpdateProfile = createAsyncThunk(
    'profile/UpdateProfile',
    async (data ) => {
        console.log(data)
        const res = await apisecondhand.post('/profile', data, {
            headers: {
                'accept': 'application/json',
                "Content-Type": "multipart/form-data",
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        return res.data;
    }
);

const initialState = {
    profile: {},
    loading: false,
    error: null,
    pathImg: '',
};

const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: {
        [GetProfile.pending]: (state) => {
            return { ...state, loading: true }
        },
        [GetProfile.fulfilled]: (state, action) => {
            return { ...state, loading: false, profile: action.payload }
        },
        [GetProfile.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
        [UpdateProfile.pending]: (state) => {
            return { ...state, loading: true }
        },
        [UpdateProfile.fulfilled]: (state,action) => {
            localStorage.removeItem("token");
            localStorage.setItem('token', action.payload?.token);
            console.log(action.payload)
            window.location.reload();
            return { ...state, loading: false }
        },
        [UpdateProfile.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
    }
});

export const { setLoading } = profileSlice.actions;
export default profileSlice.reducer;
