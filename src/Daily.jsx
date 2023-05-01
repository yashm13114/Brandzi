import React from "react";
import Dailypic from "./Dailypic";
import ContactDaily from "./Dailypic";

const Daily = () => {
  return (
    <>
      <div class="bg-blue-500 text-white pl-32">
        <h1 class="text-5xl font-bold pt-16">Daily Categories</h1>
        <br />
        <p class="text-2xl pb-16">Home / DailyCategories</p>
       </div>
       <Dailypic />
       <ContactDaily />
    </>
  );
};

export default Daily;