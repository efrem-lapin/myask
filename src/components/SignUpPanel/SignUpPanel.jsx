import { Link } from "react-router-dom";

import "./SignUpPanel.scss";

const SignUpPanel = () => {
  return (
    <div className="sign_up">
      <Link to="/sign"><button className="sign_up__btn">Зарегистрироваться</button></Link>
    </div>
  );
};

export default SignUpPanel;
