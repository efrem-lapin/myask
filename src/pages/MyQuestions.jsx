import React from "react";
import { useDispatch, useSelector } from "react-redux";
import QuestionsContent from "../components/QuestionContent/QuestionsContent";
import { fetchListQuestion} from "../store/slices/ListQuestionsSlice";

const MyQuestion = () => {
  const dispatch = useDispatch();
  const listQuestions = useSelector((state) => state.listQuestions.list);
  const id = useSelector((state) => state.user.data.id);

  React.useEffect(() => {
    dispatch(fetchListQuestion(id));
  }, [id, dispatch]);

  return (
    <section className="page">
      <QuestionsContent listQuestions={listQuestions} />
    </section>
  );
};

export default MyQuestion;
