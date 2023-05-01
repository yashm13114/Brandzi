import React from "react";
import Dailypic from "./Dailypic";

const Daily = () => {
  return (
    <>
      <div class="pl-11 pr-11 pb-24">
        <div class="">
            <div class="flex justify-center align-middle">
                <h1 class="text-5xl">Contact Us</h1>
            </div>
        </div>
        <br /><br />
        <div class="flex justify-evenly align-middle border-2 pt-6 pb-6 rounded-2xl bg-slate-200">
            <div>
                <ul>
                    <li>
                        <i class="fa-regular fa-envelope text-3xl pr-3"></i
              ><b class="text-3xl">Email</b><br />
              <p>
                info@mamotechnolabs.com<br />
                Career

                <br />
                hr@mamotechnolabs.com
              </p>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <i class="fa-solid fa-phone text-3xl pr-3"></i
              ><b class="text-3xl">Phone</b><br />

              <p>
                +91(9823338928)<br />
                +91(9923707097) <br />
                +91(9325910095) - HR
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
};

export default Daily;