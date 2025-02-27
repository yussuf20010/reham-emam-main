import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const ProductImage = ({ images }) => {
  return (
    <>
      <Swiper
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto-slide enabled
        loop={true} // Infinite loop
        modules={[Navigation, Autoplay]}
        className="product-img-slider my-6"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] max-w-4xl rounded-md ">
              <Zoom>
                <img
                  src={`https://e.asm-system.com/storage/${image.image_path}`}
                  className="w-full h-full object-cover shadow-md"
                  alt="Product"
                />
              </Zoom>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductImage;
