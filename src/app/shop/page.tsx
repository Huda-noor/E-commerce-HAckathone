"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import ShopToolbar from "../ui/Shoptool";
import ShopProduct from "../components/Shop-product";
import Features from "../components/Feature";
import Header from "../components/Nav";




function Shop() {
  return (
    <div className="wrapper">
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
              <h1 className="font-extrabold text-[50px] mb-4">Shop</h1>
              <Link href="/" className="flex ml-14">
            
                    Home <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg> Shop

        
             
           
          </Link>
        </div>
      </div>

      {/* Toolbar Section */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-screen-xl mx-auto px-6">
          <ShopToolbar totalResults={32} />
        </div>
      </div>

      {/* Product Section */}
      <div className="max-w-screen-xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
         
        </div>
        <div className="mt-5 mb-5"> <ShopProduct /> </div>
        <div className="mt-11">
          <Features />
        </div>
      </div>
    </div>
  );
}

export default Shop;
