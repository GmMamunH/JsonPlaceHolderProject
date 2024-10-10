/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdLocationCity } from "react-icons/md";
import { RiGlobalFill } from "react-icons/ri";

export const UserInfo = ({userList}) => {
    console.log(userList);
    
  return (
    <>
 
      <section className="mt-20">
        <div className="grid grid-cols-1  gap-5 mt-5 max-w-screen-sm mx-auto">
          <div className="border shadow rounded-md  p-8 ">
            <div className="flex flex-col gap-4">
              <section>
                <p className="text-2xl font-bold hover:underline duration-300 underline-offset-8">
                  {userList?.name}
                </p>
              </section>

              <section>
                <p className="flex gap-2 items-center">
                  <FaPhoneAlt />
                  <span className="text-sm text-gray-900 font-normal">
                    {userList?.phone}
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <FaLocationDot />
                  <span className="text-sm text-gray-900 font-normal">
                    {userList?.address?.street}, {userList?.address?.suite},{" "}
                    {userList?.address?.city}
                  </span>
                </p>

                <p className="flex gap-2 items-center">
                  {" "}
                  <RiGlobalFill />
                  <span className="text-sm text-gray-900 font-normal">
                    {" "}
                    {userList?.website}{" "}
                  </span>
                </p>
                <p className="flex gap-2 items-center">
                  <MdLocationCity />
                  <span className="text-sm text-gray-900 font-normal">
                    {userList?.company?.name}{" "}
                  </span>
                </p>
              </section>
              <section className="flex gap-4">
                <button className="bg-black text-white rounded-md px-4 py-2 font-medium text-sm">
                  Posts
                </button>
                <button className="bg-black text-white rounded-md px-4 py-2 font-medium text-sm">
                  Albums
                </button>
                <button className="bg-black text-white rounded-md px-4 py-2 font-medium text-sm">
                  Todos
                </button>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
