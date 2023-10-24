import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ image, heading, description, reverse }) => {
  const [isHovered, setHovered] = useState(false);
  const imageSide = reverse ? "order-2" : "order-1";
  const textSide = reverse ? "order-1" : "order-2";

  return (
    <div className="flex flex-wrap mb-8">
      <div
        className={`w-full md:w-1/2 relative overflow-hidden p-5 bg-slate-50 rounded-lg drop-shadow-xl ${imageSide} 
                    sm:w-full md:w-1/2 lg:w-1/2`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <img
          src={image}
          alt="Card"
          className={`w-full h-auto rounded-lg ${isHovered ? "blur" : ""}`}
        />
        {isHovered && (
          <div className="absolute inset-0 top-0 left-0 w-full h-full bg-black opacity-60 flex items-center justify-center transition-opacity ease-in-out duration-300">
            <Link
              to="/eventlist"
              className="px-8 py-2 border-y-4 border-blue-800 text-white"
            >
              Book Now
            </Link>
          </div>
        )}
      </div>
      <div className={`w-full md:w-1/2 flex items-center justify-center ${textSide} p-4 md:p-8`}>
        <div className="border-2 bg-white p-3 hover:drop-shadow-md">
          <h2 className="lg:text-3xl md:text-xl font-bold mb-4 text-gray-700">{heading}</h2>
          <div className="border-b-2 w-3/12 mb-4 border-blue-800"></div>
          <p className="text-gray-700 text-lg">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
