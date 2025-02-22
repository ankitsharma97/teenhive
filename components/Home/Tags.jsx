import Link from "next/link";
import React from "react";

function Tags({ title }) {
  return (
    <>
      <Link href="#">
        <div className="md:w-[272px] w-[220px]  md:min-w-0 md:mb-[44px]  mb-[22px] md:h-[75px]  md:py-[23px] md:px-[25px] p-[1rem] flex items-center border border-[#E5E5E5] bg-[#ffffff] rounded-[10px] ">
          <div className="md:w-[30px]  md:h-[30px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#clip0_16_265)">
                <path
                  d="M29.7949 28.2188L22.2363 20.6602C22.1016 20.5254 21.9258 20.4551 21.7383 20.4551H21.1348C23.1445 18.2812 24.375 15.3809 24.375 12.1875C24.375 5.45508 18.9199 0 12.1875 0C5.45508 0 0 5.45508 0 12.1875C0 18.9199 5.45508 24.375 12.1875 24.375C15.3809 24.375 18.2812 23.1445 20.4551 21.1406V21.7383C20.4551 21.9258 20.5312 22.1016 20.6602 22.2363L28.2188 29.7949C28.4941 30.0703 28.9395 30.0703 29.2148 29.7949L29.7949 29.2148C30.0703 28.9395 30.0703 28.4941 29.7949 28.2188ZM12.1875 22.5C6.48633 22.5 1.875 17.8887 1.875 12.1875C1.875 6.48633 6.48633 1.875 12.1875 1.875C17.8887 1.875 22.5 6.48633 22.5 12.1875C22.5 17.8887 17.8887 22.5 12.1875 22.5Z"
                  fill="#595959"
                  stroke="#595959"
                  stroke-width="0.00195312"
                />
              </g>
              <defs>
                <clipPath id="clip0_16_265">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
          <p className=" font-Inter md:text-[1.5rem] text-[1rem] font-[400] text-[#262626] md:ml-[18px] ml-[24px]">{title}</p>
        </div>
      </Link>
    </>
  );
}

export default Tags;
