import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import UserPage from "./pages/UserPage";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/user:id" element={<UserPage />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
