import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/UserSlice";
import popupMessageReducer from "./slices/PopupMessageSice";
import listQuestionsReducer from "./slices/ListQuestions";
import listAnswersReducer from "./slices/ListAnswers";

export const store = configureStore({
  reducer: {
    user: userReducer,
    popupMessage: popupMessageReducer,
    listQuestions: listQuestionsReducer,
    listAnswers: listAnswersReducer,
  },
});
