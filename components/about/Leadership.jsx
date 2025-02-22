import Link from "next/link";
import React from "react";
import { useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const items = [
  {
    id:1,
    img: "/images/about/leadership/1.png",
    name: "Fred Goff",
    title: "Chief Executive Officer",
  },
  {
    id:2,
    img: "/images/about/leadership/2.png",
    name: "Beth Clymer",
    title: "Chief Financial Officer",
  },
  {
    id:3,
    img: "/images/about/leadership/3.png",
    name: "Tony Deigh",
    title: "Chief Data Officer",
  },
  {
    id:4,
    // public/images/about/leadership/4.jpg
    img: "/images/about/leadership/4.jpg",
    name: "Paw Andersen",
    title: "Chief Technology Officer",
  },
  {
    id:5,
    img: "/images/about/leadership/5.jpg",
    name: "Hilary Dionne",
    title: "Chief of Staff",
  },
  {
    id:6,
    img: "/images/about/leadership/6.jpg",
    name: "Lauren Herman",
    title: "Chief People Officer",
  },
  {
    id:7,
    img: "/images/about/leadership/7.png",
    name: "Mike Griffin",
    title: "Chief Analyst & Acting Head",
  },
  {
    id:8,
    img: "/images/about/leadership/8.jpg",
    name: "Kathleen Patton",
    title: "General Counsel",
  },
  {
    id:9,
    img: "/images/about/leadership/9.png",
    name: "Brett Malone",
    title: "SVP, Jobcase.com Product",
  },
  {
    id:10,
    img: "/images/about/leadership/10.png",
    name: "Brian Hom",
    title: "SVP, Employer Product",
  },
  {
    id:11,
    img: "/images/about/leadership/11.jpg",
    name: "Mike Abram",
    title: "SVP, Head of Employer",
  },
  {
    id:12,
    img: "/images/about/leadership/12.png",
    name: "Zubin Nagarvala",
    title: "SVP, Head of Business Development",
  },
  {
    id:13,
    img: "/images/about/leadership/13.jpg",
    name: "Garrett Friedman",
    title: "SVP, Corporate Development",
  },
];

function Leadership() {
  const [showItems, setShowItems] = useState(3);

  const handleShowMore = () => {
    setShowItems((prevShowItems) => prevShowItems + 3);
  };
  return (
    <>
      <div className="md:grid grid-cols-3 hidden w-full h-full gap-1 ">
      {items.slice(0, showItems).map(item => (
       <div key={item.id} className="w-full  items-center   h-full flex justify-center py-[30px]">
       <div  className="border h-full w-fit border-[#e5e5e5] rounded-[8px] mt-0 pt-[8px] pb-[31px]">
            <span className="ml-[1rem] font-[600] font-Inter text-[#262626]">
                {item.name}
            </span>
            <p className=" whitespace-nowrap  mb-[8px] font-[400] text-[1rem] ml-[1rem] font-Inter text-[#595959]">{item.title}</p>
            <img
            src={item.img}
            className="h-[253px]"
            alt="as"
            />
            <Link
            href="#"
            className=" font-Founders ml-[1.5rem] font-[500] text-[19px] flex items-center text-[#2c04bd] pt-[8px]"
            >Read bio <FiArrowRight/></Link>
        </div>
       </div>
      ))}
      </div>
      <div className="w-full hidden md:flex h-full  justify-center pt-[30px]">
      {showItems < items.length && (
        <button onClick={handleShowMore} className=" font-Founders font-bold max-w-[209px] min-w-[209px] text-[19px] h-[50px] text-[#fff] bg-[#2c04bd] rounded-[8px]">
            See more of the team
        </button>
      )}
      </div>
      <div className="flex overflow-x-auto w-full h-full flex-nowrap md:hidden ">
      {items.map(item => (
      
       <div key={item.id}  className="border h-full w-full min-w-[258px] mx-4 border-[#e5e5e5] rounded-[8px] mt-0 pt-[8px] pb-[31px]">
            <span className="ml-[1rem] font-[600] font-Inter text-[#262626]">
                {item.name}
            </span>
            <p className=" whitespace-nowrap  mb-[8px] font-[400] text-[1rem] ml-[1rem] font-Inter text-[#595959]">{item.title}</p>
            <img
            src={item.img}
            className="h-[253px] w-full"
            alt="as"
            />
            <Link
            href="#"
            className=" font-Founders ml-[1.5rem] font-[500] text-[19px] flex items-center text-[#2c04bd] pt-[8px]"
            >Read bio <FiArrowRight/></Link>
       </div>
      ))}
      </div>
    </>
  );
}

export default Leadership;
