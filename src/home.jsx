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
  
  var swiper = new Swiper('.mySwiper', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

  return (
    <>
    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css" />
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    
      <div className="swiper mySwiper bg-blue-500 sm:flex pl-11 pr-11 text-white ">
        <div className=" pt-10 font-bold">
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
          <div className="sm:flex:w-[30%] sm:align-middle">
            
            <img src="./assets/images/Download_on_the_App_.png" className="pt-10 h-24 w-48 " />
            <img
              src="./assets/images/Logo-app-Instalcion-Google-Play-Store.png"
              className="pt-10 h-24 w-48 "
            />
            
          </div>

          <br />
        </div>

        <div className="relative z-0">
        
          <div className="swiper-wrapper lg:flex sm:flex  whitespace-nowrap overflow-hidden">
         
            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="swiper-slide h-80 w-80  pt-5 pb-5 pl-4"
              alt=""
            />
            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="swiper-slide h-80 w-80  pt-5 pb-5 pl-4 "
              alt=""
            />
            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="swiper-slide  h-80 w-80  pt-5 pb-5 pl-4 "
              alt=""
            />
            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="swiper-slide h-80 w-80  pt-5 pb-5 pl-4 "
              alt=""
            />
            <img
              id=""
              src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="swiper-slide h-80 w-80  pt-5 pb-5 pl-4 "
              alt=""
            />
            
          </div>
          
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
        
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
