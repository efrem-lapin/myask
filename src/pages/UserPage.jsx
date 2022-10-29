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
    fetch(`${process.env.REACT_APP_HOST}/api/user${id}`)
    .then(data => data.json())
    .then(data => setUser(data[0]))
  }, [])
  
  return (
    <div className="container">
      <UserInfo user={user}/> 
      <UserBtnPanel />
      <h2 className="section__title">Ответы:</h2>
      <ListQuestions />
    </div>
  );
};

export default UserPage;
