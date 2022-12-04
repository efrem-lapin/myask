import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeAnswerAction } from "../../actions/answer";
import $api from "../../http";

const initialState = {
  list: [],
  status: ""
};

export const fetchListAnswers = createAsyncThunk(
  "listAnswers/fetchListAnswers",
  async (userId) => {
    const response = await $api.get(
      `${process.env.REACT_APP_HOST}/api/answers/${userId}`
    );

    return response.data;
  }
);

export const deleteAnswer = createAsyncThunk("listlistAnswers/", async (id, {dispatch}) => {
  const response = await removeAnswerAction(id);
  if (response.statusText === "OK") {
    dispatch(removeAnswer(id))
  }
  return response.data;
})

const ListAnswersSlice = createSlice({
  name: "listAnswers",
  initialState,
  reducers: {
    setListAnswers: (state, action) => {
      state.list = action.payload;
    },
    removeAnswer: (state, action) => {
      const id = action.payload;
      state.list = state.list.filter((answer) => answer.id !== id);
    },
  },

  extraReducers: {
    [fetchListAnswers.pending]: (state) => {
      state.status = "pending"
    },
    [fetchListAnswers.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "fulfilled"
    },
  },
});

export const { setListAnswers, removeAnswer } = ListAnswersSlice.actions;

export default ListAnswersSlice.reducer;
