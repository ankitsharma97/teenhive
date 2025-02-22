import React from 'react'


    function Card ({data}){
    return(
        <div className='sm:w-[435px] w-full  mx-[33px] sm:my-[25px] my-[15px]  bg-[#fff] py-[31px] px-[46px] rounded-[20px]'>
        <p className=' text-[#2C04BD] text-center font-Domine text-[2rem] leading-[1] sm:text-[2.5rem] font-[700] tracking-[-0.4px]'>{data.number}</p>
        <p className=' mt-[14px] text-[#000]  text-center text-[14px] whitespace-nowrap sm:text-[18px] tracking-[-0.18px]  font-[400]  font-Inter'>{data.desc}</p>
        </div>
    )
}

export default Card