/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header";
import { UserInfo } from "./UserInfo";
import { MorePage } from "../utilitys/MorePage";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response?.data);
      setLoading(false);
      setFilterSearch(response.data);
    });
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e?.target?.value;
    setSearch(searchTerm);

    const filterSearchTerm = users.filter((user) =>
      user?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase()?.trim())
    );
    setFilterSearch(filterSearchTerm);
  };

  return (
    <>
      <Header search={search} searchHandler={searchHandler} />
      <div className="mt-32 md:mt-20 px-2 mb-8">
        {loading ? (
          <h1 className="text-2xl font-bold text-center text-red-700">
            Wait, data loading...
          </h1>
        ) : filterSearch?.length > 0 ? (
          filterSearch.map((user) => (
            <UserInfo key={user?.id} userList={user} />
          ))
        ) : (
          <h1 className="text-2xl font-bold text-center text-red-700">
            Data not found
          </h1>
        )}
      </div>
      <MorePage />
    </>
  );
};
