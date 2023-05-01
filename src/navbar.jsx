import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="font-bold pl-11 pr-11 bg-blue-500 text-white text-center sticky top-0 pt-1 pb-1">
        <div className="flex justify-between">
          <div className="flex">
            <a>
              <img
                src="brandzi app icon-01.png"
                className="h-24 w-32 pb-4"
                alt=""
              />
            </a>
          </div>
          <div className="">
            <ul className="flex space-x-10 list-none text-xl pt-5">
              <li>
                <a href="/Daily">Daily</a>
              </li>
              <li>
                <a href="festival.html">Festival</a>
              </li>
              <li>
                <a href="Days.html">Days</a>
              </li>
              <li>
                <a href="business.html">Business Categories</a>
              </li>
              <li>
                <a href="Blogs.html">Blogs</a>
              </li>
              <button className="bg-white hover:outline-double hover:bg-blue-400 hover:text-white  pt-1 text-blue-500 rounded-full pl-3 pr-3 h-17 pb-4">
                Sign Up | Login
              </button>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default Navbar;
