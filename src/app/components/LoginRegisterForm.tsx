"use client"
import React, { useState } from "react";

const LoginRegisterForm = () => {
  const [formType, setFormType] = useState("login");

  return (
    <div className="wrapper min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white shadow-lg p-10 rounded-lg w-full max-w-4xl">
        {/* Login Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Log In</h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username or email address
              </label>
              <input
                type="email"
                id="login-email"
                placeholder="Enter your email"
                className="w-full  h-[75px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="login-password"
                placeholder="Enter your password"
                className="w-full  h-[75px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="remember-me"
                className="w-5 h-5 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
              />
              <label
                htmlFor="remember-me"
                className="ml-3 text-sm text-gray-700"
              >
                Remember me
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-black h-[64px] text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Log In
            </button>
            <div className="text-sm text-gray-600 mt-6 text-center">
              <a href="#" className="hover:underline">
                Lost Your Password?
              </a>
            </div>
          </form>
        </div>

        {/* Register Form */}
        <div>
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Register</h2>
          <form>
            <div className="mb-6">
              <label
                htmlFor="register-email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email address
              </label>
              <input
                type="email"
                id="register-email"
                placeholder="Enter your email"
                className="w-full  h-[75px] px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
            </div>
            <p className="text-sm text-gray-600 mb-8 leading-relaxed">
              A link to set a new password will be sent to your email address.
              Your personal data will be used to support your experience
              throughout this website, to manage access to your account, and for
              other purposes described in our{" "}
              <span className="font-semibold">privacy policy</span>.
            </p>
            <button
              type="submit"
              className="w-full h-[64px] bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;
