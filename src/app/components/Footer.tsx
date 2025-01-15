import React from 'react';
import { LuSendHorizontal } from "react-icons/lu";
import UnderlineButton from '../ui/underline-button';

const Footer = () => {
  return (
    // 
    <div className="wrapper bg-white font-poppins">
      {/* Upper Section */}
      <div className="w-full max-w-[1240px] mx-auto py-8 flex flex-col md:flex-row justify-between">
        {/* Address Section */}
        <div className="flex flex-col font-medium justify-center text-sm text-gray-400">
          <p>400 University Drive Suite 200</p>
          <p>Coral Gables,</p>
           <p>FL 33134 USA</p>
        </div>

        {/* Links Section */}
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-400 text-lg mb-2">Links</h3>
          <ul className="text-sm text-gray-700 space-y-8 mt-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Help Section */}
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-400 text-lg mb-2">Help</h3>
          <ul className="text-sm text-gray-700 space-y-8 mt-4">
            <li><a href="#" className="hover:underline">Payment Options</a></li>
            <li><a href="#" className="hover:underline">Returns</a></li>
            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="flex flex-col">
          <h3 className="font-medium text-gray-400 text-lg mb-2 ">Newsletter</h3>
          <p className="text-sm mb-2 mt-4">Enter Your Email Address</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="border border-gray-300 px-4 py-2  text-sm w-[200px]"
            />
            <UnderlineButton className='ml-5 text-sm'>Subscribe</UnderlineButton>
          </form>
        </div>
      </div>

      {/* Lower Section */}
      <div className="w-full py-4 bg-white text-left text-sm text-gray-600">
        <p>2022 Meubel House. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
