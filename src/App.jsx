import "./App.scss";
import Header from "./components/Header/Header";
import ListQuestions from "./components/ListQuestions/ListQuestions";
import UserBtnPanel from "./components/UserBtnPanel/UserBtnPanel";
import UserInfo from "./components/UserInfo/UserInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <UserInfo />
      <UserBtnPanel />
      <ListQuestions />
    </div>
  );
}

export default App;
