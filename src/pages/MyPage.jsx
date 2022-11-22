import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserContent from "../components/UserContent/UserContent";
import UserHeader from "../components/UserHeader/UserHeader";
import UserPageSkeleton from "../components/UserPageSkeleton/UserPageSkeleton";
import { fetchListAnswers } from "../store/slices/ListAnswersSlice";

const MyPage = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const {list, status} = useSelector((state) => state.listAnswers);

  React.useEffect(() => {
    dispatch(fetchListAnswers(user.data.id));
  }, [user, dispatch]);

  return (
    <div>
      {
        (status === "pending" ? (
          <UserPageSkeleton />
        ) : (
          <>
            <UserHeader
              user={user.data}
              id={user.data.id}
              btns={false}
              amountAnswers={list.length}
            />
            <UserContent
              listAnswers={list}
              title="Мои ответы"
              warningText="У вас нет ответов"
              isSelf={true}
            />
          </>
        ))
      }
    </div>
  );
};

export default MyPage;
