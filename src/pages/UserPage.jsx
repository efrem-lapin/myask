import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import UserHeader from "../components/UserHeader/UserHeader";
import UserContent from "../components/UserContent/UserContent";
import { useSelector } from "react-redux";
import UserPageSkeleton from "../components/UserPageSkeleton/UserPageSkeleton";

const UserPage = () => {
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);
  const [listAnswers, setListAnswers] = React.useState([]);
  const nav = useNavigate();
  const myId = useSelector((state) => state.user.data.id);

  const params = useParams();
  const id = params.id;

  function checkUser(data) {
    if (data?.id) setUser(data);
    else nav("/main");
  }

  React.useEffect(() => {
    if (Number(myId) === Number(id)) nav("/my");

    axios
      .get(`${process.env.REACT_APP_HOST}/api/user/${id}`)
      .then((res) => checkUser(res.data));

    axios
      .get(`${process.env.REACT_APP_HOST}/api/answers/${id}`)
      .then((res) => setListAnswers(res.data))
      .then(() => setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading ? (
        <UserPageSkeleton />
      ) : (
        <>
          <UserHeader
            user={user}
            id={id}
            btns={!!myId}
            amountAnswers={listAnswers.length}
          />
          <UserContent
            listAnswers={listAnswers}
            title="Ответы"
            warningText="У пользователя нет ответов"
            isSelf={false}
          />
        </>
      )}
    </>
  );
};

export default UserPage;
