import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SignBox from "../components/SignBox/SignBox";

const SignPage = () => {
  const userId = useSelector((state) => state.user.id);
  const nav = useNavigate();

  useEffect(() => {
    if (userId) nav("/");
  }, [nav, userId]);

  return (
    <div className="container">
      <SignBox />
    </div>
  );
};

export default SignPage;
