import Navbar  from "./navbar";
import React from "react";

const Dailycategories = () => {
  return (
    <>
      {/* <h1 className="text-4xl pl-11">Daily Categories</h1>
      <br />
      <marquee className="" behavior="" scrollamount="4" direction="" >

      <div className="flex justify-evenly">
      
        <div className="">
          <img className="h-40  rounded-full" src="123.webp" />
        </div>

        <div className="">
          <img className="h-35 w-30 rounded-full" src="" />
        </div>

        <div className="">
          <img
            className="h-40 w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
          />
        </div>
        <div className="=">
          <img
            className="h-40 w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
          />
        </div>
        <div className="">
          <img className="h-40 w-40" src="123.webp" />
        </div>
        <div className="">
          <img className="h-40 w-40" src="123.webp" />
        </div>
        
      </div>
      </marquee>
      <br />
      <br />
      <br /> */}
      <Navbar />
      <div className="mb-10">
      <div
            id="carouselExampleControlscategories"
            class=""
            data-te-carousel-init
            data-te-carousel-slide>
              <h1 className="text-4xl pl-10">Daily Categories</h1>
           
            <div
              class="mt-7  w-full overflow-hidden after:clear-both after:block after:content-['']">
           
              <div
                class=" float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item
                data-te-carousel-active>
                <div className="flex justify-evenly">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                </div>
              </div>
           
              <div
                class=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div className="flex justify-evenly">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                </div>
              </div>
          
              <div
                class=" float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item>
                <div className="flex justify-evenly">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nadi_Sri_Siva_Subramaniya_Temple.jpg/1200px-Nadi_Sri_Siva_Subramaniya_Temple.jpg"
                  class="block w-40 h-40"
                  alt="Wild Landscape" />
                </div>
              </div>
            </div>

            <button
              class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleControlscategories"
              data-te-slide="prev">
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Previous</span>
              
            </button>
          
            <button
              class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-black opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
              type="button"
              data-te-target="#carouselExampleControlscategories"
              data-te-slide="next">
              <span class="inline-block h-8 w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="h-6 w-6">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </span>
              <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                >Next</span>
              
            </button>
          </div>
         
      </div>
     
    </>
  );
};

export default Dailycategories;
