import React from "react";

// const UnderlineButton = ({ className, children, ...props }) => {
//   return (
//     <div className="border-b-2 pb-1 border-black w-fit" {...props}>
//       <button className={`text-[18px] ${className}`}>{children}</button>
//     </div>
//   );
// };

const UnderlineButton = ({ className = "", children = "Default Text", ...props }) => {
    return (
      <div className="border-b-2 pb-1 border-black w-fit" {...props}>
        <button className={`text-[18px] ${className}`}>{children}</button>
      </div>
    );
  };
  
export default UnderlineButton;