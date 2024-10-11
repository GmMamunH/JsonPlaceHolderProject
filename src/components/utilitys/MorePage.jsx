/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const MorePage = () => {
  return (
    <div className="max-w-screen-sm mx-auto bg-white py-2 px-8 mb-4 border border-gray-300 rounded-lg shadow ">
      <div className="flex justify-between items-center">
        <section className="flex gap-2">
          <p className="text-sm text-gray-950 font-medium">Rows per page</p>
          <input
            className="border border-gray-200 text-xs text-gray-950 rounded-md px-3 w-20 focus: outline-none"
            type="number"
            name="number"
            id=""
          />
        </section>
        <section>
          <p className="text-sm text-gray-950 font-medium">Page 1 of 5</p>
        </section>

        <section className="flex gap-2">
          <button className="border border-gray-200 rounded-md bg-white px-3 py-1 hover:opacity-100 opacity-50">
            <MdKeyboardDoubleArrowLeft />
          </button>
          <button className="border border-gray-200 rounded-md bg-white px-3 py-1 hover:opacity-100 opacity-50">
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button className="border border-gray-200 rounded-md bg-white px-3 py-1 hover:opacity-100 opacity-50">
            <MdOutlineKeyboardArrowRight />
          </button>
          <button className="border border-gray-200 rounded-md bg-white px-3 py-1 hover:opacity-100 opacity-50">
            <MdOutlineKeyboardDoubleArrowRight />
          </button>
        </section>
      </div>
    </div>
  );
};
