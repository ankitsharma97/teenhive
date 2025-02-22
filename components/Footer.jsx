import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className=" relative z-[50] ">
        <div className=" sm:py-[40px] flex sm:flex-row flex-col  justify-start py-[30px] px-[20px] sm:px-[80px] bg-[#2c04bd]">
          <div className=" sm:w-[25%] w-[100%] flex justify-center flex-col items-center ">
            <Link href="/" className=" text-white">
              <div className="sm:mb-[24px] mb-[18px]">
                <img
                  src="/images/logo.svg"
                  className=" text-white"
                  alt="logo"
                />
              </div>
            </Link>
            <div className=" flex gap-[16px]">
              <Link
                href="https://www.facebook.com/jobcaseinc"
                aria-label="Jobcase Facebook link"
              >
                <span
                  role="img"
                  className="SVGIcon__Container-sc-1kyax6f-1 eA-DhEp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="1.33em"
                    height="1.33em"
                    stroke="#FFFFFF"
                    className="SVGIcon__StyledIconComponent-sc-1kyax6f-0 jbhFkv"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="https://www.tiktok.com/@jobcase?"
                aria-label="Jobcase Tiktok link"
              >
                <span
                  role="img"
                  className="SVGIcon__Container-sc-1kyax6f-1 eA-DhEp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.33em"
                    height="1.33em"
                    stroke="#FFFFFF"
                    className="SVGIcon__StyledIconComponent-sc-1kyax6f-0 jbhFkv"
                    viewBox="-2 0 22 21"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M18.57 4.903c-1.25 0-2.448-.48-3.332-1.334a4.479 4.479 0 01-1.38-3.221V0h-3.71v14.323a3.02 3.02 0 01-.6 1.801c-.39.525-.941.919-1.575 1.125a3.302 3.302 0 01-1.958.026 3.199 3.199 0 01-1.606-1.083 3.025 3.025 0 01-.652-1.784 3.015 3.015 0 01.547-1.818 3.184 3.184 0 011.542-1.168 3.301 3.301 0 011.956-.08V7.698a7.19 7.19 0 00-.852-.05c-3.814 0-6.907 2.988-6.907 6.676S3.136 21 6.95 21c.285 0 .57-.017.852-.05a6.984 6.984 0 004.325-2.206 6.549 6.549 0 001.73-4.42V6.618a5.28 5.28 0 002.324 1.63c.915.324 1.906.399 2.862.214V4.88a4.97 4.97 0 01-.473.023z"
                    />
                  </svg>
                </span>
              </Link>
              <Link
                href="https://www.instagram.com/jobcase/"
                aria-label="Jobcase Instagram link"
              >
                <span
                  role="img"
                  className="SVGIcon__Container-sc-1kyax6f-1 eA-DhEp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    width="1.33em"
                    height="1.33em"
                    stroke="#FFFFFF"
                    className="SVGIcon__StyledIconComponent-sc-1kyax6f-0 jbhFkv"
                  >
                    <path
                      fill="#FFFFFF"
                      d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          {/* griding */}
          <div className="sm:w-[40%] w-full text-[1rem] sm:text-[16px] mt-[20px] sm:mt-0 font-Inter h-full sm:h-[100px] grid grid-cols-2">
            <div className="w-full flex flex-col justify-center items-center">
            <Link href="/about-us" className="text-white hover:underline">
              About us
            </Link>
            <Link href="/teenhall" className="text-white hover:underline mt-[20px]">
            TeenHall
            </Link>
            </div>
            <div className="w-full flex flex-col justify-center items-center">
            <Link href="/teen-ambassadors" className="text-white hover:underline">
            Teen Ambassadors
            </Link>
            <Link href="/for-teenagers" className="text-white hover:underline mt-[20px]">
            For Teenagers
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
