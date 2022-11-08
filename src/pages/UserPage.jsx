import React from "react";
import { useParams } from "react-router-dom";
import ListAnswers from "../components/ListAnswers/ListAnswers";
import UserBtnPanel from "../components/UserBtnPanel/UserBtnPanel";
import UserInfo from "../components/UserInfo/UserInfo";
import Spinner from "../components/Spinner/Spinner";
import axios from "axios";
import { useSelector } from "react-redux";
import { setUser } from "../store/slices/UserSlice";

const UserPage = (props) => {
  const user = useSelector(state => state.user);
  const [isLoading, setIsLoading] = React.useState(true);
  const [listAnswers, setListAnswers] = React.useState([]);

  const params = useParams();
  const id = user.id || props.id || params.id;

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/api/user${id}`)
      .then((res) => setUser({...res.data}));

    axios
      .get(`${process.env.REACT_APP_HOST}/api/answers${id}`)
      .then((res) => setListAnswers(res.data))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <UserInfo user={user} />
          <UserBtnPanel id={id} />
          <h2 className="section__title">Ответы:</h2>
          <ListAnswers questions={listAnswers} />
        </>
      )}
    </div>
  );
};

export default UserPage;
