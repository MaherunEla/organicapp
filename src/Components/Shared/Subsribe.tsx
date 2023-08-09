
import React from "react";

const Subscribe = () => {
  return (
    <div className="container flex items-center justify-center pt-[114px] pb-[117px]">
      <div
        className={`bg-[url('/assets/images/Home/Photo.jpg')] rounded-3xl bg-styles w-[1400px] h-[550px] lg:h-[323px] flex flex-col md:flex-row items-center md:justify-between px-20 py-20`}
      >
        <h2 className="w-full text-start  lg:w-[357px] text-white">Subscribe to our Newsletter</h2>

        <form action="/" className="flex  flex-col items-center lg:flex-row gap-2  w-[580px] h-[80px] ">
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full lg:w-[349px] max-h-20 pl-6 py-[20px] border border-white rounded-lg text-[#ABABAB] bg-white"
              value=""
            />
          </div>
          <div>
            <button className="lg:w-[220px] px-[47px] py-[20px] border rounded-lg border-sea_green bg-sea_green text-white">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;