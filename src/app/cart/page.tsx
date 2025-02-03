import React from 'react';
import Header from '../components/Nav';
import Image from 'next/image';
import Link from 'next/link';
import Features from '../components/Feature';
import CartItem from '../components/CartFill';

function Cart() {
  return (
    <div className="wrapper">
      <Header />
      {/* Hero Section */}
      <div className="relative h-[316px] flex items-center justify-center bg-[#FAF4F4]">
        {/* Background Image */}
        <Image
          src="/shop-bg.jpg"
          layout="fill"
          objectFit="cover"
          className="opacity-[50%]"
          alt="Background"
        />
        {/* Centered Content */}
        <div className="absolute text-center font-poppins text-black">
          <div>
            <Image src="/bglogo.png" width={100} height={100} alt="Logo" className="ml-16" />
          </div>
          <h1 className="font-extrabold text-[50px] mb-4">Cart</h1>
          <Link href="/" legacyBehavior>
            <a className="flex ml-14">
              Home
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
              Cart
            </a>
          </Link>
        </div>
      </div>
      <div>
        <CartItem />
      </div>
      <Features />
    </div>
  );
}

export default Cart;
