import React from 'react'
import Contactus from './Contactus'
import Footer from './Footer'
import Features from './Features'
import How from './How'
import Navbar2 from './Navbar2'
const Blogs2 = () =>{
    return(
        <>
        <Navbar2 />
        
        <div className='flex justify-center bg-sky-400 relative top-24'>
            <div className=' h-72 mt-10'>
                <h1 className='lg:text-7xl sm:text-2xl text-white pl-72 w-[100%]'>More than 100,000+ Creative Marketing <br/> Images</h1>
                <p className='text-white text-xl w-3/4 pl-72 pb-4 mt-10'>Whether you have a small and medium business, get all required marketing stuff in a few clicks. Easiest way to promote your business.</p>
                <button className='bg-white text-sky-400  pt-2 pb-2 ml-72 rounded-3xl pl-6 pr-6'>Download Free Post Now</button>
            </div>
            <div className='sm:hidden lg:block md:block'>
                <img className='h-[88%] w-[80%]' src="https://brands.live/public/front/assets/img/background/new/bg2.png"  alt="" />
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