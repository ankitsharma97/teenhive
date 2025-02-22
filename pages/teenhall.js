import Card from "@/components/teelhall/Card";
import React from "react";
import Marquee from "react-fast-marquee";

const marqueeData = [
  "TeenHall by TeenHive - an exclusive idea discovery and teen networking event",
];

const data = [
  {
    number: "01",
    desc: "One year LinkedIn premium subscription",
  },
  {
    number: "02",
    desc: "Exclusive App Subscriptions",
  },
  {
    number: "03",
    desc: "Startup Funding, Credits & Mentorship",
  },
];

function Teenhall() {
  return (
    <>
      <div className=" max-w-[1280px] mx-auto w-full h-full">
        <div className=" flex flex-col sm:flex-row w-full ">
          <div className="sm:w-[55%] w-full px-[30px] sm:px-0 sm:pt-[150px] pt-[70px]  h-full">
            <p className=" font-Domine font-[700]   pl-0 sm:pl-[80px] text-[#4834D4] tracking-[-1.2px] text-[2rem] sm:text-[2.5rem]">
              <span className="text-[#FC6142]">
                Uncover groundbreaking ideas aimed at{" "}
              </span>
              empowering ambitious teenagers like you!
            </p>
            <p className=" text-[#595959] mt-[40px] pl-0 sm:ml-[80px] ml-0  sm:pb-[206px] md:max-w-[602px] w-full font-Inter text-[1.25rem] font-[400] leading-[1.75] tracking-[-0.015em]">
              If you&apos;re an ambitious teenager looking to connect with like
              minded teens, learn new skills, explore your interests and
              discover new opportunities, we have an exciting news for you!
            </p>
          </div>
          <div className="sm:w-[45%] w-full h-[510px] relative  sm:mx-[30px] sm:px-0  ">
            <div className="flex mt-[77px] ">
              <div className="w-[300px] h-[150px] mx-[23px]">
                <img
                  src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Rectangle%2010%20(1)-min.png"
                  className=" object-cover "
                  alt="as"
                />
              </div>
              <div className="w-[150px] h-[150px]  mx-[23px]">
                <img
                  src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Rectangle%2011-min.png"
                  className=" object-cover "
                  alt="as"
                />
              </div>
              {/* second row */}
              <div className=" absolute sm:top-[263px] top-[200px] w-full flex">
                <div className="w-[150px] h-[150px]  mx-[23px]">
                  <img
                    src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Rectangle%2012-min.png"
                    className=" object-cover "
                    alt="as"
                  />
                </div>
                <div className="w-[150px] h-[150px]  mx-[23px]">
                  <img
                    src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Rectangle%2013-min.png"
                    className=" object-cover "
                    alt="as"
                  />
                </div>
                <div className="w-[150px] h-[150px]  mx-[23px]">
                  <img
                    src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Vector-min.png"
                    className=" object-cover "
                    alt="as"
                  />
                </div>
              </div>
              {/* third */}
              <div className=" absolute top-[320px] sm:top-[450px] w-full flex ">
                <div className="w-[150px] h-[150px]  mx-[23px]">
                  <img
                    src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Ellipse%201-min.png"
                    className=" object-cover "
                    alt="as"
                  />
                </div>
                <div className="w-[300px] h-[150px]  mx-[23px]">
                  <img
                    src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Rectangle%2014-min.png"
                    className=" object-cover "
                    alt="as"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  sm:mt-0 h-full bg-[#FC6243] ">
        <div className=" max-w-[1280px] mx-auto w-full py-[18px] h-[60px] ">
          <Marquee
            direction="left"
            speed={65}
            autoFill="true"
            className=""
          >
            <p className="  w-[100%] flex items-center font-Inter whitespace-nowrap text-[#fff] text-[1.15rem] sm:text-[1.25rem] font-[500] tracking-[-0.2px]">
              {" "}
              TeenHall by TeenHive - an exclusive idea discovery and teen
              networking event
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                className=" mx-[20px]"
              >
                <g clip-path="url(#clip0_1_24)">
                  <path
                    d="M23.993 16.6709L17.1742 12.4999L23.9927 8.32884C24.0509 8.29326 24.1014 8.24658 24.1415 8.19146C24.1816 8.13634 24.2105 8.07386 24.2264 8.0076C24.2424 7.94133 24.2451 7.87257 24.2345 7.80524C24.2239 7.73791 24.2001 7.67333 24.1645 7.61519L22.1609 4.33997C22.1253 4.28181 22.0786 4.23122 22.0235 4.1911C21.9684 4.15097 21.906 4.1221 21.8397 4.10612C21.7734 4.09014 21.7046 4.08738 21.6373 4.09798C21.57 4.10859 21.5054 4.13235 21.4472 4.16792L14.9383 8.14978V0.519011C14.9383 0.381361 14.8836 0.249348 14.7863 0.152015C14.689 0.0546814 14.5569 0 14.4193 0L10.5804 0C10.4428 0 10.3108 0.0546814 10.2134 0.152015C10.1161 0.249348 10.0614 0.381361 10.0614 0.519011V8.14978L3.55223 4.16818C3.49408 4.13261 3.42949 4.10884 3.36215 4.09824C3.29481 4.08764 3.22604 4.0904 3.15977 4.10638C3.0935 4.12236 3.03103 4.15123 2.97592 4.19136C2.92081 4.23148 2.87414 4.28207 2.83859 4.34023L0.834946 7.61545C0.763364 7.73294 0.741251 7.874 0.773449 8.00776C0.805647 8.14151 0.889533 8.25706 1.00674 8.32909L7.82551 12.4999L1.00674 16.6709C0.948546 16.7064 0.897931 16.7531 0.857793 16.8082C0.817655 16.8633 0.78878 16.9258 0.772823 16.9921C0.756866 17.0584 0.754139 17.1272 0.764799 17.1945C0.775459 17.2618 0.799296 17.3264 0.834946 17.3845L2.83859 20.6595C2.87412 20.7177 2.92077 20.7683 2.97587 20.8085C3.03097 20.8486 3.09344 20.8775 3.15971 20.8935C3.22598 20.9095 3.29476 20.9123 3.36211 20.9017C3.42946 20.8911 3.49406 20.8674 3.55223 20.8318L10.0614 16.85V24.4807C10.0614 24.6184 10.1161 24.7504 10.2134 24.8477C10.3108 24.9451 10.4428 24.9997 10.5804 24.9997H14.4193C14.5569 24.9997 14.689 24.9451 14.7863 24.8477C14.8836 24.7504 14.9383 24.6184 14.9383 24.4807V16.8502L21.4475 20.8316C21.5649 20.9034 21.706 20.9256 21.8399 20.8934C21.9737 20.8612 22.0892 20.7771 22.1611 20.6598L24.1648 17.3845C24.2364 17.2671 24.2585 17.126 24.2263 16.9922C24.1941 16.8585 24.1102 16.7429 23.993 16.6709Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_24">
                    <rect width="25" height="25" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </p>
          </Marquee>
        </div>
      </div>
      <div className=" w-full h-full bg-[#F4F4F4] relative">
        <div className=" px-[30px] sm:px-[100px] max-w-[1280px] mx-auto grid sm:grid-cols-2 gap-[30px] grid-cols-1">
          <div className="w-full h-full">
            <p className=" text-[#2C04BD] sm:mt-[104px] mt-[52px] leading-[1.75] sm:mb-[57px] mb-[40px] font-Domine text-[2rem]  sm:text-[2.25rem] font-[700] tracking-[-1.08px]">
              Age is just a number!
            </p>
            <p className=" text-[#595959] w-full leading-[1.75] sm:w-[95%] sm:mb-[140px] font-Inter text-[18px] font-[400] tracking-[-0.015em]">
              Ever felt like you&apos;re meant for something greater? Now&apos;s
              your chance to explore, innovate, and create a lasting impact. Our
              team is here to lend a hand and show you the world of
              possibilities, all tailored for ambitious teenagers like you.
            </p>
          </div>
          <div className=" w-full h-full flex items-center">
            <p className=" text-[#595959] w-[90%] mt-0 sm:mt-[49px] leading-[1.75] mb-[50px] sm:mb-0 font-Inter text-[18px] font-[400] tracking-[-0.015em]">
              From public speaking to entrepreneurship, our ideas will ignite
              the fire within you and skyrocket your potential. Get ready to
              show the world what the next generation is truly capable of!
            </p>
          </div>
        </div>
        <div className=" absolute bottom-[-8%] sm:bottom-[-3%] rotate-45 right-[60px] sm:right-[116px]  w-[70px] sm:w-[100px]  h-[100px] sm:h-[135px]">
          <img
            src="/images/teenhall/83f1f88eb6038ccef5d4fbbed6915b44.jpeg"
            alt="as"
            className=" h-full object-cover rounded-[20px]"
          />
        </div>
      </div>
      <div className=" w-full pb-[100px] h-full max-w-[1280px] mx-auto flex flex-col items-center">
        <p className=" text-[#2C04BD] leading-[1.75] px-[30px] sm:px-0 mt-[105px] mb-[44px] font-Domine text-[2rem] font-[700] tracking-[-0.015em]">
          Ready to unlock your potential?
        </p>
        <p className=" text-[#595959] leading-[1.75] font-Inter text-[18px] w-full px-[30px] sm:w-[62.5%] font-[400] tracking-[-0.015em]">
          Our team has developed a groundbreaking career networking platform
          specifically designed to support and connect ambitious teenagers like
          yourself.
        </p>
        <p className=" text-[#595959] leading-[1.75] mt-[44px] font-Inter text-[18px] w-full px-[30px] sm:w-[62.5%] font-[400] tracking-[-0.015em]">
          To help you get started on this exciting journey, we invite you to hop
          on a call with our team members. During this call, you can expect to
          discover some amazing ideas we have been working on for teenagers. We
          want to ensure that you have a seamless and enjoyable experience as
          you embark on this new venture.
        </p>
        <button className=" h-[50px] max-w-[172px] w-full text-[18px] mt-[62px] rounded-[10px] font-[500] tracking-[-0.27px] font-Inter  bg-[#FC6243] text-white ">
          Reserve Spot
        </button>
      </div>
      <div className=" bg-[#F4F4F4] pb-[60px] w-full h-full">
        <div className=" max-w-[1280px] w-full h-full mx-auto">
          <div className="w-full h-full flex justify-center">
            <p className=" text-[#2E2E2E] pt-[86px] leading-[1.75] tracking-[-0.018em] w-full px-[30px] sm:w-[58.4375%] text-center font-Domine font-bold text-[1.5rem] ">
              Dive in to discover some fantastic ideas and projects and stand a
              chance to win some unbelievable prizes.
            </p>
          </div>
          <div className=" mt-[30px] w-full h-full flex flex-wrap justify-center">
            {data.map((item, index) => {
              return (
                <>
                  <Card key={index} data={item} />
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div className="">
        <div className=" w-full h-full  sm:py-[85px] py-[50px] bg-[#fff] flex justify-center ">
          <p className=" text-[#2C04BD] leading-[2]  w-full px-[30px] sm:w-[64.0625%] font-Domine  text-[1.75rem] sm:text-[2rem] font-[700] tracking-[-0.64px]">
            “The future belongs to those who believe in the beauty of their
            dreams”
          </p>
        </div>
      </div>
      <div className="bg-[#F4F4F4] pb-[40px]  w-full ">
        <div className="mx-auto max-w-[1280px] w-full h-full">
          <p className=" text-center sm:pt-[90px] pt-[50px] pb-[20px] font-Inter text-[24px] tracking-[-0.72px]  font-[500] ">
            TeenHall August Calendar
          </p>
          <div className=" max-w-[80%] mx-auto w-full h-full flex justify-center  items-center  ">
            <div>
              <iframe src="https://zcal.co/i/bHcvCUr7?embed=1&embedType=iframe" loading="lazy" className=" min-w-[320px] min-h-[1144px] w-full h-full sm:h-[1100px] sm:w-[1030px]" id="zcal-invite"></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teenhall;
