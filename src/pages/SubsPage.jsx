import React from "react";
import PageBox from "../components/PageBox/PageBox";
import UserList from "../components/UserList/UserList";
import WarningImage from "../components/WarningImage/WarningImage";
import { useState, useEffect } from "react";
import $api from "../http";
import { useSelector } from "react-redux";
import Loader from './../components/Loader/Loader';

const SubsPage = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const id = useSelector((state) => state.auth.data.id);

  useEffect(() => {
    const getSubs = async () => {
      setIsLoading(true);
      const res = await $api.post(`/api/subs`, { id });

      if (res.status === 200) {
        setList(res.data);
        setIsLoading(false);
      }
    };
    getSubs();
  }, [id]);

  return (
    <div className="container">
      {isLoading ? <div className="loaderWrapper"><Loader size="46px"/></div>: <PageBox title="Подписки">
        {list.length ? (
          <UserList list={list} />
        ) : (
          <WarningImage text="У вас нет подписок" />
        )}
      </PageBox>}
    </div>
  );
};

export default SubsPage;
