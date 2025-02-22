import Link from 'next/link'
import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

function Chips2({title}) {
  return (
    <Link href="#" >
    <div className=' bg-white border overflow-hidden border-zinc-300 hover:border-zinc-700 hover:bg-zinc-100 rounded-[8px] p-[1rem] mb-[1rem]  flex items-center justify-between text-[1rem] w-full '>
       <p className='mx-1 text whitespace-nowrap w-full flex justify-between  font-[600] md:text-[16px] text-[1rem] font-Inter'>{title}</p><IoIosArrowForward className='text-[20px] font-[300]'/>
    </div>
    </Link>
  )
}

export default Chips2