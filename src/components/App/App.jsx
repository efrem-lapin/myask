import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import UserPage from "../../pages/UserPage";
import SignPage from "../../pages/SignPage";
import UserSettings from "../../pages/UserSettings";
import MainPage from "../../pages/MainPage";
import MyQuestions from "../../pages/MyQuestions";
import MyPage from "../../pages/MyPage";
import { useDispatch } from "react-redux";
import { fetchUser} from "../../store/slices/UserSlice";

import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/id:id" element={<UserPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/questions" element={<MyQuestions />} />
      </Routes>
    </div>
  );
}

export default App;
