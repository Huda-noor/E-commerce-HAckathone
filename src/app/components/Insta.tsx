import Image from 'next/image'
import React from 'react'
import UnderlineButton from '../ui/underline-button'

function Insta() {
  return (
    <div className='wrapper h-[450px]  top-[4052px]'>
       <Image
       src="/back.jpg"
       height={450}
       width={1440} 
       className='opacity-[15%] mt-[16px]' 
       alt='back'/>
      <div className='flex items-center justify-between'>
         <h1 className='font-extrabold text-[50px]'>Instagram</h1>
         <p>Follow our store on Instagram</p>
         <UnderlineButton>Follow Us</UnderlineButton>
      </div>
    </div>
  )
}

export default Insta
