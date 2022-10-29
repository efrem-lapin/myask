import { Link } from "react-router-dom";

import "./SignUpPanel.scss";

const SignUpPanel = () => {
  return (
    <div className="sign_up">
      <Link to="/sign">
        <button className="sign_up__btn">Войти</button>
        <img
          className="sign_up__img"
          src="./assets/img/default_avatar.jpg"
          alt="sing icon"
        />
      </Link>
    </div>
  );
};

export default SignUpPanel;
