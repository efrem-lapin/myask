import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignForm from "../components/SignForm/SignForm";

const SignPage = () => {
  const [typeSign, setTypeSign] = useState(0);
  const userId = useSelector((state) => state.user.id);
  const nav = useNavigate();

  useEffect(() => {
    if (userId) nav("/my");
  }, [nav, userId]);

  return (
    <div className="container page">
      <div className="sign">
        <div className="sign__toggle">
          <button
            className={
              !typeSign ? "sign__button sign__button_active" : "sign__button"
            }
            onClick={() => setTypeSign(0)}
          >
            Вход
          </button>
          <button
            className={
              typeSign ? "sign__button sign__button_active" : "sign__button"
            }
            onClick={() => setTypeSign(1)}
          >
            Регистрация
          </button>
        </div>
        <div className="sign__box">
          {!typeSign ? <SignForm type="login" /> : <SignForm type="reg" />}
        </div>
      </div>
    </div>
  );
};

export default SignPage;
