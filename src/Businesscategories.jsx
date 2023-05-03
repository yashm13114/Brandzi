import React from 'react'
import Dailypic from './Dailypic';
import Contactdaily from './ContactDaily';
import Footer2 from './Footer2';

const Businesscategories=()=>{
    return (
        <>
         <div className="bg-blue-500 text-white pl-32">
            <h1 className="text-5xl font-bold pt-16">Business Categories</h1>
            <br />
            <p className="text-2xl pb-16">Home / Business Categories</p>
            </div>
            
            <Dailypic />
            <Contactdaily />
            <Footer2 />

        </>
    );
};
export default Businesscategories;