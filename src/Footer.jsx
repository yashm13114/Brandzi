import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-blue-500 text-white h-52 pl-11 pr-11">
        <div className="">
          <div className="pb-20">
            <h2 className="flex justify-center align-middle text-3xl">
              Brandzi.live
            </h2>

            <ul className="flex justify-center align-middle">
              <li>
                <i className="fa-brands fa-facebook-f  pls-8"></i>
              </li>
              <li>
                <i className="fa-brands fa-instagram  pl-8"></i>
              </li>
              <li>
                <i className="fa-brands fa-twitter  pl-8"></i>
              </li>
              <li>
                <i className="fa-brands fa-youtube  pl-8"></i>
              </li>
            </ul>
          </div>
          <hr />
        </div>
        <div className="">
          <div className="flex align">
            <p className="text-2xl align-middle">
              Copyright © Brands.live All Right Reserved.
            </p>
          </div>
          <div className="flex justify-end">
            <p className="text-2xl">Privacy Policy | Terms & Conditions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
