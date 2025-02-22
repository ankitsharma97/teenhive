import Carousel from "@/components/Home/Carousel";
import Chips2 from "@/components/Home/Chips2";
import Chips3 from "@/components/Home/Chips3";
import Hero from "@/components/Home/Hero";
import Hero2 from "@/components/Home/Hero2";
import Tags from "@/components/Home/Tags";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const images = [
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/Group%208675.svg",
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/Group%208679.svg",
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/influenzo.svg",
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/Group%208677.svg",
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/Group%208670.svg",
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/AIscribe.svg",
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/BrainBot.svg",
  "https://ik.imagekit.io/nhuikqpll/teenhive_home/innoprompt.svg"
];

const resources = [
  "High School Resume Template",
  "Essay Tools",
  "Colleges with extended deadlines",
  "SAT Prep",
  
  "Colleges offering full ride/tution scholarships",
  "Career discovery",
  "College Application Tracker",
 
];

const search2 = [
  {
    title: "alphateen",
    followers: "24 startups created",
  },
  {
    title: "teenstartupproject",
    followers: "12 aspiring teenpreneurs supported",
  },
  {
    title: "sif",
    followers: "56 ideas brainstormed by teens",
  },
  {
    title: "startupassignemnts",
    followers: "3 challenges accepted by teens",
  },
];

