import Counter from './../Counter/Counter';

import styles from "./CounterPanel.module.scss";


const CounterPanel = ({ answers, subs, likes}) => {
  return (
    <div className={styles.counterPanel}>
      <Counter
        amount={answers || 0}
        arrWords={["ответ", "ответа", "ответов"]}
      />
      <Counter
        amount={subs|| 0}
        arrWords={["подписчик", "подписчика", "подписчиков"]}
      />
      <Counter
        amount={likes || 0}
        arrWords={["лайк", "лайка", "лайков"]}
      />
    </div>
  );
};

export default CounterPanel;
