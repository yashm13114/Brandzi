import React, { Component } from "react";
import Festivals from "./Festivals";
import Categories from "./categories";
import Dailycategories from "./Dailycategories";
import Templates from "./Templates";
import Video from "./Video";
import Features from "./Features";
import Contactus from "./Contactus";
import Footer from "./Footer";


const Home = () => {
  return (
    <>
      <div className="bg-blue-500 flex pl-11 pr-11 text-white">
        <div className="pt-10 font-bold ">
          <h4 className="text-lg">WE HELP YOUR BUSINESS BECOME A BRAND</h4>
          <br />
          <h1 className="text-5xl">
            Personlized Bussiness posts in
            <br /> just 10 seconds
          </h1>
          <br />
          <h4 className="text-xl">
            10000+Permimum posts for every bussiness to 10x its growth
          </h4>
          <div className="flex">
            <img src="Download_on_the_App_.png" className="pt-10 h-24 w-48" />
            <img
              src="Logo-app-Instalcion-Google-Play-Store.png"
              className="pt-10 h-24 w-48 pl-5"
            />
          </div>

          <br />
        </div>

        <div className="relative overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-80 w-80  pt-5 pb-5 pl-4"
              alt=""
            />
            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="h-80 w-80  pt-5 pb-5 pl-4"
              alt=""
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <Categories/>
      <Festivals />
      <Dailycategories />
      <Templates />
      <Video />
      <Features />
      <Contactus />
      <Footer />
      
    </>
  );
};

export default Home;
