import { Link } from "react-router-dom";

import "./SignUpPanel.scss";

const SignUpPanel = () => {
  const isMobile = window.innerWidth < 768;
  return (
    <div className="sign_up">
      <Link to="/sign">
        <button className="sign_up__btn">
          {isMobile ? (
            <img className="sign_up__img" src="./assets/img/signup.png" alt="sing icon" />
          ) : (
            "Зарегистрироваться"
          )}
        </button>
      </Link>
    </div>
  );
};

export default SignUpPanel;
