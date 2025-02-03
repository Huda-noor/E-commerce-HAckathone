
import React from "react";
import { IoMdTime } from "react-icons/io";
import { CiCalendar } from "react-icons/ci";
import Image from "next/image";
import UnderlineButton from "./underline-button";
import Link from "next/link";

const BlogCard = ({ img = "/default-image.jpg", title = "Default Title", btnName = "Default Button" }) => {
  return (
    <div>
      <Image
        src={img} 
        height={555}
        width={339}
        alt="blog"
        className="ml-5 rounded-lg"
      />
      <h3 className="text-2xl mt-8">{title}</h3>
      <div className="mt-2">
        <Link href="/blog">
        <UnderlineButton>{btnName}</UnderlineButton>
        </Link>
      </div>
      <div className="flex items-center space-x-4 mt-2">
        <div className="flex items-center space-x-1">
          <IoMdTime />
          <span>5 min</span>
        </div>
        <div className="flex items-center space-x-1">
          <CiCalendar />
          <span>12 Oct 2022</span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
