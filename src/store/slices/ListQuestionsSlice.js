import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import $api from "../../http";

const initialState = {
  list: [],
};

export const fetchListQuestion = createAsyncThunk(
  "listQuestion/fetch",
  async (userId) => {
    const response = await $api.get(
      `${process.env.REACT_APP_HOST}/api/questions/${userId}`
    );

    return response.data;
  }
);

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

  extraReducers: {
    [fetchListQuestion.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setList, removeQuestion } = ListQuestionsSlice.actions;

export default ListQuestionsSlice.reducer;
