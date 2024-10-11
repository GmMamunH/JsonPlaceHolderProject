/* eslint-disable no-unused-vars */
import React from "react";

export const Footer = () => {
  const year = new Date().getUTCFullYear();
  return (
    <footer className=" bg-white shadow">
      <div className="text-center py-2 px-4 fixed bottom-0 w-full bg-white border">
        <p>
          © All Rights Reserved <strong>{year} || Md Mamun Hossain</strong>
        </p>
      </div>
    </footer>
  );
};
