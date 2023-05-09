import React from 'react'
import { Link } from 'react-router-dom';
const Navbar2 = () => {
    return (
        <>
            <div className='bg-sky-400 text-white pl-10 pr-10 fixed top-0 w-full'>
                <div className="flex justify-between">
                    <div className="flex">
                        <a>
                            <Link to="/home"><img
                                src="./assets/images/brandzi app icon-01.png"
                                className="h-24 w-28 pb-4"

                                alt=""
                            /></Link>
                        </a>
                    </div>
                    <div className="sm:justify-evenly:align-middle:hidden lg:block md:block">
                        <ul className="sm:flex  space-x-10 list-none text-xl pt-5 ">
                            <li className="hover:border-b-2 rounded-md border-white border-pb-5">
                                <a href="/Daily">Custom</a>
                            </li>
                            <li className="hover:border-b-2 rounded-md border-white border-pb-5">
                                <a href="/Festivals2">Pricing</a>
                            </li>
                            <li className="hover:border-b-2 rounded-md border-white border-pb-5">
                                <a href="/Days">Brand Feed</a>
                            </li>
                            <li className="hover:border-b-2 rounded-md border-white border-pb-5">
                                <a href="/Businesscategories">Downloads</a>
                            </li>
                            <li className="hover:border-b-2 rounded-md border-white border-pb-5">
                                <a href="/Blogs">Account</a>
                            </li>
                            <button className="bg-white hover:outline-blue  hover:bg-blue-400 hover:text-white text-blue-500 rounded-full pl-3 pr-3 h-17 pb-2 pt-1">
                                <a href="/Signup">Logout</a>
                            </button>

                        </ul>

                    </div>
                </div>
            </div>
        </>
    )

}
export default Navbar2;