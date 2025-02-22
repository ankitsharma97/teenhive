import React from 'react'


const cardData2 = 
  {
    img:"/images/employee/kelly.png",
    desc:"We’ve held several virtual hiring events with Jobcase and they’ve been very successful. Having the capability for virtual events has been extremely helpful for efficiency and has really put candidates at ease. Jobcase is very responsive to our needs and great!at getting qualified candidates to show up.",
    name:"Tara Marcelle, VP Recruiting",
    company:"Kelly",
  }



function Card4({img,desc,name,company}) {
  return (
   <div className='border border-[#e5e5e5] bg-[#fff] rounded-[8px] py-[1.5rem] px-[2.5rem] min-h-[620px] max-w-[620px]'>
    <div className='w-full h-fit'>
        <img src={img}
        alt={name}
        className="w-full"
        />
    </div>
    <div>
    <p className='max-w-[540px] text-[1.25rem] leading-[30px] font-Inter text-[#595959] text-left font-[400]'>&quot;{desc}&quot;</p>
    <p className='mt-[28px] text-[1rem] font-[600] text-[#262626]  font-Inter'>{name}</p>
    <p className=' text-[1rem] font-[600] text-[#262626]  font-Inter'>{company}</p>
    </div>
   </div>
  )
}

export default Card4