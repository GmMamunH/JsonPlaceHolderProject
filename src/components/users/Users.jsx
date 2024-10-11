/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header";
import { UserInfo } from "./UserInfo";

export const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response?.data);
      console.log(response?.data);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="my-20">
        {loading ? (
          <h1 className="text-2xl font-bold text-center text-red-700">
             Wait, data loading... 
          </h1>
        ) : (
          users.map((user) => <UserInfo key={user?.id} userList={user} />)
        )}
      </div>
    </>
  );
};
