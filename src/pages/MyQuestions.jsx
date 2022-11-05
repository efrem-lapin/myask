import ListQuestions from "../components/ListQuestions/ListQuestions";

const MyQuestion = () => {
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
  ];
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
