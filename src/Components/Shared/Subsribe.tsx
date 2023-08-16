
import React from "react";

const Subscribe = () => {
  return (
    <div className="md:container pt-[60px] xl:pt-[114px] pb-[117px]">
      <div
        className={`bg-[url('/assets/images/Home/Photo.jpg')] rounded-3xl bg-styles w-full h-[450px] flex justify-center md:justify-between items-center flex-col md:flex-row px-6 md:px-[71px]`}
      >
        <h2 className="w-full text-center  xl:text-start  lg:w-[357px] text-white ">Subscribe to our Newsletter</h2>

        <form action="/" className=" flex  flex-col items-center lg:flex-row gap-[6px]  w-full xl:w-[575px]  ">
          <div>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full lg:w-[349px]  pl-6 pr-[152px] py-[28px] border border-white rounded-lg text-[#ABABAB] bg-white"
              value=""
            />
          </div>
          <div>
            <button className="lg:w-[220px] px-[47px] py-[28px] border rounded-lg font-bold text-xl border-sea_green bg-sea_green text-white">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;