import React from "react";

const Footer2 = () => {
    return(
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer"
        />
        <div class="bg-blue-500 text-white h-auto pl-11 pr-11">
      <div class="flex justify-center">
        <div class="pr-32 pt-32 pb-32">
          <h1 class="text-5xl">Brandzi.live</h1>
          <br />
          <p>
            We allow users to personalise their company’s <br />
            logo and a digital business card with updated <br />
            information. We are also providing options for <br />
            personalised festive images with beautiful <br />
            quotes and well-animated high-quality videos.
          </p>
        </div>
        <div class="pr-24 pt-32 pb-32">
          <h2 class="text-4xl">Quick Links</h2>
          <br />
          <hr />
          <br /><br />
          <p class="cursor-pointer">Good Morning</p>
          <p class="cursor-pointer">Good night</p>
          <p class="cursor-pointer">birthday</p>
        </div>
        <div class="pr-16 pl-28 pt-32 pb-32">
          <h1 class="text-4xl">Company</h1>
          <br />
          <hr />
          <br /><br />
          <h1>Blog</h1>
          <div>
            <i class="fa-brands fa-facebook-f pls-8 cursor-pointer"></i>
                        <i class="fa-brands fa-instagram pl-8 cursor-pointer"></i>
                        <i class="fa-brands fa-twitter pl-8 cursor-pointer"></i>
                        <i class="fa-brands fa-youtube pl-8 cursor-pointer"></i>
            </div>
        </div>
    </div>
    <br />
    <hr />
    <div class="flex justify-evenly align-middle pt-7 pb-7">
        <p class="text-2xl">Copyright © Brands.live All Right Reserved.</p>
        <p class="text-2xl">Privacy Policy | Terms & Conditions</p>
    </div>
    </div>
    
        </>

    );
};
export default Footer2;