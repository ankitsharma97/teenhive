import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState ,useEffect} from "react";
import { useRouter } from "next/router";
import Modalget from "./Modalget";
import Modallog from "./Modellog";

function Header() {
  const [isopen, setIsopen] = useState(false);
  const router = useRouter();
  const nav = [
    {
      name: "About us",
      link: "/about-us",
    },
    {
      name: "TeenHall",
      link: "/teenhall",
    },
    {
      name: "Teen Ambassadors",
      link: "/teen-ambassadors",
    },
    {
      name: "For Teenagers",
      link: "/for-teenagers",
    },
  ];

  const [model1, setModel1] = useState(false);
  const [model2, setModel2] = useState(false);

  useEffect(() => {
    if (isopen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    // Clean up the effect
    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isopen]);

  return (
    <>
      <div className="w-full h-[5.3125rem] z-50 top-0 border-[1px]  flex justify-center  bg-white ">
        <div className="w-[98%] flex items-center justify-between h-full">
          <div className=" sm:w-[15%] w-[25%]  h-full  flex   justify-start items-center ">
            
            {
              isopen ? <>
              <Link onClick={()=>{
              // setModel1(false)
              setIsopen(!isopen)
            }} href="/" className="">
              <Image
                src="https://ik.imagekit.io/nhuikqpll/teenhive_home/teenhive.svg"
                alt="logo"
                width={120}
                height={100}
                className="mr-4 ml-3"
              />
            </Link>
              </>:<>
              <Link onClick={()=>{
              // setModel1(false)
              // setIsopen(!isopen)
            }} href="/" className="">
              <Image
                src="https://ik.imagekit.io/nhuikqpll/teenhive_home/teenhive.svg"
                alt="logo"
                width={120}
                height={100}
                className="mr-4 ml-3"
              />
            </Link>
              </>
            }
          </div>
          <div className="w-[50%] h-full hidden    md:flex justify-between items-center font-[500]">
            {nav.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className={`relative h-[28px] px-[5px] text-base font-Inter mx-[5px] transition-all duration-200 ease-in-out text-[20px] font-[500] ${
                    router.pathname === item.link ? "text-black" : "text-black"
                  }`}
                >
                  {item.name}
                  {router.pathname === item.link && (
                    <span
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] mt-[15px] rounded-[1px] bg-[#FC6142]"
                      style={{ width: "20px" }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
          <div className="w-[25%] font-Inter  text-black  flex justify-evenly items-center ">
            <button
              onClick={() => {
                setModel1(!model1);
              }}
              className="w-[148px] hidden md:block h-[38px] text-[16px] font-[700] text-white rounded-[12px]  bg-[#fc6142] hover:bg-blue-700"
            >
              Get Early Acess
            </button>
            <button onClick={()=>{
              setModel2(!model2)
            }} className="text-[16px] font-[700]  hidden md:block">
              Log in
            </button>
            {/* <Link href="/employee" className="text-[16px] font-[700]  hidden md:block">
              Employers
            </Link> */}
            <div className="  text-black mr-4 block md:hidden">
              <button
                onClick={() => {
                  setIsopen(!isopen);
                }}
                className=" transition-all ease-in duration-500"
              >
                {isopen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6"
                  >
                    <path d="M3 12h18M3 6h18M3 18h18"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isopen && (
        <div className="w-full h-screen fixed  top-[10%] z-50  bg-white">
          <div
            className={`relative w-full h-full transition-transform duration-1000 ${
              isopen ? "slide-in" : "slide-out"
            } flex flex-col `}
          >
            {nav.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={item.link}
                  className="py-6 px-6  text-base font-[400] border-t-[1px] border-gray-500  transition-all duration-200 ease-in-out hover:bg-slate-100 hover:py-4   hover:rounded"
                  onClick={() => {
                    setIsopen(!isopen);
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
            <div
             
              className="py-6 px-6  text-base font-[400] border-y-[1px] border-gray-500  "
            >
              <button
                onClick={() => {
                  setIsopen(!isopen);
                  setModel1(!model1);
                }}
                className=" transition-all ease-in duration-500 bg-blue-600 text-white py-3 rounded-[5px] w-full"
              >
                Get Early Access
              </button>
             
            </div>
            <div
             
              className="py-6 px-6  text-base font-[400] border-b-[1px] border-gray-500  "
            >
              <button
                onClick={() => {
                  setIsopen(!isopen);
                  setModel2(!model2);
                }}
                className=" transition-all ease-in duration-500 bg-[#fc6142] text-white py-3 rounded-[5px] w-full"
              >
                Login
              </button>
             
            </div>
          </div>
        </div>
      )}
      {model1 && (
        <>
        <Modalget setModel={setModel1} Model={model1}/>
        </>
      )}
      {model2 && (
        <>
        <Modallog setModel={setModel2} Model={model2}/>
        </>
      )}
    </>
  );
}

export default Header;
