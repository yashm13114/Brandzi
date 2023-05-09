import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="font-bold pl-11 pr-11 bg-blue-400 w-full text-white text-center fixed top-0 pt-1 pb-1 sm:bg-blue-500">
        <div className="flex justify-between">
          <div className="flex">
            <a>
            <Link to="/home"><img
                src="./assets/images/brandzi app icon-01.png"
                className="h-24 w-32 pb-4"
                
                alt=""
              /></Link>
            </a>
          </div>
          <div className="sm:justify-evenly:align-middle:hidden lg:block md:
          block">
            <ul className="sm:flex  space-x-10 list-none text-xl pt-5 ">
              <li className="hover:border-b-2 rounded-md border-white border-pb-5">
                <Link to='/Daily'>Daily</Link>
              </li>
              <li className="hover:border-b-2 rounded-md border-white border-pb-5">
                <a href="/Festivals2">Festival</a>
              </li>
              <li className="hover:border-b-2 rounded-md border-white border-pb-5">
              <a href="/Days">Days</a>
              </li>
              <li className="hover:border-b-2 rounded-md border-white border-pb-5">
              <a href="/Businesscategories">Business Categories</a>
              </li>
              <li className="hover:border-b-2 rounded-md border-white border-pb-5">
              <a href="/blogs">Blogs</a>
              </li>
              <button className="bg-white hover:outline-blue  hover:bg-blue-400 hover:text-white   text-blue-500 rounded-full pl-3 pr-3 h-17 pb-2 pt-1">
              <a href="/Signup">Sign Up | Login</a>
              </button>
              
            </ul>
            
          </div>
        </div>
        
      </div>
      <hr />
    </>
  );
};

export default Navbar;