export default function Home() {
  return (
    <>
      <Hero2 />
      <div className="wrapper bg-[#f4f4f4] md:mt-[4.25rem] mt-0">
        <div className="wrapper-item md:py-[100px] py-[50px]">
          <div className="w-full h-full flex flex-col items-center">
            <h1 className="md:w-[45%] leading-[1.75]  w-[95%] h-full md:text-[1.75rem] tracking-[-0.025em] text-[1.75rem] font-[700] text-center font-Domine">
              Helping teens get ahead whether it is college or career
            </h1>
            <p className="md:mt-[20px] mt-[20px] md:w-[57%] leading-[1.85] tracking-[-0.015em]  w-[90%] md:text-center text-left font-Inter md:text-[1.25rem] text-[1rem] font-[400]">
              From a young age, school has taught us that our academic success
              will be essential to getting jobs in the future. However, school
              often fails to teach us that many other factors, the most
              important being networking, can make or break our careers.
            </p>
          </div>
        </div>
      </div>
      <div className="wrapper bg-[#FAFAFA]">
        <div className="wrapper-item md:py-[64px] py-[60px]">
          <h1 className=" text-center font-Domine md:text-[1.65rem]  tracking-[-0.015em] text-[1.75rem] font-[700] px-4">
            Explore opportunities that help you get ahead
          </h1>
          <div className="md:mt-[50px] mt-[30px]  w-full h-full flex justify-center flex-col items-center">
            <div className="sm:w-[50%] h-[170px] md:h-full  relative md:static  w-full  flex sm:flex-row flex-col items-center justify-between">
              <div className=" absolute sm:static left-5 top-0 ">
                <Tags title="Volunteering" />
              </div>
              <div className=" absolute sm:static right-5  bottom-0">
                <Tags title="Internships" />
              </div>
            </div>
            <div className="sm:w-[60%] h-[170px] md:h-full  relative md:static  w-full  flex sm:flex-row flex-col items-center justify-between">
              <div className=" absolute sm:static left-5 top-0 ">
                <Tags title="Fellowships" />
              </div>
              <div className=" absolute sm:static right-5  bottom-0">
                <Tags title="Scholarships" />
              </div>
            </div>
            <div className="sm:w-[100%] h-[75px] md:h-full  relative md:static  w-full  flex   items-center justify-center">
              <div className=" absolute sm:static left-5">
                <Tags title="Mentorships" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="wrapper-item">
          <div className="pt-[100px] flex flex-col items-center">
            <h3 className="  text-[1.75rem] pb-[10px] tracking-[-0.015em] text-center lg:text-[3rem] w-[80%] md:w-full font-Domine font-[700] px-4">
            See what ambitious teens are saying
            </h3>
            <div className="pt-[1rem] w-full h-full flex flex-col items-center">
              <div className="max-w-[1296px] w-full">
                <Carousel />
              </div>

              {/* <div className="w-full h-full flex justify-center py-8">
                <button className=" h-[50px] rounded-[8px] mx-4 px-[2rem] w-full md:w-[350px] border-2 border-bluee font-[500]  text-bluee hover:bg-indigo text-[1.1875rem]">
                  Explore the jobcase community
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="pt-[4rem]">
       <div className="w-full flex justify-center">
       <h3 className="  text-center w-full sm:w-[53%] leading-[1.75]   pb-[10px]  font-Domine md:text-[1.75rem] tracking-[-0.025em]   text-[1.75rem]  font-[700] px-4">
        Empowering  <span className=" text-[#FC6142]">aspiring teenpreneurs</span> to build the <span className="text-[#2C04BD]">next big thing</span>
        </h3>
       </div>
        <div className="  pb-[2rem] mt-[20px] md:pb-[100px] flex justify-center  ">
          <div className="grid md:grid-cols-4  grid-cols-2 gap-[30px]  items-center justify-center mx-4 w-full max-w-[1280px]  ">
            {images.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex mt-[40px] h-full items-center justify-center"
                >
                  <div className=" items-center   max-w-full max-h-full flex justify-center  ">
                    <img src={item} alt="as" className="flex justify-center w-full h-full object-cover" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className=" bg-bluee ass   px-8    sm:pt-[60px] py-[30px]  sm:pb-[70px] flex items-center  justify-center flex-wrap">
        <p className="lg:text-[3.5rem] sm:text-[3.5rem] text-[1.75rem]   tracking-[-1.05px]  leading-[3.125rem] mt-4 mr-6 font-[700] font-Domine   as text-white text-center">
        Unleash your potential
        </p>
      </div>
      <div className="w-full h-full flex items-center justify-center md:p-[5rem] p-0 pt-[2rem] ">
        <div className="max-w-[1280px] w-full px-4 md:px-0 h-full ">
          <div className="w-full flex  ">
            <div className="md2:flex-[50%]   flex-[100%]">
              <h3 className="md2:text-[2.25rem] font-Domine text-[1.5rem] font-[500] md:pb-[2.25rem] pb-[1rem] ">
                Discover free resources
              </h3>
              <div className=" w-full md:w-full  resources md:flex grid grid-cols-1 resources   flex-wrap ">
                {resources.map((item, index) => {
                  return (
                    <>
                      <div key={index} className="mr-[1rem]">
                        <Chips2 title={item} />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            {/* <div className="hidden md2:block w-full">
              <img src="/images/landingPage/last.svg" alt="as" />
            </div> */}
          </div>
          {/* <Link
            href="#"
            className="text-bluee flex items-center text-[18px] font-[500]"
          >
            See them all
            <FiArrowRight className="ml-2" />
          </Link> */}
        </div>
      </div>
      <div className="pt-[3rem]  md:px-[5rem] px-4 flex justify-center  items-center">
        <div className="max-w-[1280px] w-full">
          <h3 className="text-[2.25rem] w-full text-start  font-[500]  px-2">
            Trending topics
          </h3>
          <div className="pt-[1rem] w-full   pb-[5rem]">
            <ul className="flex  md:flex-wrap   overflow-x-scroll overscroll-none no-scrollbar ">
              {search2.map((item, index) => {
                return (
                  <>
                    <li key={index} className="mx-2 overscroll-none">
                      <Chips3 title={item.title} followers={item.followers} />
                    </li>
                  </>
                );
              })}
            </ul>
            {/* <Link
              href="#"
              className="text-bluee flex items-center text-[19px]  font-[500] mt-1"
            >
              See what people are talking about
              <FiArrowRight className="ml-2" />
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
}
