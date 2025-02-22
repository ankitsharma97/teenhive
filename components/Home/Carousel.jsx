import React, { useEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const testinomy = [
  {
    // img: "/images/landingPage/Christopher_Zettlemoyer.png",
    name: "Deepika",
    role: "10th class student",
    desc: "Highly recommended for all the ambitious teens interested in building a truly productive network with like-minded teens alongside learning new skills”",
  },
  {
    // img: "/images/landingPage/Edith_Graham.png",
    name: "Yashwanth",
    role: "9th class student",
    desc: "Great platforms for teens, not only to explore your interests but also to network and collaborate on impactful projects & interesting ideas",
  },
  {
    // img: "/images/landingPage/Arnie_Nelson.png",
    name: "Ayesha",
    role: "7th class student",
    desc: "It's an amazing platform for teenagers. I call all the teens to check out the platform and the ideas aimed at rewarding teenagers impactful experiences",
  },
];

function Carousel() {
  const [page, setPage] = useState(3);
  useEffect(() => {
    const handleResize = () => {
      // Adjust perPage based on screen size
      if (window.innerWidth < 768) {
        setPage(1);
      } else {
        setPage(3);
      }
    };

    // Set initial perPage value
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div className=" flex items-center justify-center  relative w-full  h-full">
        <div className=" container w-full h-full relative ">
          <Splide
            hasTrack={false}
            aria-label="..."
            options={{
              rewind: true,
              perPage: page,
            }}
          >
            <div className="custom-wrapper">
              <SplideTrack>
                {testinomy.map((item, index) => {
                  return (
                    <SplideSlide key={index}>
                      <div className="min-w-[380px] ml-10   py-[40px] px-[32px] flex flex-col justify-between mr-[1rem]">
                        <div className="max-w-[280px]  min-h-[180px]  mb-[2rem] ">
                          <p className="  font-cond whitespace-pre-wrap leading-[12px] inline-block text-bluee  text-[86px] font-bold transform translate-y-6">
                            “
                          </p>
                          <p className="text-[18px] leading-[1.85]  font-Inter  ">
                            {item.desc}
                          </p>
                        </div>
                        <div className="flex items-center ">
                          {/* <Image
                            src={item.img}
                            width={50}
                            height={50}
                            alt="as"
                            className="rounded-[50%] mr-5"
                          /> */}
                          <div>
                            <p className=" font-Inter font-[500] text-[19px] text-bluee">
                              {item.name}
                            </p>
                            <p className=" font-Inter font-[400] text-[14px] text-zinc-700">
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </SplideSlide>
                  );
                })}
              </SplideTrack>

              <div className="splide__arrows hidden" />
            </div>
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Carousel;
