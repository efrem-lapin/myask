import React from "react";
import { useParams } from "react-router-dom";
import ListAnswers from "../components/ListAnswers/ListAnswers";
import UserBtnPanel from "../components/UserBtnPanel/UserBtnPanel";
import UserInfo from "../components/UserInfo/UserInfo";
import Spinner from "../components/Spinner/Spinner";

const UserPage = (props) => {
  const [user, setUser] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(true);

  const params = useParams();
  const id = props.id || params.id;

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
      answer:
        "Потому что осень за окном! Почему листья на деревьях осенью желтеют? Почему листья на деревьях осенью желтеют?",
    },

    {
      name: "Антон",
      question: "Почему листья на деревьях осенью желтеют?",
      answer:
        "Потому что осень за окном! Почему листья на деревьях осенью желтеют? Почему листья на деревьях осенью желтеют?",
    },

    {
      name: "Антон",
      question: "Почему листья на деревьях осенью желтеют?",
      answer:
        "Потому что осень за окном! Почему листья на деревьях осенью желтеют? Почему листья на деревьях осенью желтеют?",
    },

    {
      name: "Антон",
      question: "Почему листья на деревьях осенью желтеют?",
      answer:
        "Потому что осень за окном! Почему листья на деревьях осенью желтеют? Почему листья на деревьях осенью желтеют?",
    },
  ];

  React.useEffect(() => {
    fetch(`${process.env.REACT_APP_HOST}/api/user${id}`)
      .then((data) => data.json())
      .then((data) => setUser(data[0]))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <UserInfo user={user} />
          <UserBtnPanel />
          <h2 className="section__title">Ответы:</h2>
          <ListAnswers questions={list} />
        </>
      )}
    </div>
  );
};

export default UserPage;
