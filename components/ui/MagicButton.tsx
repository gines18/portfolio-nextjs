import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,

}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;

}) => {
  return (
    <button className="px-8 py-2 rounded-full relative text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600" onClick={handleClick}>
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
         <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
            px-7 text-sm font-medium gap-2`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
      </button>
  );
};

export default MagicButton;



{/* <button className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600" onClick={handleClick}>
        <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
         <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg
           bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2`}
      >
        {position === "left" && icon}
        {title}
        {position === "right" && icon}
      </span>
      </button>
  */}