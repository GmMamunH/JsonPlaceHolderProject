/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet, Link } from "react-router-dom";

export const Header = ({search, searchHandler}) => {
  return (
    <>
      <header className=" bg-white shadow">
        <nav className="flex justify-between items-center py-2 px-4 fixed top-0 w-full bg-white border">
          <section>
            <h1 className="text-base text-black font-bold ">
              JSONPlaceholder{" "}
            </h1>
          </section>
          <section>
            <ul className="flex gap-3">
              <li>
                <Link
                  to="/"
                  className="capitalize hover:bg-slate-100 duration-300 rounded-md py-2 px-4 text-sm font-medium text-slate-900"
                  
                >
                  home
                </Link>
              </li>
              <li>
                <Link
                  to="/posts"
                  className="capitalize hover:bg-slate-100 duration-300 rounded-md py-2 px-4 text-sm font-medium text-slate-900"
                  
                >
                  posts
                </Link>
              </li>
            </ul>
            <Outlet />
          </section>
          <section className="flex gap-3">
            <input
              className="py-2 px-4 focus:outline-none border border-slate-300 rounded-md text-base font-normal text-slate-400 "
              type="text"
              placeholder="name or username"
              value={search}
              onChange={searchHandler}
            />
            <button className="bg-black hover:bg-gray-800 duration-500 text-white rounded-md px-4 font-medium text-sm">
              Search
            </button>
          </section>
        </nav>
      </header>
      {/* ==================================================== */}
    </>
  );
};
