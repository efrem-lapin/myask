import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";

const MainPage = () => {
  return (
    <div className="mainPage">
      <div className="container">
        <div className="mainPageInner">
          <div className="logoWrapper">
            <Logo />
          </div>
          <Link className="mainPageBtn" to="/sign">Войти или зарегистрироваться</Link>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
