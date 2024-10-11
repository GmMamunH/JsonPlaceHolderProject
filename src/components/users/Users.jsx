/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header";
import { UserInfo } from "./UserInfo";

export const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setUsers(response?.data);
      console.log(response?.data);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="my-20">
        {users.map((user) => (
          <UserInfo key={user?.id} userList={user} />
        ))}
      </div>
    </>
  );
};
