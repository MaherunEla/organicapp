import React from "react";
import { BsArrowDown, BsArrowUp, BsCart3 } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

const Statics = () => {
  return (
    <div>
      <div className="flex items-center justify-between lg:gap-10 mb-[30px]">
        <h4 className="text-2xl font-semibold text-[#222] font-work_sans">
          Statics
        </h4>
        <div className="flex items-center gap-1">
          <CiCalendar />
          <form className=" flex gap-2">
            <select>
              <option selected value="0" className="flex">
                Last 30 days
              </option>
              <option value="1">Last 90 days</option>
              <option value="2">Last 180 days</option>
            </select>
          </form>
        </div>
      </div>
      <div className="mb-[20px] flex items-center justify-center gap-[28px] px-[30px] py-[30px] bg-[#fcf9ef] border border-[#fcf9ef] rounded-[20px]">
        <div className="w-[50px] h-[50px] flex items-center justify-center  rounded-[10px] bg-[#fff]">
          <BsCart3 size={20} className="text-[#26901b]" />
        </div>
        <div>
          <h6 className="text-[#999999] font-work_sans text-sm font-normal">
            Orders
          </h6>
          <div className="flex items-center gap-1">
            <h4 className="font-work_sans font-semibold text-2xl text-[#222]  ">
              254
            </h4>
            <BsArrowUp size={14} className="text-[#80bc00] " />
            <span className="text-[#80bc00] font-work_sans font-semibold text-sm">
              12,5%
            </span>
          </div>
        </div>
      </div>

      <div className="mb-5 flex items-center justify-center gap-[28px] px-[30px] py-[30px] bg-[#f9ece5] border border-[#f9ece5] rounded-[20px]">
        <div className="w-[50px] h-[50px] flex items-center justify-center  rounded-[10px] bg-[#fff]">
          <BsCart3 size={20} className="text-[#26901b]" />
        </div>
        <div>
          <h6 className="text-[#999999] font-work_sans text-sm font-normal">
            Revenue
          </h6>
          <div className="flex items-center gap-1">
            <h4 className="font-work_sans font-semibold text-2xl text-[#222]  ">
              $6,260
            </h4>
            <BsArrowUp size={14} className="text-[#80bc00] " />
            <span className="text-[#80bc00] font-semibold font-work_sans  text-sm">
              7.1%
            </span>
          </div>
        </div>
      </div>

      <div className="mb-4 flex items-center justify-center gap-[28px] px-[30px] py-[30px] bg-[#f0f5e7] border border-[#f0f5e7] rounded-[20px]">
        <div className="w-[50px] h-[50px] flex items-center justify-center  rounded-[10px] bg-[#fff]">
          <BsCart3 size={20} className="text-[#26901b]" />
        </div>
        <div>
          <h6 className="text-[#999999] font-work_sans text-sm font-normal">
            Revenue
          </h6>
          <div className="flex items-center gap-1">
            <h4 className="font-work_sans font-semibold text-2xl text-[#222]  ">
              $2,567
            </h4>
            <BsArrowDown size={14} className="text-[#fc6b00] " />
            <span className="text-[#fc6b00] font-semibold font-work_sans font-normal text-sm">
              0.32%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statics;
