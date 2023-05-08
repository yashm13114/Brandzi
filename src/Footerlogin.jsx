import React from 'react'
import { Link } from 'react-router-dom';
const Footerlogin = () =>{
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
        />
        <div className=''>
            <div className='pl-10 pt-5 pb-5 flex justify-start'>
                <h1 className='text-5xl text-blue-500'>Brandzi.live</h1>
                <span className='text-blue-500 bg-white pt-2  border-2 h-11 w-20 border-blue-500 grid justify-center ml-5 hover:text-white hover:bg-blue-500'><Link to="/Blogs2">Blog</Link></span>
                <h2 className='pl-32 ml-10 text-lg text-black'>Download</h2>
                <img src="./assets/images/Logo-app-Instalcion-Google-Play-Store.png" className='h-8 w-28 ml-4' alt="" />
                <img src="./assets/images/Download_on_the_App_.png" className='h-8 w-28' alt="" />
                <h1 className='ml-64 text-xl text-black'>Follow Us:</h1>
                <i className="fa-brands fa-facebook-f  pl-8 mt-2 h-7 w-7 rounded-full  text-blue-500"></i>
                <i className="fa-brands fa-instagram  pl-8  mt-2 text-blue-500"></i>
                <i className="fa-brands fa-twitter  pl-8 mt-2 text-blue-500"></i>
                <i className="fa-brands fa-youtube  pl-8 mt-2 text-blue-500"></i>
            </div>
            <div className=' w-full flex justify-between  pl-10  pt-3 pb-3 text-white bg-blue-500 h-16'>
                
                    <h1 className='grid justify-start text-xl'>Copyright © Brands.live All Right Reserved.</h1>
                    <h1 className='grid justify-end text-xl pr-3 align-right'>Terms | Privacy Policy | Refer & Earn</h1>
                
                
            </div>
        </div>
        </>
    )
}
export default Footerlogin;