import React from "react";
import Dailypic from "./Dailypic";
import Contactus from "./Contactus";
import Contactdaily from "./ContactDaily";
import Footer2 from "./Footer2";

const Festivals2 = () =>{
    return (
        <>
        <div className="bg-blue-500 text-white pl-32">
        <h1 className="text-5xl font-bold pt-16">Festival Categories</h1>
        <br />
        <p className="text-2xl pb-16">Home / Festival Categories</p>
        </div>
        <Dailypic />
        <Contactdaily />
        <Footer2 />
        </>
    )
}

export default Festivals2;