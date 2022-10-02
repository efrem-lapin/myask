import { useState } from "react";
import SignForm from "../components/SignForm/SignForm";

const SignPage = () => {
  const [typeSign, setTypeSign] = useState(0);

  return (
    <div className="container">
      <div className="sign">
        <div className="sign__toggle">
          <button className={!typeSign ? "sign__button sign__button_active" : "sign__button"} onClick={() => setTypeSign(0)}>Вход</button>
          <button className={typeSign ? "sign__button sign__button_active" : "sign__button"} onClick={() => setTypeSign(1)}>Регистрация</button>
        </div>
        <div className="sign__box">
            {!typeSign ? <SignForm buttonText="Войти" /> : <SignForm buttonText="Зарегистрироваться" />}
        </div>
      </div>
    </div>
  );
};

export default SignPage;
