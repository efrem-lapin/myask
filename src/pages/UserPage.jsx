import React from "react";
import { useParams } from "react-router-dom"
import ListAnswers from "../components/ListAnswers/ListAnswers";
import UserBtnPanel from "../components/UserBtnPanel/UserBtnPanel";
import UserInfo from "../components/UserInfo/UserInfo";

const UserPage = () => {
  const [user, setUser] = React.useState({});
  const params = useParams()
  const id = params.id;

  const list = [
    {
      name: "Влада",
      question: "Какой ваш любимый праздник?",
      answer: "День святого Валентина",
    },
    {
      name: "Дмитрий",
      question: "Почему листья на деревьях осенью желтеют?",
      answer: "Потому что осень за окном!",
    },

    {
      name: "Антон",
      question: "Почему листья на деревьях осенью желтеют?",
      answer: "Потому что осень за окном! Почему листья на деревьях осенью желтеют? Почему листья на деревьях осенью желтеют?",
    },
  ]; // вот это дело будет приходить из базы данных
     // там будет таблица с впоросами и сразу ответами, как тут

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
      <ListAnswers questions={list}/>
    </div>
  );
};

export default UserPage;
