import Image from 'next/image'
import React from 'react'
import UnderlineButton from '../ui/underline-button'


function Insta() {
  return (
    <div className="wrapper relative h-[450px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/back.jpg"
        layout="fill" // This makes the image cover the parent div
        objectFit="cover" // Ensures the image scales properly
        className="opacity-15"
        alt="back"
      />
      
      {/* Centered Content */}
      <div className="absolute text-center font-poppins text-black">
        <h1 className="font-extrabold text-3xl md:text-5xl">Our Instagram</h1>
        <p className="mt-4 text-lg">Follow our store on Instagram</p>
        <UnderlineButton className="mt-6 absolute w-[255px] h-[64px] top-[4314] left-20 rounded-3xl shadow-slate-500 bg-[#FAF4F4]">Follow Us</UnderlineButton>
      </div>
    </div>
  );
}

export default Insta;
