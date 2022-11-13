import React from "react";
import AnswerSkeleton from "../AnswerSkeleton/AnswerSkeleton";

import styles from "./UserPageSkeleton.module.scss";

function UserPageSkeleton() {
  const list = [
    {id: "idsceleton1"},
    {id: "idsceleton2"},
    {id: "idsceleton3"},
    {id: "idsceleton4"}
  ];
  return (
    <div className="container mobileNonContainer">
      <div className={styles.header}>
        <div className={styles.info}>
          <div className={styles.main}>
            <div className={styles.avatar}></div>
            <div className={styles.text}>
              <div className={styles.name}></div>
              <div className={styles.status}></div>
            </div>
          </div>
          <div className={styles.counters}>
            <div className={styles.counter}>
              <div className={styles.amount}></div>
              <div className={styles.title}></div>
            </div>
            <div className={styles.counter}>
              <div className={styles.amount}></div>
              <div className={styles.title}></div>
            </div>
            <div className={styles.counter}>
              <div className={styles.amount}></div>
              <div className={styles.title}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        {list.map((item) => (
          <AnswerSkeleton key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default UserPageSkeleton;
