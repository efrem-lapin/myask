import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false
};

const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state, action) => {
            state.isAuth = action.payload;
        }
    }
});

export const {setAuth} = AuthSlice.actions;

export default AuthSlice.reducer;