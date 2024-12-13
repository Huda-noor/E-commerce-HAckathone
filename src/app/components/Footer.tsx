import React from 'react';
import { LuSendHorizontal } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="w-full h-[440px] mt-[1346px] bg-black flex  items-center justify-center gap-6">
  {/* Header Section */}
  <div className="text-center">
    <h2 className="text-[24px] font-inter font-bold text-[#FAFAFA] mb-2">
      Exclusive
    </h2>
    <h3 className="text-[20px] font-poppins font-medium text-[#FAFAFA] mb-2">
      Subscribe
    </h3>
    <p className="text-[16px] font-poppins font-normal text-[#FAFAFA]">
      Get 10% off your first order
    </p>
  </div>

  {/* Email Subscription Section */}
  <div className="flex gap-3 mt-4">
    <input
      type="email"
      placeholder="Enter your Email"
      className="w-[300px] h-[48px] bg-black text-[#FAFAFA] text-sm placeholder-[#FAFAFA] border border-[#FAFAFA] rounded-[4px] px-4 focus:outline-none"
    />
    <button className="h-[48px] w-[48px] bg-[#FAFAFA] text-black rounded-[4px] flex items-center justify-center hover:bg-gray-200">
      <LuSendHorizontal />
    </button>
  </div>


      <div className='flex flex-col font-poppins text-[#FAFAFA]  '>
        <h2 className='w-[81px] h-[28px]  text-[20px] font-[50] '>Support</h2>
        <p className='w-[175px] h-[48px] text-[16px] font-normal'>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
        <p className='w-[175px] h-[48px] text-[16px] font-normal '>exclusive@gmail.com</p>
        <p className='w-[175px] h-[48px] text-[16px] font-normal '>+88015-88888-9999</p>
        
      </div>
      <div className='flex flex-col font-poppins text-[#FAFAFA]  '>
      <h2 className='w-[85px] h-[28px]  text-[20px] font-[50] '>Account</h2>
      <p className='w-[94px] h-[24px] text-[16px] font-normal'>My Account</p>
      <p className='w-[123px] h-[24px] text-[16px] font-normal'>Login / Register</p>
      <p className='w-[35px] h-[24px] text-[16px] font-normal'>Wish List</p>
      <p className='w-[41px] h-[24px] text-[16px] font-normal'>Shop</p>


      </div>
      <div className='flex flex-col font-poppins text-[#FAFAFA]  '>
      <h2 className='w-[101px] h-[28px]  text-[20px] font-[50] '>Quick Link</h2>
      <p className='w-[109px] h-[24px] text-[16px] font-normal'>Privacy Policy</p>
      <p className='w-[105px] h-[24px] text-[16px] font-normal'>Terms Of Use</p>
      <p className='w-[32px] h-[24px] text-[16px] font-normal'>FAQs</p>
      <p className='w-[66px] h-[24px] text-[16px] font-normal'>Contact</p></div>


      <div className='flex flex-col font-poppins text-[#FAFAFA]  '>
      <h2 className='w-[148px] h-[28px]  text-[20px] font-[50] '>Download App</h2>
      <p className='w-[194px] opacity-[70%] h-[24px] text-[16px] font-normal'>Save $3 with App New User Only</p>

      </div>
    </div>
  )
}

export default Footer
