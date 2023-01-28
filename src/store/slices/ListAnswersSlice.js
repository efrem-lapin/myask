import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { removeAnswerAction } from "../../actions/answer";
import { likeAnswerAction, getAnswersById } from './../../actions/answer';

const initialState = {
  list: [],
  status: ""
};

export const fetchListAnswers = createAsyncThunk(
  "listAnswers/fetchListAnswers",
  async (userId) => {
    const response = await getAnswersById(userId);
    return response.data;
  }
);

export const fetchDeleteAnswer = createAsyncThunk("listAnswers/fetchDeleteAnswer", async (id, {dispatch}) => {
  const response = await removeAnswerAction(id);
  if (response.statusText === "OK") {
    dispatch(removeAnswer(id))
  }
  return response.data;
});

export const fetchLikeAnswer = createAsyncThunk("listAnswers/fetchLikeAnswer", async (like, {dispatch}) => {
  const {answerId, likerId, answererId} = like;
  const response = await likeAnswerAction(answerId, likerId, answererId);
  if (response.status === 200) {
    const response = await getAnswersById(answererId);
    return response.data;
  }
  return response.data;
});

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
    likeAnswer: (state, action) => {
      
    }
  },

  extraReducers: {
    [fetchListAnswers.pending]: (state) => {
      state.status = "pending"
    },
    [fetchListAnswers.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "fulfilled"
    },
    [fetchLikeAnswer.fulfilled]: (state, action) => {
      state.list = action.payload;
      state.status = "fulfilled"
    },
  },
});

export const { setListAnswers, removeAnswer, likeAnswer } = ListAnswersSlice.actions;

export default ListAnswersSlice.reducer;
