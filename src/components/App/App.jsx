import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../Header/Header";
import UserPage from "../../pages/UserPage";
import SignPage from "../../pages/SignPage";
import UserSettings from "../../pages/UserSettings";
import MainPage from "../../pages/MainPage";
import MyQuestions from "../../pages/MyQuestions";

import styles from "./App.module.scss";


function App() {
  const id = useSelector(state => state.user.id)
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/my" element={<UserPage id={id}/>} />
        <Route path="/user:id" element={<UserPage />} />
        <Route path="/sign" element={<SignPage />} />
        <Route path="/settings" element={<UserSettings />} />
        <Route path="/questions" element={<MyQuestions />} />
      </Routes>
    </div>
  );
}

export default App;