import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
};

const ListQuestionsSlice = createSlice({
  name: "listQuestions",
  initialState,
  reducers: {
    setList: (state, actions) => {
      state.list = actions.payload;
    },
    removeQuestion: (state, actions) => {
      const id = actions.payload;
      state.list = state.list.filter((question) => question.id !== id);
    },
  },
});

export const { setList, removeQuestion } = ListQuestionsSlice.actions;

export default ListQuestionsSlice.reducer;
