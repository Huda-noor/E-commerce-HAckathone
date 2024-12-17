import Image from "next/image";
import React from "react";

interface TopPicksCardProps {
  img?: string;
  description?: string;
  price?: string;
  isSelected?: boolean; // Is the card selected?
  onSelect?: () => void; // Function to handle card selection
}

const TopPicksCard: React.FC<TopPicksCardProps> = ({
  img,
  description = "Default product description",
  price = "Rs. 25,000.00",
  isSelected = false,
  onSelect,
}) => {
  const defaultImg = "/default-image.jpg";

  return (
    <div
      onClick={onSelect}
      className={`border rounded-lg p-4 shadow-md cursor-pointer transition-transform duration-300 transform 
      ${isSelected ? "border-blue-500 shadow-xl scale-105" : "hover:scale-105 hover:shadow-lg"}`}
    >
      <Image
        src={img || defaultImg}
        alt={description}
        height={200}
        width={280}
        className="rounded-md"
      />
      <div className="mt-5 space-y-3 ">
        <p className="text-lg leading-snug text-gray-700">{description}</p>
        <h4 className="font-semibold text-2xl text-gray-900">{price}</h4>
      </div>
    </div>
  );
};

export default TopPicksCard;
