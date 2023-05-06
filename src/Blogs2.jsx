import React from 'react'
import Contactus from './Contactus'
import Footer from './Footer'
import Features from './Features'
import How from './How'
const Blogs2 = () =>{
    return(
        <>
        
        <div className='flex justify-center bg-blue-500'>
            <div className=' h-80'>
                <h1 className='lg:text-7xl sm:text-2xl text-white pl-72 w-[75%]'>More than 100,000+ Creative Marketing <br/> Images</h1>
                <p className='text-white text-xl w-3/4 pl-72 pb-4 mt-10'>Whether you have a small and medium business, get all required marketing stuff in a few clicks. Easiest way to promote your business.</p>
                <button className='bg-white text-blue-500  pt-2 pb-2 ml-72 rounded-3xl pl-6 pr-6'>Download Free Post Now</button>
            </div>
            <div className='sm:hidden lg:block md:block'>
                <img className='h-[80%] w-3/4' src="https://brands.live/public/front/assets/img/background/new/bg2.png"  alt="" />
            </div>
        </div>
        <How />
        <Features />
        <Contactus />
        <Footer />
        </>

    )
}
export default Blogs2