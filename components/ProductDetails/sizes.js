"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const SizeSelector = ({ availableSizes, selectedSize, setSelectedSize }) => {
  return (
    <div className="mt-6">
      <h4 className="text-lg font-semibold text-gray-700 mb-2">Select Size:</h4>

      {/* Gradient Fade Effect on Left & Right */}
      

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        grabCursor={true} // Show grab cursor for better UX
        freeMode={true} // Allow free movement
        className="mt-2 relative"
      >
        <div className="absolute top-0 left-0 w-10 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
        <div className="absolute top-0 right-0 w-10 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        {availableSizes.map((size) => (
          <SwiperSlide key={size} className="w-auto">
            <div
              className={`px-5 py-2 border rounded-full cursor-pointer text-sm text-center transition-all duration-300
                ${selectedSize === size ? "bg-purple-600 text-white" : "bg-gray-100 hover:bg-gray-200"}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SizeSelector;
