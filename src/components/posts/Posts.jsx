/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Header } from "../shared/Header";
import { MorePage } from "../utilitys/MorePage";
import { PostInfo } from "./PostInfo";

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response?.data);
      setLoading(false);
      setFilterSearch(response.data);
    });
  }, []);

  const searchHandler = (e) => {
    const searchTerm = e?.target?.value;
    setSearch(searchTerm);

    const filterSearchTerm = posts.filter((post) =>
      post?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()?.trim())
    );
    setFilterSearch(filterSearchTerm);
  };

  return (
    <>
      <Header search={search} searchHandler={searchHandler} />
      {/* <Header search={search} searchHandler={searchHandler} /> */}
      <div className=" mt-32 md:mt-20 px-2 mb-8">
        {loading ? (
          <h1 className="text-2xl font-bold text-center text-red-700">
            Wait, data loading...
          </h1>
        ) : filterSearch?.length > 0 ? (
          filterSearch.map((post) => (
            // <div key={post.id}>{post?.title}</div>
            <PostInfo key={post?.id} postList={post} />
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
