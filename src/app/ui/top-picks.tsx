
import Image from "next/image";
import React from "react";

interface TopPicksCardProps {
  img?: string; // Optional prop for image
}

const TopPicksCard: React.FC<TopPicksCardProps> = ({ img }) => {
  const defaultImg = '/default-image.jpg'; // Replace with your actual default image path in the public folder

  return (
    <div>
      <Image
        src={img || defaultImg} // Use provided img or default image
        alt="Granite dining table with dining chair"
        height={200}
        width={280}
        className=""
      />
      <div className="mt-5 space-y-3">
        <p className="text-lg leading-none">Granite dining table with dining chair</p>
        <h4 className="font-semibold text-2xl">Rs. 25,000.00</h4>
      </div>
    </div>
  );
};

export default TopPicksCard;