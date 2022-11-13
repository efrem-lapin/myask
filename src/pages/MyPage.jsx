import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ListAnswers from "../components/ListAnswers/ListAnswers";
import UserInfo from "../components/UserInfo/UserInfo";
import Spinner from "../components/Spinner/Spinner";
import WarningImage from "../components/WarningImage/WarningImage";
import UserContent from "../components/UserContent/UserContent";
import UserHeader from "../components/UserHeader/UserHeader";
import UserPageSkeleton from "../components/UserPageSkeleton/UserPageSkeleton";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [listAnswers, setListAnswers] = React.useState([]);
  const nav = useNavigate();

  const user = useSelector((state) => state.user);

  React.useEffect(() => {
    if (!user.id) nav("/main");
    axios
      .get(`${process.env.REACT_APP_HOST}/api/answers${user.id}`)
      .then((res) => setListAnswers(res.data))
      .then(() => setIsLoading(false));
  }, [user]);

  return (
    <div>
      {isLoading ? (
        <UserPageSkeleton />
      ) : (
        <>
          <UserHeader
            user={user}
            id={user.id}
            btns={false}
            amountAnswers={listAnswers.length}
          />
          <UserContent
            listAnswers={listAnswers}
            title="Мои ответы"
            warningText="У вас нет ответов"
          />
        </>
      )}
    </div>
  );
};

export default MyPage;
