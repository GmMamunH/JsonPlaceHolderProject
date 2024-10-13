/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Post } from "./post";


export const PostDetails = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setPosts(response.data);
    });
  });
  return (
    <div className="my-32 md:my-20">
      {posts.map((post) => (
        // <Post key={post.id} post={post} />
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
