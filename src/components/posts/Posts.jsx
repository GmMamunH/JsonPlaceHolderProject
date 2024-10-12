/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header";
import { MorePage } from "../utilitys/MorePage";
import { PostInfo } from "./PostInfo";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response?.data);
      setLoading(false)


    });
  }, []);


  return (
    <>
      <Header />
      {/* <Header search={search} searchHandler={searchHandler} /> */}
      <div className="mt-20 mb-8">
        {loading ? (
          <h1 className="text-2xl font-bold text-center text-red-700">
            Wait, data loading...
          </h1>
        ) : (
          posts.map((post) => (
            // <div key={post.id}>{post?.title}</div>
            <PostInfo key={post?.id} postList={post} />
          ))
        )}
      </div>
      <MorePage />
    </>
  );
};
