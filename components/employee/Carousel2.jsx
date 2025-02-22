import React, { useEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";

const cardData2 = [
  {
    img: "/images/employee/kelly.png",
    desc: "We’ve held several virtual hiring events with Jobcase and they’ve been very successful. Having the capability for virtual events has been extremely helpful for efficiency and has really put candidates at ease. Jobcase is very responsive to our needs and great!at getting qualified candidates to show up.",
    name: "Tara Marcelle, VP Recruiting",
    company: "Kelly",
  },
  {
    img: "/images/employee/whole.png",
    desc: "Jobcase. There is no one like them! The urgency, the communication, the data, the scalability by brand and by location, the niche vs. the standard. They get it all. Jobcase understands our business and the deliverables of high volume hiring teams.",
    name: "Kat Barcelona, Senior Recruiter",
    company: "Whole Foods Market",
  },
  {
    img: "/images/employee/chews.png",
    desc: "obcase is a great partner in every sense of the word. Data driven. Passionate about results. Committed to client satisfaction. They were able to step right in, and help us not only meet, but exceed our hiring event goals.",
    name: "Colby Williamson, Director of Staffing",
    company: "Chewy.com",
  },
  {
    img: "/images/employee/integrity.png",
    desc: "Jobcase is a valuable partner in our candidate attraction strategy. They are able to deliver a large volume of candidates quickly.",
    name: "Todd Bavol, CEO",
    company: "Integrity Staffing Solutions",
  },
];

function Carousel2() {
  return (
    <>
      <div className=" flex items-center justify-center  relative w-full  h-full">
        <div className=" w-full h-full relative ">
        <Splide
            hasTrack={false}
            aria-label="..."
            options={{
              rewind: true,
              perPage: 1,
            }}
          >
            <div className="custom-wrapper">
            <SplideTrack>
                {
                    cardData2.map((item, index) => (
                        <SplideSlide key={index}>
                            <div className="bg-[#fff] border border-[#e5e5e5] rounded-[8px] py-[2rem] px-[1.5rem] h-[580px]">
                                <img
                                src={item.img}
                                alt="/"
                                />
                                <p className=" font-Inter font-[400] text-[#4d4d4d] text-[1.25rem]  m-0 max-w-[332px] w-full leading-[30px]">{item.desc}</p>
                                <p className=" font-Inter mt-4  nth-child(4: pt-4) text-[1rem] text-[#595959] font-[600]">{item.name}</p>
                                <p className=" font-Inter text-[1rem] text-[#595959] font-[600]">{item.company}</p>
                            </div>
                        </SplideSlide>
                    ),
                    )}
            </SplideTrack>
            <div className="splide__arrows hidden" />
            </div>
          </Splide>
        </div>
      </div>
    </>
  );
}

export default Carousel2;
