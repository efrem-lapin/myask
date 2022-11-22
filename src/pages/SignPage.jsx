import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignForm from "../components/SignForm/SignForm";
import LoginForm from "../components/LoginForm/LoginForm";

const SignPage = () => {
  const userId = useSelector((state) => state.user.id);
  const nav = useNavigate();
  const [isLoginForm, setIsLoginForm] = useState(true);

  useEffect(() => {
    if (userId) nav("/my");
  }, [nav, userId]);

  return (
    <div className="container page">
      <div className="sign">
        <div className="sign__box">
          {isLoginForm ? (
            <>
              <h2 className="form__title">Вход</h2>
              <LoginForm />
              <button
                onClick={() => setIsLoginForm(false)}
                className="sign__buttom_text"
              >
                или зарегистрируйтесь
              </button>
            </>
          ) : (
            <>
              <h2 className="form__title">Регистрация</h2>
              <SignForm />
              <button
                onClick={() => setIsLoginForm(true)}
                className="sign__buttom_text"
              >
                у вас есть аккаунт?
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignPage;
