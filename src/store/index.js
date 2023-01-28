import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/AuthSlice";
import userReducer from "./slices/UserSlice";
import listQuestionsReducer from "./slices/ListQuestionsSlice";
import listAnswersReducer from "./slices/ListAnswersSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
    listQuestions: listQuestionsReducer,
    listAnswers: listAnswersReducer,
  },
});
