import React from "react";

function TeenAmbassadors() {
  return (
    <>
      <div className="h-[600px]  w-full max-w-[1280px] mx-auto  flex items-center justify-center">
        <div className="  flex flex-col  items-center">
          <p className=" sm:text-[2.5rem] text-[2.25rem]  w-[90%] sm:w-full font-Domine text-center text-[#4834D4] font-[700] tracking-[-1.2px]">
            <span className="text-[#FC6142]">Empower Teens,</span> Shape the
            future
          </p>
          <p className=" sm:mt-[23px] mt-[30px] text-[#595959] w-full px-[30px] sm:w-[58%] font-Inter font-[400] leading-[1.75] tracking-[-0.015em] text-[18px] sm:text-[20px]">
            Unleash your potential and join our elite force of Teen Ambassadors,
            working together to create lasting change for new age Indian teens.
            Are you ready to change your life, and the lives of other ambitious
            teens?
          </p>
          <button className=" mt-[46px] bg-[#FC6142] text-white font-Inter font-[500] text-[20px]  px-[40px] h-[50px] max-w-[232px] rounded-[10px]">
            Apply Now
          </button>
        </div>
      </div>
      <div className=" bg-[#F4F4F4] py-[50px]  sm:py-[100px]">
        <div className=" max-w-[1280px] mx-auto">
          <div className=" text-[#2C04BD] w-full text-center font-Domine text-[36px]  font-[700] tracking-[-1.08px]">
            Join the Impact
          </div>
          <div className="mt-[50px]  px-[30px] sm:px-0 flex flex-col items-center">
            <div className=" text-[#595959] font-Inter text-[18px] w-full sm:w-[56%] font-[400] leading-[1.75] tracking-[-0.015em]">
              Unleash your inner power and help us change the lives of new age
              Indian teens. Are you up for the challenge?
            </div>
            <div className=" text-[#595959] sm:mt-[25px] mt-[20px] font-Inter text-[18px] sm:w-[56%] w-full font-[400] leading-[1.75] tracking-[-0.015em]">
              As a TeenAmbassador, you’ll be the driving force behind our
              groundbreaking mission. Share your voice, spread the word, and
              let’s create ripples of change together!
            </div>
            <div className=" text-[#595959] sm:mt-[25px] mt-[20px] font-Inter text-[18px] sm:w-[56%] w-full font-[400] leading-[1.75] tracking-[-0.015em]">
              We’re searching for passionate, dedicated, and tenacious
              individuals – and if you’re reading this, you’re likely the
              perfect fit. Don’t hesitate, join now!{" "}
            </div>
          </div>
        </div>
      </div>
      {/*  third section  */}
      <div className=" sm:py-[100px] py-[50px] max-w-[1280px] w-full mx-auto px-[30px] sm:px-[145px]">
        {/* first carding */}
        <div className=" flex flex-col sm:flex-row  sm:gap-[100px] gap-[40px]">
          <div className=" w-[300px] h-[440px]">
            <img
              src="/images/ambassdor/inspire.svg"
              alt="as"
              className=" object-cover h-full w-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className=" text-[#2C04BD] font-Domine text-[1.85rem] sm:text-[2.25rem] w-full sm:w-[90%] font-[700]  tracking-[-1.08px]">
              Unleash your potential, shape the future
            </p>
            <div className=" sm:mt-[30px] mt-[10px] text-[#595959]  max-w-[550px] w-full text-[18px]  sm:text-[20px]  font-Inter font-[400] leading-[1.75] tracking-[-0.015em]">
              Become a Teen Ambassador and help us achieve our ambitious goal of
              impacting teens of new age India. Join a community of passionate
              young leaders, eager to make a difference
            </div>
          </div>
        </div>
        {/* second carding */}
        <div className=" flex flex-col sm:flex-row-reverse sm:gap-[100px] gap-[40px]  mt-[70px] sm:mt-[35px]">
          <div className=" w-[300px] h-[440px]">
            <img
              src="/images/ambassdor/unleash.svg"
              alt="as"
              className=" object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <p className=" text-[#2C04BD] font-Domine text-[1.85rem] sm:text-[2.25rem] w-full font-[700] tracking-[-1.08px]">
              Inspire teenagers, Ignite change
            </p>
            <div className=" mt-[30px] text-[#595959]  max-w-[550px] w-full  text-[18px] sm:text-[20px]  font-Inter font-[400] leading-[1.75] tracking-[-0.015em]">
              Empower your fellow teens to believe in their dreams and pursue
              their passions, creating a ripple effect of positive change across
              the world
            </div>
          </div>
        </div>
        <div className="sm:mt-[120px]  mt-[60px] mx-auto max-w-[1280px]">
          <div className=" text-[#2C04BD] text-[36px] text-center font-Domine font-[700] tracking-[-1.08px]">What’s next?</div>
          <div className=" w-full text-center flex flex-col items-center justify-center mt-[35px]">
            <div className="text-[#595959] max-w-full   sm:max-w-[750px] w-full text-[18px]  sm:text-[20px]  font-Inter font-[400] leading-[1.75] tracking-[-0.015em]">
            Ready to embark on this epic journey? Click the ‘Apply Now’ button, and
commence your transformation into a Teen Ambassador. You won’t look back!
            </div>
            <button className=" mt-[44px] bg-[#FC6142] text-white font-Inter font-[500] text-[20px]  px-[40px] h-[50px] max-w-[232px] rounded-[10px]">
            Apply Now
          </button>
          </div>
          
        </div>
      </div>
    </>
  );
}

export default TeenAmbassadors;
