/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

export const PostsInfo = ({postList}) => {
  console.log(postList);
  
  return (
    <>
      <section>
        <div className="grid grid-cols-1  gap-5 mt-5 max-w-screen-sm mx-auto">
          <div className="border shadow rounded-md  p-8 ">
            <h1>{postList?.title}</h1>
          </div>
        </div>
      </section>
    </>
  );
}
