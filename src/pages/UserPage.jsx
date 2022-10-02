import React from "react";
import { useParams } from "react-router-dom"
import ListQuestions from "../components/ListQuestions/ListQuestions";
import UserBtnPanel from "../components/UserBtnPanel/UserBtnPanel";
import UserInfo from "../components/UserInfo/UserInfo";

const UserPage = () => {
  const [user, setUser] = React.useState({});
  const params = useParams()
  const id = params.id;

  React.useEffect(() => {
    fetch(`http://localhost:5000/api/user${id}`)
    .then(data => data.json())
    .then(data => setUser(data[0]))
  }, [])

  return (
    <>
      <UserInfo user={user}/>
      <UserBtnPanel />
      <ListQuestions />
    </>
  );
};

export default UserPage;
