import React from 'react'

function Chips3({title,followers}) {
  return (
    <div className=' min-w-[193px] min-h-[76px] overscroll-none  mb-[2rem]  relative bg-white border border-zinc-300 hover:border-zinc-700 hover:bg-zinc-100 rounded-[8px] p-[1rem] text-[1rem]  '>
        <p className='font-[600] font-Domine '><span className='text-[18px] text-bluee mr-1'>#</span>{title}</p>
        <p className='text-[#595959] font-Inter text-[14px] font-[400] whitespace-nowrap'>{followers} followers</p>
    </div>
  )
}

export default Chips3