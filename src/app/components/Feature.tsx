import React from "react";

const Features = () => {
  const features = [
    {
      title: "Free Delivery",
      description: "For all orders over $50, consectetur adipim scing elit.",
    },
    {
      title: "90 Days Return",
      description: "If goods have problems, consectetur adipim scing elit.",
    },
    {
      title: "Secure Payment",
      description: "100% secure payment, consectetur adipim scing elit.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-6 bg-[#FAF4F4] p-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="border-2 border-[#CDE3FF] rounded-md p-4 w-[376px] h-[108px] flex flex-col justify-center hover:shadow-lg transition-shadow duration-300"
        >
          {/* Title */}
          <h3 className="text-lg font-semibold mb-2 text-black">
            {feature.title}
          </h3>
          {/* Description */}
          <p className="text-gray-500 text-sm leading-snug">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
