import { Link } from "react-router-dom";
import BlockGreeting from "../components/BlockGreeting/BlockGreeting";
import Logo from "../components/Logo/Logo";

const MainPage = () => {
  return (
    <div className="mainPage page">
      <div className="container">
        <div className="mainPageInner">
          <BlockGreeting />
          <Link className="mainPageBtn" to="/sign">Войти</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
