// pages/contact.js
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6 py-8">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Get In Touch With Us
        </h1>
        <p className="text-gray-500 ml-32 mr-32">
          For more information about our products & services, please feel free
          to drop us an email. Our staff is always here to help you out. Do not
          hesitate!
        </p>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-6xl w-full bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side */}
        <div className="w-full ml-6 mt-10 space-y-16 md:w-1/2 bg-gray-50 p-8">
          <div className="">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              📍 Address
            </h3>
            <p className="text-gray-600">
              236 5th SE Avenue, New York NY10000, United States
            </p>
          </div>
          <div className="">
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              📞 Phone
            </h3>
            <p className="text-gray-600">Mobile: (+84) 546-6789</p>
            <p className="text-gray-600">Hotline: (+84) 456-6789</p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
              🕒 Working Time
            </h3>
            <p className="text-gray-600">Monday-Friday: 9:00 - 22:00</p>
            <p className="text-gray-600">Saturday-Sunday: 9:00 - 21:00</p>
          </div>
        </div>

        {/* Right Side (Form) */}
        <div className="w-full mr-14 md:w-1/2 p-8">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full h-[75px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full h-[75px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Subject */}
            <div>
              <label
                htmlFor="subject"
                className="block text-gray-700 font-medium mb-2"
              >
                Subject (Optional)
              </label>
              <input
                id="subject"
                type="text"
                placeholder="Enter subject"
                className="w-full h-[75px] px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Write your message here..."
                className="w-full  px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500 resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-[237px] h-[48px] px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-full hover:bg-gray-100 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
