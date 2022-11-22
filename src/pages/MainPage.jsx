import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BlockGreeting from "../components/BlockGreeting/BlockGreeting";

const MainPage = () => {
  const isNotAuth = useSelector((state) => state.user.id);
  return (
    <div className="mainPage page">
      <div className="container">
        <div className="mainPageInner">
          <BlockGreeting />
          {!isNotAuth && (
            <Link className="mainPageBtn" to="/sign">
              Войти
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
