import { Link } from "react-router-dom";

import "./SignUpPanel.scss";

const SignUpPanel = () => {
  return (
    <div className="sign_up">
      <Link to="/sign">
        <button className="sign_up__btn">Зарегистрироваться</button>
        <img
          className="sign_up__img"
          src="./assets/img/defaultAvatar.png"
          alt="sing icon"
        />
      </Link>
    </div>
  );
};

export default SignUpPanel;
