import Link from "next/link";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
function Card3({ title, desc }) {
  return (
    <div className=" max-w-[515px] w-full md:p-[2.5rem]  p-[1.5rem] px-[28px] border rounded-[8px] border-[#e5e5e5] flex  flex-col md:flex-row  h-fit md:mt-[56px] mt-[26px] ">
     
      <div className="text-left mt-5 md:mt-0 w-full">
        <p className="md:pb-[8px] pb-[4px] text-[1.35rem] leading-[1.75] tracking-[-0.015em]  font-bold font-Domine">
          {title}
        </p>
        <p className="text-[#595959] font-Inter text-[18px] leading-[1.85] tracking-[-0.015em] font-[400]">{desc}</p>
       
      </div>
    </div>
  );
}

export default Card3;
