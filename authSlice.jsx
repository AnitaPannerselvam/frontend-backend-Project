// src/components/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoggedIn: false,
        user: null,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload; // Payload should include user's name and email
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
