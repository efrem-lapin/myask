import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import UserPage from "../../pages/UserPage";
import SignPage from "../../pages/SignPage";

import "./App.scss";
import MainPage from "../../pages/MainPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/*" element={<MainPage />} />
        <Route path="/user:id" element={<UserPage />} />
        <Route path="/sign" element={<SignPage />} />
      </Routes>
    </div>
  );
}

export default App;