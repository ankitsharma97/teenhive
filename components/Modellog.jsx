import React, { useEffect, useState } from 'react'

function Modallog({setModel,Model}) {

  const [isopen ,setIsopen] = useState(Model)

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
        <div className="w-full h-screen fixed  top-0 z-30 ">
          <div className=" w-full fixed top-0 h-screen bg-black z-40 opacity-70" />
          <div className="fixed top-0 w-full h-full z-50 flex items-center justify-center">
            <div className="sm:w-[476px] w-full mx-[20px]  h-[416px]  bg-white rounded-[20px] flex flex-col  items-center">
            <div className="w-full pr-[20px] pt-[20px] flex justify-end items-center">
              <div className=" w-[30px] h-[30px]  rounded-[50%] flex items-center justify-center bg-gray-700">
                <button
                  onClick={() => {
                    setModel(!Model);
                  }}
                  className="w-[20px] h-[20px] flex justify-center items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
              <div className=" w-full h-full mt-[40px] px-[40px] sm:px-[4rem]">
                <p className=" font-Domine tracking-[-0.015em]  text-center font-bold  text-[1.5rem]">
                  Login
                </p>
                <div className="mt-[2rem] mb-[1rem] w-full font-Inter text-center">
                  Enter your registered email
                </div>
                <input
                  type="email"
                  className="py-[17px] px-[18px] rounded-[20px] w-full bg-[#2c2c2d0f]"
                  placeholder="example@email.com"
                />
                <div className="mt-[2rem] !text-[0.75rem] font-Inter text-center opacity-0">
                  next otp
                </div>
                <button className=" rounded-[20px] bg-[#4834d4] font-Domine font-bold opacity-70  text-[#fff] py-[16px] px-[54px] text-[18px] w-full h-[56px]">
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Modallog