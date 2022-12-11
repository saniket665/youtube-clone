import { createSlice } from "@reduxjs/toolkit";

const initialState = {};
export const authSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        userData: null,
        error: ""
    },
    reducers: {
        saveUser: (state, action) => {
            state.userData = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        removeError: (state, action) => {
            state.error = "";
        },
        setLoading: (state, action) => {
            state.loading = true;
        },
        removeLoading: (state, action) => {
            state.loading = false;
        }
    },
});

export const {saveUser, setError, removeError, setLoading, removeLoading} = authSlice.actions;
export default authSlice.reducer;