import React from "react";
import { CiCalendar } from "react-icons/ci";
import { PiShoppingCartLight } from "react-icons/pi";
const Statics = () => {
  return (
    <div>
      <div className="flex items-center gap-10 mb-[30px]">
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
      <div className="px-[30px] py-[30px] bg-[#fcf9ef] border border-[#fcf9ef] rounded-[20px]">
        <PiShoppingCartLight />
      </div>
    </div>
  );
};

export default Statics;
