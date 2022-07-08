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
    async ({ data }) => {
        console.log(data)
        const res = await apisecondhand.put('/profile', data, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        return res.data;
    }
);

export const UploadImageProfile = createAsyncThunk(
    'profile/UploadImageProfile',
    async (data) => {
        const res = await apisecondhand.post('/profile/upload-profile-pic', data, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
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
        [UpdateProfile.fulfilled]: (state) => {
            console.log('fulfilled');
            return { ...state, loading: false }
        },
        [UpdateProfile.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
        [UploadImageProfile.pending]: (state) => {
            return { ...state, loading: true }
        },
        [UploadImageProfile.fulfilled]: (state, action) => {
            return { ...state, loading: false, pathImg: action.payload.message.path }
        },
        [UploadImageProfile.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
    }
});

export const { setLoading } = profileSlice.actions;
export default profileSlice.reducer;
