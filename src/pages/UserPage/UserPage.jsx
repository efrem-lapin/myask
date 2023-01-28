import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import UserHeader from "../../components/UserHeader/UserHeader";
import UserContent from "../../components/UserContent/UserContent";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "./../../actions/user";
import { fetchListAnswers } from "./../../store/slices/ListAnswersSlice";
import Loader from "./../../components/Loader/Loader";
import WarningMessage from "../../components/WarningMessage/WarningMessage";
import { fetchUser } from './../../store/slices/UserSlice';

import styles from "./UserPage.module.scss";

const UserPage = () => {
  const user = useSelector(state => state.user.data);
  const [isMyPage, setIsMyPage] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const dispatch = useDispatch();
  const listAnswers = useSelector((state) => state.listAnswers.list);
  const nav = useNavigate();
  const myId = useSelector((state) => state.auth.data.id);
  const isAuth = useSelector((state) => state.auth.isAuth);

  const params = useParams();
  const id = params.id || myId;

  function checkUser(res) {
    const user = res.data;
    if (user.id) {
      dispatch(fetchUser(user.id));
    }
    else nav(`/id${myId}`);
  }

  async function getUserAndAnswers() {
    setIsLoading(true);
    const res = await getUserById(id);
    checkUser(res);
    dispatch(fetchListAnswers(id));
    setIsLoading(false);
  }

  React.useEffect(() => {
    if (Number(myId) === Number(id)) setIsMyPage(true);
    else setIsMyPage(false);
    getUserAndAnswers(id);
  }, [id, myId]);

  return (
    <div className={styles.page}>
      {isLoading ? (
        <div className={styles.loaderWrapper}>
          <Loader size="45px" />
        </div>
      ) : (
        <>
          <UserHeader
            user={user}
            id={id}
            btns={!isMyPage && myId}
            amountAnswers={listAnswers.length}
            subs={user.subscriptions || 0}
            amountSubs={user?.subscriptions?.length || 0}
            amountLikes={user.likes}
          />
          {!isAuth && (
            <div className="container">
              <WarningMessage text="Войдите или зарегистрируйтесь что бы задавать пользователю вопросы" />
              <Link to="/sign" className={styles.signButton}>Войти</Link>
            </div>
          )}
          <UserContent
            listAnswers={listAnswers}
            title="Ответы"
            warningText="У пользователя нет ответов"
            isSelf={isMyPage}
          />
        </>
      )}
    </div>
  );
};

export default UserPage;
