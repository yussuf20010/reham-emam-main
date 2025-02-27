import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const slides = [
  {
    image: "/images/lobna.jpg",
    title: "Exclusive Women's Collection!",
    heading: "Elegant & Stylish Apparel",
    text: "Up to 50% Off on Trendy Outfits",
    linkText: "Shop Now",
  },
  {
    image: "/images/i2.jpg",
    title: "New Arrivals!",
    heading: "Chic & Comfortable Wear",
    text: "Discover the latest trends in women's fashion",
    linkText: "Explore Collection"
  },
  {
    image: "/images/i3.jpg",
    title: "Timeless Elegance",
    heading: "Luxury Women's Fashion",
    text: "Shop the finest styles for every occasion",
    linkText: "Shop Now"
  },
  {
    image: "/images/i4.jpg",
    title: "Modern Vibes",
    heading: "Trendy & Stylish Outfits",
    text: "Stay ahead with the latest fashion picks",
    linkText: "View Collection"
  },
  {
    image: "/images/i5.jpg",
    title: "Bold & Beautiful",
    heading: "Statement Pieces for Every Mood",
    text: "Express yourself with our unique designs",
    linkText: "Discover More"
  }

];

const BannerSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: true,
          pauseOnMouseEnter: true,
        }}
        modules={[Autoplay, Pagination]}
        className="home-slides"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="main-banner relative h-screen flex items-center justify-center overflow-hidden">
              <img
                src={slide.image}
                alt="banner image"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-lg flex justify-center items-center">
                <div className="container text-white text-center p-5 rounded-lg space-y-4">
                  <span className="block text-lg font-bold">{slide.title}</span>
                  <h1 className="text-4xl text-white font-bold">{slide.heading}</h1>
                  <p className="text-lg text-white">{slide.text}</p>
                  <Link href="/items" className="btn bg-purple-600 text-white rounded-3">
                    {slide.linkText}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default BannerSlider;