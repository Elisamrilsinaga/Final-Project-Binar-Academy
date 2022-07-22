import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import apisecondhand from './apis/apisecondhand';

export const GetNotif = createAsyncThunk(
    'notif/GetNotif',
    async (id) => {
        const res = await apisecondhand.get(`/transaction/${id}`, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        
        return res.data;
    }
);

export const GetAllNotif = createAsyncThunk(
    'notif/GetAllNotif',
    async () => {
        const res = await apisecondhand.get(`/transaction`, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        // console.log(res.data)
        return res.data;
    }
);

export const CreateNotif = createAsyncThunk(
    'notif/CreateNotif',
    async (data ) => {
        
        const res = await apisecondhand.post('/transaction', data, {
            headers: {
                'accept': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token'),
            }
        });
        return res.data;
    }
);

const initialState = {
    notif: {},
    loading: false,
    error: null,
    notifs: []
};

const notifSlice = createSlice({
    name: 'notif',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
    extraReducers: {
        [GetNotif.pending]: (state) => {
            return { ...state, loading: true }
        },
        [GetNotif.fulfilled]: (state, action) => {
            return { ...state, loading: false, notif: action.payload }
        },
        [GetNotif.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
        [GetAllNotif.pending]: (state) => {
            return { ...state, loading: true }
        },
        [GetAllNotif.fulfilled]: (state, action) => {
            return { ...state, loading: false, notifs: action.payload }
        },
        [GetAllNotif.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
        [CreateNotif.pending]: (state) => {
            return { ...state, loading: true }
        },
        [CreateNotif.fulfilled]: (state,action) => {
            console.log(action.payload)
            return { ...state, loading: false }
        },
        [CreateNotif.rejected]: (state, action) => {
            return { ...state, loading: false, error: action.payload }
        },
    }
});

export const { setLoading } = notifSlice.actions;
export default notifSlice.reducer;
