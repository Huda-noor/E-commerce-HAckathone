import React from 'react'
import Header from '../components/Nav'
import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../components/ContactForm'
import Features from '../components/Feature'

function Contact() {
  return (
    <div className='wrapper'>
       <Header />
      {/* Hero Section */}
      <div className="relative h-[316px] flex items-center justify-center bg-[#FAF4F4]">
        {/* Background Image */}
        <Image
          src="/shop-bg.jpg"
          layout="fill" // Makes the image cover the parent div
          objectFit="cover" // Ensures the image scales properly
          className="opacity-[50%]"
          alt="Shop Background"
        />

        {/* Centered Content */}
        <div className="absolute text-center font-poppins text-black">
           <div>
            <Image src="/bglogo.png" width={100} height={100} alt="Logo" className='ml-16' /></div>
              <h1 className="font-extrabold text-[50px] mb-4">Contact</h1>
              <Link href="/" className="flex ml-14">
            
                    Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>Contact

        
             
           
          </Link>
        </div>
      </div>
      <div>
        <ContactForm />
      </div>
      <div>
        <Features />
      </div>
    </div>
  )
}

export default Contact
