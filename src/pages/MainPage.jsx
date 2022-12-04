import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ListAnswers from "../components/ListAnswers/ListAnswers";
import { useEffect } from "react";
import { getLastAnswers } from "./../actions/answer";
import { useState } from "react";

const MainPage = () => {
  const isNotAuth = useSelector((state) => state.user.data.id);
  const [lastAnsw, setLastAnsw] = useState([]);

  useEffect(() => {
    async function get() {
      const res = await getLastAnswers();
      setLastAnsw(res.data);
    }
    get();
  }, []);
  return (
    <div className="mainPage page">
      <div className="container">
        <div className="mainPageInner">
         {lastAnsw.length &&  <div className="List">
            <div className="title">Последние ответы</div>
            <ListAnswers list={lastAnsw} isSelf={false}/>
          </div>}
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
