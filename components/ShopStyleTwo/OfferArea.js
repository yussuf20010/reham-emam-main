import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

const OfferArea = () => {
  return (
    <>
      <div className="offer-area ptb-60">
        <div className="container">
          <div className="section-title">
            <h2>
              <span className="dot"></span> Alow your style to match your
              ambition!
            </h2>
          </div>

          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              576: {
                slidesPerView: 2, 
              },
              1200: {
                slidesPerView: 4, 
              },
            }}
            modules={[Pagination]}
            className="offer-slides"
          >
            <SwiperSlide>
              <div className="single-offer-box">
                <img src="/images/offer-img1.jpg" alt="image" className="w-100" />

                <div className="offer-content">
                  <h3>T-Shirts</h3>
                  <span>65 Products</span>
                </div>

                <Link href="#">
                   
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-offer-box">
                <img src="/images/offer-img2.jpg" alt="image" className="w-100" />

                <div className="offer-content">
                  <h3>Accessories</h3>
                  <span>155 Products</span>
                </div>

                <Link href="#">
                
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-offer-box">
                <img src="/images/offer-img3.jpg" alt="image" className="w-100" />

                <div className="offer-content">
                  <h3>Footwaer</h3>
                  <span>175 Products</span>
                </div>

                <Link href="#">
               
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-offer-box">
                <img src="/images/offer-img4.jpg" alt="image" className="w-100" />

                <div className="offer-content">
                  <h3>Shirts</h3>
                  <span>548 Products</span>
                </div>

                <Link href="#">
            
                </Link>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="single-offer-box">
                <img src="/images/offer-img3.jpg" alt="image" className="w-100" />

                <div className="offer-content">
                  <h3>Footwaer</h3>
                  <span>175 Products</span>
                </div>

                <Link href="#">
                
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default OfferArea;
