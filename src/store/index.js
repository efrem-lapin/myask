import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import popupMessageReducer from "./slices/PopupMessageSice";
import listQuestionsReducer from "./slices/ListQuestionsSlice";
import listAnswersReducer from "./slices/ListAnswersSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    popupMessage: popupMessageReducer,
    listQuestions: listQuestionsReducer,
    listAnswers: listAnswersReducer,
  },
});
