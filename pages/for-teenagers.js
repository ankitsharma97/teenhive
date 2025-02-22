import Card3 from "@/components/employee/Card3";
import Card4 from "@/components/employee/Card4";
import Carousel2 from "@/components/employee/Carousel2";
import Link from "next/link";
import React from "react";

const stroke = [
  {
    number: "100+",
    desc: "ambitious teens",
    desc2: "",
  },
  {
    number: "$100K+",
    desc: "scholarships & fellowships",
    desc2: "",
  },
  {
    number: "3",
    desc: "revolutionary ideas for teens",
   
  },
];

const cardData = [
  {
  
    title: "Insights & Success Stories",
    desc: "Inspiring & Motivating teens by showcasing success stories of young achievers at an early age.",
  },
  {
   
    title: "Personal branding support",
    desc: "Offering resources and guidance on personal branding.",
  },
  {
   
    title: "Internship & Volunteering Opportunities",
    desc: "Collaborating with non-profits & startups to provide exclusive opportunities for teenagers.",
  },
  {
    
    title: "Scholarships and Fellowships",
    desc: "Introducing scholarships, grants, and financial aid opportunities specifically tailored to teenagers.",
  },
];

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

function Employee() {
  return (
    <>
      <div className="w-full  h-full">
        <img
          src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/Group%2027-min.png"
          alt="Picture of the author"
        />
        <div className="w-full h-full flex justify-center py-[20px] ">
          <div className="max-w-[980px] w-full h-full">
            <h1 className=" text-[2.5rem] tracking-[-0.025em] pt-10 font-[700] font-Domine text-bluee w-full text-center ">
              High school is just the beginning
            </h1>
            <div className="w-full h-full flex justify-center mt-[10px] ">
              <p className="text-center md:text-[1.25rem] tracking-[-0.015em] w-full sm:w-[70%] text-[1rem] font-Inter leading-[1.75]  text-[#595959]">
                Say goodbye to the days of feeling limited by your high school
                walls – embrace the future of networking on this new LinkedIn
                designed exclusively for high school students and teenagers of
                new India
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#F4F4F4] w-full mt-14 md:py-[5rem] py-[2.5rem]  flex justify-center items-center overflow-hidden  lg:px-[5.625rem] px-[1rem]">
          <div className="  w-full  grid md:grid-cols-3 grid-cols-1 gap-5 ">
            {stroke.map((item, index) => {
              return (
                <>
                  <div key={index} className="">
                    <p className="md:text-[2.25rem] font-Domine text-[2rem] font-[500] text-bluee text-center">
                      {item.number}
                    </p>
                    <p className="text-[#595959] font-Inter font-[400] text-[1rem] text-center">
                      {item.desc}
                    </p>
                    <p className="mt-3 text-[8px] font-Inter md:pb-5 w-full text-center text-[#595959] ">
                      {item.desc2}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
        {/*  carding start */}
        <div className="w-full h-full flex items-center justify-center">
          <div className="max-w-[1280px] md:pt-[40px] md:px-[40px] pt-[1rem] px-[1rem] pb-0 mx-auto   w-full h-full">
            <div className="flex justify-between  md:flex-row flex-col-reverse  gap-[20px] sm:gap-[5px] mx-auto my-0 max-w-[1247px] w-full">
              <div className="sm:max-w-[60%] flex flex-col   w-full h-full">
                <h2 className="mt-[2rem] mb-[1.5rem] md:max-w-[565px]  text-[#2C04BD] max-w-full w-full md:text-[2.5rem]    tracking-[-0.7px] text-[32px]  font-[700] font-Domine">
                  Where <span className="text-[#FC6243]">networking</span> meets{" "}
                  <span className="text-[#FC6243]">teenage spirit</span>!
                </h2>
                <p className=" md:max-w-[546px] max-w-full leading-[1.85] tracking-[-0.015em]  font-Inter font-[400] text-[1.125rem] text-[#262626]  m-0 ">
                  By leveraging the power of networking, Teencept aims to create
                  a vibrant community where high school students can foster
                  personal and professional growth, explore new opportunities,
                  and pave their path towards success in the new era of India.
                  With the aim of empowering the next generation, Teencept acts
                  as a bridge between ambition and success. Embracing the spirit
                  of new India, this platform is a testament to the
                  transformative power of networking and the limitless potential
                  of young minds.
                </p>
              </div>
              <div className=" w-full  flex  pt-8 pr-[30px] md:pt-0">
                <img
                  
                  src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/292424085_626920661703109_5738193414187707202_n%201-min.png"
                  alt="hero"
                  className=" h-full w-full md:w-full rounded-[20px] object-cover"
                />
              </div>
            </div>
            {/* second  */}
            <div className="flex   md:flex-row-reverse flex-col-reverse mx-auto h-full sm:gap-[60px] gap-[20px]  max-w-[1247px] w-full pt-[40px] md:pt-[80px]">
              <div className="sm:max-w-[60%] h-full  sm:h-[570px]  w-full  flex justify-center items-center">
                <div className="  w-fit   ">
                  <h2 className="mt-[2rem] mb-[1.5rem] md:max-w-[565px]  text-[#2C04BD] max-w-full w-full md:text-[2.5rem]   pl-[12px] tracking-[-0.7px] text-[32px]  font-[700] font-Domine">
                  Empowering the next generation of achievers
                    !
                  </h2>
                  <p className="  md:max-w-[546px] max-w-full leading-[1.85] tracking-[-0.015em]  font-Inter font-[400] text-[1.125rem] text-[#262626]  m-0 ">
                    As the perfect blend of LinkedIn and the vibrant spirit of
                    teenagers, Teencept offers a unique space for teens to
                    connect, collaborate, and blossom. Packed with exciting
                    volunteering opportunities and interactive workshops, this
                    innovative platform not only broadens horizons but also
                    empowers young minds to make a meaningful impact in their
                    communities.
                  </p>
                </div>
              </div>
              <div className="  w-full flex justify-center pt-8 md:pt-0">
                <img
                 src="https://ik.imagekit.io/nhuikqpll/teenhive_teenhall/363340344_673775471462543_4116554646052709963_n-min.jpg"
                  alt="hero"
                  className="w-full rounded-[20px]  object-cover md:w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/*  card end */}
        <div className="w-full h-full flex justify-center ">
          <div className="w-full max-w-[1440px]  h-full md:pt-[160px] pt-[80px]  md:px-[40px] px-4 ">
            <h2 className="md:text-[3rem]  text-[2.125rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Domine w-full ">
              How we connect you with workers
            </h2>
            <div className="w-full h-full flex justify-center max-w-[1130px] mx-auto my-0 mb-[120px]">
              <div className="w-full  grid sm:grid-cols-2   grid-cols-1 ">
                {cardData.map((item, index) => {
                  return (
                    <>
                      <div className="w-full  flex justify-center h-full ">
                        <Card3
                          key={index}
                          title={item.title}
                          desc={item.desc}
                          img={item.img}
                        />
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className=" w-full h-full  ">
          <p className="md:text-[2.25rem] pb-[2.5rem] text-[2rem] lg:leading-[3rem] leading-[2rem] font-[500] text-center font-Domine w-full">
            Tap into the power of the Jobcase community
          </p>
          <div className="w-full h-full flex justify-center items-center pb-20">
            <Link
              href="#"
              className="py-[12px] mx-4 px-[40px] font-bold flex items-center justify-center bg-[#fc6142] h-[50px] md:w-auto w-full rounded-[8px] text-white font-500"
            >
              Contact us
            </Link>
          </div>
        </div>
        <div className="md:py-[5rem] py-[2.5rem] md:px-[3.75rem] px-[1rem] bg-[#f4f4f4] flex justify-center">
          <div className="max-w-[1440px] w-full h-full p-0">
            <h2 className="mb-[2rem]  font-Domine md:text-[36px] text-[28px] font-[500]">
              What our clients are saying:
            </h2>
            <div className=" hidden md:grid  grid-cols-2 gap-10">
              {cardData2.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="w-full h-full flex justify-center"
                  >
                    <Card4
                      name={item.name}
                      img={item.img}
                      desc={item.desc}
                      company={item.company}
                    />
                  </div>
                );
              })}
            </div>
            <div className="w-full h-full block md:hidden">
              <Carousel2 />
            </div>
            <div className="w-full mt-10 md:mt-16">
              <p className="text-center font-Inter text-[1rem] font-[400]">
                “The four current Workday Venture partners are some of the
                strongest recruiting technologies in the game right now.”
                <br />
                <strong className="font-[600] font-Inter text-[1rem] text-center">
                  – Tim Sackett
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Employee;
