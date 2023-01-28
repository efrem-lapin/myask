import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateStatus } from "../../actions/user";
import styles from "./StatusBlock.module.scss";
import { fetchAuth } from './../../store/slices/AuthSlice';

const StatusBlock = ({ status, id }) => {
  const isMyPage = useSelector((state) => state.auth.data.id) === id;
  const [isChangeStatus, setIsChangeStatus] = useState(false);
  const [newStatus, setNewStatus] = useState(status);
  const dispatch = useDispatch();

  useEffect(() => {
    async function clickOut() {
      setIsChangeStatus(false);
      if (newStatus !== status) {
        await updateStatus({status: newStatus, id});
        dispatch(fetchAuth());
      }
    }
    document.body.addEventListener("click", clickOut);

    return () => {
      document.body.removeEventListener("click", clickOut);
    };
  }, [status, newStatus, id, dispatch]);

  return (
    <div className={styles.box}>
      {isMyPage && isChangeStatus ? (
        <input
          className={styles.input}
          placeholder="введите статус"
          value={newStatus}
          onClick={(e) => e.stopPropagation()}
          onChange={(e) => setNewStatus(e.target.value)}
        />
      ) : (
        <p
          className={styles.status}
          onClick={isMyPage ? (e) => {e.stopPropagation(); setIsChangeStatus(true)} : null}
        >
          {newStatus || (isMyPage ? "установить статус" : "")}
        </p>
      )}
    </div>
  );
};

export default StatusBlock;
