import Image from "next/image";
import React from "react";

function Hero2() {
  return (
    <>
      <div className=" w-full max-w-[1280px]  pb-[60px] sm:pb-0 mx-auto h-[110vh] sm:h-[532px]  px-[20px] sm:px-[76px]">
        <div className=" w-full sm:h-[600px] h-full  flex flex-col-reverse sm:flex-row gap-0 sm:gap-[15px]">
          <div className=" h-fit sm:h-full w-full   flex items-center justify-center">
            <div>
              <p className=" font-Domine leading-[1.75] text-[#4834D4] font-bold text-[2rem] sm:text-[40px] tracking-[-1.2px]">
                <span className="text-[#FC6142]">A new LinkedIn</span> for the teens of new India
              </p>
              <p className=" sm:mt-[20px] mt-[10px]  font-Inter font-[400]  text-[18px] sm:text-[20px] text-[#595959] leading-[1.75] tracking-[-0.015em]">
                A cutting-edge networking platform designed specifically for
                high school students set to revolutionize the way teenagers
                connect, collaborate, and grow in the digital age
              </p>
            </div>
          </div>
          <div className=" h-full z-10 relative overflow-hidden w-full">
           <div className="sm:h-[660px] w-[380px] h-full sm:w-full absolute top-[-10%]">
           <Image
              className="  sm:w-full sm:h-full h-full object-cover z-0"
              src="/images/home.svg"
              alt="home"
              fill={true}
            />
           </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero2;
