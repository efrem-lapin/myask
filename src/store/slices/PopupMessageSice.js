import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    message: "",
    type: "done"
}

const PopupMessageSlice = createSlice({
    name: "popupMessage",
    initialState,
    reducers: {
        setMessage: (state, actions) => {
            state.message = actions.payload.message;
        }
    }
})

export const {setMessage} = PopupMessageSlice.actions;

export default PopupMessageSlice.reducer;