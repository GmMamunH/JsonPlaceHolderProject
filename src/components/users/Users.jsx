/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header";
import { UserInfo } from "./UserInfo";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response?.data);
      console.log(response?.data);
      setLoading(false);
      setFilterSearch(response.data);
    });
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e?.target?.value;
    setSearch(searchTerm);

    const filterSearchTerm = users.filter((user) =>
      user?.name?.toLowerCase()?.includes(searchTerm?.toLowerCase())
    );
    setFilterSearch(filterSearchTerm);
  };

  return (
    <>
      <Header search={search} searchHandler={searchHandler} />
      <div className="my-20">
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
    </>
  );
};
