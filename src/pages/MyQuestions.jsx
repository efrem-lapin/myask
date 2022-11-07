import axios from "axios";
import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import ListQuestions from "../components/ListQuestions/ListQuestions";
import Spinner from "../components/Spinner/Spinner";

const MyQuestion = () => {
  const [list, setList] = useState([]);
  const id = useSelector(state => state.user.id);

  React.useEffect(() => {
    axios.get(`${process.env.REACT_APP_HOST}/api/questions${id}`)
      .then(res => setList(res.data))
  });

  return (
    <section>
      <div className="container">
        <h2 className="section__title">Мои вопросы</h2>
        <ListQuestions questions={list}/>
      </div>
    </section>
  );
};

export default MyQuestion;
