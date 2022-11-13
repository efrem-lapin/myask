import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ListQuestions from "../components/ListQuestions/ListQuestions";
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
      <div className="container">
        {listQuestions.length ? (
          <div className="container">
            <h2 className="section__title">Мои вопросы:</h2>
            <ListQuestions questions={listQuestions} />
          </div>
        ) : (
          <div className="section__notfound">
            <img
              className="section__img"
              src="./assets/img/sad.png"
              alt="sad smail"
            />
            <p className="section__descr">У вас нет вопросов</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyQuestion;
