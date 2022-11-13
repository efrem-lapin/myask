import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: []
};

const ListAnswersSlice = createSlice({
    name: "listAnswers",
    initialState,
    reducers: {
        setListAnswers: (state, actions) => {
            state.list = actions.payload;
        },

        removeAnswer: (state, actions) => {
            const id = actions.payload;
            state.list = state.list.filter(answer => answer.id !== id);
        },
    }
});

export const { setListAnswers, removeAnswer } = ListAnswersSlice.actions;

export default ListAnswersSlice.reducer;