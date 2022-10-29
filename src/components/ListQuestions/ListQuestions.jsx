import QuestionBox from "../QuestionBox/QuestionBox";

import "./ListQuestions.scss";

const ListQuestions = () => {
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
  ];

  return (
    <div className="list_questions">
      <div className="container">
        <div className="list_questions__inner">
          {list.map((item) => (
            <QuestionBox userInfo={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListQuestions;
