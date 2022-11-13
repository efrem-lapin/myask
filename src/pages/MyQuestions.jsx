import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionsContent from "../components/QuestionContent/QuestionsContent";
import { setList } from "../store/slices/ListQuestions";

const MyQuestion = () => {
  const dispatch = useDispatch();
  const listQuestions = useSelector((state) => state.listQuestions.list);
  const id = useSelector((state) => state.user.id);

  React.useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_HOST}/api/questions${id}`)
      .then((res) => dispatch(setList(res.data)));
  }, [dispatch, id, listQuestions]);

  return (
    <section className="page">
        <QuestionsContent listQuestions={listQuestions}/>
    </section>
  );
};

export default MyQuestion;
