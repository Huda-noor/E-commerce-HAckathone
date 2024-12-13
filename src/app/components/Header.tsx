
import Link from "next/link";
import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaRegUserCircle, FaSearch } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";


const Header = () => {
  return (
    <div className="wrapper  flex justify-between px-16 py-5 bg-liteOrange">
      <div>
        <h1 className=" text-xl font-semibold ">E-Commers-Web</h1>
      </div>
      <div>
        <ul className=" flex gap-10">
          <li>
            <Link className=" text-base" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className=" text-base" href={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className=" text-base" href={"/shop"}>
              Shop
            </Link>
          </li>
          <li>
            <Link className=" text-base" href={"/contact"}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div className=" flex gap-5">
     <span  className='w-[28px] h-[28px]'><FaSearch/></span>
    <span  className='w-[32px] h-[32px]'><CiHeart/></span>
    <span  className='w-[32px] h-[32px]'><IoCartOutline /></span>
    <span  className='w-[32px] h-[32px]'><FaRegUserCircle/></span>
  </div>
    </div>
  );
};

export default Header;