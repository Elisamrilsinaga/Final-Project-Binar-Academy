import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    message: [],
};

const notifikasiSlice = createSlice({
    name: 'notifikasi',
    initialState,
    reducers: {
        openNotifikasi: (state, action) => {
            state.notifikasi.isOpen = true;
            state.notifikasi.message = action.payload.message;
            state.notifikasi.type = action.payload.type;
        }
    }
});

export const { openNotifikasi } = notifikasiSlice.actions;