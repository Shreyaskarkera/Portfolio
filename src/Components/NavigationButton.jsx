import React from 'react'
import { FaArrowDown } from "react-icons/fa";
const NavigationButton = (props) => {
    return (
        <div className="flex flex-col items-center relative bottom-0 left-0 w-full z-50 ">
            {/* ABOUT Text */}
            <span className=" text-[var(--maintext-color)] text-md font-semibold mb-2 tracking-widest hover:text-[#FF5900] transition-colors duration-300 cursor-pointer">
                {props.name}
            </span>

            {/* Circle with arrow */}
            <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center animate-bounce cursor-pointer">
                <FaArrowDown className="text-white " />
            </div>
        </div>
    );
};


export default NavigationButton



{/* <div className="flex items-center justify-center gap-4">
  <div className="h-[1px] w-16 bg-white"></div>
  <span className="text-white text-sm tracking-widest font-semibold">ABOUT</span>
  <div className="h-[1px] w-16 bg-white"></div>
</div> */}
