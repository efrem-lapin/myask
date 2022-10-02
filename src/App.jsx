import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UserPage from "./pages/UserPage"
import SignPage from "./pages/SignPage"

import "./App.scss";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
        <Route path="/*" element={<MainPage />}/>
          <Route path="/user:id" element={<UserPage />}/>
          <Route path="/sign" element={<SignPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;