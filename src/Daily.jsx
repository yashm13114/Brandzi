import React from "react";
import Dailypic from "./Dailypic";
import ContactDaily from "./ContactDaily";
import Footer2 from "./Footer2";
import Navbar  from "./navbar";

const Daily = () => {
  return (
    <>
     <Navbar />
      <div class="bg-blue-500 text-white pl-32 relative top-24">
        <h1 class="text-5xl font-bold pt-16">Daily Categories</h1>
        <br />
        <p class="text-2xl pb-16">Home / DailyCategories</p>
       </div>
       <Dailypic />
       <ContactDaily />
       <Footer2 />
       
    </>
  );
};

export default Daily;