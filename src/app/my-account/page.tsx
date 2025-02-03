import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Header from '../components/Nav'
import Features from '../components/Feature'
import LoginRegisterForm from '../components/LoginRegisterForm'

function Account() {
  return (
    <div className='wrapper'>
        <Header />
      <div className="relative h-[316px] flex items-center justify-center bg-[#FAF4F4]">
        {/* Background Image */}
        <Image
          src="/shop-bg.jpg"
          layout="fill" // Makes the image cover the parent div
          objectFit="cover" // Ensures the image scales properly
          className="opacity-[50%]"
          alt="Account Background"
        />

        {/* Centered Content */}
        <div className="absolute text-center font-poppins text-black">
            <div><Image src="/bglogo.png" width={100} height={100} alt="Logo" className='ml-16' /></div>
          <h1 className="font-extrabold text-3xl md:text-5xl mb-4">My Account</h1>
          <Link href="/" className="flex ml-14">
            
            Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
         <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
           </svg>My Account
           
          </Link>
        </div>
    
    </div>
    <div>
        <LoginRegisterForm />
    </div>
    <div className="mt-11">
          <Features />
        </div>
    </div>
  )
}

export default Account
