import React, { useEffect, useState } from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/react-splide/css";



const data = [
    {
        img:"/images/about/community/1.png",
        name:"Ajay Joshi",
        role:"Distinguished Engineer",
        address:"Cambridge, MA",
        firstJob:"Research Assistance"
    },
    {
        img:"/images/about/community/2.png",
        name:"Alysissa Neckorocuk",
        role:"VP,member+Engineering",
        address:"cammbridge,MA",
        firstJob:"Dishwasher"
    },
    {
        img:"/images/about/community/3.png",
        name:"Sam Harmon",
        role:"Sr. Manager, Growth Marketing",
        address:"San Diago, CA",
        firstJob:"Plant Nurse"
    },
    {
        img:"/images/about/community/4.jpg",
        name:"Mathew Ireland",
        role:"Creative Director",
        address:"Cambridge, CA",
        firstJob:"Tree Services Worker"
    },
    {
        img:"/images/about/community/5.png",
        name:"Alyssa MLclland",
        role:"Social Channel Manager",
        address:"Cambridge, CA",
        firstJob:"Ice Cream Scooper"
    }
]

function Community() {
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
                type: 'loop',
              perPage:page,
              perMove:1,
        pagination: false,
            }}
          >
            <div className="custom-wrapper ">
              <SplideTrack>
                {data.map((item, index) => {
                  return (
                    <SplideSlide key={index} >
                      <div className="bg-[#fff] relative border border-[#e5e5e5] rounded-[8px] py-[22px] px-[40px] max-w-[382px] w-full   md:ml-[24px] mx-14 ">
                      <div className="w-full h-full">
                        <img
                        src={item.img}
                        alt={item.name}
                        className="w-[100px] h-[100px] rounded-[50%]"
                        />
                       
                            <p className=" whitespace-nowrap font-[600] font-Inter overflow-hidden absolute left-[152px] top-[30px] ">{item.name}</p>
                            <p className="absolute left-[152px] top-[54px] text-[14px] font-[400] overflow-hidden text-[#595959]">
                            {item.role}<br/>
                            {item.address}<br/>
                            First job:{item.firstJob}
                            </p>
                       
                      </div>
                      </div>
                    </SplideSlide>
                  );
                })}
              </SplideTrack>

              <div className="splide__arrows hidden md:block" />
            </div>
          </Splide>
        </div>
      </div>
   </>
  )
}

export default Community