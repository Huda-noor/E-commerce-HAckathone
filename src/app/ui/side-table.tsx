
import Image from "next/image";
import React from "react";
import UnderlineButton from "./underline-button";

const SideTableCard = ({ img = "/default-image.jpg", title = "Default Title", btnName = "Default Button" }) => {
  return (
    <div >
      <Image
        src={img} 
        height={1055}
        width={1585}
        alt="side-table"
        className="ml-5"
      />
      <h3 className="text-2xl mt-8">{title}</h3>
      <div className="mt-2">
        <UnderlineButton>{btnName}</UnderlineButton>
      </div>
    </div>
  );
};

export default SideTableCard;
