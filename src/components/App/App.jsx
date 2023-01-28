import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import UserPage from "../../pages/UserPage/UserPage";
import SignPage from "../../pages/SignPage";
import UserSettings from "../../pages/UserSettings/UserSettings";
import MainPage from "../../pages/MainPage/MainPage";
import MyQuestions from "../../pages/MyQuestions";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./../Loader/Loader";
import { fetchAuth } from "./../../store/slices/AuthSlice";
import SubsPage from "../../pages/SubsPage";

import styles from "./App.module.scss";

function App() {
  const dispatch = useDispatch();
  const { isAuth, status } = useSelector((state) => state.auth);

  React.useEffect(() => {
    dispatch(fetchAuth());
  }, [dispatch]);

  return (
    <div className={styles.app}>
      {status === "pending" ? (
        <div className={styles.loaderWrapper}>
          <Loader size="45px" />
        </div>
      ) : (
        <>
          {isAuth ? <Header /> : null}
          <Routes>
            <Route path="/*" element={isAuth ? <UserPage /> : <SignPage />} />
            <Route path="/id:id" element={<UserPage />} />
            {isAuth ? (
              <>
                <Route path="/settings" element={<UserSettings />} />
                <Route path="/questions" element={<MyQuestions />} />
                <Route path="/logout" element={<MainPage />} />
                <Route path="/subs" element={<SubsPage />} />
              </>
            ) : (
              <Route path="/sign" element={<SignPage />} />
            )}
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
