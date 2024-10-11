/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header";
import { MorePage } from "../utilitys/MorePage";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response?.data);

    });
  }, []);


  return (
    <>
      <Header />
      {/* <Header search={search} searchHandler={searchHandler} /> */}
      <div className="mt-20 mb-8">
        {
          posts.map((post) => (
            <div key={post.id}>{post?.title}</div>
          ))
        }
      </div>
      <MorePage />
    </>
  );
};
