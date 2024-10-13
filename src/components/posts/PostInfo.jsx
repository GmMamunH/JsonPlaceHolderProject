/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Button } from "../utilitys/Button";
import { Outlet, Link } from "react-router-dom";

export const PostInfo = ({ postList }) => {
  console.log(postList);

  return (
    <div>
      <div className="grid grid-cols-1  gap-5 mt-5 max-w-screen-sm mx-auto">
        <div className="border shadow rounded-md  p-8 ">
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
              {postList?.title}
            </p>

            <p className="text-sm text-gray-900 font-normal">
              {postList?.body}
            </p>
            <Button>
              {" "}
              <Link to="/postDetails">View user profile</Link>{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
