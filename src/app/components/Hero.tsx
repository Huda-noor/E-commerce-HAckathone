import Image from "next/image";
import React from "react";
import UnderlineButton from "../ui/underline-button";


const HeroSection = () => {
  return (
    <div className=" wrapper flex  bg-liteOrange  items-center w-full  px-16 py-16">
      <div className=" w-[50%] ">
        <h1 className=" text-[64px] font-medium  leading-none ">
          Rocket single <br /> seater
        </h1>
        <div className="  mt-7">
          <UnderlineButton href="/shop">Shop Now</UnderlineButton>
        </div>
      </div>
      <div className=" w-[50%]  flex justify-center items-center">
        <Image
          src={"/1..png"}
          height={200}
          width={440}
          className=""
          alt="hero"
        />
      </div>
    </div>
  );
};

export default HeroSection;