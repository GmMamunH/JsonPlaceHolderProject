/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "../utilitys/Button";
import { Outlet, Link } from "react-router-dom";
import { Header } from "../shared/Header";
import { Footer } from "../shared/Footer";

export const Post = ({ post }) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
      .then((response) => {
        setComments(response.data);
      });
  }, []);
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 py-2 gap-5  max-w-screen-sm mx-auto">
        <div className="border shadow rounded-md  p-8 ">
          <section className="flex flex-col gap-4">
            <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
              {post?.title}
            </p>

            <p className="text-sm text-gray-900 font-normal">{post?.body}</p>
            <Button>
              {" "}
              <Link to="/">View user profile</Link>{" "}
            </Button>
          </section>
          <section>
            {comments &&
              comments.map((comment) => (
                <section key={comment.id} className="p-4 bg-slate-50 my-4">
                  <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
                    {comment?.name}
                  </p>
                  <p className="text-xs text-gray-900 font-normal mt-1">
                    {comment?.email}
                  </p>
                  <p className="text-base text-gray-900 font-normal mt-2">
                    {comment?.body}
                  </p>
                </section>
              ))}
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};
