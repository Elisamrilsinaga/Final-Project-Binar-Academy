import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apisecondhand from './apis/apisecondhand';

export const GetCity = createAsyncThunk(
    'city/GetCity',
    async () => {
        const res = await apisecondhand.get('/city', {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        return res.data.data;
    }
);

const initialState = {
    city: [],
};

export const citySlice = createSlice({
    name: 'city',
    initialState,
    extraReducers: {
        [GetCity.pending]: (state, action) => {
            // state.loading = true;
        },
        [GetCity.fulfilled]: (state, action) => {
            state.city = action.payload;
            // state.loading = false;
        },
        [GetCity.rejected]: (state, action) => {
            // state.loading = false;
            // state.error = action.payload;
        },
    }
});

export default citySlice.reducer;
