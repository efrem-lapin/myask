import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionsContent from "../components/QuestionContent/QuestionsContent";
import { fetchListQuestion } from "../store/slices/ListQuestionsSlice";
import PageBox from "./../components/PageBox/PageBox";

const MyQuestion = () => {
  const dispatch = useDispatch();
  const listQuestions = useSelector((state) => state.listQuestions.list);
  const id = useSelector((state) => state.auth.data.id);

  React.useEffect(() => {
    dispatch(fetchListQuestion(id));
  }, [id, dispatch]);

  return (
    <section className="page">
      <div className="container">
        <PageBox title="Мои вопросы">
          <QuestionsContent listQuestions={listQuestions} />
        </PageBox>
      </div>
    </section>
  );
};

export default MyQuestion;
