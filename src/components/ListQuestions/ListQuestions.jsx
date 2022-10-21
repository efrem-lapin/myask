import QuestionBox from "../QuestionBox/QuestionBox";

const ListQuestions = () => {
    const list = [
      { name: "Влада", question: "Какой ваш любимый праздник?" },
      {
        name: "Дмитрий",
        question: "Почему листья на деревьях осенью желтеют?",
      },
      {
        name: "Вася",
        question:
          "Какой ваш любимый праздник? Почему листья на деревьях осенью желтеют? Какой ваш любимый праздник? Какой ваш любимый праздник? Почему листья на деревьях осенью желтеют? ",
      },
      {
        name: "Артемий",
        question: "Почему листья на деревьях осенью желтеют?",
      },
      {
        name: "Кристина",
        question:
          "Какой ваш любимый праздник? Почему листья на деревьях осенью желтеют? Какой ваш любимый праздник? Какой ваш любимый праздник? Почему листья на деревьях осенью желтеют? Какой ваш любимый праздник? Какой ваш любимый праздник? Почему листья на деревьях осенью желтеют?",
      },
    ];

    return (
        <div className="list_questions">
            <div className="container">
                <div className="list_questions__inner">
                    {list.map(item => <QuestionBox userInfo={item} />)}
                </div>
            </div>
        </div>
    )
}

export default ListQuestions;
