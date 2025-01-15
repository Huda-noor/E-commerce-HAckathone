import Image from 'next/image'
import React from 'react'
import UnderlineButton from '../ui/underline-button'

function Hot() {
  return (
    <div className='wrapper flex items-center w-full bg-[#FFF9E5] px-4 md:px-16 py-16 justify-between'>
      <div>
      <Image
          src={"/8..png"}
          height={400}
          width={800}
          className=""
          alt="Hot-sale"
        />
      </div>
      <div>
        <div className='w-[50%]'>
        <h3 className='text-xl font-medium leading-[36px] text-left' >New Arrivals</h3>
        <h1 className='text-4xl leading-[72px] font-bold text-left'>Asgaard Sofa</h1>
        </div>
        <div className='w-[220px] h-[45px] border border-black pl-9'>
         <UnderlineButton className='absolute w-[106px] h-[30px] pl-5 pt-3 text-base font-normal leading-[30px]'>Order Now</UnderlineButton>
      </div>
      </div>
    
    </div>
  )
}

export default Hot
