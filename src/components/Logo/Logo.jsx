import { Link } from "react-router-dom";
import "./Logo.scss";

const Logo = () => {
  return <Link to="/" className="logo"><img src="./assets/img/logo.png" alt="logo" className="logo__img" />MyASK.ru</Link>;
};

export default Logo;